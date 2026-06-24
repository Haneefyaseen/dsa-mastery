import { getTheoryForTopic } from "@/data/theories";
import { BookOpen } from "lucide-react";

export function TopicTheory({ topicId }: { topicId: string }) {
  const sections = getTheoryForTopic(topicId);
  if (sections.length === 0) return null;

  return (
    <div className="mt-8 rounded-xl border border-border bg-card p-6">
      <h2 className="flex items-center gap-2 text-lg font-bold">
        <BookOpen className="h-5 w-5 text-accent" />
        Theory
      </h2>
      <p className="mt-1 text-sm text-muted">
        Short concepts to understand before solving problems
      </p>
      <div className="mt-5 space-y-5">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold text-foreground">{section.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
