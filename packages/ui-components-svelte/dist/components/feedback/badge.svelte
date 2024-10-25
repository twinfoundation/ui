<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Badge } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		color?: 'error' | 'warning' | 'info' | 'success' | 'primary' | 'secondary' | 'plain';
		large?: boolean;
		class?: string;
		children?: Snippet;
	}

	let { color = 'plain', large, children, ...rest }: Props = $props();

	const colorClasses = {
		primary: 'text-invert border-2 border-transparent bg-surface-button',
		secondary: 'text-invert border-2 border-transparent bg-surface-button-alt',
		error: 'text-invert border-2 border-transparent bg-error',
		warning: 'text-invert border-2 border-transparent bg-warning',
		success: 'text-invert border-2 border-transparent bg-success',
		info: 'text-invert border-2 border-transparent bg-information',
		plain:
			'text-primary border-2 border-transparent bg-surface-second dark:text-invert dark:bg-surface-third-dark'
	};
</script>

<Badge {...rest} color="none" {large} class={`${colorClasses[color]} ${rest.class ?? ''}`}>
	{@render children?.()}
</Badge>
