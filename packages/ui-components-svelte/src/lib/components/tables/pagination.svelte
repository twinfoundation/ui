<script lang="ts">
	import { Button } from '$lib';

	export let canGoBackwards = false;
	export let canGoForwards = false;
	export let disabled = false;
	export let loadPrevious: () => Promise<void>;
	export let loadNext: () => Promise<void>;
</script>

<div class="flex flex-row gap-2">
	<Button
		outline
		size="xs"
		disabled={!canGoBackwards || disabled}
		on:click={async () => loadPrevious()}>Previous</Button
	>
	<Button outline size="xs" disabled={!canGoForwards || disabled} on:click={async () => loadNext()}
		>Next</Button
	>
</div>
