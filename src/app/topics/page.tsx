import { TopicCard } from "@/components/TopicCard";
import { topics } from "@/data/topics";
import { problems } from "@/data/problems";

export default function TopicsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">DSA Topics</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Master all {topics.length} core topics required for product company interviews.
          Each topic includes key concepts, curated problems, and estimated time to master.
        </p>
        <p className="mt-2 text-sm text-muted">
          {problems.length} total problems across all topics
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
}
