<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Table } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		limitWidth?: boolean;
		class?: string;
		children?: Snippet;
	}

	let { limitWidth = true, children, ...rest }: Props = $props();
</script>

{#snippet table()}
	<Table {...rest} class={`${rest.class ?? ''}`}>
		{@render children?.()}
	</Table>
{/snippet}

{#if limitWidth}
	<div
		class="bg-surface-main border-surface-primary dark:bg-surface-main-dark dark:border-surface-primary-dark w-full min-w-96 overflow-x-auto rounded-md border"
	>
		{@render table()}
	</div>
{:else}
	{@render table()}
{/if}
