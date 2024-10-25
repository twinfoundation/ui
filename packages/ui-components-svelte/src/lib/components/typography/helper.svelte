<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import type { Snippet } from 'svelte';

	interface Props {
		color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
		children?: Snippet;
		class?: string;
	}

	const colorClasses = {
		primary: 'text-primary dark:text-primary-dark',
		secondary: 'text-secondary dark:text-secondary-dark',
		error: 'text-error dark:text-error-dark',
		warning: 'text-warning dark:text-warning-dark',
		success: 'text-success dark:text-success-dark',
		info: 'text-information dark:text-information-dark'
	};

	let { color = 'secondary', children, ...rest }: Props = $props();
</script>

<p
	{...rest}
	class={`whitespace-pre-wrap break-all font-light ${colorClasses[color]} ${rest.class ?? ''}`}
>
	{@render children?.()}
</p>
