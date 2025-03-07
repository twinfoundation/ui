// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Rollup configuration for TWIN UI Components library
 *
 * This configuration is optimized for tree-shaking and provides:
 * 1. A main bundle entry point for the entire library
 * 2. Preservation of module structure in ESM format to enable better tree-shaking
 * 3. Optimized bundling with external dependencies properly handled
 *
 * Tree-shaking enables consumers to import only the components they need,
 * reducing bundle sizes significantly in production applications.
 */
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';
import { glob } from 'glob';
import path from 'path';

const isEsm = process.env.MODULE === 'esm';
// Get the format from the environment variable
const format = isEsm ? 'es' : 'cjs';
// Set the file extension based on the format
const extension = format === 'es' ? 'mjs' : 'cjs';

const globals = {
	react: 'React',
	'react/jsx-runtime': 'jsxRuntime',
	'react-dom': 'ReactDOM',
	'@twin.org/ui-tailwind': 'TwinTailwind'
	// ... add any other globals you need
};

// Common external dependencies that should not be bundled
const externalDeps = [
	/^node:.*/,
	'react/jsx-runtime',
	'react',
	'react-dom',
	'flowbite-react/tailwind',
	'flowbite-react-icons/outline',
	'flowbite-react-icons/solid',
	'rfc6902',
	'intl-messageformat',
	'@twin.org/core',
	'@twin.org/ui-tailwind',
	'tailwindcss'
];

// Common plugins used for all bundles
const createPlugins = () => [
	// Extract peer dependencies
	peerDepsExternal(),

	// Copy CSS files
	copy({
		targets: [{ src: 'src/css', dest: 'dist/' }]
	}),

	// Properly resolve node modules
	nodeResolve({
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		preferBuiltins: true
	}),

	// Handle JSON files
	json(),

	// Minify the output
	terser({
		format: {
			comments: false
		}
	})
];

// Base configuration for all bundles
const baseConfig = {
	external: externalDeps,
	onwarn: message => {
		if (!['EMPTY_BUNDLE', 'CIRCULAR_DEPENDENCY'].includes(message.code)) {
			// If you need to ignore specific errors, you can add more checks here
			if (message.code === 'MISSING_EXPORT' && message.exporter.includes('@twin.org/core')) {
				return; // Ignore missing exports from @twin.org/core
			}

			process.stderr.write(`${message}\n`);
			// eslint-disable-next-line unicorn/no-process-exit
			process.exit(1);
		}
	},
	plugins: createPlugins(),
	// Enable tree-shaking
	treeshake: {
		moduleSideEffects: false,
		propertyReadSideEffects: false,
		tryCatchDeoptimization: false
	}
};

// Main bundle configuration (exports everything)
const mainBundle = {
	...baseConfig,
	input: './dist/es/index.js',
	output: isEsm
		? {
				format,
				name: 'TwinUIComponents',
				exports: 'named',
				globals,
				sourcemap: true,
				preserveModules: true,
				preserveModulesRoot: 'dist/es',
				dir: `dist/${format}`,
				entryFileNames: '[name].mjs'
		  }
		: {
				file: `dist/${format}/index.${extension}`,
				format,
				name: 'TwinUIComponents',
				exports: 'named',
				globals,
				sourcemap: true
		  },
    // Prevent watching the output directory to avoid infinite build loops
    watch: {
        exclude: ['dist/**', 'node_modules/**']
    }
};

// Export only the main bundle configuration
export default mainBundle;
