# Big O Notation - Advanced

## Exponential & Factorial Time

### Card 1
**Q:** What is O(2ⁿ) and when do you see it?
**A:** **O(2ⁿ) = Work doubles with each added input**

**Key phrases:**
- "Generate all subsets"
- "Recursive branching"
- "Naive fibonacci"
- "Decision tree"
- "Try all combinations"

**Warning:** Only viable for small inputs (n < 25)

### Card 2
**Q:** Why is naive Fibonacci O(2ⁿ)?
**A:** **Each call spawns 2 more calls - exponential tree**


**Many duplicate calculations!**

### Card 3
**Q:** How do you optimize O(2ⁿ) recursive problems?
**A:** **Use memoization or dynamic programming**


**Cache prevents recomputation!**

### Card 4
**Q:** What is O(n!) and when do you see it?
**A:** **O(n!) = All permutations/orderings**

**Key phrases:**
- "All permutations"
- "Traveling salesman"
- "Arrange n items"
- "Try every order"

**Growth:**

**Only viable for n < 12**

### Card 5
**Q:** Strategy for O(n!) problems?
**A:** **Use heuristics, pruning, or approximation**

**Techniques:**
1. **Branch and bound** - Skip clearly bad branches
2. **Greedy heuristics** - Get "good enough" solution
3. **Dynamic programming** - If subproblems overlap
4. **Limit search depth** - Don't explore everything

**Example:** Traveling salesman uses branch-and-bound to prune paths that are already longer than current best.

## Advanced Analysis

### Card 1
**Q:** What is amortized analysis?
**A:** **Average cost per operation over a sequence**

**Example:** Dynamic array doubling
- Most inserts: O(1)
- Occasional resize: O(n)
- **Amortized:** O(1) per insert

**Pattern:** Expensive operation happens rarely enough that average stays low.

### Card 2
**Q:** Best case vs Average case vs Worst case?
**A:**
**Quick sort example:**
- **Best:** O(n log n) - pivot always splits evenly
- **Average:** O(n log n) - pivot usually good
- **Worst:** O(n²) - pivot always min/max (sorted input!)

**Big O typically describes worst case**

### Card 3
**Q:** What is space-time tradeoff?
**A:** **Using more memory to make algorithm faster (or vice versa)**

**Examples:**
- Hash map: O(n) space for O(1) lookup
- Fibonacci memo: O(n) space to reduce O(2ⁿ) to O(n)
- Two-sum: O(n) space for O(n) time vs O(1) space for O(n²) time

**Strategy:** Choose based on constraints (time-critical vs memory-limited)

### Card 4
**Q:** How do you analyze recursive complexity?
**A:** **Use the recursion tree or Master Theorem**

**Recursion tree:**
1. Draw tree showing recursive calls
2. Count levels (depth)
3. Count work per level
4. Multiply: depth × work per level

**Example:** Binary tree traversal = depth n × work 1 per level = O(n)

## Advanced Patterns

### Card 1
**Q:** Pattern: Recursion with multiple branches - how to analyze?
**A:** **Complexity ≈ branches^depth**


**If branches overlap: use memoization!**

### Card 2
**Q:** Pattern: Building all subsets - always O(2ⁿ)?
**A:** **Yes - there are exactly 2ⁿ subsets**


**Each element: include or exclude = 2 choices**
**n elements: 2 × 2 × ... × 2 = 2ⁿ**

### Card 3
**Q:** Pattern: Sorting followed by O(n) - total complexity?
**A:** **O(n log n) - dominant term wins**


**Rule:** Keep the largest term when adding complexities.

### Card 4
**Q:** Pattern: Binary tree operations - what complexities?
**A:**
**Balanced tree (height = log n):**
- Search: O(log n)
- Insert: O(log n)
- Delete: O(log n)

**Unbalanced tree (worst: linked list):**
- All operations: O(n)

**Self-balancing trees (AVL, Red-Black) guarantee O(log n)**

