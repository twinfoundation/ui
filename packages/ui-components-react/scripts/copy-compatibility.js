#!/usr/bin/env node
// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * This script creates copies of files from the ES module directory to the ESM directory
 * for backward compatibility with Storybook and other consumers that might still use the old path.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const ROOT_DIR = path.resolve(__dirname, '..');
const ES_DIR = path.resolve(ROOT_DIR, 'dist/es');
const ESM_DIR = path.resolve(ROOT_DIR, 'dist/esm');

/**
 * Creates a compatibility layer between the `es/` and `esm/` directories.
 * This ensures backward compatibility with tools like Storybook.
 */
async function createCompatibilityLayer() {
	// eslint-disable-next-line no-console
	console.log('Creating compatibility layer for Storybook...');

	// Ensure ESM directory exists
	if (!fs.existsSync(ESM_DIR)) {
		fs.mkdirSync(ESM_DIR, { recursive: true });
	}

	try {
		// Find all .mjs files in the ES directory
		const files = await glob('**/*.mjs', { cwd: ES_DIR });

		if (files.length === 0) {
			// eslint-disable-next-line no-console
			console.log('No .mjs files found in ES directory. Check your build process.');
			return;
		}

		// eslint-disable-next-line no-console
		console.log(`Found ${files.length} files to copy for compatibility...`);

		// Copy each file from ES to ESM
		for (const file of files) {
			const sourceFile = path.join(ES_DIR, file);
			const targetFile = path.join(ESM_DIR, file);
			const targetDir = path.dirname(targetFile);

			// Ensure the target directory exists
			if (!fs.existsSync(targetDir)) {
				fs.mkdirSync(targetDir, { recursive: true });
			}

			// Copy the file
			fs.copyFileSync(sourceFile, targetFile);
		}

		// Also copy map files if they exist
		const mapFiles = await glob('**/*.mjs.map', { cwd: ES_DIR });
		for (const file of mapFiles) {
			const sourceFile = path.join(ES_DIR, file);
			const targetFile = path.join(ESM_DIR, file);
			const targetDir = path.dirname(targetFile);

			// Ensure the target directory exists
			if (!fs.existsSync(targetDir)) {
				fs.mkdirSync(targetDir, { recursive: true });
			}

			// Copy the file
			fs.copyFileSync(sourceFile, targetFile);
		}

		// eslint-disable-next-line no-console
		console.log(`✅ Successfully copied ${files.length} files to ESM directory for compatibility`);
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(`❌ Error creating compatibility layer: ${error.message}`);
		process.exit(1);
	}
}

// Run the script
createCompatibilityLayer();
