<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Textarea } from 'flowbite-svelte';

	interface Props {
		name?: string;
		color?: 'default' | 'error' | 'success';
		disabled?: boolean;
		value: string;
		resize?: boolean;
		class?: string;
	}

	let {
		value = $bindable(),
		name,
		color = 'default',
		disabled,
		resize = false,
		...rest
	}: Props = $props();

	const colorMap = {
		default:
			'text-primary border-surface-primary bg-surface-second dark:text-primary-dark dark:border-surface-primary-dark dark:bg-surface-second-dark',
		error:
			'text-error border-error bg-surface-error dark:text-error-dark dark:border-error-dark dark:bg-system-error-tints-900',
		success:
			'text-success border-success bg-surface-success dark:text-success-dark dark:border-success-dark dark:bg-system-success-tints-900'
	};

	const flowbiteMap: { [id: string]: 'base' | 'green' | 'red' } = {
		default: 'base',
		error: 'red',
		success: 'green'
	};
</script>

<Textarea
	{...rest}
	{disabled}
	{name}
	color={flowbiteMap[color]}
	unWrappedClass="{`focus:ring ${colorMap[color]} focus:ring-surface-button-pressed focus:border-surface-brand-primary-1 dark:focus:ring-surface-button-pressed-dark dark:focus:border-surface-brand-primary-1-dark disabled:opacity-50 disabled:cursor-not-allowed ${resize ? 'resize-y' : 'resize-none'} ${rest.class ?? ''}`}}"
	bind:value
></Textarea>
