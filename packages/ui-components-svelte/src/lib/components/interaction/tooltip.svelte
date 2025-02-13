<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Tooltip } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		color?: 'error' | 'warning' | 'success' | 'info' | 'primary' | 'secondary' | 'plain';
		class?: string;
		children?: Snippet;
		placement?: 'top' | 'right' | 'bottom' | 'left';
		trigger?: 'click' | 'hover';
	}

	let { color = 'primary', children, ...rest }: Props = $props();

	const colorClasses = {
		primary:
			'focus:ring text-invert border-2 border-transparent bg-surface-button hover:enabled:bg-surface-button-hover focus:ring-surface-button-pressed',
		secondary:
			'focus:ring text-invert border-2 border-transparent bg-surface-button-alt hover:enabled:bg-surface-button-alt-hover focus:ring-surface-button-alt-pressed',
		error:
			'focus:ring text-invert border-2 border-transparent bg-error hover:enabled:bg-system-error-tints-600 focus:ring-system-error-tints-200',
		warning:
			'focus:ring text-invert border-2 border-transparent bg-warning hover:enabled:bg-system-warning-tints-600 focus:ring-system-warning-tints-200',
		success:
			'focus:ring text-invert border-2 border-transparent bg-success hover:enabled:bg-system-success-tints-600 focus:ring-system-success-tints-200',
		info: 'focus:ring text-invert border-2 border-transparent bg-information hover:enabled:bg-system-information-tints-600 focus:ring-system-information-tints-200',
		plain:
			'focus:ring text-primary border-2 border-transparent bg-surface-second hover:enabled:bg-surface-third focus:ring-surface-button-pressed dark:text-invert dark:bg-surface-third-dark dark:hover:enabled:bg-surface-second-dark dark:focus:ring-surface-button-pressed'
	};
</script>

<Tooltip {...rest} color="none" class={`${colorClasses[color]} ${rest.class ?? ''}`} on:click>
	{@render children?.()}
</Tooltip>
