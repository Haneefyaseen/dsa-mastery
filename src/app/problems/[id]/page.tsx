import { notFound } from "next/navigation";
import Link from "next/link";
import { getProblemById, problems } from "@/data/problems";
import { getTopicById } from "@/data/topics";
import { ProblemSolver } from "@/components/ProblemSolver";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return problems.map((p) => ({ id: p.id }));
}

export default async function ProblemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const problem = getProblemById(id);
  if (!problem) notFound();

  const topic = getTopicById(problem.topicId);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Link
        href="/problems"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        All Problems
      </Link>

      <div className="mt-4">
        <h1 className="text-2xl font-bold">{problem.title}</h1>
        {topic && (
          <Link
            href={`/topics/${topic.slug}`}
            className="mt-1 inline-block text-sm text-accent hover:text-accent-hover"
          >
            {topic.icon} {topic.name}
          </Link>
        )}
      </div>

      <div className="mt-8">
        <ProblemSolver problem={problem} />
      </div>
    </div>
  );
}
