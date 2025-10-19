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

```
              fib(5)
            /        \
       fib(4)         fib(3)
      /      \        /     \
  fib(3)   fib(2)  fib(2)  fib(1)
  /   \     / \     / \
...   ... ... ... ... ...

Tree depth: n
Tree nodes: ≈ 2ⁿ
```

**Many duplicate calculations!**

### Card 3
**Q:** How do you optimize O(2ⁿ) recursive problems?
**A:** **Use memoization or dynamic programming**

```
❌ O(2ⁿ):
def fib(n):
  if n <= 1: return n
  return fib(n-1) + fib(n-2)

✅ O(n) with memo:
memo = {}
def fib(n):
  if n in memo: return memo[n]
  if n <= 1: return n
  memo[n] = fib(n-1) + fib(n-2)
  return memo[n]
```

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
```
5! = 120
10! = 3,628,800
20! = 2.4 × 10¹⁸  ← Universe has ~10⁸⁰ atoms!
```

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

```
def solve(n):
  if n == 0: return
  solve(n-1)  ← 2 branches
  solve(n-1)

Depth: n
Branches: 2
Time: O(2ⁿ)
```

**If branches overlap: use memoization!**

### Card 2
**Q:** Pattern: Building all subsets - always O(2ⁿ)?
**A:** **Yes - there are exactly 2ⁿ subsets**

```
[1,2,3] subsets:
[], [1], [2], [3],
[1,2], [1,3], [2,3],
[1,2,3]

Total: 2³ = 8
```

**Each element: include or exclude = 2 choices**
**n elements: 2 × 2 × ... × 2 = 2ⁿ**

### Card 3
**Q:** Pattern: Sorting followed by O(n) - total complexity?
**A:** **O(n log n) - dominant term wins**

```
sort(arr)        ← O(n log n)
process(arr)     ← O(n)

Total: O(n log n + n)
     = O(n log n)  ← drops O(n)
```

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

```
for i in range(n):     ← n
  for j in range(n):   ← n
    for k in range(n): ← n
      C[i][j] += A[i][k] * B[k][j]

Total: n × n × n = O(n³)
```

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
```
for item in array:
  search for something in array  ← O(n) lookup
  # Total: O(n²)

Instead:
store values in hash_map  ← O(n) preprocessing
for item in array:
  lookup in hash_map  ← O(1) lookup
  # Total: O(n)
```

**Key:** Convert search (O(n)) to lookup (O(1))

## Real-World Problem Patterns

### Card 1
**Q:** Two-sum problem - optimal approach?
**A:** **O(n) time, O(n) space with hash map**

```
def two_sum(arr, target):
  seen = {}
  for i, num in enumerate(arr):
    complement = target - num
    if complement in seen:
      return [seen[complement], i]
    seen[num] = i
  return None

Time: O(n) - single pass
Space: O(n) - hash map
```

**Why not sort?** Would be O(n log n) + O(n) = O(n log n)

### Card 2
**Q:** Finding duplicates - O(n) solution?
**A:** **Use Set for O(n) time, O(n) space**

```
def has_duplicates(arr):
  seen = set()
  for item in arr:
    if item in seen:
      return True
    seen.add(item)
  return False

Time: O(n)
Space: O(n)
```

**O(1) space solution:** Sort first O(n log n), then check adjacent

### Card 3
**Q:** Longest substring without repeating characters?
**A:** **Sliding window - O(n) time, O(k) space**

```
def longest_unique(s):
  seen = {}
  left = 0
  max_len = 0

  for right in range(len(s)):
    if s[right] in seen:
      left = max(left, seen[s[right]] + 1)
    seen[s[right]] = right
    max_len = max(max_len, right - left + 1)

  return max_len

Time: O(n) - each char visited twice max
Space: O(k) - k unique characters
```

### Card 4
**Q:** Valid anagram check - optimal solution?
**A:** **O(n) with character count**

```
def is_anagram(s1, s2):
  if len(s1) != len(s2):
    return False

  count = {}
  for c in s1:
    count[c] = count.get(c, 0) + 1
  for c in s2:
    if c not in count:
      return False
    count[c] -= 1
    if count[c] < 0:
      return False

  return True

Time: O(n)
Space: O(1) - max 26 letters
```

**Alternative:** Sort both O(n log n)

### Card 5
**Q:** K most frequent elements - optimal approach?
**A:** **Heap approach O(n log k) or Bucket sort O(n)**

**Heap:**
```
1. Count frequencies: O(n)
2. Maintain k-sized min heap: O(n log k)
Total: O(n log k)
```

**Bucket sort:**
```
1. Count frequencies: O(n)
2. Group by frequency: O(n)
3. Collect top k: O(n)
Total: O(n)
```

**Better:** O(n) but more complex. Choose based on k.

### Card 6
**Q:** Merge k sorted arrays - complexity?
**A:** **O(N log k) with min-heap**

Where:
- N = total elements across all arrays
- k = number of arrays

```
Use min-heap of size k:
- Each array contributes one element
- Extract min: log k
- Do N times: N × log k
```

**Naive (merge pairs):** O(N × k)

### Card 7
**Q:** Finding median in stream of numbers?
**A:** **Two heaps: O(log n) insert, O(1) median**

```
max_heap (lower half)
min_heap (upper half)

Insert: O(log n)
- Add to appropriate heap
- Balance if needed

Get median: O(1)
- If equal size: avg of tops
- Otherwise: top of larger
```

**Why not sort each time?** O(n log n) per insert!

### Card 8
**Q:** Top K frequent words - complexity consideration?
**A:** **O(n log k) but with tiebreakers**

```
1. Count words: O(n)
2. Heap with custom comparator:
   - Frequency (higher first)
   - Alphabetical (lower first)
3. Extract k elements: O(k log k)

Total: O(n log k) for heap
      + O(k log k) for final sort
      = O(n log k)
```

### Card 9
**Q:** Product of array except self (no division)?
**A:** **O(n) time, O(1) extra space (output doesn't count)**

```
def product_except_self(arr):
  n = len(arr)
  result = [1] * n

  # Left products
  left = 1
  for i in range(n):
    result[i] = left
    left *= arr[i]

  # Right products
  right = 1
  for i in range(n-1, -1, -1):
    result[i] *= right
    right *= arr[i]

  return result

Time: O(n) - two passes
Space: O(1) - excluding output
```

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
