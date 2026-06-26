import { getProblemById } from "@/data/problems";
import { getStudyPlanById } from "@/data/studyPlans";
import { getTopicById } from "@/data/topics";

export interface ProblemNavContext {
  planId?: string;
  week?: number;
  topicId?: string;
}

export interface ProblemNavItem {
  id: string;
  title: string;
}

export interface ProblemNavigation {
  prev: ProblemNavItem | null;
  next: ProblemNavItem | null;
  currentIndex: number;
  total: number;
  backHref: string;
  backLabel: string;
}

export function getProblemSequence(
  problemId: string,
  context?: ProblemNavContext
): string[] {
  if (context?.planId && context.week != null) {
    const plan = getStudyPlanById(context.planId);
    const week = plan?.weeks.find((w) => w.week === context.week);
    if (week) return week.problemIds;
  }

  const topicId = context?.topicId ?? getProblemById(problemId)?.topicId;
  if (topicId) {
    const topic = getTopicById(topicId);
    if (topic) return topic.problemIds;
  }

  return [];
}

export function buildProblemHref(id: string, context: ProblemNavContext): string {
  const params = new URLSearchParams();
  if (context.planId) params.set("plan", context.planId);
  if (context.week != null) params.set("week", String(context.week));
  if (context.topicId) params.set("topic", context.topicId);
  const qs = params.toString();
  return `/problems/${id}${qs ? `?${qs}` : ""}`;
}

export function parseProblemNavContext(searchParams: {
  plan?: string;
  week?: string;
  topic?: string;
}): ProblemNavContext {
  const context: ProblemNavContext = {};
  if (searchParams.plan) context.planId = searchParams.plan;
  if (searchParams.week) {
    const week = parseInt(searchParams.week, 10);
    if (!Number.isNaN(week)) context.week = week;
  }
  if (searchParams.topic) context.topicId = searchParams.topic;
  return context;
}

export function getProblemNavigation(
  problemId: string,
  context?: ProblemNavContext
): ProblemNavigation | null {
  const sequence = getProblemSequence(problemId, context);
  const index = sequence.indexOf(problemId);
  if (index === -1 || sequence.length <= 1) return null;

  const prevProblem = index > 0 ? getProblemById(sequence[index - 1]) : null;
  const nextProblem =
    index < sequence.length - 1 ? getProblemById(sequence[index + 1]) : null;

  let backHref = "/problems";
  let backLabel = "All Problems";

  if (context?.planId && context.week != null) {
    const plan = getStudyPlanById(context.planId);
    const week = plan?.weeks.find((w) => w.week === context.week);
    if (plan && week) {
      backHref = "/study-plan";
      backLabel = `${plan.name} · Week ${week.week}`;
    }
  } else {
    const topicId = context?.topicId ?? getProblemById(problemId)?.topicId;
    const topic = topicId ? getTopicById(topicId) : undefined;
    if (topic) {
      backHref = `/topics/${topic.slug}`;
      backLabel = topic.name;
    }
  }

  return {
    prev: prevProblem ? { id: prevProblem.id, title: prevProblem.title } : null,
    next: nextProblem ? { id: nextProblem.id, title: nextProblem.title } : null,
    currentIndex: index + 1,
    total: sequence.length,
    backHref,
    backLabel,
  };
}
