import Link from "next/link";
import type { Topic } from "@/types";
import { problems } from "@/data/problems";
import { ArrowRight } from "lucide-react";

export function TopicCard({ topic }: { topic: Topic }) {
  const problemCount = problems.filter((p) => p.topicId === topic.id).length;

  return (
    <Link
      href={`/topics/${topic.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/40 hover:bg-card-hover"
    >
      <div className="flex items-start justify-between">
        <span className="text-2xl">{topic.icon}</span>
        <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent-hover">
          {problemCount} problems
        </span>
      </div>
      <h3 className="mt-3 font-semibold text-foreground group-hover:text-accent-hover">
        {topic.name}
      </h3>
      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
        {topic.description}
      </p>
      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent">
        Start learning
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
