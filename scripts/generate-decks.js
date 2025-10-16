#!/usr/bin/env node

/**
 * Auto-generates decks.json from markdown files in flashcard-topics/
 *
 * This script:
 * 1. Scans flashcard-topics/ directory for .md files
 * 2. Extracts the title from the first # heading in each file
 * 3. Generates a decks.json manifest with all discovered decks
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOPICS_DIR = path.join(__dirname, '../flashcard-topics');
const OUTPUT_FILE = path.join(TOPICS_DIR, 'decks.json');

function extractTitleFromMarkdown(content) {
  // Find the first # heading
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('# ')) {
      return trimmed.replace('# ', '').trim();
    }
  }
  return null;
}

function generateId(filename) {
  // Remove .md extension and convert to kebab-case
  return filename.replace('.md', '').toLowerCase().replace(/\s+/g, '-');
}

function scanTopicsDirectory() {
  const decks = [];

  // Read all files in the topics directory
  const files = fs.readdirSync(TOPICS_DIR);

  for (const file of files) {
    // Skip non-markdown files and special files
    if (!file.endsWith('.md') || file === 'README.md') {
      continue;
    }

    const filePath = path.join(TOPICS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // Extract title from markdown
    const title = extractTitleFromMarkdown(content);

    if (!title) {
      console.warn(`⚠️  Warning: No title found in ${file} - skipping`);
      continue;
    }

    // Generate deck entry
    const deck = {
      id: generateId(file),
      name: title,
      description: `Learn ${title}`,
      file: file
    };

    decks.push(deck);
    console.log(`✓ Found: ${title} (${file})`);
  }

  // Sort decks by name
  decks.sort((a, b) => a.name.localeCompare(b.name));

  return decks;
}

function main() {
  console.log('🔍 Scanning flashcard-topics/ for markdown files...\n');

  try {
    const decks = scanTopicsDirectory();

    if (decks.length === 0) {
      console.log('⚠️  No flashcard decks found!');
      console.log('   Make sure you have .md files in flashcard-topics/');
      process.exit(1);
    }

    // Write decks.json
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(decks, null, 2) + '\n');

    console.log(`\n✅ Generated decks.json with ${decks.length} deck(s)`);
    console.log(`   Output: ${path.relative(process.cwd(), OUTPUT_FILE)}`);
  } catch (error) {
    console.error('❌ Error generating decks.json:', error.message);
    process.exit(1);
  }
}

main();
