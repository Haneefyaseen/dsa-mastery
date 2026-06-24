import { notFound } from "next/navigation";
import Link from "next/link";
import { getTopicBySlug } from "@/data/topics";
import { getProblemsByTopic } from "@/data/problems";
import { ProblemCard } from "@/components/ProblemCard";
import { TopicTheory } from "@/components/TopicTheory";
import { ArrowLeft, Clock, Lightbulb } from "lucide-react";

export function generateStaticParams() {
  return [
    { slug: "arrays-hashing" }, { slug: "two-pointers" }, { slug: "sliding-window" },
    { slug: "stack" }, { slug: "binary-search" }, { slug: "linked-list" },
    { slug: "trees" }, { slug: "heap" }, { slug: "backtracking" },
    { slug: "graphs" }, { slug: "dynamic-programming" }, { slug: "greedy" },
    { slug: "intervals" }, { slug: "bit-manipulation" },
  ];
}

export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) notFound();

  const topicProblems = getProblemsByTopic(topic.id);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Link
        href="/topics"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        All Topics
      </Link>

      <div className="mt-6 flex items-start gap-4">
        <span className="text-4xl">{topic.icon}</span>
        <div>
          <h1 className="text-2xl font-bold">{topic.name}</h1>
          <p className="mt-2 max-w-2xl text-muted leading-relaxed">{topic.description}</p>
          <div className="mt-3 flex items-center gap-2 text-sm text-muted">
            <Clock className="h-4 w-4" />
            Time to master: {topic.timeToMaster}
          </div>
        </div>
      </div>

      <TopicTheory topicId={topic.id} />

      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <h2 className="flex items-center gap-2 font-semibold">
          <Lightbulb className="h-4 w-4 text-amber-400" />
          Key Concepts
        </h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {topic.keyConcepts.map((concept) => (
            <li key={concept} className="flex items-center gap-2 text-sm text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {concept}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold">
          Problems ({topicProblems.length})
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {topicProblems.map((problem) => (
            <ProblemCard key={problem.id} problem={problem} />
          ))}
        </div>
      </div>
    </div>
  );
}
