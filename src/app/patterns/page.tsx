import Link from "next/link";
import { patterns } from "@/data/patterns";
import { getProblemById } from "@/data/problems";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { Sparkles } from "lucide-react";

export default function PatternsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Pattern Recognition</h1>
        <p className="mt-2 max-w-2xl text-muted">
          The secret to solving LeetCode problems fast is recognizing patterns.
          Learn these {patterns.length} templates — when you see a problem, match it to a pattern
          and apply the template.
        </p>
      </div>

      <div className="space-y-6">
        {patterns.map((pattern) => (
          <div key={pattern.id} className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="p-6">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div className="flex-1">
                  <h2 className="text-lg font-bold">{pattern.name}</h2>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{pattern.description}</p>

                  <div className="mt-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted">
                      When to use
                    </p>
                    <ul className="mt-2 space-y-1">
                      {pattern.whenToUse.map((w) => (
                        <li key={w} className="flex items-center gap-2 text-sm">
                          <span className="h-1 w-1 rounded-full bg-accent" />
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4 overflow-x-auto rounded-lg bg-[#0d0f14] p-4">
                <pre className="font-mono text-xs leading-relaxed text-emerald-300">
                  {pattern.template}
                </pre>
              </div>

              <div className="mt-4">
                <p className="text-xs font-medium uppercase tracking-wide text-muted">
                  Practice Problems
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {pattern.problemIds.map((pid) => {
                    const problem = getProblemById(pid);
                    if (!problem) return null;
                    return (
                      <Link
                        key={pid}
                        href={`/problems/${pid}`}
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm transition-colors hover:border-accent/40"
                      >
                        {problem.title}
                        <DifficultyBadge difficulty={problem.difficulty} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
