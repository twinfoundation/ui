<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Input, type InputType } from 'flowbite-svelte';
	import type { FullAutoFill } from 'svelte/elements';

	interface Props {
		type?: InputType;
		value: unknown;
		name?: string;
		placeholder?: string;
		autocomplete?: FullAutoFill | undefined | null;
		color?: 'default' | 'error' | 'success';
		disabled?: boolean;
		spellcheck?: boolean;
		class?: string;
	}

	let {
		type = 'text',
		name,
		value = $bindable(),
		color = 'default',
		placeholder,
		autocomplete,
		spellcheck,
		disabled,
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

<Input
	{...rest}
	{type}
	{name}
	{placeholder}
	{disabled}
	{autocomplete}
	{spellcheck}
	color={flowbiteMap[color]}
	class="{`focus:ring ${colorMap[color]} focus:ring-surface-button-pressed focus:border-surface-brand-primary-1 dark:focus:ring-surface-button-pressed-dark dark:focus:border-surface-brand-primary-1-dark ${rest.class ?? ''}`}}"
	bind:value
></Input>
