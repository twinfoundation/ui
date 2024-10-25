<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import type { Snippet } from 'svelte';

	interface Props {
		disabled?: boolean;
		children?: Snippet;
		href: string;
		target?: string;
		class?: string;
	}

	let { href, target, disabled = false, children, ...rest }: Props = $props();
</script>

<a
	{...rest}
	{href}
	{target}
	aria-disabled={disabled}
	tabindex={disabled ? -1 : 0}
	class={`text-primary dark:text-primary-dark outline-none ${rest.class ?? ''} ${disabled ? 'cursor-not-allowed opacity-50 hover:no-underline' : 'hover:decoration-surface-button-pressed focus:decoration-surface-button-pressed cursor-pointer hover:underline hover:decoration-2 focus:underline focus:decoration-2'}`}
>
	{@render children?.()}
</a>
