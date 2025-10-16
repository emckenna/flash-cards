# Flash Cards - Learn Anything

A beautiful, reusable flashcard app for learning any topic. Built with React and Vite.

🌐 **Live Demo**: [https://emckenna.github.io/flash-cards/](https://emckenna.github.io/flash-cards/)

## Features

- **Markdown-based content** - Easy to create and edit flashcards
- **Beautiful flip animations** - Engaging card flip interactions
- **Progress tracking** - Visual progress bar and card counter
- **Navigation controls** - Previous/Next, Shuffle, and Reset
- **Multiple decks** - Switch between different topics
- **Responsive design** - Works great on mobile and desktop
- **Keyboard shortcuts** - Space to flip, arrows to navigate

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Adding New Topics

All flashcard content lives in the [flashcard-topics](flashcard-topics/) directory.

### Quick Steps:

1. Create a new `.md` file in `flashcard-topics/` (e.g., `design-patterns.md`)
2. Start with `# Your Topic Name` as the first line
3. Use the Q&A format (see below)
4. Run `npm run generate-decks` to auto-generate the manifest
5. Reload the app!

### Flashcard Format:

```markdown
# Your Topic Name

## Category (optional)

### Card 1
**Q:** Your question?
**A:** Your answer.

### Card 2
**Q:** Another question?
**A:** Another answer.
```

See [flashcard-topics/README.md](flashcard-topics/README.md) for detailed instructions.

## Example Topics

- **SOLID Principles** - Already included!
- **Design Patterns** - Creational, structural, and behavioral patterns
- **JavaScript** - Language fundamentals and modern features
- **System Design** - Scalability and architecture concepts
- **Algorithms** - Data structures and complexity analysis

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Animations and styling
- **Markdown** - Content format

## Project Structure

```
flash-cards/
├── flashcard-topics/        # All your flashcard content
│   ├── decks.json          # Registry of available decks
│   ├── solid.md            # Example: SOLID principles
│   └── README.md           # How to add new topics
├── src/
│   ├── components/         # React components
│   │   ├── FlashCard.jsx   # Card with flip animation
│   │   ├── CardNavigation.jsx
│   │   └── DeckSelector.jsx
│   ├── utils/
│   │   └── markdownParser.js  # Parses markdown into cards
│   ├── App.jsx             # Main application
│   └── main.jsx            # Entry point
└── public/                 # Static assets
```

## Tips for Effective Learning

1. **One concept per card** - Keep questions focused
2. **Review regularly** - Spaced repetition works best
3. **Shuffle often** - Don't memorize order
4. **Think before flipping** - Active recall is key
5. **Add your own cards** - Personalize your learning

## Deployment

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment

The app automatically deploys to GitHub Pages when you push to the `main` branch. The GitHub Actions workflow handles:
- Building the app
- Deploying to `https://emckenna.github.io/flash-cards/`

### Setup GitHub Pages (one-time)

After pushing to GitHub:
1. Go to your repo Settings → Pages
2. Under "Build and deployment", select:
   - **Source**: GitHub Actions
3. The workflow will automatically deploy on the next push to `main`

### Manual Build

To build locally:
```bash
npm run build
```

The built files will be in the `dist/` directory.

## Contributing

Want to contribute your own flashcard topics? We'd love to have them! Here's how:

### Option 1: Submit via Pull Request

1. **Fork this repository**
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/flash-cards.git
   cd flash-cards
   npm install
   ```
3. **Create a new branch**:
   ```bash
   git checkout -b add-topic-name
   ```
4. **Add your flashcard topic**:
   - Create a new `.md` file in `flashcard-topics/` (e.g., `design-patterns.md`)
   - Start with `# Your Topic Name` as the first line
   - Follow the Q&A format (see [flashcard-topics/README.md](flashcard-topics/README.md))
5. **Test locally**:
   ```bash
   npm run generate-decks
   npm run dev
   ```
6. **Commit your changes**:
   ```bash
   git add flashcard-topics/your-topic.md
   git commit -m "Add [Topic Name] flashcards"
   git push origin add-topic-name
   ```
7. **Open a Pull Request** on GitHub

### Option 2: Submit via Issue

If you're not comfortable with Git:
1. Create a [new issue](https://github.com/emckenna/flash-cards/issues/new)
2. Title it: "New Topic: [Your Topic Name]"
3. Paste your flashcard content in markdown format
4. We'll review and add it for you!

### Contribution Guidelines

- **Quality**: Cards should be accurate and educational
- **Format**: Follow the Q&A markdown format
- **Scope**: Keep topics focused (e.g., "React Hooks" not "All of React")
- **Original Content**: Ensure your content is your own or properly attributed
- **Clear Questions**: Questions should be clear and unambiguous

## License

MIT - Feel free to use for your own learning!
