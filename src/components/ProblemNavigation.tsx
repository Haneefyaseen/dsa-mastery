import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  buildProblemHref,
  type ProblemNavContext,
  type ProblemNavigation,
} from "@/lib/problem-navigation";
import { cn } from "@/lib/utils";

export function ProblemNavigation({
  navigation,
  context,
  className,
}: {
  navigation: ProblemNavigation;
  context: ProblemNavContext;
  className?: string;
}) {
  const { prev, next, currentIndex, total, backHref, backLabel } = navigation;

  return (
    <div className={cn("space-y-3", className)}>
      <Link
        href={backHref}
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        {backLabel}
      </Link>

      <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-3">
        {prev ? (
          <Link
            href={buildProblemHref(prev.id, context)}
            className="flex min-w-0 flex-1 items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-card-hover"
          >
            <ChevronLeft className="h-4 w-4 shrink-0 text-muted" />
            <span className="truncate">
              <span className="block text-xs text-muted">Previous</span>
              <span className="font-medium">{prev.title}</span>
            </span>
          </Link>
        ) : (
          <div className="min-w-0 flex-1 px-2 py-1.5 text-sm text-muted">
            <span className="block text-xs">Previous</span>
            <span>None</span>
          </div>
        )}

        <span className="shrink-0 px-2 text-xs font-medium text-muted">
          {currentIndex} / {total}
        </span>

        {next ? (
          <Link
            href={buildProblemHref(next.id, context)}
            className="flex min-w-0 flex-1 items-center justify-end gap-2 rounded-lg px-2 py-1.5 text-right text-sm transition-colors hover:bg-card-hover"
          >
            <span className="truncate">
              <span className="block text-xs text-muted">Next</span>
              <span className="font-medium">{next.title}</span>
            </span>
            <ChevronRight className="h-4 w-4 shrink-0 text-muted" />
          </Link>
        ) : (
          <div className="min-w-0 flex-1 px-2 py-1.5 text-right text-sm text-muted">
            <span className="block text-xs">Next</span>
            <span>Done</span>
          </div>
        )}
      </div>

      {next && (
        <Link
          href={buildProblemHref(next.id, context)}
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover"
        >
          Next Problem
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
