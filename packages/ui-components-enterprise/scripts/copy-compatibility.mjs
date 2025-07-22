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
import FastGlob from 'fast-glob';

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
	process.stdout.write('Creating compatibility layer for Storybook...\n');

	// Ensure ESM directory exists
	if (!fs.existsSync(ESM_DIR)) {
		fs.mkdirSync(ESM_DIR, { recursive: true });
	}

	try {
		// Find all .mjs files in the ES directory
		const files = await FastGlob(path.join(ES_DIR, `**/*.mjs`).replace(/\\/g, '/'));

		if (files.length === 0) {
			process.stdout.write('No .mjs files found in ES directory. Check your build process.\n');
			return;
		}

		process.stdout.write(`Found ${files.length} files to copy for compatibility...\n`);

		// Copy each file from ES to ESM
		for (const file of files) {
			const sourceFile = file;
			const targetFile = path.join(ESM_DIR, path.basename(file));
			const targetDir = path.dirname(targetFile);

			// Ensure the target directory exists
			if (!fs.existsSync(targetDir)) {
				fs.mkdirSync(targetDir, { recursive: true });
			}

			// Copy the file
			fs.copyFileSync(sourceFile, targetFile);
		}

		// Also copy map files if they exist
		const mapFiles = await FastGlob(path.join(ES_DIR, `**/*.mjs.map`).replace(/\\/g, '/'));
		for (const file of mapFiles) {
			const sourceFile = file;
			const targetFile = path.join(ESM_DIR, path.basename(file));
			const targetDir = path.dirname(targetFile);

			// Ensure the target directory exists
			if (!fs.existsSync(targetDir)) {
				fs.mkdirSync(targetDir, { recursive: true });
			}

			// Copy the file
			fs.copyFileSync(sourceFile, targetFile);
		}

		process.stdout.write(
			`✅ Successfully copied ${files.length} files to ESM directory for compatibility\n`
		);
	} catch (error) {
		process.stderr.write(`❌ Error creating compatibility layer: ${error.message}\n`);
		process.exit(1);
	}
}

// Run the script
createCompatibilityLayer();
