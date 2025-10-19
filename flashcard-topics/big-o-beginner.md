# Big O Notation - Beginner

## Introduction

### Card 1
**Q:** What is Big O notation?
**A:** Big O notation describes how an algorithm's runtime or memory usage grows as input size increases. It helps us compare algorithms and predict performance at scale.

**Example:** O(n) means if you double the input, you double the time.

### Card 2
**Q:** Why do we care about Big O?
**A:** Big O helps us:
- **Compare** algorithms objectively
- **Predict** performance with large datasets
- **Choose** the right approach for the problem
- **Avoid** solutions that won't scale

**Example:** An O(n²) algorithm might work fine for 10 items but become unusable with 10,000 items.

### Card 3
**Q:** What does "input size" (n) mean?
**A:** Input size is what the algorithm processes:
- Array → number of elements
- String → number of characters
- Tree → number of nodes
- Nested loops → often n × m

**Example:** Searching an array of 1000 items means n = 1000.

### Card 4
**Q:** What are the most common Big O complexities from fastest to slowest?
**A:**
```
O(1)        ←  Constant (best!)
O(log n)    ←  Logarithmic
O(n)        ←  Linear
O(n log n)  ←  Linearithmic
O(n²)       ←  Quadratic
O(2ⁿ)       ←  Exponential
O(n!)       ←  Factorial (worst!)
```

**Rule:** Aim for O(1), O(log n), or O(n) when possible.

## O(1) - Constant Time ⚡

### Card 1
**Q:** What is O(1) and when do you see it?
**A:** **O(1) = Same time regardless of input size**

**Key phrases:**
- "Access array by index"
- "Hash table lookup"
- "Return a value"
- "Single operation"

**Visual:**
```
Time
  ↑
  |  _______________
  | |
  |_|________________
    1  10  100  1000  (input size)

  Runtime stays flat!
```

### Card 2
**Q:** Give 3 examples of O(1) operations
**A:**
1. **Array access:** `arr[5]` - direct index lookup
2. **Hash map get:** `map.get(key)` - hash to location
3. **Push to end:** `arr.push(item)` - add to end

**Common mistake:** O(1) doesn't mean "fast" - it means constant. Even 1000 operations is O(1) if they don't grow with input.

### Card 3
**Q:** When can you achieve O(1)?
**A:** **Strategy: Trade space for time**

Use:
- **Hash maps** for instant lookup
- **Array indexing** for direct access
- **Precomputed values** stored in variables

**Example:** Instead of searching array (O(n)), store values in a Set for O(1) lookup.

## O(log n) - Logarithmic Time 📉

### Card 1
**Q:** What is O(log n) and what's the key pattern?
**A:** **O(log n) = Halve the problem each step**

**Key phrases:**
- "Binary search"
- "Divide and conquer"
- "Balanced tree"
- "Repeatedly halving"

**Why it's fast:** 1 million items? Only ~20 steps!

### Card 2
**Q:** Visualize O(log n) growth
**A:**
```
Time
  ↑
  |         ___
  |     ___/
  |   _/
  | _/
  |/_________________
    1  10  100  1000  (input size)

  Grows very slowly!
```

**Doubling input only adds ONE more step.**

### Card 3
**Q:** How does binary search achieve O(log n)?
**A:** **Each comparison eliminates half the data**

```
[1 2 3 4 5 6 7 8]  Find 6
     ↓
  Check 4: too small

      [5 6 7 8]
         ↓
      Check 6: found!
```

**Math:** 1000 items → log₂(1000) ≈ 10 comparisons

### Card 4
**Q:** When should you think O(log n)?
**A:** **Requirements:**
1. Data must be **sorted** (or organizable)
2. You can **eliminate half** each step

**Common scenarios:**
- Searching sorted array
- Balanced tree operations
- Finding boundaries

**Hint:** If you see "sorted", think binary search!

## O(n) - Linear Time 📈

### Card 1
**Q:** What is O(n) and when is it unavoidable?
**A:** **O(n) = Process each element once**

