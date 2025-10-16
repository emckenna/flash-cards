#!/usr/bin/env node

/**
 * Syncs flashcard-topics to public directory for static serving
 * Excludes README.md to keep build clean
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.join(__dirname, '../flashcard-topics');
const TARGET_DIR = path.join(__dirname, '../public/flashcard-topics');

function syncTopics() {
  console.log('📋 Syncing flashcard topics to public directory...');

  // Create target directory
  fs.mkdirSync(TARGET_DIR, { recursive: true });

  // Read source directory
  const files = fs.readdirSync(SOURCE_DIR);

  let copiedCount = 0;

  files.forEach(file => {
    // Skip README.md
    if (file === 'README.md') {
      console.log(`   ⊘ Skipping ${file}`);
      return;
    }

    const sourcePath = path.join(SOURCE_DIR, file);
    const targetPath = path.join(TARGET_DIR, file);

    // Copy file
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`   ✓ Copied ${file}`);
    copiedCount++;
  });

  console.log(`✅ Synced ${copiedCount} file(s)\n`);
}

syncTopics();
