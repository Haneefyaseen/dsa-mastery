import type { StudyPlan } from "@/types";

export const studyPlans: StudyPlan[] = [
  {
    id: "12-week-intensive",
    name: "12-Week Intensive",
    duration: "12 weeks",
    description:
      "Complete roadmap for product company interviews. Covers all 14 core topics with 80+ curated problems. Recommended for dedicated preparation.",
    weeks: [
      {
        week: 1,
        title: "Arrays & Hashing Foundations",
        topics: ["arrays-hashing"],
        goals: [
          "Master hash map operations",
          "Solve two-sum variations",
          "Understand prefix sums",
        ],
        problemIds: ["two-sum", "contains-duplicate", "valid-anagram", "group-anagrams", "top-k-frequent", "product-except-self"],
      },
      {
        week: 2,
        title: "Two Pointers & Sliding Window",
        topics: ["two-pointers", "sliding-window"],
        goals: [
          "Apply two-pointer technique",
          "Master sliding window patterns",
          "Solve 3Sum and container problems",
        ],
        problemIds: ["valid-palindrome", "two-sum-ii", "3sum", "container-most-water", "best-time-stock", "longest-substring", "min-window-substring"],
      },
      {
        week: 3,
        title: "Stack & Binary Search",
        topics: ["stack", "binary-search"],
        goals: [
          "Use monotonic stacks",
          "Binary search on answer space",
          "Handle rotated sorted arrays",
        ],
        problemIds: ["valid-parentheses", "daily-temperatures", "largest-rectangle", "binary-search", "search-rotated", "koko-eating-bananas"],
      },
      {
        week: 4,
        title: "Linked Lists",
        topics: ["linked-list"],
        goals: [
          "Reverse linked lists in-place",
          "Detect cycles with Floyd's algorithm",
          "Merge and reorder lists",
        ],
        problemIds: ["reverse-linked-list", "merge-two-lists", "linked-list-cycle", "remove-nth-node", "reorder-list"],
      },
      {
        week: 5,
        title: "Trees — Part 1",
        topics: ["trees"],
        goals: [
          "Master DFS traversals",
          "BFS level-order traversal",
          "Invert and compare trees",
        ],
        problemIds: ["invert-binary-tree", "max-depth", "same-tree", "subtree-of-another", "lowest-common-ancestor"],
      },
      {
        week: 6,
        title: "Trees — Part 2 & Heaps",
        topics: ["trees", "heap"],
        goals: [
          "Validate BST properties",
          "Serialize/deserialize trees",
          "Use heaps for top-K problems",
        ],
        problemIds: ["validate-bst", "kth-smallest-bst", "serialize-deserialize", "kth-largest", "k-closest-points", "task-scheduler"],
      },
      {
        week: 7,
        title: "Backtracking",
        topics: ["backtracking"],
        goals: [
          "Generate subsets and combinations",
          "Solve permutation problems",
          "Apply pruning techniques",
        ],
        problemIds: ["subsets", "combination-sum", "permutations", "subsets-ii", "word-search", "n-queens"],
      },
      {
        week: 8,
        title: "Graphs — Part 1",
        topics: ["graphs"],
        goals: [
          "BFS and DFS on grids",
          "Clone graphs",
          "Topological sort basics",
        ],
        problemIds: ["number-of-islands", "clone-graph", "course-schedule", "course-schedule-ii", "rotting-oranges"],
      },
      {
        week: 9,
        title: "Graphs — Part 2",
        topics: ["graphs"],
        goals: [
          "Multi-source BFS",
          "Word ladder BFS",
          "Pacific Atlantic water flow",
        ],
        problemIds: ["pacific-atlantic", "walls-and-gates", "word-ladder"],
      },
      {
        week: 10,
        title: "Dynamic Programming — Part 1",
        topics: ["dynamic-programming"],
        goals: [
          "1D DP patterns",
          "House robber variants",
          "Coin change problems",
        ],
        problemIds: ["climbing-stairs", "house-robber", "house-robber-ii", "coin-change", "decode-ways", "word-break"],
      },
      {
        week: 11,
        title: "Dynamic Programming — Part 2",
        topics: ["dynamic-programming"],
        goals: [
          "2D DP on strings",
          "LIS and palindrome DP",
          "Grid path problems",
        ],
        problemIds: ["longest-palindrome-substring", "palindromic-substrings", "longest-increasing-subsequence", "unique-paths", "edit-distance", "max-product-subarray"],
      },
      {
        week: 12,
        title: "Greedy, Intervals & Review",
        topics: ["greedy", "intervals", "bit-manipulation"],
        goals: [
          "Interval merging and scheduling",
          "Greedy jump game patterns",
          "Bit manipulation tricks",
          "Full mock interview review",
        ],
        problemIds: ["jump-game", "jump-game-ii", "merge-intervals", "meeting-rooms-ii", "single-number", "missing-number", "trapping-rain-water"],
      },
    ],
  },
  {
    id: "8-week-phase2",
    name: "8-Week Phase 2: Advanced Prep",
    duration: "8 weeks",
    description:
      "Complete after the 12-Week Intensive. Covers tries, design patterns, union-find, Dijkstra, advanced DP, and hard classics asked at Meta, Google, Amazon, and OpenAI. 43 curated problems.",
    weeks: [
      {
        week: 1,
        title: "Tries & Advanced Sliding Window",
        topics: ["trie", "sliding-window"],
        goals: [
          "Build and search prefix trees",
          "Wildcard search with DFS",
          "Monotonic deque for window maximum",
        ],
        problemIds: ["implement-trie", "design-add-search-word", "word-search-ii", "find-all-anagrams", "longest-repeating-char-replacement", "sliding-window-maximum"],
      },
      {
        week: 2,
        title: "Design Patterns",
        topics: ["design", "heap"],
        goals: [
          "Implement LRU Cache",
          "Design streaming data structures",
          "Merge K sorted lists with heap",
        ],
        problemIds: ["lru-cache", "min-stack", "implement-queue-stacks", "merge-k-sorted-lists", "design-hit-counter", "time-based-key-value", "design-twitter"],
      },
      {
        week: 3,
        title: "Union-Find & Graph Advanced",
        topics: ["union-find", "graphs"],
        goals: [
          "Union-Find with path compression",
          "Detect cycles and merge accounts",
          "Topological sort on alien dictionary",
        ],
        problemIds: ["num-connected-components", "redundant-connection", "accounts-merge", "graph-valid-tree", "max-area-of-island", "alien-dictionary"],
      },
      {
        week: 4,
        title: "Weighted Graphs & Hashing",
        topics: ["graphs", "arrays-hashing"],
        goals: [
          "Dijkstra's algorithm",
          "Bellman-Ford for k stops",
          "Prefix sum subarray counting",
        ],
        problemIds: ["network-delay-time", "cheapest-flights-k-stops", "subarray-sum-equals-k", "longest-consecutive"],
      },
      {
        week: 5,
        title: "Advanced Trees & Linked Lists",
        topics: ["trees", "linked-list"],
        goals: [
          "Construct trees from traversals",
          "Tree path sum problems",
          "Deep copy linked lists",
        ],
        problemIds: ["construct-btree-preorder-inorder", "btree-max-path-sum", "diameter-of-btree", "copy-list-random-pointer", "add-two-numbers"],
      },
      {
        week: 6,
        title: "Advanced DP I",
        topics: ["dynamic-programming"],
        goals: [
          "Matrix DP and knapsack variants",
          "State machine DP",
          "Interval DP",
        ],
        problemIds: ["longest-increasing-path", "partition-equal-subset", "target-sum", "stock-with-cooldown", "burst-balloons"],
      },
      {
        week: 7,
        title: "Advanced DP II & Hard Strings",
        topics: ["dynamic-programming", "backtracking"],
        goals: [
          "Regex matching DP",
          "Word break II backtracking",
          "Russian doll envelopes (LIS trick)",
        ],
        problemIds: ["word-break-ii", "regular-expression-matching", "russian-doll-envelopes", "letter-combinations-phone", "generate-parentheses"],
      },
      {
        week: 8,
        title: "Matrix, Binary Search & Final Review",
        topics: ["arrays-hashing", "binary-search"],
        goals: [
          "In-place matrix manipulation",
          "2D binary search",
          "Mock interview review of weak areas",
        ],
        problemIds: ["spiral-matrix", "rotate-array", "set-matrix-zeroes", "search-a-2d-matrix", "pow-x-n"],
      },
    ],
  },
  {
    id: "4-week-crash",
    name: "4-Week Crash Course",
    duration: "4 weeks",
    description:
      "Accelerated plan covering the highest-frequency patterns. Best if you have an interview in 1 month.",
    weeks: [
      {
        week: 1,
        title: "Core Patterns",
        topics: ["arrays-hashing", "two-pointers", "sliding-window"],
        goals: ["Hash maps", "Two pointers", "Sliding window"],
        problemIds: ["two-sum", "contains-duplicate", "3sum", "longest-substring", "best-time-stock", "product-except-self"],
      },
      {
        week: 2,
        title: "Trees & Linked Lists",
        topics: ["trees", "linked-list"],
        goals: ["Tree traversals", "BST operations", "Linked list tricks"],
        problemIds: ["invert-binary-tree", "max-depth", "validate-bst", "lowest-common-ancestor", "reverse-linked-list", "linked-list-cycle"],
      },
      {
        week: 3,
        title: "Graphs & Stack",
        topics: ["graphs", "stack"],
        goals: ["BFS/DFS", "Topological sort", "Monotonic stack"],
        problemIds: ["number-of-islands", "course-schedule", "clone-graph", "valid-parentheses", "daily-temperatures"],
      },
      {
        week: 4,
        title: "DP & Final Review",
        topics: ["dynamic-programming", "binary-search"],
        goals: ["1D DP", "Binary search", "Mock interviews"],
        problemIds: ["climbing-stairs", "house-robber", "coin-change", "longest-increasing-subsequence", "binary-search", "koko-eating-bananas"],
      },
    ],
  },
];

export function getStudyPlanById(id: string): StudyPlan | undefined {
  return studyPlans.find((p) => p.id === id);
}
