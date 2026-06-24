import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createSession, verifyPassword } from "@/lib/auth";
import { mergeLocalProgress } from "@/lib/progress-server";
import type { UserProgress } from "@/types";

export async function POST(request: Request) {
  try {
    const { email, password, localProgress } = await request.json();

    if (!email?.trim() || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (!user || !(await verifyPassword(password, user.passwordHash))) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    if (localProgress) {
      await mergeLocalProgress(user.id, localProgress as UserProgress);
    }

    await createSession(user.id, user.email);

    return NextResponse.json({
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
