"use client";

import { useState } from "react";
import type { Difficulty, ProblemStatus } from "@/types";
import { problems } from "@/data/problems";
import { useAuth } from "@/contexts/AuthContext";
import { cn, difficultyColor } from "@/lib/utils";
import Link from "next/link";

export function ProblemList({
  filter,
}: {
  filter?: { topicId?: string; difficulty?: Difficulty; search?: string };
}) {
  const { progress } = useAuth();

  let filtered = [...problems];
  if (filter?.topicId) filtered = filtered.filter((p) => p.topicId === filter.topicId);
  if (filter?.difficulty) filtered = filtered.filter((p) => p.difficulty === filter.difficulty);
  if (filter?.search) {
    const q = filter.search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q))
    );
  }

  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-card">
      {filtered.map((problem) => {
        const status = progress.problems[problem.id];
        return (
          <Link
            key={problem.id}
            href={`/problems/${problem.id}`}
            className="flex items-center gap-4 px-4 py-3 transition-colors hover:bg-card-hover"
          >
            <StatusIcon status={status} />
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium">{problem.title}</p>
              <p className="text-xs text-muted">
                {problem.leetcodeId ? `LC ${problem.leetcodeId}` : problem.id}
              </p>
            </div>
            <span
              className={cn(
                "rounded-md border px-2 py-0.5 text-xs font-medium capitalize",
                difficultyColor(problem.difficulty)
              )}
            >
              {problem.difficulty}
            </span>
          </Link>
        );
      })}
      {filtered.length === 0 && (
        <p className="p-8 text-center text-muted">No problems match your filters.</p>
      )}
    </div>
  );
}

function StatusIcon({ status }: { status?: ProblemStatus }) {
  if (status === "solved")
    return <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />;
  if (status === "attempted")
    return <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400" />;
  return <div className="h-2.5 w-2.5 shrink-0 rounded-full border border-border bg-transparent" />;
}
