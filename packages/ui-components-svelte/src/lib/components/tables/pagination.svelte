<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { AngleLeftOutline, AngleRightOutline } from 'flowbite-svelte-icons';
	import { Button } from '$lib';
	interface Props {
		canGoBackwards?: boolean;
		canGoForwards?: boolean;
		disabled?: boolean;
		loadPrevious: () => Promise<void>;
		loadNext: () => Promise<void>;
	}

	const {
		canGoBackwards = false,
		canGoForwards = false,
		disabled = false,
		loadPrevious,
		loadNext
	}: Props = $props();
</script>

<div class="flex flex-row gap-2">
	<Button
		size="xs"
		color="plain"
		disabled={!canGoBackwards || disabled}
		on:click={async () => loadPrevious()}><AngleLeftOutline /></Button
	>
	<Button
		size="xs"
		color="plain"
		disabled={!canGoForwards || disabled}
		on:click={async () => loadNext()}><AngleRightOutline /></Button
	>
</div>
