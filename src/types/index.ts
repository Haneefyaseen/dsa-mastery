export type Difficulty = "easy" | "medium" | "hard";

export type ProblemStatus = "not_started" | "attempted" | "solved" | "review";

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export interface Problem {
  id: string;
  title: string;
  slug: string;
  difficulty: Difficulty;
  topicId: string;
  patternId?: string;
  leetcodeId?: number;
  companies: string[];
  description: string;
  examples: Example[];
  constraints: string[];
  hints: string[];
  approach: string;
  timeComplexity: string;
  spaceComplexity: string;
  starterCode: {
    javascript: string;
    python: string;
    java: string;
  };
  solution: {
    javascript: string;
    python: string;
    java: string;
  };
  tags: string[];
}

export interface Topic {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  order: number;
  keyConcepts: string[];
  timeToMaster: string;
  problemIds: string[];
}

export interface Pattern {
  id: string;
  name: string;
  description: string;
  whenToUse: string[];
  template: string;
  problemIds: string[];
}

export interface StudyWeek {
  week: number;
  title: string;
  topics: string[];
  goals: string[];
  problemIds: string[];
}

export interface StudyPlan {
  id: string;
  name: string;
  duration: string;
  description: string;
  weeks: StudyWeek[];
}

export interface SystemDesignWeek {
  week: number;
  title: string;
  topics: string[];
  goals: string[];
  designProblems: string[];
  keyConcepts: string[];
}

export interface SystemDesignPlan {
  id: string;
  name: string;
  duration: string;
  description: string;
  weeks: SystemDesignWeek[];
}

export interface InterviewQuestion {
  id: string;
  company: string;
  category: "behavioral" | "coding" | "system-design" | "technical";
  question: string;
  tips: string;
  frequency: "high" | "medium";
}

export interface UserProgress {
  problems: Record<string, ProblemStatus>;
  notes: Record<string, string>;
  bookmarks: string[];
  streak: number;
  lastActiveDate: string;
  solvedCount: number;
}
