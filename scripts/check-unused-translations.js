#!/usr/bin/env node

// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
const fs = require('node:fs');
const path = require('node:path');
const glob = require('glob');

// Configuration
const SOURCE_DIRS = ['src', 'apps', 'packages'];
const TRANSLATION_FILE = 'src/locales/en.json'; // Adjust path as needed
const EXCLUDE_PATTERNS = [
  'node_modules/**',
  'dist/**',
  'build/**',
  '.next/**',
  'coverage/**'
];

// Patterns to detect translation usage
const TRANSLATION_PATTERNS = [
  // Static usage: t('key')
  /t\(["'`]([^"'`]+)["'`]\)/g,
  // Dynamic usage: t(key)
  /t\(([$A-Z_a-z][\w$]*)\)/g,
  // Object usage: t({ key })
  /t\(\s*{\s*([$A-Z_a-z][\w$]*)\s*}\s*\)/g,
  // Template literal: t(`key`)
  /t\(`([^`]+)`\)/g,
  // useTranslation hook usage
  /useTranslation\(["'`]([^"'`]+)["'`]\)/g,
  // i18n.t usage
  /i18n\.t\(["'`]([^"'`]+)["'`]\)/g,
  // Dynamic i18n.t usage
  /i18n\.t\(([$A-Z_a-z][\w$]*)\)/g
];

// Dynamic key patterns (variables that might contain translation keys)
const DYNAMIC_KEY_PATTERNS = [
  // Common patterns for dynamic keys
  /const\s+([$A-Z_a-z][\w$]*)\s*=\s*["'`]([^"'`]+)["'`]/g,
  // Object properties that might be translation keys
  /([$A-Z_a-z][\w$]*):\s*["'`]([^"'`]+)["'`]/g,
  // Array items that might be translation keys
  /["'`]([^"'`]+)["'`],?\s*$/gm
];

/**
 *
 * @param filePath
 */
function loadTranslations(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error loading translations from ${filePath}:`, error.message);
    return {};
  }
}

/**
 *
 * @param obj
 * @param prefix
 */
function getAllTranslationKeys(obj, prefix = '') {
  const keys = [];

  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'object' && value !== null) {
      keys.push(...getAllTranslationKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }

  return keys;
}

/**
 *
 * @param sourceFiles
 */
function findUsedKeys(sourceFiles) {
  const usedKeys = new Set();
  const dynamicKeys = new Set();

  for (const file of sourceFiles) {
    const content = fs.readFileSync(file, 'utf8');

    // Find static translation keys
    for (const pattern of TRANSLATION_PATTERNS) {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        if (match[1]) {
          usedKeys.add(match[1]);
        }
      }
    }

    // Find potential dynamic keys
    for (const pattern of DYNAMIC_KEY_PATTERNS) {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        if (match[1] || match[2]) {
          const key = match[1] || match[2];
          // Only add if it looks like a translation key
          if (key.includes('.') || key.includes('_')) {
            dynamicKeys.add(key);
          }
        }
      }
    }
  }

  return { usedKeys, dynamicKeys };
}

/**
 *
 */
function findSourceFiles() {
  const files = [];

  for (const dir of SOURCE_DIRS) {
    if (fs.existsSync(dir)) {
      const patterns = [
        `${dir}/**/*.{js,jsx,ts,tsx}`,
        `${dir}/**/*.{vue,svelte}`,
        `${dir}/**/*.{json,yml,yaml}`
      ];

      for (const pattern of patterns) {
        const matches = glob.sync(pattern, {
          ignore: EXCLUDE_PATTERNS,
          nodir: true
        });
        files.push(...matches);
      }
    }
  }

  return files;
}

/**
 *
 */
function checkUnusedTranslations() {
  console.log('🔍 Checking for unused translations...\n');

  // Load translations
  const translations = loadTranslations(TRANSLATION_FILE);
  const allTranslationKeys = getAllTranslationKeys(translations);

  // Find source files
  const sourceFiles = findSourceFiles();
  console.log(`📁 Found ${sourceFiles.length} source files`);

  // Find used keys
  const { usedKeys, dynamicKeys } = findUsedKeys(sourceFiles);
  console.log(`🔑 Found ${usedKeys.size} static translation keys`);
  console.log(`🔗 Found ${dynamicKeys.size} potential dynamic keys\n`);

  // Find unused keys
  const unusedKeys = allTranslationKeys.filter(key => {
    // Check if key is used statically
    if (usedKeys.has(key)) { return false; }

    // Check if key might be used dynamically
    for (const dynamicKey of dynamicKeys) {
      if (dynamicKey.includes(key) || key.includes(dynamicKey)) {
        return false;
      }
    }

    // Check for partial matches (e.g., 'common.button' might be used as 'common.button.primary')
    for (const usedKey of usedKeys) {
      if (usedKey.startsWith(`${key}.`) || key.startsWith(`${usedKey}.`)) {
        return false;
      }
    }

    return true;
  });

  // Report results
  if (unusedKeys.length === 0) {
    console.log('✅ No unused translations found!');
  } else {
    console.log(`⚠️  Found ${unusedKeys.length} potentially unused translations:\n`);
    for (const key of unusedKeys) {
      console.log(`  - ${key}`);
    }

    console.log('\n💡 Tips:');
    console.log('  - Some keys might be used dynamically (variables, computed properties)');
    console.log('  - Check if keys are used in other files not scanned');
    console.log('  - Review the list manually before removing any keys');
  }

  // Show dynamic keys for manual review
  if (dynamicKeys.size > 0) {
    console.log('\n🔗 Potential dynamic keys (review manually):');
    for (const key of Array.from(dynamicKeys).slice(0, 10)) {
      console.log(`  - ${key}`);
    }
    if (dynamicKeys.size > 10) {
      console.log(`  ... and ${dynamicKeys.size - 10} more`);
    }
  }
}

// Run the check
checkUnusedTranslations();
