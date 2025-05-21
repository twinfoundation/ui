#!/usr/bin/env node
// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/**
 * This script automatically generates the exports field in package.json
 * for all components in the src directory.
 *
 * It also provides an option to scan the storybook directory to ensure
 * all components used in stories are exported.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PACKAGE_JSON_PATH = path.resolve(__dirname, '../package.json');
const SRC_DIR = path.resolve(__dirname, '../src');
const STORYBOOK_DIR = path.resolve(__dirname, '../../../apps/ui-storybook-react/src');

// Load the package.json
let packageJson;
try {
	packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf8'));
} catch (error) {
	process.stderr.write(`❌ Failed to read package.json: ${error.message}\n`);
	process.exit(1);
}

// Base exports configuration
const baseExports = {
	'.': {
		types: './dist/types/index.d.ts',
		import: './dist/es/index.mjs',
		require: './dist/cjs/index.cjs'
	},
	'./icons': {
		types: './dist/types/icons/index.d.ts',
		import: './dist/es/icons/index.mjs',
		require: './dist/cjs/icons/index.js'
	},
	'./css/*.css': './dist/css/*.css',
	'./config/*.mjs': './dist/config/*.js'
};

// Add individual icon exports for direct imports
const ICONS_DIR = path.resolve(__dirname, '../src/icons');
const iconFiles = fs.readdirSync(ICONS_DIR)
  .filter(file => file.endsWith('.tsx') && file !== 'index.ts' && file !== 'iconsProps.ts')
  .map(file => path.basename(file, '.tsx'));

// Add exports for individual icons
iconFiles.forEach(iconName => {
  baseExports[`./icons/${iconName}`] = {
    types: `./dist/types/icons/${iconName}.d.ts`,
    import: `./dist/es/icons/${iconName}.js`,
    require: `./dist/cjs/icons/${iconName}.js`
  };
});

// Add exports for the icons index
baseExports['./icons'] = {
  types: './dist/types/icons/index.d.ts',
  import: './dist/es/icons/index.js',
  require: './dist/cjs/icons/index.js'
};

// Add wildcard export for icons
baseExports['./icons/*'] = {
  types: './dist/types/icons/*.d.ts',
  import: './dist/es/icons/*.js',
  require: './dist/cjs/icons/*.js'
};

/**
 * Gets all component directories in a given path.
 * @param dirPath Path to scan for component directories
 * @param excludeDirs Directories to exclude
 * @returns Array of component directory names
 */
function getComponentDirs(dirPath, excludeDirs = ['util', 'css']) {
	try {
		return fs.readdirSync(dirPath).filter(dir => {
			if (excludeDirs.includes(dir)) {
				return false;
			}

			const fullPath = path.join(dirPath, dir);
			const stats = fs.statSync(fullPath);

			if (!stats.isDirectory()) {
				return false;
			}

			// Check if this directory contains a component file
			try {
				const files = fs.readdirSync(fullPath);
				// A component directory should have a file named exactly the same as the directory
				// (e.g., button/button.tsx or button/button.ts)
				return files.some(
					file => file === `${dir}.tsx` || file === `${dir}.ts` || file === `${dir}.js`
				);
			} catch {
				return false;
			}
		});
	} catch (error) {
		process.stderr.write(`❌ Failed to scan directory ${dirPath}: ${error.message}\n`);
		return [];
	}
}

/**
 * Scans storybook directory to find all components used in stories.
 * This ensures we don't miss any components that have stories.
 * @returns Array of component names found in storybook
 */