### Card 5
**Q:** Pattern: How to spot O(n log n)?
**A:** **Divide and conquer with merging**

**Signs:**
- Recursively split in half (log n levels)
- Merge/combine all elements (n work per level)

**Examples:**
- Merge sort
- Quick sort (average)
- Building heap from array

### Card 6
**Q:** Pattern: Graph traversal (BFS/DFS) complexity?
**A:** **O(V + E) where V = vertices, E = edges**

**Why:**
- Visit each vertex once: V
- Check each edge once: E
- Total: V + E

**Dense graph:** E ≈ V² → O(V²)
**Sparse graph:** E ≈ V → O(V)

### Card 7
**Q:** Pattern: Dijkstra's algorithm complexity?
**A:** **O((V + E) log V) with min-heap**

**Why:**
- Each vertex processed once: V
- Each edge checked once: E
- Heap operations: log V
- Total: (V + E) × log V

**Without heap:** O(V²)

### Card 8
**Q:** Pattern: Matrix multiplication complexity?
**A:** **O(n³) for n×n matrices (naive algorithm)**


**Advanced algorithms (Strassen): O(n^2.807)**

### Card 9
**Q:** Pattern: When is sorting part of optimal solution?
**A:** **When it enables O(n) or O(log n) processing**

**Scenarios:**
1. **Binary search** after sorting
2. **Two pointers** for pairs/triplets
3. **Greedy algorithms** that need ordering
4. **Finding duplicates/medians**

**Cost-benefit:** Sort O(n log n) + Process O(n) < Process unsorted O(n²)

### Card 10
**Q:** Pattern: Recognizing when to use hash map?
**A:** **When you're doing lookups in a loop**

**Signs:**

**Key:** Convert search (O(n)) to lookup (O(1))

## Real-World Problem Patterns

### Card 1
**Q:** Two-sum problem - optimal approach?
**A:** **O(n) time, O(n) space with hash map**


**Why not sort?** Would be O(n log n) + O(n) = O(n log n)

### Card 2
**Q:** Finding duplicates - O(n) solution?
**A:** **Use Set for O(n) time, O(n) space**


**O(1) space solution:** Sort first O(n log n), then check adjacent

### Card 3
**Q:** Longest substring without repeating characters?
**A:** **Sliding window - O(n) time, O(k) space**


### Card 4
**Q:** Valid anagram check - optimal solution?
**A:** **O(n) with character count**


**Alternative:** Sort both O(n log n)

### Card 5
**Q:** K most frequent elements - optimal approach?
**A:** **Heap approach O(n log k) or Bucket sort O(n)**

**Heap:**

**Bucket sort:**

**Better:** O(n) but more complex. Choose based on k.

### Card 6
**Q:** Merge k sorted arrays - complexity?
**A:** **O(N log k) with min-heap**

Where:
- N = total elements across all arrays
- k = number of arrays


**Naive (merge pairs):** O(N × k)

### Card 7
**Q:** Finding median in stream of numbers?
**A:** **Two heaps: O(log n) insert, O(1) median**


**Why not sort each time?** O(n log n) per insert!

### Card 8
**Q:** Top K frequent words - complexity consideration?
**A:** **O(n log k) but with tiebreakers**


### Card 9
**Q:** Product of array except self (no division)?
**A:** **O(n) time, O(1) extra space (output doesn't count)**


### Card 10
**Q:** Recognizing optimization opportunities?
**A:**
**Ask yourself:**

1. **Am I searching repeatedly?** → Hash map
2. **Am I checking all pairs?** → Can I use hash map or sort first?
3. **Is data sorted?** → Binary search or two pointers
4. **Do I need all results?** → Can I short-circuit?
5. **Am I recomputing?** → Memoization
6. **Can I eliminate half?** → Binary search or divide & conquer
7. **Is there a window/subarray?** → Sliding window
8. **Do I need order?** → Maybe hash set is enough

**Key:** Always ask "Can I do better?" before coding!
