// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
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
			'react-hooks': reactHooks,
			import: importPlugin
		},
		rules: {
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_'
				}
			],
			eqeqeq: ['error', 'always'],
			'no-var': 'error',
			'no-empty': ['error', { allowEmptyCatch: false }],
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-nested-ternary': 'warn',
			'prefer-const': 'error',
			'prefer-template': 'warn',
			'object-shorthand': 'warn',
			// Tree-shaking related rules
			'import/no-default-export': 'off',
			'import/exports-last': 'off',
			'import/no-anonymous-default-export': 'error',
			'import/no-extraneous-dependencies': 'error'
		}
	}
);
