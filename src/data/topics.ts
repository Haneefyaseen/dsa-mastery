import type { Topic } from "@/types";

export const topics: Topic[] = [
  {
    id: "arrays-hashing",
    name: "Arrays & Hashing",
    slug: "arrays-hashing",
    description:
      "Foundation of DSA. Master array manipulation, hash maps for O(1) lookups, and frequency counting — the building blocks for 30%+ of interview problems.",
    icon: "📊",
    order: 1,
    keyConcepts: [
      "Hash maps for O(1) lookup",
      "Two-sum pattern with complements",
      "Frequency counting",
      "Prefix sums",
      "Kadane's algorithm",
    ],
    timeToMaster: "1 week",
    problemIds: ["two-sum", "contains-duplicate", "group-anagrams", "product-except-self", "valid-anagram", "top-k-frequent"],
  },
  {
    id: "two-pointers",
    name: "Two Pointers",
    slug: "two-pointers",
    description:
      "Use two indices to traverse arrays efficiently. Essential for sorted arrays, palindromes, and container problems.",
    icon: "👆",
    order: 2,
    keyConcepts: [
      "Opposite direction pointers",
      "Same direction (fast/slow)",
      "Sorted array optimization",
      "In-place modifications",
    ],
    timeToMaster: "3-4 days",
    problemIds: ["valid-palindrome", "two-sum-ii", "3sum", "container-most-water", "trapping-rain-water"],
  },
  {
    id: "sliding-window",
    name: "Sliding Window",
    slug: "sliding-window",
    description:
      "Optimize subarray/substring problems from O(n²) to O(n) by maintaining a dynamic window.",
    icon: "🪟",
    order: 3,
    keyConcepts: [
      "Fixed-size window",
      "Variable-size window",
      "Window expansion/contraction",
      "Hash map in window",
    ],
    timeToMaster: "3-4 days",
    problemIds: ["best-time-stock", "longest-substring", "longest-repeating-char", "permutation-in-string", "min-window-substring"],
  },
  {
    id: "stack",
    name: "Stack",
    slug: "stack",
    description:
      "LIFO data structure perfect for matching brackets, monotonic sequences, and expression evaluation.",
    icon: "📚",
    order: 4,
    keyConcepts: [
      "Monotonic stack",
      "Valid parentheses",
      "Next greater element",
      "Expression evaluation",
    ],
    timeToMaster: "3-4 days",
    problemIds: ["valid-parentheses", "daily-temperatures", "car-fleet", "largest-rectangle", "evaluate-rpn"],
  },
  {
    id: "binary-search",
    name: "Binary Search",
    slug: "binary-search",
    description:
      "Divide search space in half for O(log n) solutions. Works on sorted data and answer-space problems.",
    icon: "🔍",
    order: 5,
    keyConcepts: [
      "Classic binary search",
      "Search on answer space",
      "Rotated sorted arrays",
      "Finding boundaries",
    ],
    timeToMaster: "4-5 days",
    problemIds: ["binary-search", "search-rotated", "find-min-rotated", "koko-eating-bananas", "median-two-sorted"],
  },
  {
    id: "linked-list",
    name: "Linked List",
    slug: "linked-list",
    description:
      "Pointer manipulation, cycle detection, and reversal techniques. Frequently tested at top companies.",
    icon: "🔗",
    order: 6,
    keyConcepts: [
      "Fast & slow pointers",
      "Reversal techniques",
      "Cycle detection (Floyd's)",
      "Merge sorted lists",
    ],
    timeToMaster: "4-5 days",
    problemIds: ["reverse-linked-list", "merge-two-lists", "linked-list-cycle", "remove-nth-node", "reorder-list"],
  },
  {
    id: "trees",
    name: "Trees",
    slug: "trees",
    description:
      "Binary trees, BSTs, and traversals. One of the most important topics — expect 2-3 tree questions per interview loop.",
    icon: "🌳",
    order: 7,
    keyConcepts: [
      "DFS (pre/in/post order)",
      "BFS (level order)",
      "BST properties",
      "Tree construction",
      "Lowest common ancestor",
    ],
    timeToMaster: "1-2 weeks",
    problemIds: ["invert-binary-tree", "max-depth", "same-tree", "subtree-of-another", "lowest-common-ancestor", "validate-bst", "kth-smallest-bst", "serialize-deserialize"],
  },
  {
    id: "heap",
    name: "Heap / Priority Queue",
    slug: "heap",
    description:
      "Efficiently find min/max elements. Critical for top-K, merge K sorted, and scheduling problems.",
    icon: "⛰️",
    order: 8,
    keyConcepts: [
      "Min heap vs max heap",
      "Top K elements",
      "Merge K sorted",
      "Two heap pattern",
    ],
    timeToMaster: "3-4 days",
    problemIds: ["kth-largest", "last-stone-weight", "k-closest-points", "task-scheduler", "find-median-stream"],
  },
  {
    id: "backtracking",
    name: "Backtracking",
    slug: "backtracking",
    description:
      "Explore all possibilities with pruning. Used for combinations, permutations, and constraint satisfaction.",
    icon: "🔙",
    order: 9,
    keyConcepts: [
      "Choice, constraint, goal",
      "Pruning invalid paths",
      "Subsets & combinations",
      "Permutations",
    ],
    timeToMaster: "1 week",
    problemIds: ["subsets", "combination-sum", "permutations", "subsets-ii", "word-search", "n-queens"],
  },
  {
    id: "graphs",
    name: "Graphs",
    slug: "graphs",
    description:
      "Model relationships with nodes and edges. BFS/DFS, topological sort, and shortest path are interview staples.",
    icon: "🕸️",
    order: 10,
    keyConcepts: [
      "Adjacency list/matrix",
      "BFS & DFS traversal",
      "Topological sort",
      "Union-Find",
      "Dijkstra's algorithm",
    ],
    timeToMaster: "1-2 weeks",
    problemIds: ["number-of-islands", "clone-graph", "pacific-atlantic", "course-schedule", "course-schedule-ii", "rotting-oranges", "walls-and-gates", "word-ladder"],
  },
  {
    id: "dynamic-programming",
    name: "Dynamic Programming",
    slug: "dynamic-programming",
    description:
      "Break problems into overlapping subproblems. The hardest but most rewarding topic — separates senior candidates.",
    icon: "🧩",
    order: 11,
    keyConcepts: [
      "Memoization vs tabulation",
      "1D DP patterns",
      "2D DP (grid, strings)",
      "State machine DP",
      "Knapsack variants",
    ],
    timeToMaster: "2-3 weeks",
    problemIds: ["climbing-stairs", "house-robber", "house-robber-ii", "longest-palindrome-substring", "palindromic-substrings", "decode-ways", "coin-change", "max-product-subarray", "word-break", "longest-increasing-subsequence", "unique-paths", "edit-distance"],
  },
  {
    id: "greedy",
    name: "Greedy",
    slug: "greedy",
    description:
      "Make locally optimal choices. Works when greedy choice property holds — often combined with sorting.",
    icon: "🎯",
    order: 12,
    keyConcepts: [
      "Activity selection",
      "Interval scheduling",
      "Huffman coding intuition",
      "Proof of correctness",
    ],
    timeToMaster: "4-5 days",
    problemIds: ["max-subarray", "jump-game", "jump-game-ii", "gas-station", "hand-of-straights"],
  },
  {
    id: "intervals",
    name: "Intervals",
    slug: "intervals",
    description:
      "Merge, insert, and schedule intervals. Common in system design-adjacent coding rounds.",
    icon: "📅",
    order: 13,
    keyConcepts: [
      "Sorting by start/end",
      "Merge overlapping",
      "Interval intersection",
      "Meeting rooms pattern",
    ],
    timeToMaster: "3-4 days",
    problemIds: ["insert-interval", "merge-intervals", "non-overlapping-intervals", "meeting-rooms-ii", "minimum-interval"],
  },
  {
    id: "bit-manipulation",
    name: "Bit Manipulation",
    slug: "bit-manipulation",
    description:
      "XOR tricks, bit masks, and power-of-two checks. Less common but quick wins when they appear.",
    icon: "🔢",
    order: 14,
    keyConcepts: [
      "XOR properties",
      "Bit masks",
      "Counting set bits",
      "Power of 2 check",
    ],
    timeToMaster: "2-3 days",
    problemIds: ["single-number", "number-of-1-bits", "counting-bits", "reverse-bits", "missing-number"],
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getTopicById(id: string): Topic | undefined {
  return topics.find((t) => t.id === id);
}
