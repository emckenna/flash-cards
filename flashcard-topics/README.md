# Flashcard Topics

This directory contains all your flashcard decks. Each topic lives in its own markdown file.

## Adding a New Topic

To create a new set of flashcards:

### 1. Create a Markdown File

Create a new `.md` file in this directory (e.g., `design-patterns.md`, `javascript.md`, etc.)

### 2. Use the Flashcard Format

Structure your markdown file like this:

```markdown
# Your Topic Name

## Category or Subtopic (optional)

### Card 1
**Q:** Your question here?
**A:** Your answer here.

### Card 2
**Q:** Another question?
**A:** Another answer.

## Another Category (optional)

### Card 3
**Q:** More questions?
**A:** More answers!
```

**Rules:**
- **IMPORTANT**: The first line must be `# Your Topic Name` - this will be used as the deck name
- Each card starts with `### Card N` (or any heading text)
- Questions start with `**Q:**`
- Answers start with `**A:**`
- Categories with `## Category Name` are optional but help organize content
- You can use markdown formatting in questions and answers (bold, italics, code blocks, etc.)

### 3. Generate the Deck Manifest

Instead of manually editing `decks.json`, run this command:

```bash
npm run generate-decks
```

This will automatically:
- Scan all `.md` files in this directory
- Extract the deck name from the first `#` heading
- Generate an updated `decks.json` file

**No manual config editing required!** 🎉

### 4. Test Your Deck

Reload the app and your new deck should appear in the landing page!

## Example Topics You Could Create

- **Programming Languages**: JavaScript fundamentals, Python basics, Go syntax
- **Computer Science**: Data structures, algorithms, complexity analysis
- **System Design**: Scalability patterns, distributed systems, microservices
- **DevOps**: Docker commands, Kubernetes concepts, CI/CD practices
- **Frontend**: React hooks, CSS properties, browser APIs
- **Backend**: REST API design, database optimization, authentication

## Tips for Effective Flashcards

1. **Keep it simple**: One concept per card
2. **Be specific**: Clear, focused questions get better recall
3. **Use examples**: Code snippets and real-world scenarios help
4. **Add context**: Categories help organize related concepts
5. **Review regularly**: Spaced repetition is key to retention

Happy learning!