function scanStorybookComponents() {
	const components = new Set();

	try {
		if (!fs.existsSync(STORYBOOK_DIR)) {
			process.stdout.write(`⚠️ Storybook directory not found at ${STORYBOOK_DIR}\n`);
			return [];
		}

		// Function to recursively scan directories
		const scanDir = dir => {
			const files = fs.readdirSync(dir);

			for (const file of files) {
				const fullPath = path.join(dir, file);
				const stats = fs.statSync(fullPath);

				if (stats.isDirectory()) {
					scanDir(fullPath);
				} else if (
					(file.endsWith('.tsx') || file.endsWith('.ts')) && // Look for story files
					file.includes('.stories.')
				) {
					const content = fs.readFileSync(fullPath, 'utf8');

					// This is a simple regex that might need adjustment based on your exact import patterns
					const importMatches = content.match(
						/import\s+{?\s*(\w+)\s*}?\s+from\s+["']@twin.org\/ui-components-react([^"']*)["']/g
					);

					// Process imports if found
					if (importMatches) {
						for (const match of importMatches) {
							// Extract the component name
							const componentMatch = match.match(/import\s+{?\s*(\w+)/);
							// Process the match if found
							const hasComponent = componentMatch && componentMatch[1];
							if (hasComponent) {
								components.add(
									componentMatch[1]
										.replace(/([A-Z])/g, '-$1')
										.toLowerCase()
										.slice(1)
								);
							}
						}
					}
				}
			}
		};

		scanDir(STORYBOOK_DIR);
		return Array.from(components);
	} catch (error) {
		process.stderr.write(`❌ Failed to scan storybook: ${error.message}\n`);
		return [];
	}
}

/**
 * Generates the exports field for package.json.
 * @returns Exports configuration object
 */
function generateExports() {
	// Get components from src directory
	const srcComponents = getComponentDirs(SRC_DIR);
	process.stdout.write(`📦 Found ${srcComponents.length} components in src directory\n`);

	// Get components from storybook
	const storybookComponents = scanStorybookComponents();
	process.stdout.write(
		`📚 Found ${storybookComponents.length} components referenced in storybook\n`
	);

	// Combine both sets of components
	const allComponents = new Set([...srcComponents, ...storybookComponents]);
	process.stdout.write(`🔄 Total unique components: ${allComponents.size}\n`);

	// Generate exports for each component
	const exports = { ...baseExports };

	for (const component of Array.from(allComponents)) {
		// Check if component directory exists
		const componentDir = path.join(SRC_DIR, component);
		if (!fs.existsSync(componentDir)) {
			process.stdout.write(
				`⚠️ Component "${component}" referenced in storybook but directory not found in src\n`
			);
		} else {
			exports[`./${component}`] = {
				types: `./dist/types/${component}/${component}.d.ts`,
				import: `./dist/es/${component}/${component}.mjs`,
				require: `./dist/cjs/${component}/${component}.js`
			};
		}
	}

	return exports;
}

/**
 * Updates the package.json file with the generated exports.
 */
function updatePackageJson() {
	try {
		const newExports = generateExports();

		// Read the current file as a string to preserve exact formatting
		const currentContent = fs.readFileSync(PACKAGE_JSON_PATH, 'utf8');

		// Parse the current content
		const originalPackageJson = JSON.parse(currentContent);

		// Get the current exports
		const currentExports = originalPackageJson.exports || {};

		// Compare the component paths (ignoring directory differences)
		const currentComponents = Object.keys(currentExports).filter(
			key => key !== '.' && !key.includes('*')
		);
		const newComponents = Object.keys(newExports).filter(key => key !== '.' && !key.includes('*'));

		// Check if the components list has changed
		const componentsChanged =
			currentComponents.length !== newComponents.length ||
			!currentComponents.every(comp => newComponents.includes(comp));

		if (componentsChanged) {
			// Only modify the exports field and keep everything else intact
			packageJson.exports = newExports;

			// Use tabs as the default indentation
			fs.writeFileSync(PACKAGE_JSON_PATH, `${JSON.stringify(packageJson, null, '\t')}\n`, 'utf8');

			const componentsCount = Object.keys(newExports).length - 5;
			process.stdout.write(
				`✅ Updated "exports" field in package.json with ${componentsCount} components\n`
			);
		} else {
			// No changes needed
			process.stdout.write(
				`✅ "exports" field in package.json is already up-to-date with ${Object.keys(newExports).length - 5} components\n`
			);
		}
	} catch (error) {
		process.stderr.write(`❌ Failed to update package.json: ${error.message}\n`);
		process.exit(1);
	}
}

// Run the script
updatePackageJson();
