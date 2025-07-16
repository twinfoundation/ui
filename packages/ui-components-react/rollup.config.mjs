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
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import image from '@rollup/plugin-image';

const isEsm = process.env.MODULE === 'esm';

// SVG to React component plugin
const svgToComponent = {
	name: 'svg-to-component',
	transform(code, id) {
		if (!id.endsWith('.svg')) return null;

		const componentName = path
			.basename(id, '.svg')
			.split('-')
			.map(part => part.charAt(0).toUpperCase() + part.slice(1))
			.join('');

		const svgContent = code
			.replace(/<svg[^>]*>|<\/svg>|\n|\r/g, '')
			.replace(/<\?xml[^>]+>/, '')
			.trim();

		return {
			code: `import React from 'react';
        const ${componentName} = (props) => (
          <svg {...props} dangerouslySetInnerHTML={{ __html: '${svgContent}' }} />
        );
        export default ${componentName};`,
			map: null
		};
	}
};
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
	'rfc6902',
	'intl-messageformat',
	'@twin.org/core',
	'@twin.org/ui-tailwind',
	'tailwindcss'
];

// Common plugins used for all bundles
const createPlugins = () => [
	// Handle SVG files
	image(),
	svgToComponent,
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

	// Handle PostCSS
	postcss({
		minimize: true,
		extract: false,
		modules: false,
		inject: false
	}),

	// Minify the output
	terser({
		format: {
			comments: false
		}
	}),

	// Handle SVG files
	svgr({
		svgoConfig: {
			plugins: [
				{
					name: 'removeViewBox',
					active: false
				}
			]
		}
	}),

	// Handle dynamic imports
	dynamicImportVars({
		warnOnError: true
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
				sourcemap: process.env.NODE_ENV !== 'production',
				preserveModules: true,
				preserveModulesRoot: 'dist/es',
				dir: `dist/${format}`,
				entryFileNames: chunkInfo => {
					if (chunkInfo.name.includes('icons/')) {
						return '[name].js';
					}
					return '[name].mjs';
				}
			}
		: {
				file: `dist/${format}/index.${extension}`,
				format,
				name: 'TwinUIComponents',
				exports: 'named',
				globals,
				sourcemap: process.env.NODE_ENV !== 'production'
			},
	// Prevent watching the output directory to avoid infinite build loops
	watch: {
		exclude: ['dist/**', 'node_modules/**']
	}
};

// Export only the main bundle configuration
export default mainBundle;
