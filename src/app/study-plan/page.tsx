"use client";

import { useState } from "react";
import Link from "next/link";
import { studyPlans } from "@/data/studyPlans";
import { getTopicById } from "@/data/topics";
import { getProblemById } from "@/data/problems";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { Calendar, CheckCircle2, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StudyPlanPage() {
  const [activePlan, setActivePlan] = useState(studyPlans[0].id);
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);

  const plan = studyPlans.find((p) => p.id === activePlan)!;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Study Plans</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Structured week-by-week roadmaps to prepare for product company interviews.
          Follow the plan, solve problems in order, and track your progress.
        </p>
      </div>

      {/* Plan selector */}
      <div className="mb-8 flex flex-wrap gap-3">
        {studyPlans.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              setActivePlan(p.id);
              setExpandedWeek(1);
            }}
            className={cn(
              "rounded-xl border px-5 py-3 text-left transition-colors",
              activePlan === p.id
                ? "border-accent bg-accent/10"
                : "border-border bg-card hover:border-accent/40"
            )}
          >
            <p className="font-semibold">{p.name}</p>
            <p className="mt-0.5 text-xs text-muted">{p.duration}</p>
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-bold">{plan.name}</h2>
        <p className="mt-2 text-sm text-muted">{plan.description}</p>
        <div className="mt-3 flex items-center gap-2 text-sm text-muted">
          <Calendar className="h-4 w-4" />
          {plan.weeks.length} weeks ·{" "}
          {plan.weeks.reduce((sum, w) => sum + w.problemIds.length, 0)} problems
        </div>
      </div>

      {/* Weekly breakdown */}
      <div className="mt-6 space-y-3">
        {plan.weeks.map((week) => {
          const isExpanded = expandedWeek === week.week;
          return (
            <div key={week.week} className="rounded-xl border border-border bg-card overflow-hidden">
              <button
                onClick={() => setExpandedWeek(isExpanded ? null : week.week)}
                className="flex w-full items-center justify-between p-5 text-left hover:bg-card-hover"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-sm font-bold text-accent">
                    W{week.week}
                  </span>
                  <div>
                    <p className="font-semibold">{week.title}</p>
                    <p className="text-xs text-muted">
                      {week.problemIds.length} problems ·{" "}
                      {week.topics.map((t) => getTopicById(t)?.name).filter(Boolean).join(", ")}
                    </p>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronDown className="h-5 w-5 text-muted" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-muted" />
                )}
              </button>

              {isExpanded && (
                <div className="border-t border-border px-5 pb-5">
                  <div className="mt-4">
                    <p className="text-sm font-medium">Goals</p>
                    <ul className="mt-2 space-y-1">
                      {week.goals.map((goal) => (
                        <li key={goal} className="flex items-center gap-2 text-sm text-muted">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-medium">Problems</p>
                    <div className="mt-2 space-y-2">
                      {week.problemIds.map((pid) => {
                        const problem = getProblemById(pid);
                        if (!problem) return null;
                        return (
                          <Link
                            key={pid}
                            href={`/problems/${pid}`}
                            className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3 text-sm transition-colors hover:border-accent/40"
                          >
                            <span>{problem.title}</span>
                            <DifficultyBadge difficulty={problem.difficulty} />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
