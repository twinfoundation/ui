// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { execSync } from 'node:child_process';
import flowbite from 'flowbite/plugin';
import flowbiteTypography from 'flowbite-typography';

/**
 * Generate the tailwind config theme.
 * @returns The tailwind config theme.
 */
export function getTheme() {
	return {
		colors: {
			white: '#FFFFFF',
			black: '#000000',
			'deep-midnight': '#11224E',
			'vivid-tangerine': '#FF7200',
			'ocean-breeze': '#3166DD',
			'misty-sky': '#EDF0F4',
			'cosmic-indigo': '#0A132B',
			'cosmic-indigo-600': '#090f27',
			'cosmic-indigo-700': '#0d101d',
			'sunset-glow': '#FF9248',
			'skyline-blue': '#4585E9',
			'soft-frost': '#E2E7ED',
			neutral: {
				25: '#FAFCFE',
				50: '#F6F8FA',
				100: '#F4F6F8',
				150: '#EFF1F5',
				200: '#E2E7ED',
				300: '#DFE4EB',
				400: '#D4DBE4',
				500: '#C9D2DD',
				600: '#A5ADB8',
				700: '#818992',
				800: '#5D646D',
				850: '#4B525A',
				900: '#394047',
				950: '#272D35',
				975: '#151B22'
			},
			primary: {
				25: '#FFFCFB',
				50: '#FFEFE4',
				100: '#FFE2CD',
				150: '#FFD6B6',
				200: '#FFC99F',
				300: '#FFAF71',
				400: '#FF9643',
				500: '#FF7C15',
				600: '#D56711',
				700: '#AB520D',
				800: '#823E08',
				850: '#6D3306',
				900: '#6D3306',
				950: '#431E02',
				975: '#2E1400'
			},
			secondary: {
				25: '#FAFCFE',
				50: '#E3EDFB',
				100: '#CCDEF9',
				150: '#B5D0F6',
				200: '#93C1F4',
				300: '#71A3EE',
				400: '#4386E9',
				500: '#1568E4',
				600: '#1156BD',
				700: '#0E4496',
				800: '#0A336E',
				850: '#082A5B',
				900: '#072147',
				950: '#051834',
				975: '#030F20'
			},
			red: {
				25: '#FEFAFA',
				50: '#FBE7E3',
				100: '#F9D3CC',
				150: '#F6C0B5',
				200: '#F4AC9E',
				300: '#EE8671',
				400: '#E95F43',
				500: '#DB3614',
				600: '#BA2E11',
				700: '#92240D',
				800: '#66190A',
				850: '#511408',
				900: '#3C0E06',
				950: '#270904',
				975: '#120402'
			},
			green: {
				25: '#FDFFFE',
				50: '#E7F8E5',
				100: '#D1F2CE',
				150: '#BCEBB6',
				200: '#A6E59F',
				300: '#7AD770',
				400: '#4FCA41',
				500: '#23BD12',
				600: '#1D9B0F',
				700: '#16780C',
				800: '#105608',
				850: '#0D4507',
				900: '#093305',
				950: '#062204',
				975: '#031102'
			}
		},
		fontFamily: {
			sans: [
				'Aeonik',
				'ui-sans-serif',
				'system-ui',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji'
			],
			aeonik: ['Aeonik'],
			hdcoltonwidesemibold: ['HD Colton Wide Semibold']
		}
	};
}

/**
 * Get the content.
 * @param includeLib Include the lib.
 * @returns The content.
 */
export function getContent(includeLib = true) {
	const npmRoot = execSync('npm root').toString().trim().replace(/\\/g, '/');

	const content = [
		`${npmRoot}/flowbite-svelte/**/*.{html,js,svelte,ts}`,
		`${npmRoot}/flowbite-svelte-blocks/**/*.{html,js,svelte,ts}`
	];

	if (includeLib) {
		content.push(`${npmRoot}/@twin.org/ui-components-svelte/**/*.{html,js,svelte,ts}`);
	}

	return content;
}

/**
 * Get the plugins.
 * @returns The plugins.
 */
export function getPlugins() {
	return [flowbite, flowbiteTypography];
}
