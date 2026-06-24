"use client";

import { useAuth } from "@/contexts/AuthContext";
import { totalProblems } from "@/data/problems";
import { topics } from "@/data/topics";

export function ProgressStats() {
  const { progress, user, loading } = useAuth();

  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-24 animate-pulse rounded-xl border border-border bg-card" />
        ))}
      </div>
    );
  }

  const solved = progress.solvedCount;
  const attempted = Object.values(progress.problems).filter(
    (s) => s === "attempted" || s === "solved"
  ).length;
  const pct = Math.round((solved / totalProblems) * 100);

  return (
    <div className="space-y-3">
      {!user && (
        <p className="text-sm text-muted">
          <a href="/login" className="text-accent hover:text-accent-hover">Sign in</a>
          {" "}to save progress across devices. Currently using local storage.
        </p>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Problems Solved" value={`${solved}/${totalProblems}`} sub={`${pct}% complete`} />
        <StatCard label="Attempted" value={String(attempted)} sub="In progress" />
        <StatCard label="Day Streak" value={String(progress.streak)} sub="Keep it going!" />
        <StatCard label="Topics" value={String(topics.length)} sub="Core DSA topics" />
      </div>
    </div>
  );
}

function StatCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-1 text-2xl font-bold text-foreground">{value}</p>
      <p className="mt-1 text-xs text-muted">{sub}</p>
    </div>
  );
}
