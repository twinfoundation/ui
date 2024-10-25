<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { MoonOutline, SunOutline } from 'flowbite-svelte-icons';
	import { Button } from '../..';

	function toggleTheme(ev: MouseEvent): void {
		const target = ev.target as HTMLElement;
		const isDark = target.ownerDocument.documentElement.classList.toggle('dark');
		if (target.ownerDocument === document) {
			// we are NOT in the iFrame
			localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
		}
	}
</script>

<svelte:head>
	<script>
		if ('color-theme' in localStorage) {
			// explicit preference - overrides author's choice
			localStorage.getItem('color-theme') === 'dark'
				? window.document.documentElement.classList.add('dark')
				: window.document.documentElement.classList.remove('dark');
		} else {
			// browser preference - does not overrides
			if (window.matchMedia('(prefers-color-scheme: dark)').matches)
				window.document.documentElement.classList.add('dark');
		}
	</script>
</svelte:head>

<Button size="xs" color="plain" on:click={toggleTheme} class="p-2">
	<span class="hidden dark:block"><MoonOutline /></span>
	<span class="block dark:hidden"><SunOutline /></span>
</Button>
