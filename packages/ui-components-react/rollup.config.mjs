// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';

const isEsm = process.env.MODULE === 'esm';
const format = isEsm ? 'esm' : 'cjs';
const extension = isEsm ? 'mjs' : 'cjs';

const globals = {
	react: 'React',
	'react/jsx-runtime': 'jsxRuntime',
	'react-dom': 'ReactDOM'
	// ... add any other globals you need
};

export default {
	input: './dist/es/index.js',
	output: {
		file: `dist/${format}/index.${extension}`,
		format,
		name: 'TwinUIComponents',
		exports: 'named',
		globals,
		sourcemap: true
	},
	external: [
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
		'tailwindcss'
	],
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
	plugins: [
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
	],
	// Enable tree-shaking
	treeshake: {
		moduleSideEffects: false,
		propertyReadSideEffects: false,
		tryCatchDeoptimization: false
	}
};
