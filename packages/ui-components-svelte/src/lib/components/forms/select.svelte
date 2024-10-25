<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Select, type SelectOptionType } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		value: unknown;
		items: SelectOptionType<unknown>[];
		size?: 'sm' | 'md' | 'lg';
		name?: string;
		color?: 'default' | 'error' | 'success';
		disabled?: boolean;
		placeholder?: string;
		class?: string;
		children?: Snippet;
	}

	let {
		value = $bindable(),
		name,
		color = 'default',
		disabled,
		items,
		children,
		...rest
	}: Props = $props();

	const colorMap = {
		default:
			'text-primary border-surface-primary bg-surface-second focus:border-surface-primary dark:text-primary-dark dark:border-surface-primary-dark dark:focus:border-surface-primary-dark dark:bg-surface-second-dark',
		error:
			'text-error border-error bg-surface-error focus:border-error dark:text-error-dark dark:border-error-dark dark:bg-system-error-tints-900 dark:focus:border-error-dark ',
		success:
			'text-success border-success bg-surface-success focus:border-success dark:text-success-dark dark:border-success-dark dark:bg-system-success-tints-900 dark:focus:border-success-dark'
	};

	const flowbiteMap: { [id: string]: 'base' | 'green' | 'red' } = {
		default: 'base',
		error: 'red',
		success: 'green'
	};
</script>

<Select
	{...rest}
	{name}
	color={flowbiteMap[color]}
	{disabled}
	class={`focus:ring ${colorMap[color]} focus:ring-surface-button-pressed dark:focus:ring-surface-button-pressed-dark dark:focus:border-surface-brand-primary-1-dark disabled:cursor-not-allowed ${rest.class ?? ''}`}
	on:change
	bind:value
	{items}
>
	{@render children?.()}
</Select>
