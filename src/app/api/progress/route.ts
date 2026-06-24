import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import {
  getUserProgress,
  setProblemStatus,
  setProblemNote,
  toggleProblemBookmark,
} from "@/lib/progress-server";
import type { ProblemStatus } from "@/types";

export async function GET() {
  const user = await getSession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const progress = await getUserProgress(user.id);
  return NextResponse.json(progress);
}

export async function PATCH(request: Request) {
  const user = await getSession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { action, problemId } = body;

    if (!problemId) {
      return NextResponse.json({ error: "problemId is required" }, { status: 400 });
    }

    let progress;

    switch (action) {
      case "status": {
        const status = body.status as ProblemStatus;
        if (!["not_started", "attempted", "solved", "review"].includes(status)) {
          return NextResponse.json({ error: "Invalid status" }, { status: 400 });
        }
        progress = await setProblemStatus(user.id, problemId, status);
        break;
      }
      case "note":
        progress = await setProblemNote(user.id, problemId, body.note ?? "");
        break;
      case "bookmark":
        progress = await toggleProblemBookmark(user.id, problemId);
        break;
      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    return NextResponse.json(progress);
  } catch (error) {
    console.error("Progress update error:", error);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
