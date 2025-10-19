# Big O Notation

## Fundamentals

### Card 1
**Q:** What is Big O notation?
**A:** Big O notation describes the upper bound of an algorithm's time or space complexity as input size grows. It helps us analyze worst-case performance and scalability. Example: O(n) means the algorithm scales linearly with input size.

### Card 2
**Q:** Why do we drop constants and lower-order terms in Big O?
**A:** Because Big O focuses on growth rate, not exact runtime. O(2n) becomes O(n), and O(n² + n) becomes O(n²) because as n grows large, the dominant term matters most. Example: When n=1000, n² (1,000,000) dwarfs n (1,000).

### Card 3
**Q:** What's the difference between time complexity and space complexity?
**A:** Time complexity measures how runtime grows with input size. Space complexity measures how memory usage grows. Example: A function that creates an n-sized array has O(n) space complexity even if it runs in O(1) time.

### Card 4
**Q:** What are the common Big O complexities ranked from best to worst?
**A:** From fastest to slowest:
- **O(1)** - Constant
- **O(log n)** - Logarithmic
- **O(n)** - Linear
- **O(n log n)** - Linearithmic
- **O(n²)** - Quadratic
- **O(2ⁿ)** - Exponential
- **O(n!)** - Factorial

*Note: You can add a Big O complexity chart image here. Place your image in `/public/images/` and reference it like: `![Big O Complexity Chart](/images/big-o-chart.png)`*

## O(1) - Constant Time

### Card 1
**Q:** What is O(1) complexity and what are the key hints?
**A:** O(1) means constant time - same performance regardless of input size. **Key hints**: "direct access", "hash lookup", "array index", "single operation". Example: `array[5]`, `hashMap.get(key)`, or returning a value.

### Card 2
**Q:** What's a common misconception about O(1)?
**A:** O(1) doesn't mean "fast" or "one operation" - it means the number of operations doesn't grow with input size. Example: A function with 1000 operations is still O(1) if those operations don't depend on n.

### Card 3
**Q:** Strategy: When can you achieve O(1) lookup?
**A:** Use hash maps/dictionaries or direct array indexing. Trade space for time by preprocessing data into a hash structure. Example: Instead of searching an array O(n), store values in a Set for O(1) lookups.

## O(log n) - Logarithmic Time

### Card 1
**Q:** What is O(log n) complexity and what are the key hints?
**A:** O(log n) means the problem size is halved each iteration. **Key hints**: "binary search", "divide and conquer", "balanced tree", "halving". Example: Binary search eliminates half the remaining elements each step.

### Card 2
**Q:** Why is binary search O(log n)?
**A:** Each comparison eliminates half the search space. With 1000 elements, you need at most log₂(1000) ≈ 10 comparisons. Doubling input size only adds one more comparison. Example: 1M elements needs only ~20 comparisons.

### Card 3
**Q:** Strategy: How do you recognize when to use O(log n) solutions?
**A:** Look for **sorted data** or opportunities to **divide the problem in half** each step. Hints: "sorted array", "find target", "range queries". Example: If you're repeatedly searching sorted data, consider binary search instead of linear.

## O(n) - Linear Time

### Card 1
**Q:** What is O(n) complexity and what are the key hints?
**A:** O(n) means you process each element once. **Key hints**: "single loop", "iterate through", "visit each element", "one pass". Example: Finding max value in unsorted array, or summing array elements.

### Card 2
**Q:** Is O(2n) different from O(n)?
**A:** No - we drop constants, so O(2n) = O(n). Two separate loops over n is still O(n). However, nested loops are O(n²). Example: Loop 1 + Loop 2 = O(n), but Loop inside Loop = O(n²).

### Card 3
**Q:** Strategy: When is O(n) unavoidable?
**A:** When you must examine every element at least once. Examples: finding min/max in unsorted data, checking if array contains duplicates (without extra space), or calculating sum. Can't do better than O(n) for unsorted data verification.

## O(n log n) - Linearithmic Time

### Card 1
**Q:** What is O(n log n) complexity and what are the key hints?
**A:** O(n log n) is the best time for comparison-based sorting. **Key hints**: "efficient sort", "merge sort", "heap sort", "quick sort (average)", "divide and sort". Example: Sorting before processing often leads to O(n log n) overall.

### Card 2
**Q:** Why is merge sort O(n log n)?
**A:** The array is divided log n times (halving), and at each level, we merge all n elements. Total work = n operations × log n levels = O(n log n). Example: Sorting 8 elements has 3 levels (log₂ 8), merging 8 elements per level.

### Card 3
**Q:** Strategy: When should you sort first?
**A:** If sorting enables a more efficient algorithm, O(n log n) sort + O(n) process beats O(n²). Example: Finding pairs that sum to target - sort O(n log n) + two pointers O(n) beats nested loops O(n²).

## O(n²) - Quadratic Time

### Card 1
**Q:** What is O(n²) complexity and what are the key hints?
**A:** O(n²) means nested iterations over the data. **Key hints**: "nested loops", "compare all pairs", "check every combination", "for each element, check all others". Example: Bubble sort, naive duplicate finding.

