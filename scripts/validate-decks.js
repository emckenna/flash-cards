#!/usr/bin/env node

/**
 * Validates flashcard markdown files for proper format
 *
 * Checks:
 * 1. First line must be a # heading (deck title)
 * 2. Cards must have both **Q:** and **A:** sections
 * 3. Cards should have meaningful content
 * 4. Warns about potential formatting issues
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOPICS_DIR = path.join(__dirname, '../flashcard-topics');

let hasErrors = false;
let hasWarnings = false;

function validateMarkdownFile(filename, content) {
  const errors = [];
  const warnings = [];
  const lines = content.split('\n');

  // Check 1: First line must be a # heading
  const firstNonEmptyLine = lines.find(line => line.trim());
  if (!firstNonEmptyLine || !firstNonEmptyLine.trim().startsWith('# ')) {
    errors.push('First line must be a # heading (e.g., "# Your Topic Name")');
  } else {
    const title = firstNonEmptyLine.trim().replace('# ', '');
    if (title.length < 3) {
      warnings.push('Deck title is very short - consider a more descriptive name');
    }
  }

  // Check 2: Find all cards and validate Q&A format
  let currentCard = null;
  let cardNumber = 0;
  const cards = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Card heading (### ...)
    if (line.startsWith('### ')) {
      if (currentCard) {
        cards.push(currentCard);
      }
      cardNumber++;
      currentCard = {
        number: cardNumber,
        line: i + 1,
        hasQuestion: false,
        hasAnswer: false,
        questionContent: '',
        answerContent: ''
      };
      continue;
    }

    if (currentCard) {
      if (line.startsWith('**Q:**') || line.startsWith('**Question:**')) {
        currentCard.hasQuestion = true;
        currentCard.questionContent = line.replace(/\*\*Q(uestion)?:\*\*/, '').trim();
      } else if (line.startsWith('**A:**') || line.startsWith('**Answer:**')) {
        currentCard.hasAnswer = true;
        currentCard.answerContent = line.replace(/\*\*A(nswer)?:\*\*/, '').trim();
      } else if (currentCard.hasQuestion && !currentCard.hasAnswer && line) {
        currentCard.questionContent += ' ' + line;
      } else if (currentCard.hasAnswer && line) {
        currentCard.answerContent += ' ' + line;
      }
    }
  }

  // Don't forget the last card
  if (currentCard) {
    cards.push(currentCard);
  }

  // Check 3: Validate each card
  if (cards.length === 0) {
    errors.push('No flashcards found. Cards must start with ### and contain **Q:** and **A:**');
  } else {
    cards.forEach(card => {
      if (!card.hasQuestion) {
        errors.push(`Card at line ${card.line}: Missing **Q:** question marker`);
      } else if (card.questionContent.length < 5) {
        warnings.push(`Card at line ${card.line}: Question is very short or empty`);
      }

      if (!card.hasAnswer) {
        errors.push(`Card at line ${card.line}: Missing **A:** answer marker`);
      } else if (card.answerContent.length < 5) {
        warnings.push(`Card at line ${card.line}: Answer is very short or empty`);
      }
    });
  }

  return { errors, warnings, cardCount: cards.length };
}

function main() {
  console.log('🔍 Validating flashcard topics...\n');

  try {
    const files = fs.readdirSync(TOPICS_DIR);
    const mdFiles = files.filter(f => f.endsWith('.md') && f !== 'README.md');

    if (mdFiles.length === 0) {
      console.log('⚠️  No markdown files found in flashcard-topics/');
      process.exit(1);
    }

    let totalCards = 0;

    mdFiles.forEach(file => {
      const filePath = path.join(TOPICS_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const result = validateMarkdownFile(file, content);

      console.log(`📄 ${file}`);

      if (result.errors.length === 0 && result.warnings.length === 0) {
        console.log(`   ✅ Valid (${result.cardCount} cards)`);
      } else {
        if (result.errors.length > 0) {
          hasErrors = true;
          console.log(`   ❌ Errors:`);
          result.errors.forEach(err => console.log(`      - ${err}`));
        }

        if (result.warnings.length > 0) {
          hasWarnings = true;
          console.log(`   ⚠️  Warnings:`);
          result.warnings.forEach(warn => console.log(`      - ${warn}`));
        }
      }

      totalCards += result.cardCount;
      console.log('');
    });

    console.log(`📊 Summary: ${mdFiles.length} file(s), ${totalCards} total cards\n`);

    if (hasErrors) {
      console.log('❌ Validation failed with errors. Please fix the issues above.');
      process.exit(1);
    } else if (hasWarnings) {
      console.log('⚠️  Validation passed with warnings. Consider addressing them.');
      process.exit(0);
    } else {
      console.log('✅ All flashcard files are valid!');
      process.exit(0);
    }
  } catch (error) {
    console.error('❌ Error during validation:', error.message);
    process.exit(1);
  }
}

main();
