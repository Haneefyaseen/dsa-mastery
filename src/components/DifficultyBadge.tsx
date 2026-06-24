import type { Difficulty } from "@/types";
import { cn, difficultyColor } from "@/lib/utils";

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium capitalize",
        difficultyColor(difficulty)
      )}
    >
      {difficulty}
    </span>
  );
}
