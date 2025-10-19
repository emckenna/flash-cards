# Big O Complexity Chart Images

This guide will help you add visual charts to your Big O flashcards.

## Recommended Images to Add

### 1. Big O Complexity Comparison Chart
**Filename:** `big-o-comparison.png`
**Shows:** All complexities (O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ), O(n!)) on one graph

**Where to find free images:**
- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/) - Download the chart
- Search "Big O complexity chart" on Google Images (filter by "Labeled for reuse")
- [GitHub - Big O Notation charts](https://github.com/topics/big-o-notation)

**What to look for:**
- X-axis: Input size (elements)
- Y-axis: Operations
- Multiple curves showing different complexities
- Color-coded for easy comparison

---

### 2. Individual Complexity Graphs (Optional)

If you want individual graphs for each complexity:

**O(1) - Constant Time**
- Filename: `o-1-constant.png`
- Shows: Flat horizontal line

**O(log n) - Logarithmic**
- Filename: `o-log-n.png`
- Shows: Slowly rising curve

**O(n) - Linear**
- Filename: `o-n-linear.png`
- Shows: Straight diagonal line

**O(n log n) - Linearithmic**
- Filename: `o-n-log-n.png`
- Shows: Curve rising faster than O(n)

**O(n²) - Quadratic**
- Filename: `o-n-squared.png`
- Shows: Steep upward curve

**O(2ⁿ) - Exponential**
- Filename: `o-2-n-exponential.png`
- Shows: Very steep exponential curve

---

## How to Add Images

### Step 1: Download or Create Image
1. Visit [bigocheatsheet.com](https://www.bigocheatsheet.com/)
2. Take a screenshot of the complexity chart
3. Or search for free Big O images online

### Step 2: Save to Images Directory
1. Save your image file to this directory: `/public/images/`
2. Use a descriptive filename (e.g., `big-o-comparison.png`)
3. Recommended formats: PNG, JPG, or SVG
4. Keep file size under 500KB for faster loading

### Step 3: Reference in Markdown
The Big O decks already have placeholders. Just uncomment the image line:

**Current (commented):**
```markdown
*💡 Add a complexity comparison chart here: `![Big O Complexity Chart](/images/big-o-comparison.png)`*
```

**Updated (uncommented):**
```markdown
![Big O Complexity Chart](/images/big-o-comparison.png)
```

### Step 4: Sync and Reload
```bash
npm run sync-topics
```

Then refresh your browser!

---

## Quick Start - Single Chart Approach

**Easiest option:** Just add ONE comprehensive chart that shows all complexities:

1. **Download** a Big O comparison chart (showing all O(1), O(n), O(n²), etc. on one graph)
2. **Save as:** `/public/images/big-o-comparison.png`
3. **Edit:** `flashcard-topics/big-o-beginner.md` Card 4 - uncomment the image line
4. **Run:** `npm run sync-topics`
5. **Refresh** browser

That's it! One image covers the most important visual.

---

## Alternative: Create Your Own

If you want to create custom charts:

### Using Online Tools:
- [Desmos Graphing Calculator](https://www.desmos.com/calculator)
- [GeoGebra](https://www.geogebra.org/graphing)
- Excel or Google Sheets

### Graph These Functions:
- O(1): y = 1
- O(log n): y = log(x)
- O(n): y = x
- O(n log n): y = x × log(x)
- O(n²): y = x²
- O(2ⁿ): y = 2^x

Plot all on same graph with x from 1 to 100.

---

## Image Resources

### Free Licensed Images:
- **Wikimedia Commons**: Search "Big O notation"
- **Unsplash**: Tech/algorithm charts
- **GitHub**: Many repos have Big O charts with MIT license

### Attribution (if required):
Add attribution in a comment in the markdown:
```markdown
![Big O Chart](/images/big-o-comparison.png)
<!-- Image source: [URL] - License: CC BY-SA -->
```

---

## Troubleshooting

**Image not showing?**
1. Check filename matches exactly (case-sensitive!)
2. Ensure image is in `/public/images/` directory
3. Run `npm run sync-topics` to copy to public folder
4. Hard refresh browser (Ctrl+Shift+R)
5. Check browser console for 404 errors

**Image too large?**
- Resize to max 1200px width
- Compress using [TinyPNG](https://tinypng.com/)
- Target under 500KB file size

**Want to change later?**
Just replace the image file with the same filename - no code changes needed!
