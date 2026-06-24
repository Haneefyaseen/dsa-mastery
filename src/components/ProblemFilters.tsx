"use client";

import { useState } from "react";
import type { Difficulty } from "@/types";
import { ProblemList } from "./ProblemList";
import { topics } from "@/data/topics";
import { Search } from "lucide-react";

export function ProblemFilters() {
  const [difficulty, setDifficulty] = useState<Difficulty | "">("");
  const [topicId, setTopicId] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search problems..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-border bg-card py-2.5 pl-10 pr-4 text-sm focus:border-accent focus:outline-none"
          />
        </div>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as Difficulty | "")}
          className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm focus:border-accent focus:outline-none"
        >
          <option value="">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select
          value={topicId}
          onChange={(e) => setTopicId(e.target.value)}
          className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm focus:border-accent focus:outline-none"
        >
          <option value="">All Topics</option>
          {topics.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
      <ProblemList
        filter={{
          difficulty: difficulty || undefined,
          topicId: topicId || undefined,
          search: search || undefined,
        }}
      />
    </div>
  );
}
