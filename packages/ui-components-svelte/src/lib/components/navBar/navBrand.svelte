<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { NavBrand } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		href?: string;
		children?: Snippet;
		class?: string;
	}

	let { href, children, ...rest }: Props = $props();
</script>

<NavBrand
	{...rest}
	{href}
	class={`focus:ring-surface-button-pressed focus:border-primary-500 dark:focus:ring-surface-button-pressed rounded outline-none focus:ring ${rest.class ?? ''}`}
>
	{@render children?.()}
</NavBrand>
