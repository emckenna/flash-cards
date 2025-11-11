# Flash Cards Project - Complete Context

## Project Overview

**Flash Cards** is a modern, web-based flashcard application built with React and Vite. It enables users to learn any topic through active recall and spaced repetition using beautifully animated flashcards. The application is content-agnostic and uses markdown-based flashcard decks that can be easily created, validated, and deployed.

**Live Demo:** https://emckenna.github.io/flash-cards/

**Key Philosophy:** Simple to use, easy to extend - anyone can create new flashcard decks by simply adding markdown files.

---

## Core Features

1. **Markdown-Based Content Management**
   - Flashcards defined in simple markdown format
   - No database required - all content as static files
   - Easy version control and collaborative editing

2. **Beautiful Flip Animations**
   - CSS3 3D card flip animation
   - Click-to-reveal interaction model
   - Smooth transitions and visual feedback

3. **Progress Tracking**
   - Visual progress bar showing position in deck
   - Card counter (e.g., "Card 3 of 15")
   - Real-time position tracking

4. **Navigation & Control**
   - Previous/Next buttons for sequential navigation
   - Shuffle button to randomize card order
   - Reset button to return to original order and first card
   - Keyboard shortcuts: Space to flip, arrow keys to navigate

5. **Multiple Decks Support**
   - Switch between different topics on landing page
   - Dynamic deck discovery from markdown files
   - Card count display for each deck

6. **Responsive Design**
   - Mobile-first approach
   - Works seamlessly on desktop and mobile devices
   - Touch-friendly interfaces

7. **Routing System**
   - Landing page with deck selection
   - Card study view
   - About page with project information

---

## Project Structure

```
flash-cards/
├── .github/
│   └── workflows/
│       └── deploy.yml                 # GitHub Actions CI/CD
├── flashcard-topics/                  # All flashcard content
│   ├── decks.json                    # Auto-generated manifest
│   ├── README.md                     # Content creation guide
│   ├── big-o-beginner.md             # Deck: Big O Notation (Beginner)
│   ├── big-o-advanced.md             # Deck: Big O Notation (Advanced)
│   ├── design_patterns.md            # Deck: Design Patterns
│   └── solid.md                      # Deck: SOLID Principles
├── public/
│   ├── flashcard-topics/             # Synced from source (build-time)
│   └── images/                       # Static images for cards
├── src/
│   ├── components/
│   │   ├── FlashCard.jsx             # Card flip component
│   │   ├── FlashCard.css
│   │   ├── CardNavigation.jsx        # Navigation controls & progress
│   │   ├── CardNavigation.css
│   │   ├── DeckSelector.jsx          # Deck selection dropdown
│   │   ├── DeckSelector.css
│   │   ├── LandingPage.jsx           # Deck list & selection UI
│   │   ├── LandingPage.css
│   │   ├── AboutPage.jsx             # Project info page
│   │   ├── AboutPage.css
│   │   ├── Navigation.jsx            # Header with home button
│   │   ├── Navigation.css
│   │   ├── Footer.jsx                # Footer component
│   │   └── Footer.css
│   ├── utils/
│   │   └── markdownParser.js         # Markdown to card object parser
│   ├── App.jsx                       # Main app with routing
│   ├── App.css
│   ├── main.jsx                      # React entry point
│   └── index.css
├── scripts/
│   ├── generate-decks.js             # Auto-generate decks.json manifest
│   ├── sync-topics.js                # Copy topics to public/ for serving
│   └── validate-decks.js             # Validate markdown format
├── index.html                        # HTML entry point
├── vite.config.js                    # Vite build configuration
├── package.json                      # Dependencies & scripts
├── package-lock.json
└── README.md                         # User-facing documentation
```

---

## Tech Stack

### Runtime
- **React 19.2.0** - UI framework and component library
- **React DOM 19.2.0** - React rendering for web
- **React Router DOM 7.9.4** - Client-side routing for SPA navigation
- **React Markdown 10.1.0** - Markdown rendering in React components

### Build & Development
- **Vite 7.1.10** - Fast build tool and dev server
- **Vitejs/plugin-react 5.0.4** - React support for Vite

### CSS
- **CSS3** - Native CSS for animations, flexbox, and styling
- **No CSS framework** - Custom styling for minimal bundle size

### Content Format
- **Markdown** - Simple, human-readable flashcard content format

### Deployment
- **GitHub Pages** - Free static hosting via gh-pages
- **GitHub Actions** - Automated CI/CD pipeline

---

## Key Components Detailed

### 1. **FlashCard.jsx**
Renders individual flashcards with 3D flip animation.

