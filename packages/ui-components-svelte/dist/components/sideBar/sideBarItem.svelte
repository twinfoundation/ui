<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { SidebarItem } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		label: string;
		href: string;
		icon?: Snippet;
		class?: string;
	}

	let props: Props = $props();

	const activeClass =
		'flex items-center p-2 text-base font-normal rounded-lg outline-none focus:ring focus:ring-surface-button-pressed text-primary dark:text-primary-dark bg-surface-second dark:bg-surface-second-dark';
	const nonActiveClass =
		'flex items-center p-2 text-base font-normal rounded-lg outline-none focus:ring focus:ring-surface-button-pressed text-primary dark:text-primary-dark';
</script>

<SidebarItem {...props} {activeClass} {nonActiveClass}>
	{props.label}
	<svelte:fragment slot="icon">
		{@render props.icon?.()}
	</svelte:fragment>
</SidebarItem>
