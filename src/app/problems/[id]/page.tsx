import { notFound } from "next/navigation";
import Link from "next/link";
import { getProblemById, problems } from "@/data/problems";
import { getTopicById } from "@/data/topics";
import { ProblemSolver } from "@/components/ProblemSolver";
import { ProblemNavigation } from "@/components/ProblemNavigation";
import {
  getProblemNavigation,
  parseProblemNavContext,
} from "@/lib/problem-navigation";

export function generateStaticParams() {
  return problems.map((p) => ({ id: p.id }));
}

export default async function ProblemDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ plan?: string; week?: string; topic?: string }>;
}) {
  const { id } = await params;
  const query = await searchParams;
  const problem = getProblemById(id);
  if (!problem) notFound();

  const topic = getTopicById(problem.topicId);
  const navContext = parseProblemNavContext(query);
  const navigation = getProblemNavigation(id, navContext);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {navigation ? (
        <ProblemNavigation navigation={navigation} context={navContext} />
      ) : (
        <Link
          href="/problems"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground"
        >
          All Problems
        </Link>
      )}

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

      {navigation && (
        <div className="mt-8 border-t border-border pt-6">
          <ProblemNavigation navigation={navigation} context={navContext} />
        </div>
      )}
    </div>
  );
}
