<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Button, Icons } from '$lib';

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
		on:click={async () => loadPrevious()}><Icons.AngleLeftOutline /></Button
	>
	<Button
		size="xs"
		color="plain"
		disabled={!canGoForwards || disabled}
		on:click={async () => loadNext()}><Icons.AngleRightOutline /></Button
	>
</div>
