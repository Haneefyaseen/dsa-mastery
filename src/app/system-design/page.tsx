"use client";

import { useState } from "react";
import { systemDesignPlans } from "@/data/systemDesignPlans";
import { Calendar, CheckCircle2, ChevronDown, ChevronRight, Server } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SystemDesignPage() {
  const [activePlan] = useState(systemDesignPlans[0].id);
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);

  const plan = systemDesignPlans.find((p) => p.id === activePlan)!;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">System Design Study Plan</h1>
        <p className="mt-2 max-w-3xl text-muted">
          Complete this after the 12-Week DSA Intensive. Designed for mid-level (L4/E4)
          interviews at Meta, Google, Amazon, OpenAI, and Goldman Sachs.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15">
            <Server className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h2 className="text-lg font-bold">{plan.name}</h2>
            <p className="mt-2 text-sm text-muted">{plan.description}</p>
            <div className="mt-3 flex items-center gap-2 text-sm text-muted">
              <Calendar className="h-4 w-4" />
              {plan.weeks.length} weeks · {plan.duration}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {plan.weeks.map((week) => {
          const isExpanded = expandedWeek === week.week;
          return (
            <div key={week.week} className="overflow-hidden rounded-xl border border-border bg-card">
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
                    <p className="text-xs text-muted">{week.topics.join(" · ")}</p>
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

                  {week.keyConcepts.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium">Key Concepts</p>
                      <ul className="mt-2 space-y-1">
                        {week.keyConcepts.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-muted">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {week.designProblems.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium">Design Problems to Practice</p>
                      <div className="mt-2 space-y-2">
                        {week.designProblems.map((problem) => (
                          <div
                            key={problem}
                            className="rounded-lg border border-border bg-background px-4 py-3 text-sm"
                          >
                            {problem}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-xl border border-amber-400/30 bg-amber-400/5 p-5">
        <p className="text-sm font-medium text-amber-400">Recommended Resources</p>
        <ul className="mt-2 space-y-1 text-sm text-muted">
          <li>• System Design Primer (GitHub) — free comprehensive guide</li>
          <li>• &quot;Designing Data-Intensive Applications&quot; by Martin Kleppmann — deep reference</li>
          <li>• Hello Interview / ByteByteGo — structured video walkthroughs</li>
          <li>• Pramp / Interviewing.io — free mock system design interviews</li>
        </ul>
      </div>
    </div>
  );
}
