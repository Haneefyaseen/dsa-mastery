import type { Difficulty } from "@/types";

export function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function difficultyColor(difficulty: Difficulty): string {
  switch (difficulty) {
    case "easy":
      return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
    case "medium":
      return "text-amber-400 bg-amber-400/10 border-amber-400/20";
    case "hard":
      return "text-rose-400 bg-rose-400/10 border-rose-400/20";
  }
}

export function difficultyLabel(difficulty: Difficulty): string {
  return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
