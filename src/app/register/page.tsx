"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Brain, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const err = await register(name, email, password);
    setLoading(false);
    if (err) {
      setError(err);
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <h1 className="mt-4 text-2xl font-bold">Create your account</h1>
          <p className="mt-2 text-sm text-muted">
            Save progress, notes, and bookmarks — pick up where you left off
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-card p-6">
          {error && (
            <div className="rounded-lg bg-rose-400/10 px-4 py-3 text-sm text-rose-400">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-accent focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-accent focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-accent focus:outline-none"
              placeholder="At least 6 characters"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-2.5 text-sm font-medium text-white hover:bg-accent-hover disabled:opacity-50"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          Already have an account?{" "}
          <Link href="/login" className="text-accent hover:text-accent-hover">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
