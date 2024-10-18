<script lang="ts">
	import { Heading, Spinner } from '$lib';

	export let title: string;
	export let busy: boolean = false;
</script>

<header class="flex flex-row justify-between gap-5 border-b pb-2">
	<Heading tag="h5">{title}</Heading>
	{#if busy}
		<Spinner />
	{/if}
</header>
