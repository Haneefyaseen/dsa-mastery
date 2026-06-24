import type { ProblemStatus, UserProgress } from "@/types";
import { prisma } from "./prisma";

const defaultProgress: UserProgress = {
  problems: {},
  notes: {},
  bookmarks: [],
  streak: 0,
  lastActiveDate: "",
  solvedCount: 0,
};

export async function getUserProgress(userId: string): Promise<UserProgress> {
  const [records, user] = await Promise.all([
    prisma.problemProgress.findMany({ where: { userId } }),
    prisma.user.findUnique({
      where: { id: userId },
      select: { streak: true, lastActiveDate: true },
    }),
  ]);

  const progress: UserProgress = {
    ...defaultProgress,
    streak: user?.streak ?? 0,
    lastActiveDate: user?.lastActiveDate?.toISOString().split("T")[0] ?? "",
  };

  for (const r of records) {
    progress.problems[r.problemId] = r.status as ProblemStatus;
    if (r.note) progress.notes[r.problemId] = r.note;
    if (r.bookmarked) progress.bookmarks.push(r.problemId);
  }

  progress.solvedCount = Object.values(progress.problems).filter(
    (s) => s === "solved"
  ).length;

  return progress;
}

async function updateStreak(userId: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return;

  const last = user.lastActiveDate;
  let streak = user.streak;

  if (!last) {
    streak = 1;
  } else {
    const lastDate = new Date(last);
    lastDate.setHours(0, 0, 0, 0);
    const diffDays = Math.floor(
      (today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffDays === 0) {
      // same day, keep streak
    } else if (diffDays === 1) {
      streak += 1;
    } else {
      streak = 1;
    }
  }

  await prisma.user.update({
    where: { id: userId },
    data: { streak, lastActiveDate: today },
  });
}

export async function setProblemStatus(
  userId: string,
  problemId: string,
  status: ProblemStatus
) {
  await prisma.problemProgress.upsert({
    where: { userId_problemId: { userId, problemId } },
    create: { userId, problemId, status },
    update: { status },
  });
  await updateStreak(userId);
  return getUserProgress(userId);
}

export async function setProblemNote(
  userId: string,
  problemId: string,
  note: string
) {
  await prisma.problemProgress.upsert({
    where: { userId_problemId: { userId, problemId } },
    create: { userId, problemId, note },
    update: { note },
  });
  return getUserProgress(userId);
}

export async function toggleProblemBookmark(userId: string, problemId: string) {
  const existing = await prisma.problemProgress.findUnique({
    where: { userId_problemId: { userId, problemId } },
  });

  if (existing) {
    await prisma.problemProgress.update({
      where: { id: existing.id },
      data: { bookmarked: !existing.bookmarked },
    });
  } else {
    await prisma.problemProgress.create({
      data: { userId, problemId, bookmarked: true },
    });
  }

  return getUserProgress(userId);
}

export async function mergeLocalProgress(
  userId: string,
  local: UserProgress
) {
  for (const [problemId, status] of Object.entries(local.problems)) {
    const existing = await prisma.problemProgress.findUnique({
      where: { userId_problemId: { userId, problemId } },
    });
    if (!existing) {
      await prisma.problemProgress.create({
        data: {
          userId,
          problemId,
          status,
          note: local.notes[problemId] ?? "",
          bookmarked: local.bookmarks.includes(problemId),
        },
      });
    }
  }

  for (const problemId of local.bookmarks) {
    if (!local.problems[problemId]) {
      await prisma.problemProgress.upsert({
        where: { userId_problemId: { userId, problemId } },
        create: { userId, problemId, bookmarked: true },
        update: { bookmarked: true },
      });
    }
  }

  return getUserProgress(userId);
}
