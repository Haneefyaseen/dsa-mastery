import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createSession, hashPassword } from "@/lib/auth";
import { mergeLocalProgress } from "@/lib/progress-server";
import type { UserProgress } from "@/types";

export async function POST(request: Request) {
  try {
    const { name, email, password, localProgress } = await request.json();

    if (!name?.trim() || !email?.trim() || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (existing) {
      return NextResponse.json({ error: "Email already registered" }, { status: 409 });
    }

    const passwordHash = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        passwordHash,
      },
    });

    if (localProgress) {
      await mergeLocalProgress(user.id, localProgress as UserProgress);
    }

    await createSession(user.id, user.email);

    return NextResponse.json({
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}
