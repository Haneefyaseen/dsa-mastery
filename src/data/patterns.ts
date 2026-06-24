import type { Pattern } from "@/types";

export const patterns: Pattern[] = [
  {
    id: "two-sum-pattern",
    name: "Two Sum / Complement",
    description: "Use a hash map to find complements in O(n) time instead of brute force O(n²).",
    whenToUse: [
      "Finding pairs that sum to a target",
      "Checking if complement exists",
      "Counting pairs with specific difference",
    ],
    template: `// Hash map approach
const map = new Map();
for (let i = 0; i < nums.length; i++) {
  const complement = target - nums[i];
  if (map.has(complement)) return [map.get(complement), i];
  map.set(nums[i], i);
}`,
    problemIds: ["two-sum", "two-sum-ii", "3sum"],
  },
  {
    id: "sliding-window-pattern",
    name: "Sliding Window",
    description: "Maintain a window that expands and contracts to find optimal subarray/substring.",
    whenToUse: [
      "Contiguous subarray/substring problems",
      "Finding longest/shortest with constraint",
      "Problems with 'at most K' or 'exactly K'",
    ],
    template: `let left = 0, result = 0;
for (let right = 0; right < s.length; right++) {
  // Expand window: add s[right]
  while (/* window invalid */) {
    // Shrink window: remove s[left]
    left++;
  }
  result = Math.max(result, right - left + 1);
}`,
    problemIds: ["longest-substring", "min-window-substring", "best-time-stock"],
  },
  {
    id: "fast-slow-pointers",
    name: "Fast & Slow Pointers",
    description: "Two pointers moving at different speeds to detect cycles or find middle elements.",
    whenToUse: [
      "Cycle detection in linked lists",
      "Finding middle of linked list",
      "Happy number problems",
      "Palindrome in linked list",
    ],
    template: `let slow = head, fast = head;
while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
  if (slow === fast) return true; // cycle found
}`,
    problemIds: ["linked-list-cycle", "remove-nth-node", "reorder-list"],
  },
  {
    id: "monotonic-stack",
    name: "Monotonic Stack",
    description: "Stack maintaining increasing or decreasing order for next greater/smaller element problems.",
    whenToUse: [
      "Next greater/smaller element",
      "Largest rectangle in histogram",
      "Daily temperatures",
      "Stock span problems",
    ],
    template: `const stack = [];
for (let i = 0; i < nums.length; i++) {
  while (stack.length && nums[stack.at(-1)] < nums[i]) {
    const idx = stack.pop();
    result[idx] = i - idx;
  }
  stack.push(i);
}`,
    problemIds: ["daily-temperatures", "largest-rectangle", "car-fleet"],
  },
  {
    id: "bfs-pattern",
    name: "BFS (Breadth-First Search)",
    description: "Level-by-level traversal using a queue. Finds shortest path in unweighted graphs.",
    whenToUse: [
      "Shortest path in unweighted graph",
      "Level-order tree traversal",
      "Multi-source BFS",
      "Minimum steps problems",
    ],
    template: `const queue = [start];
const visited = new Set([start]);
while (queue.length) {
  const node = queue.shift();
  for (const neighbor of getNeighbors(node)) {
    if (!visited.has(neighbor)) {
      visited.add(neighbor);
      queue.push(neighbor);
    }
  }
}`,
    problemIds: ["number-of-islands", "rotting-oranges", "word-ladder", "walls-and-gates"],
  },
  {
    id: "dfs-pattern",
    name: "DFS (Depth-First Search)",
    description: "Explore as deep as possible before backtracking. Recursive or iterative with stack.",
    whenToUse: [
      "Connected components",
      "Path finding (all paths)",
      "Tree traversals",
      "Topological sort",
    ],
    template: `function dfs(node, visited) {
  if (visited.has(node)) return;
  visited.add(node);
  // Process node
  for (const neighbor of getNeighbors(node)) {
    dfs(neighbor, visited);
  }
}`,
    problemIds: ["number-of-islands", "clone-graph", "course-schedule", "word-search"],
  },
  {
    id: "binary-search-pattern",
    name: "Binary Search on Answer",
    description: "Search the answer space when you can verify if an answer works in O(n).",
    whenToUse: [
      "Minimize the maximum",
      "Maximize the minimum",
      "Koko eating bananas style",
      "Capacity to ship packages",
    ],
    template: `let lo = minAnswer, hi = maxAnswer;
while (lo < hi) {
  const mid = Math.floor((lo + hi) / 2);
  if (canAchieve(mid)) hi = mid;
  else lo = mid + 1;
}
return lo;`,
    problemIds: ["koko-eating-bananas", "binary-search"],
  },
  {
    id: "dp-1d-pattern",
    name: "1D Dynamic Programming",
    description: "Build solution from smaller subproblems stored in a 1D array.",
    whenToUse: [
      "Fibonacci-like sequences",
      "House robber style",
      "Climbing stairs",
      "Coin change",
    ],
    template: `const dp = new Array(n + 1).fill(0);
dp[0] = baseCase;
for (let i = 1; i <= n; i++) {
  dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
}
return dp[n];`,
    problemIds: ["climbing-stairs", "house-robber", "coin-change", "decode-ways"],
  },
  {
    id: "dp-2d-pattern",
    name: "2D Dynamic Programming",
    description: "DP on grids or two sequences (strings, arrays).",
    whenToUse: [
      "Two string comparison (LCS, edit distance)",
      "Grid path counting",
      "Knapsack with two dimensions",
      "Palindrome substring",
    ],
    template: `const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
for (let i = 1; i <= m; i++) {
  for (let j = 1; j <= n; j++) {
    if (s1[i-1] === s2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
    else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
  }
}`,
    problemIds: ["edit-distance", "unique-paths", "longest-increasing-subsequence", "word-break"],
  },
  {
    id: "backtracking-pattern",
    name: "Backtracking",
    description: "Build solutions incrementally and abandon paths that violate constraints.",
    whenToUse: [
      "Generate all subsets/combinations",
      "Permutations",
      "N-Queens, Sudoku",
      "Word search on grid",
    ],
    template: `function backtrack(path, choices) {
  if (isComplete(path)) { result.push([...path]); return; }
  for (const choice of choices) {
    if (!isValid(choice)) continue;
    path.push(choice);
    backtrack(path, updatedChoices);
    path.pop(); // undo choice
  }
}`,
    problemIds: ["subsets", "permutations", "combination-sum", "n-queens", "word-search"],
  },
  {
    id: "union-find",
    name: "Union-Find (Disjoint Set)",
    description: "Track connected components with near O(1) union and find operations.",
    whenToUse: [
      "Number of connected components",
      "Detecting cycles in undirected graph",
      "Kruskal's MST",
      "Accounts merge",
    ],
    template: `class UnionFind {
  constructor(n) {
    this.parent = Array.from({length: n}, (_, i) => i);
    this.rank = Array(n).fill(0);
  }
  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  union(x, y) {
    const px = this.find(x), py = this.find(y);
    if (px === py) return false;
    if (this.rank[px] < this.rank[py]) this.parent[px] = py;
    else { this.parent[py] = px; if (this.rank[px] === this.rank[py]) this.rank[px]++; }
    return true;
  }
}`,
    problemIds: ["number-of-islands", "course-schedule"],
  },
  {
    id: "top-k-heap",
    name: "Top K with Heap",
    description: "Use a heap of size K to efficiently track top/bottom K elements.",
    whenToUse: [
      "Kth largest/smallest element",
      "Top K frequent elements",
      "K closest points",
      "Merge K sorted lists",
    ],
    template: `// Min heap of size k for kth largest
const heap = new MinPriorityQueue();
for (const num of nums) {
  heap.enqueue(num);
  if (heap.size() > k) heap.dequeue();
}
return heap.front();`,
    problemIds: ["kth-largest", "top-k-frequent", "k-closest-points", "find-median-stream"],
  },
];

export function getPatternById(id: string): Pattern | undefined {
  return patterns.find((p) => p.id === id);
}
