import Link from "next/link";
import type { Problem } from "@/types";
import { DifficultyBadge } from "./DifficultyBadge";
import { getTopicById } from "@/data/topics";
import { ChevronRight } from "lucide-react";

export function ProblemCard({ problem }: { problem: Problem }) {
  const topic = getTopicById(problem.topicId);

  return (
    <Link
      href={`/problems/${problem.id}`}
      className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/40 hover:bg-card-hover"
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate font-medium text-foreground group-hover:text-accent-hover">
            {problem.title}
          </h3>
          {problem.leetcodeId && (
            <span className="text-xs text-muted">#{problem.leetcodeId}</span>
          )}
        </div>
        <div className="mt-1.5 flex flex-wrap items-center gap-2">
          <DifficultyBadge difficulty={problem.difficulty} />
          {topic && (
            <span className="text-xs text-muted">{topic.icon} {topic.name}</span>
          )}
        </div>
      </div>
      <ChevronRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
    </Link>
  );
}
