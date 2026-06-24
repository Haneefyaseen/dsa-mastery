"use client";

import type { ProblemStatus, UserProgress } from "@/types";

const STORAGE_KEY = "dsa-mastery-progress";

const defaultProgress: UserProgress = {
  problems: {},
  notes: {},
  bookmarks: [],
  streak: 0,
  lastActiveDate: "",
  solvedCount: 0,
};

export function getProgress(): UserProgress {
  if (typeof window === "undefined") return defaultProgress;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultProgress;
    return { ...defaultProgress, ...JSON.parse(stored) };
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function updateProblemStatus(
  problemId: string,
  status: ProblemStatus
): UserProgress {
  const progress = getProgress();
  const today = new Date().toISOString().split("T")[0];

  progress.problems[problemId] = status;

  if (status === "solved") {
    progress.solvedCount = Object.values(progress.problems).filter(
      (s) => s === "solved"
    ).length;
  }

  if (progress.lastActiveDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    if (progress.lastActiveDate === yesterdayStr) {
      progress.streak += 1;
    } else if (progress.lastActiveDate !== today) {
      progress.streak = 1;
    }
    progress.lastActiveDate = today;
  }

  saveProgress(progress);
  return progress;
}

export function toggleBookmark(problemId: string): UserProgress {
  const progress = getProgress();
  const index = progress.bookmarks.indexOf(problemId);
  if (index === -1) {
    progress.bookmarks.push(problemId);
  } else {
    progress.bookmarks.splice(index, 1);
  }
  saveProgress(progress);
  return progress;
}

export function saveNote(problemId: string, note: string): UserProgress {
  const progress = getProgress();
  progress.notes[problemId] = note;
  saveProgress(progress);
  return progress;
}
