// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import packageDetails from './package.json' with { type: 'json' };
import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const isEsm = process.env.MODULE === 'esm';
const outputDir = isEsm ? 'dist/esm' : 'dist/cjs';

const plugins = [
	copy({
		targets: [
			{ src: 'src/css', dest: 'dist/' }
		]
	}),
	nodeResolve({
		extensions: ['.js', '.ts']
	}),
	typescript({
		tsconfig: './tsconfig.json',
		sourceMap: true,
		declarationDir: `${outputDir}/types`,
		outDir: outputDir,
		module: 'ESNext'
	}),
	json()
];

const globs = {};
if (packageDetails.dependencies) {
	for (const dep in packageDetails.dependencies) {
		globs[dep] = dep;
	}
}
if (packageDetails.peerDependencies) {
	for (const dep in packageDetails.peerDependencies) {
		globs[dep] = dep;
	}
}
if (packageDetails.devDependencies) {
	for (const dep in packageDetails.devDependencies) {
		globs[dep] = dep;
	}
}

export default {
	input: `./src/index.ts`,
	output: {
		file: isEsm ? `${outputDir}/index.mjs` : `${outputDir}/index.cjs`,
		format: isEsm ? 'esm' : 'cjs',
		name: packageDetails.name
			.split('-')
			.map(p => p[0].toUpperCase() + p.slice(1))
			.join(''),
		compact: false,
		exports: 'named',
		globals: globs,
		sourcemap: true
	},
	external: [/^node:.*/].concat(Object.keys(globs).map(g => new RegExp(`^${g}`))),
	onwarn: message => {
		if (!['EMPTY_BUNDLE', 'CIRCULAR_DEPENDENCY'].includes(message.code)) {
			process.stderr.write(`${message}\n`);
			// eslint-disable-next-line unicorn/no-process-exit
			process.exit(1);
		}
	},
	plugins
};
