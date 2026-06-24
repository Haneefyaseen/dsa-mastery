import { ProblemFilters } from "@/components/ProblemFilters";
import { totalProblems, difficultyStats } from "@/data/problems";

export default function ProblemsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Problem Set</h1>
        <p className="mt-2 text-muted">
          {totalProblems} curated problems — {difficultyStats.easy} easy, {difficultyStats.medium} medium, {difficultyStats.hard} hard.
          Filter by topic, difficulty, or search by name.
        </p>
      </div>
      <ProblemFilters />
    </div>
  );
}
