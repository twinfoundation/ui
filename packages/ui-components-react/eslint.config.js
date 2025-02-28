// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{ ignores: ['dist', 'node_modules', 'rollup.config.mjs', 'tailwind.config.ts'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser
		},
		plugins: {
			'react-hooks': reactHooks
		},
		rules: {
			// React Hooks Rules
			'react-hooks/rules-of-hooks': 'error', // Enforce React's Rules of Hooks
			'react-hooks/exhaustive-deps': 'warn', // Verify the list of dependencies for Hooks

			// TypeScript-specific rules
			'@typescript-eslint/no-explicit-any': 'error', // Disallow usage of the any type
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_'
				}
			], // Disallow unused variables (except those prefixed with _)

			// React Component rules
			'no-empty': ['error', { allowEmptyCatch: false }], // Disallow empty block statements
			'no-nested-ternary': 'warn', // Disallow nested ternary expressions for better readability
			'prefer-const': 'error', // Require const declarations for variables that are never reassigned after declared
			'no-console': ['warn', { allow: ['warn', 'error'] }], // Disallow console.log but allow console.warn and console.error

			// Best practices
			eqeqeq: ['error', 'always'], // Require the use of === and !==
			'no-var': 'error', // Require let or const instead of var
			'prefer-template': 'warn', // Suggest using template literals instead of string concatenation
			'object-shorthand': 'warn' // Suggest using shorthand syntax for object literals
		}
	}
);