**Key phrases:**
- "Loop through array"
- "Visit each element"
- "Single pass"
- "Check all items"

**Unavoidable when:** You must examine every element (finding max, sum, etc.)

### Card 2
**Q:** Visualize O(n) growth
**A:**
```
Time
  ↑
  |              /
  |            /
  |          /
  |        /
  |      /
  |____/____________
    1  10  100  1000  (input size)

  Straight line - proportional!
```

**Doubling input doubles time.**

### Card 3
**Q:** Is O(2n) different from O(n)?
**A:** **NO - both are O(n)**

We drop constants:
- O(2n) → O(n)
- O(n + 1000) → O(n)
- Loop 1 + Loop 2 → O(n) + O(n) = O(n)

**BUT:** Nested loops are O(n²)!

```
for i in arr:      ← O(n)
for j in arr:      ← O(n)
# Total: O(n)

for i in arr:      ← O(n)
  for j in arr:    ← O(n) NESTED
  # Total: O(n²)
```

### Card 4
**Q:** Common O(n) operations
**A:**
- **Find max/min** in unsorted array
- **Sum** all elements
- **Count** occurrences
- **Linear search** (unsorted)
- **Copy** an array

**Strategy:** If you must touch every element, O(n) is often the best you can do.

## O(n log n) - Linearithmic Time 🔄

### Card 1
**Q:** What is O(n log n) and why is it important?
**A:** **O(n log n) = Best possible for comparison-based sorting**

**Key phrases:**
- "Merge sort"
- "Quick sort (average)"
- "Heap sort"
- "Efficient sorting"

**Why:** Can't sort faster by comparing elements!

### Card 2
**Q:** Visualize O(n log n) vs O(n²)
**A:**
```
Time
  ↑
  |                 /← O(n²)
  |               /
  |             /
  |        ___/← O(n log n)
  |    ___/
  |___/______________
    10   100   1000  (input size)

  Much better than O(n²)!
```

**1000 items:** O(n log n) ≈ 10K vs O(n²) = 1M operations

### Card 3
**Q:** Why is merge sort O(n log n)?
**A:** **log n levels × n work per level**

```
[8 3 1 5 2 7 4 6]  ← n items
    ↓ split
[8 3 1 5][2 7 4 6]
    ↓ split
[8 3][1 5][2 7][4 6]  ← log n levels
    ↓ merge (n work)
[3 8][1 5][2 7][4 6]
    ↓
[1 3 5 8][2 4 6 7]
    ↓
[1 2 3 4 5 6 7 8]
```

### Card 4
**Q:** Strategy: When should you sort first?
**A:** **If sorting enables a faster solution overall**

**Pattern:** Sort O(n log n) + Process O(n) < Nested loops O(n²)

**Example - Find pairs summing to target:**
- ❌ Check all pairs: O(n²)
- ✅ Sort + two pointers: O(n log n) + O(n) = O(n log n)

## O(n²) - Quadratic Time 📊

### Card 1
**Q:** What is O(n²) and how do you spot it?
**A:** **O(n²) = Nested loops over same data**

**Key phrases:**
- "Compare all pairs"
- "Nested loops"
- "For each element, check all others"
- "Double loop"

**Warning sign:** Usually means there's a better way!

### Card 2
**Q:** Visualize O(n²) growth
**A:**
```
Time
  ↑
  |                  *← Shoots up!
  |              *
  |          *
  |      *
  |  *
  |*_________________
   10  20  30  40  (input size)

  Grows VERY fast!
```

**Danger:** 100 items = 10K operations, 1000 items = 1M operations

### Card 3
**Q:** Classic O(n²) example and how to fix it
**A:** **Problem:** Find if array has duplicates

❌ **O(n²) - Nested loops:**
```
for i in arr:
  for j in arr:
    if arr[i] == arr[j] and i != j:
      return true
```

