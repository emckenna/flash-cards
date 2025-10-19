# Flashcard Images

This directory is for images used in flashcards.

## How to Add Images

1. Place your image file in this directory (e.g., `big-o-chart.png`)
2. Reference it in your markdown flashcard using:
   ```markdown
   ![Alt text](/images/your-image-name.png)
   ```

## Example

For a Big O complexity chart:
1. Save the chart as `public/images/big-o-chart.png`
2. In your flashcard markdown:
   ```markdown
   **A:** Here's the complexity comparison:

   ![Big O Complexity Chart](/images/big-o-chart.png)
   ```

## Supported Formats

- PNG (.png)
- JPG/JPEG (.jpg, .jpeg)
- GIF (.gif)
- SVG (.svg)

## Best Practices

- Keep images under 500KB for faster loading
- Use descriptive filenames (e.g., `big-o-complexity-chart.png`)
- Provide alt text for accessibility
- Images will be automatically styled to fit within flashcards
