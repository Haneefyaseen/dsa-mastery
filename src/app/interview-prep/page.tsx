"use client";

import { useState } from "react";
import {
  companies,
  getQuestionsByCompany,
  interviewQuestions,
} from "@/data/interviewQuestions";
import type { InterviewQuestion } from "@/types";
import { cn } from "@/lib/utils";
import { Building2, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";

const categories = [
  { id: "all", label: "All" },
  { id: "behavioral", label: "Behavioral" },
  { id: "coding", label: "Coding" },
  { id: "system-design", label: "System Design" },
  { id: "technical", label: "Technical" },
] as const;

function QuestionCard({ q }: { q: InterviewQuestion }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-3 p-4 text-left hover:bg-card-hover"
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
              {q.company}
            </span>
            <span className="rounded-md border border-border px-2 py-0.5 text-xs capitalize text-muted">
              {q.category.replace("-", " ")}
            </span>
            {q.frequency === "high" && (
              <span className="rounded-md bg-rose-400/10 px-2 py-0.5 text-xs text-rose-400">
                High frequency
              </span>
            )}
          </div>
          <p className="mt-2 text-sm font-medium">{q.question}</p>
        </div>
        {open ? (
          <ChevronUp className="h-4 w-4 shrink-0 text-muted" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0 text-muted" />
        )}
      </button>
      {open && (
        <div className="border-t border-border px-4 pb-4">
          <p className="mt-3 text-sm text-muted">
            <span className="font-medium text-foreground">Tips: </span>
            {q.tips}
          </p>
        </div>
      )}
    </div>
  );
}

export default function InterviewPrepPage() {
  const [company, setCompany] = useState<string>("all");
  const [category, setCategory] = useState<string>("all");

  let filtered = interviewQuestions;
  if (company !== "all") filtered = getQuestionsByCompany(company);
  if (category !== "all")
    filtered = filtered.filter((q) => q.category === category);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Interview Prep</h1>
        <p className="mt-2 max-w-3xl text-muted">
          Curated behavioral, coding, system design, and technical questions from
          Meta, Google, Amazon, OpenAI, Goldman Sachs, and Microsoft.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setCompany("all")}
          className={cn(
            "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
            company === "all" ? "bg-accent text-white" : "bg-card text-muted hover:text-foreground"
          )}
        >
          All Companies
        </button>
        {companies.map((c) => (
          <button
            key={c}
            onClick={() => setCompany(c)}
            className={cn(
              "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
              company === c ? "bg-accent text-white" : "bg-card text-muted hover:text-foreground"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setCategory(id)}
            className={cn(
              "rounded-lg border px-3 py-1.5 text-xs font-medium capitalize transition-colors",
              category === id
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-muted hover:text-foreground"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mb-4 flex items-center gap-2 text-sm text-muted">
        <Building2 className="h-4 w-4" />
        {filtered.length} questions
      </div>

      <div className="space-y-3">
        {filtered.map((q) => (
          <QuestionCard key={q.id} q={q} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center gap-2 py-16 text-muted">
          <MessageSquare className="h-8 w-8" />
          <p>No questions match your filters.</p>
        </div>
      )}

      <div className="mt-8 rounded-xl border border-border bg-card p-5">
        <p className="font-medium">Interview Timeline Recommendation</p>
        <ol className="mt-3 space-y-2 text-sm text-muted">
          <li>1. <strong className="text-foreground">Months 1–3:</strong> Complete 12-Week DSA Intensive (coding only)</li>
          <li>2. <strong className="text-foreground">Months 3–4:</strong> Complete 8-Week Phase 2 Advanced Prep</li>
          <li>3. <strong className="text-foreground">Months 4–5:</strong> System Design 8-Week Plan + behavioral prep here</li>
          <li>4. <strong className="text-foreground">Month 5+:</strong> Mock interviews (Pramp, Interviewing.io) + apply</li>
        </ol>
      </div>
    </div>
  );
}
