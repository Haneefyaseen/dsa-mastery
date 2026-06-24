import type { Problem } from "@/types";
import { arrayProblems } from "./arrays";
import { twoPointerProblems } from "./twoPointers";
import { slidingWindowProblems } from "./slidingWindow";
import { treeProblems } from "./trees";
import { graphProblems } from "./graphs";
import { dpProblems } from "./dp";
import { miscProblems } from "./misc";
import { misc2Problems } from "./misc2";
import { misc3Problems } from "./misc3";

export const problems: Problem[] = [
  ...arrayProblems,
  ...twoPointerProblems,
  ...slidingWindowProblems,
  ...treeProblems,
  ...graphProblems,
  ...dpProblems,
  ...miscProblems,
  ...misc2Problems,
  ...misc3Problems,
];

export function getProblemById(id: string): Problem | undefined {
  return problems.find((p) => p.id === id);
}

export function getProblemsByTopic(topicId: string): Problem[] {
  return problems.filter((p) => p.topicId === topicId);
}

export function getProblemsByDifficulty(difficulty: Problem["difficulty"]): Problem[] {
  return problems.filter((p) => p.difficulty === difficulty);
}

export const totalProblems = problems.length;

export const difficultyStats = {
  easy: problems.filter((p) => p.difficulty === "easy").length,
  medium: problems.filter((p) => p.difficulty === "medium").length,
  hard: problems.filter((p) => p.difficulty === "hard").length,
};
