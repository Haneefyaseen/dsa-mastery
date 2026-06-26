import type { InterviewQuestion } from "@/types";

export const interviewQuestions: InterviewQuestion[] = [
  // ── Meta ──
  { id: "meta-b1", company: "Meta", category: "behavioral", frequency: "high", question: "Tell me about a time you had a conflict with a teammate. How did you resolve it?", tips: "Use STAR format. Focus on empathy, data-driven resolution, and outcome — not blame." },
  { id: "meta-b2", company: "Meta", category: "behavioral", frequency: "high", question: "Describe your most challenging project and what you learned.", tips: "Highlight technical depth, ambiguity, and measurable impact. Mention what you'd do differently." },
  { id: "meta-b3", company: "Meta", category: "behavioral", frequency: "high", question: "Why Meta? Why this team?", tips: "Connect to Meta's mission (connect people, build community). Research the team/product specifically." },
  { id: "meta-c1", company: "Meta", category: "coding", frequency: "high", question: "Two Sum / 3Sum / Subarray Sum Equals K variants", tips: "Meta loves hash map and two-pointer patterns. Practice all three variants." },
  { id: "meta-c2", company: "Meta", category: "coding", frequency: "high", question: "Binary tree problems: LCA, validate BST, serialize/deserialize", tips: "Expect at least one tree question. Master recursive thinking and edge cases." },
  { id: "meta-c3", company: "Meta", category: "coding", frequency: "high", question: "Graph BFS/DFS: Number of Islands, Clone Graph, Word Ladder", tips: "Meta frequently asks graph traversal. Explain time/space complexity clearly." },
  { id: "meta-sd1", company: "Meta", category: "system-design", frequency: "high", question: "Design Facebook News Feed", tips: "Fan-out on write vs read. Handle celebrity users. Cache hot feeds. Discuss ranking pipeline." },
  { id: "meta-sd2", company: "Meta", category: "system-design", frequency: "high", question: "Design Instagram / Photo Sharing", tips: "Object storage for images, CDN, metadata DB, thumbnail generation, feed aggregation." },
  { id: "meta-sd3", company: "Meta", category: "system-design", frequency: "medium", question: "Design Facebook Messenger / WhatsApp", tips: "WebSockets, message ordering, delivery receipts, group chat fan-out, E2E encryption overview." },

  // ── Google ──
  { id: "goog-b1", company: "Google", category: "behavioral", frequency: "high", question: "Tell me about a time you demonstrated leadership without authority.", tips: "Google values 'Googleyness': humility, collaboration, bias for action." },
  { id: "goog-b2", company: "Google", category: "behavioral", frequency: "high", question: "Describe a time you failed. What did you learn?", tips: "Be honest. Show growth mindset and concrete changes you made afterward." },
  { id: "goog-c1", company: "Google", category: "coding", frequency: "high", question: "Interval problems: Merge Intervals, Meeting Rooms II", tips: "Sort first, then merge or sweep. Google loves clean O(n log n) solutions." },
  { id: "goog-c2", company: "Google", category: "coding", frequency: "high", question: "DP: Edit Distance, Longest Increasing Subsequence, Coin Change", tips: "Explain recurrence relation before coding. Google expects optimal solutions." },
  { id: "goog-c3", company: "Google", category: "coding", frequency: "high", question: "Design data structure: LRU Cache, Find Median from Stream", tips: "Google asks design + coding hybrids. Know your data structures cold." },
  { id: "goog-sd1", company: "Google", category: "system-design", frequency: "high", question: "Design Google Search / Autocomplete", tips: "Inverted index, trie for autocomplete, ranking signals, caching popular queries, sharding." },
  { id: "goog-sd2", company: "Google", category: "system-design", frequency: "high", question: "Design YouTube", tips: "Video upload pipeline, transcoding, CDN, recommendation, view counting at scale." },
  { id: "goog-sd3", company: "Google", category: "system-design", frequency: "medium", question: "Design Google Maps / Location Service", tips: "Geospatial indexing (quadtree/geohash), routing algorithms, tile caching, real-time traffic." },

  // ── Amazon ──
  { id: "amz-b1", company: "Amazon", category: "behavioral", frequency: "high", question: "Tell me about a time you went above and beyond for a customer.", tips: "Use Leadership Principle: Customer Obsession. STAR format with measurable customer impact." },
  { id: "amz-b2", company: "Amazon", category: "behavioral", frequency: "high", question: "Describe a time you made a decision with incomplete data.", tips: "Leadership Principle: Bias for Action. Show calculated risk-taking and iteration." },
  { id: "amz-b3", company: "Amazon", category: "behavioral", frequency: "high", question: "Tell me about a time you disagreed with your manager.", tips: "Leadership Principle: Have Backbone; Disagree and Commit. Data-driven dissent, then alignment." },
  { id: "amz-b4", company: "Amazon", category: "behavioral", frequency: "high", question: "Describe your most significant technical accomplishment.", tips: "Leadership Principle: Invent and Simplify. Quantify impact (latency, cost, revenue)." },
  { id: "amz-c1", company: "Amazon", category: "coding", frequency: "high", question: "Tree/Graph: Number of Islands, Course Schedule, Lowest Common Ancestor", tips: "Amazon heavily tests BFS/DFS and tree recursion. Code cleanly with edge cases." },
  { id: "amz-c2", company: "Amazon", category: "coding", frequency: "high", question: "Design: LRU Cache, Min Stack, Implement Trie", tips: "Amazon loves OOP design problems. Explain class interface before implementing." },
  { id: "amz-c3", company: "Amazon", category: "coding", frequency: "high", question: "Sliding window / Two pointers: Longest Substring, Container With Most Water", tips: "Amazon asks medium array/string problems frequently. Optimize from brute force." },
  { id: "amz-sd1", company: "Amazon", category: "system-design", frequency: "high", question: "Design Amazon's Order / Checkout System", tips: "Inventory consistency, payment idempotency, saga pattern, event-driven architecture." },
  { id: "amz-sd2", company: "Amazon", category: "system-design", frequency: "high", question: "Design a Recommendation System", tips: "Collaborative filtering vs content-based, offline batch + online serving, cold start problem." },

  // ── OpenAI ──
  { id: "oai-b1", company: "OpenAI", category: "behavioral", frequency: "high", question: "Why do you want to work on AI infrastructure / this team?", tips: "Show genuine interest in AI safety, scale, or the product. Be specific about OpenAI's mission." },
  { id: "oai-b2", company: "OpenAI", category: "behavioral", frequency: "medium", question: "Tell me about a technically complex system you built.", tips: "Emphasize scale, reliability, and tradeoffs. OpenAI values strong engineering fundamentals." },
  { id: "oai-c1", company: "OpenAI", category: "coding", frequency: "high", question: "Hard mediums: Binary Tree Max Path Sum, Word Break, Regular Expression Matching", tips: "OpenAI coding rounds can be harder than average. Practice hard mediums confidently." },
  { id: "oai-c2", company: "OpenAI", category: "coding", frequency: "high", question: "System-adjacent coding: LRU Cache, Time-Based Key-Value Store, Merge K Lists", tips: "Expect problems that mirror real infrastructure patterns." },
  { id: "oai-t1", company: "OpenAI", category: "technical", frequency: "high", question: "Explain how a transformer attention mechanism works at a high level.", tips: "Know Q/K/V, self-attention, positional encoding basics. Connect to practical LLM serving." },
  { id: "oai-t2", company: "OpenAI", category: "technical", frequency: "medium", question: "How would you serve an LLM to millions of users with low latency?", tips: "Batching, KV cache, model parallelism, quantization, load balancing across GPUs." },
  { id: "oai-sd1", company: "OpenAI", category: "system-design", frequency: "high", question: "Design an LLM Inference API (like OpenAI API)", tips: "Request queuing, GPU scheduling, token streaming (SSE), rate limiting, model routing, caching prompts." },

  // ── Goldman Sachs ──
  { id: "gs-b1", company: "Goldman Sachs", category: "behavioral", frequency: "high", question: "Why Goldman Sachs? Why engineering?", tips: "Connect to finance domain interest, engineering culture, or specific division (Marquee, Platform)." },
  { id: "gs-b2", company: "Goldman Sachs", category: "behavioral", frequency: "high", question: "Describe a time you worked under tight deadlines.", tips: "Show composure, prioritization, and delivering quality under pressure." },
  { id: "gs-c1", company: "Goldman Sachs", category: "coding", frequency: "high", question: "Arrays & Hashing: Two Sum, Contains Duplicate, Top K Frequent", tips: "Goldman SWE interviews focus on clean medium problems. Explain approach before coding." },
  { id: "gs-c2", company: "Goldman Sachs", category: "coding", frequency: "high", question: "Stack/Queue: Valid Parentheses, Daily Temperatures, Implement Queue using Stacks", tips: "Goldman frequently asks stack-based problems. Write bug-free code." },
  { id: "gs-c3", company: "Goldman Sachs", category: "coding", frequency: "medium", question: "DP/Greedy: Coin Change, Jump Game, House Robber", tips: "Some teams ask DP. Know 1D DP patterns well." },
  { id: "gs-sd1", company: "Goldman Sachs", category: "system-design", frequency: "medium", question: "Design a Trading System / Order Matching Engine", tips: "Low latency, order book (bid/ask), FIFO matching, fault tolerance, audit logging." },

  // ── Microsoft ──
  { id: "ms-b1", company: "Microsoft", category: "behavioral", frequency: "high", question: "Tell me about a time you received critical feedback.", tips: "Show growth mindset — a core Microsoft value. Demonstrate how you applied the feedback." },
  { id: "ms-c1", company: "Microsoft", category: "coding", frequency: "high", question: "Linked list and tree fundamentals", tips: "Microsoft often asks classic problems at medium difficulty. Focus on clarity." },
  { id: "ms-sd1", company: "Microsoft", category: "system-design", frequency: "medium", question: "Design OneDrive / Cloud Storage", tips: "Sync conflicts, chunking, metadata vs blob storage, offline support, versioning." },

  // ── General / Cross-company ──
  { id: "gen-b1", company: "General", category: "behavioral", frequency: "high", question: "Tell me about yourself (2-minute pitch).", tips: "Present → Past → Future. End with why this role/company. Practice until natural." },
  { id: "gen-b2", company: "General", category: "behavioral", frequency: "high", question: "What is your greatest weakness?", tips: "Pick a real weakness + concrete steps you're taking to improve. Avoid clichés." },
  { id: "gen-b3", company: "General", category: "behavioral", frequency: "high", question: "Where do you see yourself in 5 years?", tips: "Align with growth at the company. Show ambition but commitment to the role." },
  { id: "gen-c1", company: "General", category: "coding", frequency: "high", question: "Walk me through your approach before coding.", tips: "Always clarify inputs, edge cases, and brute force first. Then optimize. Communicate throughout." },
  { id: "gen-sd1", company: "General", category: "system-design", frequency: "high", question: "Design a URL Shortener (bit.ly)", tips: "Classic starter: hash generation, redirect flow, analytics, capacity estimation. Know this cold." },
  { id: "gen-sd2", company: "General", category: "system-design", frequency: "high", question: "Design a Rate Limiter", tips: "Token bucket vs sliding window vs fixed window. Distributed rate limiting with Redis." },
];

export const companies = ["Meta", "Google", "Amazon", "OpenAI", "Goldman Sachs", "Microsoft", "General"] as const;

export function getQuestionsByCompany(company: string) {
  return interviewQuestions.filter((q) => q.company === company);
}

export function getQuestionsByCategory(category: InterviewQuestion["category"]) {
  return interviewQuestions.filter((q) => q.category === category);
}