**Props:**
- `card` (object) - Card data with question, answer, category, title
- `isFlipped` (boolean) - Controls which side is visible
- `onFlip` (function) - Callback when card is clicked

**Features:**
- Click-to-flip interaction
- Markdown rendering in both Q&A
- Category label display
- "Click to reveal" hint text
- Full responsive sizing

### 2. **CardNavigation.jsx**
Controls navigation between cards and displays progress.

**Props:**
- `currentIndex` (number) - Zero-based position in deck
- `totalCards` (number) - Total card count
- `onNext`, `onPrevious` (functions) - Navigation callbacks
- `canGoNext`, `canGoPrevious` (booleans) - Button disabled states

**Features:**
- Previous/Next buttons with smart disable logic
- Progress bar with visual fill indicator
- Card counter display (e.g., "Card 3 of 15")
- Accessible button states

### 3. **LandingPage.jsx**
Home page with deck selection interface.

**Features:**
- Grid layout of available decks
- Dynamically loads and displays card count per deck
- Uses `parseMarkdownFlashcards()` to count cards on load
- Responsive deck card buttons
- Message when no decks found

### 4. **App.jsx**
Main application component with routing and state management.

**State:**
- `decks` - Array of available deck objects
- `currentDeck` - Currently selected deck
- `cards` - Parsed flashcard objects for current deck
- `originalCards` - Unshuffled cards for reset
- `currentCardIndex` - Position in deck
- `isFlipped` - Card flip state
- `isLoading` - Initial deck loading state

**Key Functions:**
- `loadDeck()` - Fetches and parses markdown deck
- `handleNext/Previous()` - Navigate through cards
- `handleFlip()` - Toggle card flip state
- `handleShuffle()` - Randomize card order
- `handleReset()` - Restore original order, go to first card

**Routing:**
- `/` - Landing page or card study view
- `/about` - About/info page

### 5. **markdownParser.js**
Core utility that converts markdown into flashcard objects.

