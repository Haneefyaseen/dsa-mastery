import Link from "next/link";
import { ProgressStats } from "@/components/ProgressStats";
import { TopicCard } from "@/components/TopicCard";
import { ProblemCard } from "@/components/ProblemCard";
import { topics } from "@/data/topics";
import { problems, totalProblems, difficultyStats } from "@/data/problems";
import { studyPlans } from "@/data/studyPlans";
import { patterns } from "@/data/patterns";
import { ArrowRight, Target, Zap, BookMarked } from "lucide-react";

export default function HomePage() {
  const featured = problems.filter((p) =>
    ["two-sum", "longest-substring", "number-of-islands", "climbing-stairs", "3sum", "invert-binary-tree"].includes(p.id)
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent/20 via-card to-card p-8 sm:p-12">
        <div className="relative z-10 max-w-2xl">
          <p className="text-sm font-medium text-accent-hover">Product Company Interview Prep</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Master DSA. Crack LeetCode. Land Your Dream Job.
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            A structured learning platform with {totalProblems}+ curated problems, 14 core topics,
            12 pattern templates, and week-by-week study plans designed for Google, Amazon, Meta,
            Microsoft, and other product-based companies.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/study-plan"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-hover"
            >
              Start 12-Week Plan
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/problems"
              className="inline-flex rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium hover:bg-card-hover"
            >
              Browse Problems
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mt-8">
        <ProgressStats />
      </section>

      {/* Quick stats row */}
      <section className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10">
            <Target className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <p className="text-lg font-bold">{difficultyStats.easy} Easy</p>
            <p className="text-xs text-muted">Build confidence</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/10">
            <Zap className="h-5 w-5 text-amber-400" />
          </div>
          <div>
            <p className="text-lg font-bold">{difficultyStats.medium} Medium</p>
            <p className="text-xs text-muted">Interview staples</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-400/10">
            <BookMarked className="h-5 w-5 text-rose-400" />
          </div>
          <div>
            <p className="text-lg font-bold">{difficultyStats.hard} Hard</p>
            <p className="text-xs text-muted">Stand out candidates</p>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Core Topics</h2>
          <Link href="/topics" className="text-sm text-accent hover:text-accent-hover">
            View all →
          </Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.slice(0, 6).map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </section>

      {/* Featured Problems */}
      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Start Here</h2>
          <Link href="/problems" className="text-sm text-accent hover:text-accent-hover">
            All problems →
          </Link>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {featured.map((problem) => (
            <ProblemCard key={problem.id} problem={problem} />
          ))}
        </div>
      </section>

      {/* Study Plans & Patterns */}
      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-bold">Study Plans</h2>
          <p className="mt-2 text-sm text-muted">
            Follow a structured roadmap from beginner to interview-ready.
          </p>
          <div className="mt-4 space-y-3">
            {studyPlans.map((plan) => (
              <Link
                key={plan.id}
                href="/study-plan"
                className="block rounded-lg border border-border bg-background p-4 transition-colors hover:border-accent/40"
              >
                <p className="font-medium">{plan.name}</p>
                <p className="mt-1 text-xs text-muted">{plan.duration} · {plan.weeks.length} weeks</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-bold">Pattern Recognition</h2>
          <p className="mt-2 text-sm text-muted">
            Learn the {patterns.length} most important coding patterns used in interviews.
          </p>
          <div className="mt-4 space-y-2">
            {patterns.slice(0, 5).map((pattern) => (
              <Link
                key={pattern.id}
                href="/patterns"
                className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3 text-sm transition-colors hover:border-accent/40"
              >
                <span>{pattern.name}</span>
                <span className="text-xs text-muted">{pattern.problemIds.length} problems</span>
              </Link>
            ))}
          </div>
          <Link href="/patterns" className="mt-4 inline-block text-sm text-accent hover:text-accent-hover">
            View all patterns →
          </Link>
        </div>
      </section>
    </div>
  );
}
