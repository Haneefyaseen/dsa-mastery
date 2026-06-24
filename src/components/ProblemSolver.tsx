"use client";

import { useState } from "react";
import type { Problem, ProblemStatus } from "@/types";
import { useAuth } from "@/contexts/AuthContext";
import { DifficultyBadge } from "./DifficultyBadge";
import {
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Circle,
  Code2,
  Eye,
  Lightbulb,
  Play,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Lang = "javascript" | "python" | "java";

export function ProblemSolver({ problem }: { problem: Problem }) {
  const { progress, updateStatus, updateNote, toggleBookmark } = useAuth();
  const status = progress.problems[problem.id] || "not_started";
  const bookmarked = progress.bookmarks.includes(problem.id);
  const note = progress.notes[problem.id] || "";

  const [lang, setLang] = useState<Lang>("javascript");
  const [code, setCode] = useState(problem.starterCode.javascript);
  const [showHints, setShowHints] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [showApproach, setShowApproach] = useState(false);
  const [output, setOutput] = useState("");

  const handleStatus = (s: ProblemStatus) => updateStatus(problem.id, s);

  const handleLangChange = (l: Lang) => {
    setLang(l);
    setCode(problem.starterCode[l]);
    setShowSolution(false);
  };

  const runCode = () => {
    setOutput(
      "Code execution is for practice only. Submit on LeetCode for full test cases.\n\nYour progress has been saved."
    );
    if (status === "not_started") handleStatus("attempted");
  };

  const revealHint = () => {
    setShowHints(true);
    setHintIndex((i) => Math.min(i + 1, problem.hints.length));
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <DifficultyBadge difficulty={problem.difficulty} />
          {problem.companies.slice(0, 3).map((c) => (
            <span key={c} className="rounded-md bg-card px-2 py-0.5 text-xs text-muted">
              {c}
            </span>
          ))}
          <button
            onClick={() => toggleBookmark(problem.id)}
            className="ml-auto rounded-lg p-2 text-muted hover:bg-card hover:text-foreground"
          >
            {bookmarked ? (
              <BookmarkCheck className="h-5 w-5 text-accent" />
            ) : (
              <Bookmark className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
            {problem.description}
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Examples</h3>
          {problem.examples.map((ex, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-4 text-sm">
              <p><span className="text-muted">Input:</span> {ex.input}</p>
              <p className="mt-1"><span className="text-muted">Output:</span> {ex.output}</p>
              {ex.explanation && (
                <p className="mt-1 text-muted">Explanation: {ex.explanation}</p>
              )}
            </div>
          ))}
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Constraints</h3>
          <ul className="list-inside list-disc space-y-1 text-sm text-muted">
            {problem.constraints.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-semibold">
              <Lightbulb className="h-4 w-4 text-amber-400" />
              Hints ({hintIndex}/{problem.hints.length})
            </h3>
            <button
              onClick={revealHint}
              disabled={hintIndex >= problem.hints.length}
              className="rounded-lg bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-400 hover:bg-amber-400/20 disabled:opacity-50"
            >
              Reveal Hint
            </button>
          </div>
          {showHints && (
            <ul className="mt-3 space-y-2">
              {problem.hints.slice(0, hintIndex).map((h, i) => (
                <li key={i} className="text-sm text-muted">
                  {i + 1}. {h}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-xl border border-border bg-card">
          <button
            onClick={() => setShowApproach(!showApproach)}
            className="flex w-full items-center justify-between p-4 text-left font-semibold"
          >
            <span className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-accent" />
              Approach & Complexity
            </span>
            {showApproach ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
          {showApproach && (
            <div className="border-t border-border px-4 pb-4 text-sm text-muted">
              <p className="mt-3">{problem.approach}</p>
              <div className="mt-3 flex gap-4">
                <span>Time: <strong className="text-foreground">{problem.timeComplexity}</strong></span>
                <span>Space: <strong className="text-foreground">{problem.spaceComplexity}</strong></span>
              </div>
            </div>
          )}
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Your Notes</h3>
          <textarea
            value={note}
            onChange={(e) => updateNote(problem.id, e.target.value)}
            placeholder="Write your approach, mistakes, or key insights..."
            className="h-24 w-full resize-none rounded-xl border border-border bg-card p-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {(["javascript", "python", "java"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => handleLangChange(l)}
              className={cn(
                "rounded-lg px-3 py-1.5 text-xs font-medium capitalize transition-colors",
                lang === l
                  ? "bg-accent text-white"
                  : "bg-card text-muted hover:text-foreground"
              )}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-border">
          <div className="flex items-center gap-2 border-b border-border bg-card px-4 py-2">
            <Code2 className="h-4 w-4 text-muted" />
            <span className="text-sm font-medium">Code Editor</span>
          </div>
          <textarea
            value={showSolution ? problem.solution[lang] : code}
            onChange={(e) => !showSolution && setCode(e.target.value)}
            readOnly={showSolution}
            spellCheck={false}
            className="min-h-[320px] flex-1 resize-none bg-[#0d0f14] p-4 font-mono text-sm leading-relaxed text-emerald-300 focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={runCode}
            className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover"
          >
            <Play className="h-4 w-4" />
            Run Code
          </button>
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-card-hover"
          >
            {showSolution ? "Hide Solution" : "Show Solution"}
          </button>
          <button
            onClick={() => handleStatus("solved")}
            className={cn(
              "flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium",
              status === "solved"
                ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
                : "border-border bg-card hover:bg-card-hover"
            )}
          >
            {status === "solved" ? (
              <CheckCircle2 className="h-4 w-4" />
            ) : (
              <Circle className="h-4 w-4" />
            )}
            Mark Solved
          </button>
        </div>

        {output && (
          <div className="rounded-xl border border-border bg-card p-4">
            <p className="mb-1 text-xs font-medium text-muted">Output</p>
            <pre className="whitespace-pre-wrap text-sm text-foreground">{output}</pre>
          </div>
        )}

        {problem.leetcodeId && (
          <a
            href={`https://leetcode.com/problems/${problem.slug}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-sm text-accent hover:text-accent-hover"
          >
            Practice on LeetCode #{problem.leetcodeId} →
          </a>
        )}
      </div>
    </div>
  );
}
