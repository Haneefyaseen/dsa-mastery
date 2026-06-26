export interface TheorySection {
  title: string;
  content: string;
}

export const topicTheories: Record<string, TheorySection[]> = {
  "arrays-hashing": [
    {
      title: "What is an Array?",
      content:
        "An array stores elements in contiguous memory with O(1) index access. Most interview problems involve iterating, comparing, or transforming arrays. Time complexity for a single pass is O(n).",
    },
    {
      title: "Hash Maps (Hash Tables)",
      content:
        "A hash map stores key-value pairs with average O(1) insert, lookup, and delete. Use it when you need fast 'have I seen this before?' checks — the foundation of the Two Sum pattern and frequency counting.",
    },
    {
      title: "When to Use Hashing",
      content:
        "Reach for a hash map when brute force would compare every pair (O(n²)). Examples: finding complements, counting frequencies, grouping anagrams, or detecting duplicates in one pass.",
    },
    {
      title: "Prefix Sums",
      content:
        "Precompute cumulative sums so any subarray sum can be found in O(1). If prefix[j] - prefix[i] = target, then subarray (i+1..j) sums to target. Useful for range sum queries.",
    },
  ],
  "two-pointers": [
    {
      title: "The Core Idea",
      content:
        "Maintain two indices into an array and move them based on conditions. This often reduces O(n²) brute force to O(n) by avoiding redundant comparisons.",
    },
    {
      title: "Opposite Direction",
      content:
        "Place one pointer at the start and one at the end (common with sorted arrays). Move inward based on whether the current pair is too small or too large — used in Two Sum II and Container With Most Water.",
    },
    {
      title: "Same Direction (Fast/Slow)",
      content:
        "Both pointers move left-to-right at different speeds. Useful for in-place array modifications, removing duplicates, or linked list cycle detection.",
    },
    {
      title: "Prerequisite",
      content:
        "Many two-pointer techniques require a sorted array. If the input isn't sorted, consider sorting first (O(n log n)) — often still better than O(n²).",
    },
  ],
  "sliding-window": [
    {
      title: "What is a Sliding Window?",
      content:
        "A technique for problems involving contiguous subarrays or substrings. Instead of checking every possible window (O(n²)), you expand and contract a single window in O(n).",
    },
    {
      title: "Fixed-Size Window",
      content:
        "Window size stays constant (e.g., find max sum of k consecutive elements). Slide by adding the new element and removing the leftmost one.",
    },
    {
      title: "Variable-Size Window",
      content:
        "Window grows and shrinks dynamically. Expand right until the window is invalid, then shrink from the left until valid again. Track the best answer during expansion.",
    },
    {
      title: "When to Recognize It",
      content:
        "Keywords: 'longest/shortest substring', 'subarray with sum', 'at most K distinct characters', 'consecutive elements'. If the answer involves a contiguous sequence, think sliding window.",
    },
  ],
  stack: [
    {
      title: "Stack Basics",
      content:
        "A stack follows Last-In-First-Out (LIFO). Push adds to the top; pop removes from the top. All operations are O(1). Think of it like a stack of plates.",
    },
    {
      title: "Valid Parentheses Pattern",
      content:
        "Push opening brackets onto the stack. On a closing bracket, check if the top matches. If the stack is empty at the end, all brackets are balanced.",
    },
    {
      title: "Monotonic Stack",
      content:
        "A stack that maintains elements in sorted order (increasing or decreasing). Used to find the 'next greater element' or 'next smaller element' for each position in O(n).",
    },
    {
      title: "Common Applications",
      content:
        "Expression evaluation (RPN), daily temperatures, largest rectangle in histogram, and parsing nested structures. Any 'matching' or 'nearest greater/smaller' problem may use a stack.",
    },
  ],
  "binary-search": [
    {
      title: "Classic Binary Search",
      content:
        "On a sorted array, compare target with the middle element. If equal, found. If smaller, search left half; if larger, search right half. Reduces search space by half each step — O(log n).",
    },
    {
      title: "Search on Answer Space",
      content:
        "When the problem asks for a minimum or maximum value that satisfies a condition, binary search the answer range. The key: write a function can(x) that checks if x works in O(n).",
    },
    {
      title: "Finding Boundaries",
      content:
        "To find the first or last occurrence, don't stop when found — continue binary searching in the relevant half. Useful for rotated sorted arrays and insertion positions.",
    },
    {
      title: "When NOT to Use It",
      content:
        "Binary search requires a monotonic property — as x increases, the answer flips from false to true (or vice versa). If no such ordering exists, BS won't work.",
    },
  ],
  "linked-list": [
    {
      title: "Structure",
      content:
        "A linked list is a chain of nodes, each holding a value and a pointer to the next node. Unlike arrays, elements are not contiguous — no O(1) random access, but O(1) insertion/deletion at known positions.",
    },
    {
      title: "Fast & Slow Pointers",
      content:
        "Two pointers moving at different speeds. Slow moves 1 step, fast moves 2. If there's a cycle, they will meet (Floyd's algorithm). Also finds the middle node in one pass.",
    },
    {
      title: "Reversal",
      content:
        "Iterative reversal uses three pointers: prev, curr, next. Point curr.next to prev, then advance all three. Master this — it's asked frequently and is the basis for many harder problems.",
    },
    {
      title: "Dummy Head Node",
      content:
        "Add a sentinel node before the real head to simplify edge cases (empty list, deleting the head). Return dummy.next as the new head after modifications.",
    },
  ],
  trees: [
    {
      title: "Binary Tree",
      content:
        "Each node has at most two children (left and right). A tree with n nodes has n-1 edges. The root has no parent; leaves have no children. Height = longest path from root to leaf.",
    },
    {
      title: "Traversals",
      content:
        "DFS: preorder (root-left-right), inorder (left-root-right), postorder (left-right-root). BFS: level-order using a queue. Inorder on a BST gives sorted order.",
    },
    {
      title: "Binary Search Tree (BST)",
      content:
        "For every node: all left descendants < node < all right descendants. This enables O(log n) search, insert, and delete in a balanced BST. Validate BST by passing down min/max bounds.",
    },
    {
      title: "Recursive Thinking",
      content:
        "Most tree problems are solved recursively: the answer for a tree depends on answers for its subtrees. Base case: null node. Combine left and right results at each node.",
    },
  ],
  heap: [
    {
      title: "What is a Heap?",
      content:
        "A complete binary tree where parent is always ≤ children (min-heap) or ≥ children (max-heap). Implemented as an array. Insert and extract-min/max are O(log n); peek is O(1).",
    },
    {
      title: "Priority Queue",
      content:
        "A heap gives you efficient access to the smallest or largest element. JavaScript has no built-in heap — use a library or implement with an array + bubble operations.",
    },
    {
      title: "Top K Pattern",
      content:
        "To find the Kth largest element, maintain a min-heap of size K. If a new element is larger than the heap minimum, replace it. Result: O(n log k) instead of O(n log n) sorting.",
    },
    {
      title: "Two Heaps",
      content:
        "For streaming median: max-heap for lower half, min-heap for upper half. Keep sizes balanced. Median is the top of the larger heap or average of both tops.",
    },
  ],
  backtracking: [
    {
      title: "What is Backtracking?",
      content:
        "A systematic way to explore all possibilities by building candidates incrementally and abandoning paths that violate constraints ('pruning'). It's DFS on an implicit decision tree.",
    },
    {
      title: "The Template",
      content:
        "Choose → Explore → Unchoose. At each step, pick an option, recurse, then undo the choice. This 'undo' is what distinguishes backtracking from plain recursion.",
    },
    {
      title: "Subsets vs Permutations",
      content:
        "Subsets: include or exclude each element (2^n choices). Permutations: pick order matters, use a 'used' array. Combinations: like subsets but avoid duplicate orderings with a start index.",
    },
    {
      title: "Pruning",
      content:
        "Stop exploring early when you know a partial solution can't lead to a valid answer. This is what makes backtracking practical — without pruning, it's just brute force.",
    },
  ],
  graphs: [
    {
      title: "Graph Representation",
      content:
        "A graph has vertices (nodes) and edges (connections). Store as adjacency list (array of neighbor lists) for sparse graphs, or adjacency matrix for dense graphs. List is more common in interviews.",
    },
    {
      title: "BFS — Breadth-First Search",
      content:
        "Explore level by level using a queue. Finds shortest path in unweighted graphs. Mark nodes visited when enqueued, not when dequeued, to avoid duplicates.",
    },
    {
      title: "DFS — Depth-First Search",
      content:
        "Go as deep as possible before backtracking. Use recursion or an explicit stack. Good for connected components, cycle detection, topological sort, and path finding.",
    },
    {
      title: "Topological Sort",
      content:
        "Linear ordering of DAG vertices where every edge goes from earlier to later. Use Kahn's algorithm (BFS with indegree) or DFS postorder. Answers 'what order should I do things?' problems.",
    },
  ],
  "dynamic-programming": [
    {
      title: "What is DP?",
      content:
        "Dynamic Programming solves problems with overlapping subproblems and optimal substructure. Instead of recomputing, store results in a table (memoization or tabulation).",
    },
    {
      title: "Memoization vs Tabulation",
      content:
        "Top-down (memoization): recursive with a cache. Bottom-up (tabulation): fill a table iteratively from base cases. Both are O(states × transitions). Tabulation avoids recursion stack overflow.",
    },
    {
      title: "How to Identify DP",
      content:
        "Ask: 'Can I define the answer for size n using answers for smaller sizes?' If yes, define a recurrence relation. Common signals: counting ways, min/max optimization, yes/no feasibility.",
    },
    {
      title: "1D vs 2D DP",
      content:
        "1D: single sequence (Fibonacci, house robber, coin change). 2D: two sequences (LCS, edit distance) or grids (unique paths). Start with the brute-force recursion, then add caching.",
    },
  ],
  greedy: [
    {
      title: "Greedy Strategy",
      content:
        "At each step, make the locally optimal choice hoping it leads to a global optimum. Greedy doesn't always work — you need the greedy choice property and optimal substructure.",
    },
    {
      title: "When Greedy Works",
      content:
        "Activity selection, interval scheduling, Huffman coding, and minimum spanning tree all have proofs that greedy is optimal. In interviews, try sorting first, then make the 'best' local pick.",
    },
    {
      title: "Interval Problems",
      content:
        "Sort intervals by end time. Greedily pick the earliest-ending non-overlapping interval. This maximizes the number of intervals you can fit — the classic activity selection problem.",
    },
    {
      title: "Proving Greedy",
      content:
        "In interviews you rarely need formal proofs, but explain why your greedy choice is safe: 'If I don't pick this, I can always swap in a better or equal choice without worsening the result.'",
    },
  ],
  intervals: [
    {
      title: "Interval Representation",
      content:
        "An interval [start, end] represents a range. Problems involve merging, inserting, scheduling, or finding overlaps. Always clarify: are intervals inclusive? Can they be empty?",
    },
    {
      title: "Sorting Strategy",
      content:
        "Sort by start time for merging overlapping intervals. Sort by end time for maximizing non-overlapping selections (greedy). Sorting is almost always the first step.",
    },
    {
      title: "Merge Overlapping",
      content:
        "After sorting by start: if current interval overlaps with the last in result (current.start ≤ last.end), merge by extending last.end. Otherwise, add as a new interval.",
    },
    {
      title: "Meeting Rooms",
      content:
        "To find minimum rooms needed: sort all start and end times separately. Sweep through — increment rooms on start, decrement on end. Track the maximum concurrent meetings.",
    },
  ],
  "bit-manipulation": [
    {
      title: "Binary Basics",
      content:
        "Integers are stored in binary. Each bit position represents a power of 2. Bitwise AND (&), OR (|), XOR (^), NOT (~), left shift (<<), and right shift (>>) operate on individual bits in O(1).",
    },
    {
      title: "XOR Properties",
      content:
        "a ^ a = 0, a ^ 0 = a, XOR is commutative and associative. Use XOR to find the single unique number in a list where every other number appears twice.",
    },
    {
      title: "Bit Masks",
      content:
        "Use 1 << n to set the nth bit. Use & with a mask to check or clear bits. Useful for representing subsets (each bit = include/exclude an element) — powerset generation.",
    },
    {
      title: "Common Tricks",
      content:
        "n & (n-1) clears the lowest set bit (count set bits). n & -n isolates the lowest set bit. Check power of 2: n > 0 && (n & (n-1)) === 0.",
    },
  ],
  trie: [
    {
      title: "What is a Trie?",
      content:
        "A trie (prefix tree) stores strings character by character. Each path from root to node represents a prefix. Search, insert, and prefix queries are O(m) where m is word length — independent of how many words are stored.",
    },
    {
      title: "When to Use a Trie",
      content:
        "Use when you need prefix matching, autocomplete, or dictionary lookups on a grid (Word Search II). If problems involve 'all words with this prefix' or 'search with wildcards', reach for a trie.",
    },
    {
      title: "Trie + Backtracking",
      content:
        "Combine trie with DFS for board word search. Build trie from dictionary, then DFS on grid pruning branches when trie path doesn't exist. This avoids revisiting invalid paths.",
    },
  ],
  design: [
    {
      title: "Design Problem Strategy",
      content:
        "Clarify required operations and their time complexity upfront. Choose the right combination of data structures (hash map + doubly linked list for LRU). Implement clean class interfaces before internals.",
    },
    {
      title: "LRU Cache Pattern",
      content:
        "Hash map for O(1) lookup by key. Doubly linked list for O(1) move-to-front and eviction. On get/put: update list order; evict tail when over capacity.",
    },
    {
      title: "Streaming Data Structures",
      content:
        "For median-from-stream use two heaps. For hit counter use queue of timestamps. For time-based KV store use hash map + binary search on sorted timestamps.",
    },
  ],
  "union-find": [
    {
      title: "Union-Find Basics",
      content:
        "Track disjoint sets with parent array. Find returns set representative (with path compression). Union merges two sets (with rank/size optimization). Near O(1) amortized per operation.",
    },
    {
      title: "When to Use Union-Find",
      content:
        "Connected components in undirected graphs, detecting cycles, dynamic connectivity, and grouping items that become connected over time (Accounts Merge).",
    },
    {
      title: "Union-Find vs DFS",
      content:
        "If the graph is static and you need one-time connected components, DFS/BFS works. If edges arrive incrementally or you need 'are A and B connected?', union-find is cleaner and faster.",
    },
  ],
};

export function getTheoryForTopic(topicId: string): TheorySection[] {
  return topicTheories[topicId] ?? [];
}