### Card 2
**Q:** How do you calculate complexity with nested loops?
**A:** Multiply the complexities. Two nested loops over n = O(n × n) = O(n²). Loop n with inner loop m = O(n × m). Example: If outer is O(n) and inner is O(log n), total is O(n log n).

### Card 3
**Q:** Strategy: How do you optimize O(n²) to O(n)?
**A:** Use hash maps to avoid the inner loop. Instead of nested loop searching, store seen values in a Set/Map for O(1) lookup. Example: Two-sum problem - use hash map instead of checking all pairs.

## O(2ⁿ) - Exponential Time

### Card 1
**Q:** What is O(2ⁿ) complexity and what are the key hints?
**A:** O(2ⁿ) means the work doubles with each added input. **Key hints**: "recursive branching", "all subsets", "fibonacci (naive)", "generate all combinations", "decision tree". Example: Calculating every subset of n elements = 2ⁿ subsets.

### Card 2
**Q:** Why is naive fibonacci O(2ⁿ)?
**A:** Each call branches into two more calls, creating a binary tree of depth n. Total nodes ≈ 2ⁿ. Example: fib(5) calls fib(4) and fib(3), each calling two more, exponentially growing the call tree.

### Card 3
**Q:** Strategy: How do you optimize O(2ⁿ) recursive problems?
**A:** Use **memoization** (cache results) or **dynamic programming** (bottom-up). Caching prevents recomputing the same subproblems. Example: Fibonacci with memoization becomes O(n) instead of O(2ⁿ).

## O(n!) - Factorial Time

### Card 1
**Q:** What is O(n!) complexity and what are the key hints?
**A:** O(n!) means generating all permutations or orderings. **Key hints**: "all permutations", "traveling salesman", "try every order", "arrange n items". Example: n! ways to arrange n distinct items.

### Card 2
**Q:** Why is generating permutations O(n!)?
**A:** For n items: 1st position has n choices, 2nd has (n-1), 3rd has (n-2)... Total permutations = n × (n-1) × (n-2) × ... × 1 = n!. Example: 5 items = 5! = 120 permutations.

### Card 3
**Q:** Strategy: How do you handle O(n!) problems?
**A:** Often unavoidable for small n. For larger n, use **heuristics**, **approximation algorithms**, or **pruning** to avoid exploring all branches. Example: Traveling salesman uses branch-and-bound to skip clearly suboptimal paths.

## Common Patterns

### Card 1
**Q:** What's the complexity of accessing/searching/inserting in a hash map?
**A:** Average case: O(1) for all operations. Worst case: O(n) if all keys hash to same bucket. Strategy: Use hash maps when you need fast lookups and don't need ordering.

### Card 2
**Q:** What's the complexity of binary tree operations?
**A:** **Balanced tree** (AVG/BST): O(log n) search/insert/delete. **Unbalanced tree** (worst): O(n) becomes a linked list. Strategy: Use self-balancing trees (Red-Black, AVL) to guarantee O(log n).

### Card 3
**Q:** Pattern: "Find pair that sums to target" - what's the optimal approach?
**A:** **Sorted array**: Two pointers O(n). **Unsorted**: Hash set O(n). **Naive**: Nested loops O(n²). Strategy: Sort first if you can modify, or use hash set for one-pass solution.

### Card 4
**Q:** Pattern: "Find all pairs" vs "Find any pair" - how does this affect complexity?
**A:** **Find ALL pairs**: Must check all combinations O(n²). **Find ANY pair**: Can optimize with hash map O(n). Strategy: If you only need one result, you can short-circuit and avoid checking all combinations.

### Card 5
**Q:** Pattern: How do you recognize when to use sliding window (O(n))?
**A:** **Key hints**: "subarray", "substring", "consecutive elements", "contiguous". Requirements: problem has a **window size** or you're tracking a **running condition**. Example: Max sum of k consecutive elements, longest substring without repeating chars.

### Card 6
**Q:** Pattern: "Process array left-to-right" then "process right-to-left" - what's the complexity?
**A:** Still O(n)! Two separate passes = O(n + n) = O(2n) = O(n). Strategy: Use this pattern when you need information from both directions without nested loops. Example: Product of array except self.

### Card 7
**Q:** What's the complexity of sorting different sized inputs?
**A:** Sorting n items: O(n log n). If you sort m groups of n items: O(m × n log n). Strategy: Consider if you really need to sort everything - partial sorting or selection algorithms might be O(n).

### Card 8
**Q:** How do you analyze recursion with branching?
**A:** Count **branches** and **depth**. Complexity ≈ branches^depth. Binary tree recursion: 2 branches, n depth = O(2ⁿ). Strategy: Draw the recursion tree to visualize. If subtrees overlap, use memoization.

### Card 9
**Q:** Pattern: When processing a string/array, how do you decide between O(n) or O(n²)?
**A:** Ask: "Do I need to compare each element with every other element?" **Yes** = O(n²). "Can I process with hash map or single pass?" **Yes** = O(n). Strategy: Always try to find the O(n) solution first.

### Card 10
**Q:** What's the space-time tradeoff strategy?
**A:** **Time critical**: Use extra space (hash maps, memoization) to reduce time complexity. **Space critical**: Accept slower time with O(1) space solutions. Example: Two-sum can be O(n²) time + O(1) space OR O(n) time + O(n) space.
