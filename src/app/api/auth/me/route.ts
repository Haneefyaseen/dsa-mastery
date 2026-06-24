import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getUserProgress } from "@/lib/progress-server";

export async function GET() {
  const user = await getSession();
  if (!user) {
    return NextResponse.json({ user: null, progress: null });
  }

  const progress = await getUserProgress(user.id);
  return NextResponse.json({ user, progress });
}
