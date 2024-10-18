<script>import { Heading, Spinner } from "../..";
export let title;
export let busy = false;
</script>

<header class="flex flex-row justify-between gap-5 border-b pb-2">
	<Heading tag="h5">{title}</Heading>
	{#if busy}
		<Spinner />
	{/if}
</header>