**Algorithm:**
1. Splits markdown into lines
2. Tracks categories (## headings)
3. Creates card objects on ### headings
4. Extracts **Q:** and **A:** content
5. Handles multi-line questions and answers
6. Returns array of card objects with structure:
   ```javascript
   {
     id: 0,
     category: 'Category Name',
     title: 'Card Title',
     question: 'Question text',
     answer: 'Answer text'
   }
   ```

**Supported Format:**
```markdown
# Deck Title

## Category (optional)

### Card 1
**Q:** Question text?
**A:** Answer text.

### Card 2
**Q:** Another question?
**A:** Another answer.
```

---

## Build & Development Scripts

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
- Runs `sync-topics` script first
- Starts Vite dev server on port 5173
- Hot module replacement enabled

### Production Build
```bash
npm run build
```
- Runs `sync-topics` to copy flashcard files
- Builds optimized bundle to `dist/` directory
- Outputs minified React code and CSS

### Deck Management Scripts

#### Generate Decks Manifest
```bash
npm run generate-decks
```
**Purpose:** Auto-generates `flashcard-topics/decks.json`
**Process:**
1. Scans `flashcard-topics/` directory for `.md` files
2. Extracts first `# Heading` as deck name
3. Creates entry: `{ id, name, description, file }`
4. Sorts alphabetically by name
5. Writes manifest to JSON

**Usage:** Run after adding new markdown files

#### Validate Decks
```bash
npm run validate-decks
```
**Purpose:** Checks markdown files for correct format
**Validates:**
- First line is `# Deck Title`
- Cards have `### Card Title`
- Questions marked with `**Q:**`
- Answers marked with `**A:**`
- Content is non-empty
- Reports errors and warnings

**Usage:** Before committing new content

#### Sync Topics
```bash
npm run sync-topics
```
**Purpose:** Copies markdown files from `flashcard-topics/` to `public/flashcard-topics/`
**Behavior:**
- Creates target directory if missing
- Copies all `.md` files except `README.md`
- Allows static serving during dev and build
- Runs automatically in `dev` and `build` scripts

---

## Flashcard Content Format

### File Requirements
- **Location:** `flashcard-topics/` directory
- **Extension:** `.md` (markdown)
- **Naming:** Lowercase with hyphens (e.g., `design-patterns.md`)

### Markdown Structure
```markdown
# Your Topic Name

## Optional Category

### Card 1 Title
**Q:** Your question here?
**A:** Your answer here. Can include markdown formatting.

### Card 2 Title
**Q:** Another question?
**A:** Another answer with **bold**, *italic*, `code`, etc.

## Another Category

### Card 3
**Q:** Question
**A:** Answer
```

### Format Rules
1. **REQUIRED:** First line must be `# Title` (becomes deck name)
2. **REQUIRED:** Each card starts with `### Card Title`
3. **REQUIRED:** Questions marked with `**Q:**`
4. **REQUIRED:** Answers marked with `**A:**`
5. **OPTIONAL:** Categories with `## Category Name`
6. **OPTIONAL:** Multi-line Q&A (until next marker or empty line)
7. **OPTIONAL:** Markdown formatting in Q&A (bold, italic, code blocks, links)

### Current Decks

| Deck | File | Cards | Focus |
|------|------|-------|-------|
| Big O Notation - Beginner | `big-o-beginner.md` | ~20 | Fundamentals |
| Big O Notation - Advanced | `big-o-advanced.md` | ~25 | Complex analysis |
| Design Patterns for Job Interviews | `design_patterns.md` | ~15 | Common patterns |
| SOLID Principles | `solid.md` | ~10 | Design principles |

---

## Development Workflow

### Adding a New Flashcard Deck

1. **Create markdown file**
   ```bash
   touch flashcard-topics/my-topic.md
   ```

2. **Write content** (follow format above)

3. **Validate format**
   ```bash
   npm run validate-decks
   ```

4. **Generate manifest**
   ```bash
   npm run generate-decks
   ```

5. **Test locally**
   ```bash
   npm run dev
   # Visit http://localhost:5173
   ```

6. **Commit and push**
   ```bash
   git add flashcard-topics/my-topic.md flashcard-topics/decks.json
   git commit -m "Add [Topic Name] flashcards"
   git push
   ```

### Git Configuration
- **Repository:** GitHub (public)
- **Pages:** GitHub Pages at `https://emckenna.github.io/flash-cards/`
- **Deployment:** Automatic via GitHub Actions on push to `main`

---

## Build Configuration

### Vite Config
- **Base path:** `/flash-cards/` (for GitHub Pages subdirectory)
- **Server host:** `0.0.0.0` (listen on all interfaces)
- **Server port:** `5173` (default Vite dev port)
- **React Plugin:** Enabled for JSX transformation

### GitHub Actions Workflow

**File:** `.github/workflows/deploy.yml`

**Trigger:** Push to `main` branch or manual dispatch

**Steps:**
1. Checkout code
2. Setup Node 20 with npm caching
3. Install dependencies (`npm ci`)
4. Generate decks manifest (`npm run generate-decks`)
5. Build with Vite (`npm run build`)
6. Upload `dist/` as GitHub Pages artifact
7. Deploy artifact to GitHub Pages

**Permissions:** Read contents, write pages, id-token

---

## State Management

### App-Level State (App.jsx)
```javascript
const [decks, setDecks]                    // Available decks list
const [currentDeck, setCurrentDeck]        // Selected deck
const [cards, setCards]                    // Shuffleable card array
const [originalCards, setOriginalCards]    // Original unshuffled cards
const [currentCardIndex, setCurrentCardIndex] // Current position
const [isFlipped, setIsFlipped]            // Card flip state
const [isLoading, setIsLoading]            // Initial load state
```

### Data Flow
```
App loads decks.json
  ↓
User selects deck (LandingPage)
  ↓
App fetches markdown file
  ↓
markdownParser.js parses markdown
  ↓
cards array state updated
  ↓
FlashCard displays card[currentCardIndex]
  ↓
CardNavigation controls navigation
```

---

## Styling Approach

### CSS Architecture
- **No CSS framework** - Pure CSS3 for minimal bundle
- **Component-scoped CSS** - Each component has own CSS file
- **Flexbox & Grid** - Modern layout techniques
- **CSS Variables** - Potential for theming (not currently used)
- **CSS Animations** - 3D flip animation on cards

### Key Animations
- **Card Flip:** 3D perspective rotation on `isFlipped` class toggle
- **Progress Bar:** Width animation on card index change
- **Button Hover:** Color/scale transitions

### Mobile Responsiveness
- Breakpoints for mobile (< 768px)
- Stack layout for cards on mobile
- Touch-friendly button sizing
- Adjusted font sizes for readability

---

## Performance Considerations

### Optimization Strategies
1. **React 19 Lazy Component Rendering**
   - Landing page doesn't render study view
   - Study view doesn't render landing page

2. **Static File Serving**
   - Markdown files served as static assets
   - No runtime compilation of markdown
   - Cached by browser

3. **Vite Build Optimization**
   - Code splitting by route (via React Router)
   - Asset fingerprinting for cache busting
   - Tree-shaking removes unused code

4. **Markdown Parser Efficiency**
   - Single-pass line-by-line parsing
   - O(n) time complexity where n = file lines
   - No external parsing libraries

### Bundle Size Estimation
- React + React DOM + Router: ~100KB
- React Markdown: ~50KB
- Vite runtime: ~10KB
- Custom CSS: ~20KB
- Total: ~180KB (gzipped ~60KB)

---

## Keyboard & Accessibility

### Keyboard Shortcuts
- **Space:** Flip card
- **→ Arrow:** Next card
- **← Arrow:** Previous card

### Accessibility Features
- Semantic HTML (buttons, navigation)
- ARIA labels on interactive elements
- Color contrast compliance
- Focus states on buttons
- Disabled button states

### Areas for Improvement
- Add skip to main content link
- Add keyboard shortcut help modal
- Add dark mode theme option
- Improve screen reader support

---

## Deployment Details

### Current Deployment
- **Host:** GitHub Pages
- **URL:** https://emckenna.github.io/flash-cards/
- **Branch:** `main`
- **CI/CD:** GitHub Actions workflow

### First-Time Setup
1. Push code to GitHub
2. Go to Repository Settings → Pages
3. Select "Source: GitHub Actions"
4. Workflow automatically deploys on push

### Build Output
- Built to `dist/` directory
- Includes all compiled JavaScript
- Includes all assets and CSS
- Ready for static hosting

---

## Common Development Tasks

### Add a New Deck
1. Create `flashcard-topics/new-deck.md`
2. Write flashcard content
3. Run `npm run validate-decks` (optional but recommended)
4. Run `npm run generate-decks`
5. Run `npm run dev` to test
6. Commit and push

### Fix a Typo in Content
1. Edit `.md` file in `flashcard-topics/`
2. Run `npm run generate-decks` (if you changed the title)
3. Run `npm run dev` to test
4. Commit and push

### Update Card Count Display
- Automatic! LandingPage loads decks on mount and counts cards
- No manual update needed

### Test Before Deploy
```bash
npm run validate-decks    # Check format
npm run dev              # Test locally
npm run build            # Test production build
npx vite preview         # Preview production build
```

---

## Known Limitations & Future Enhancements

### Current Limitations
- No user progress saving (stateless app)
- No spaced repetition algorithm
- No difficulty ratings
- No user accounts/authentication
- No search functionality
- Card order randomization is naive (not ideal shuffle)

### Potential Enhancements
1. **Progress Persistence**
   - LocalStorage to remember progress
   - User accounts for cloud sync

2. **Learning Algorithms**
   - Spaced repetition scheduling
   - Difficulty-based card ordering
   - Time-based review recommendations

3. **Content Features**
   - Images in flashcards
   - Code syntax highlighting
   - LaTeX math support
   - Audio pronunciation

4. **UI Improvements**
   - Dark mode
   - Keyboard shortcut help
   - Full-screen mode
   - Statistics dashboard

5. **Content Management**
   - Deck metadata (difficulty, tags)
   - Related deck suggestions
   - User-contributed decks
   - Content versioning

6. **Performance**
   - Service worker for offline mode
   - Progressive Web App (PWA)
   - Lazy load deck content

---

## Testing

### What's Tested
- Markdown parsing logic (manual testing)
- Component rendering (manual testing in dev mode)
- Build process (GitHub Actions)
- Deployment (automatic via Actions)

### Testing Gaps
- No unit tests for components
- No integration tests
- No e2e tests

### Testing Setup Needed
- Jest for unit testing
- React Testing Library for component tests
- Cypress/Playwright for e2e

---

## Contributing Guidelines

### Code Style
- ES6+ JavaScript
- Functional React components with hooks
- Lowercase file names with hyphens
- CSS follows BEM-adjacent naming

### Commit Messages
- Clear, descriptive messages
- Reference issues if applicable
- Format: "Add X" or "Fix Y" or "Update Z"

### Pull Request Process
1. Create feature branch
2. Make changes
3. Test locally
4. Commit with clear messages
5. Push and create PR
6. Wait for review
7. Merge when approved

---

## License & Attribution

- **License:** MIT
- **Author:** Eric McKenna
- **Credit:** React, Vite, GitHub Pages

---

## Quick Reference Commands

```bash
# Setup
npm install                    # Install dependencies

# Development
npm run dev                    # Start dev server
npm run preview               # Preview production build

# Building & Validation
npm run generate-decks        # Auto-generate decks.json
npm run validate-decks        # Validate markdown format
npm run sync-topics          # Copy topics to public/
npm run build                # Build for production

# Content Management
npm run validate-decks       # Before committing new decks
npm run generate-decks       # After adding new .md files
```

---

## Contact & Questions

For questions about the project, check:
1. `README.md` - User-facing documentation
2. `flashcard-topics/README.md` - Content creation guide
3. GitHub Issues - Report bugs or request features

---

*Last Updated: November 2024*
*Project Status: Active development*