✅ **O(n) - Use Set:**
```
seen = Set()
for item in arr:
  if item in seen: return true
  seen.add(item)
```

**Strategy:** Replace inner loop with hash map!

### Card 4
**Q:** When is O(n²) unavoidable?
**A:** **Only when you truly need all pairs**

**Unavoidable:**
- Print all pairs: must generate n² outputs
- Compare every item to every other item

**Avoidable (optimize!):**
- Find any pair that matches condition → use hash map
- Search for element → binary search or hash map
- Two-sum problem → hash map approach

## Common Beginner Patterns

### Card 1
**Q:** Pattern: Two pointers technique - what complexity?
**A:** **O(n) - Both pointers move through array once**

```
[1, 2, 3, 4, 5, 6, 7]
 ↑                 ↑
left             right

Each step: one pointer moves
Total moves: n steps
```

**Use for:** Sorted arrays, finding pairs, palindrome check

### Card 2
**Q:** Pattern: Sliding window - what complexity?
**A:** **O(n) - Window slides once through array**

```
[1, 2, 3, 4, 5, 6, 7]
[---]      ← window size k
  [---]
    [---]  ← slides right

Each element enters and exits once
```

**Use for:** Subarrays, substrings, consecutive elements

### Card 3
**Q:** What's the complexity of this code?
```
for i in range(n):
  print(arr[i])
```
**A:** **O(n) - Single loop through n items**

Each iteration does O(1) work (print)
Total: n × O(1) = O(n)

### Card 4
**Q:** What's the complexity of this code?
```
for i in range(n):
  for j in range(n):
    print(arr[i], arr[j])
```
**A:** **O(n²) - Nested loops**

Outer loop: n times
Inner loop: n times (for each outer)
Total: n × n = O(n²)

### Card 5
**Q:** What's the complexity of this code?
```
for i in range(n):
  for j in range(i):
    print(arr[i], arr[j])
```
**A:** **Still O(n²) - Drop the 1/2 constant**

Work: 0 + 1 + 2 + ... + n = n(n+1)/2
= (n² + n)/2
Drop constants: O(n²)

**Key:** Inner loop depends on outer, creates triangle = quadratic

### Card 6
**Q:** Quick reference: Which complexity for each operation?

**A:**
| Operation | Complexity |
|-----------|------------|
| arr[i] | O(1) |
| arr.push() | O(1) |
| arr.pop() | O(1) |
| arr.find() | O(n) |
| arr.sort() | O(n log n) |
| Two nested loops | O(n²) |
| Binary search | O(log n) |

### Card 7
**Q:** How do you analyze this?
```
for i in range(n):     # ?
  for j in range(m):   # ?
    print(i, j)
```
**A:** **O(n × m) - Different sized inputs**

If n ≠ m, keep both:
- n = 10, m = 1000 → very different!
- Don't assume n = m

If they're equal, O(n²)

### Card 8
**Q:** Space complexity vs Time complexity?
**A:**
**Time:** How long the algorithm takes
**Space:** How much memory it uses

**Example:**
```
sum = 0
for i in arr:
  sum += i
```
- Time: O(n) - loop through array
- Space: O(1) - only one variable

**Trade-off:** Often use more space to save time!

### Card 9
**Q:** Best → Worst complexity ranking?
**A:**
```
O(1)       Awesome! ⚡
O(log n)   Great! 📉
O(n)       Good ✅
O(n log n) Acceptable 👍
O(n²)      Slow 🐌
O(2ⁿ)      Very slow! 🔥
O(n!)      Terrible! 💀
```

**Goal:** Stay in the top 3 when possible!

### Card 10
**Q:** Most common optimization: O(n²) → O(n)
**A:** **Use a hash map/set instead of nested loop**

**Pattern:**
```
❌ O(n²):
for i in arr:
  for j in arr:
    if condition(i, j):
      ...

✅ O(n):
seen = {}
for i in arr:
  if complement in seen:
    ...
  seen[i] = true
```

**Key:** If you're searching in inner loop, use hash map!
