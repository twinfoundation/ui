<script>import { Heading, i18n, Spinner } from "../..";
export let titleResource;
export let isBusy = false;
</script>

<header class="flex flex-row justify-between gap-5 border-b pb-2">
	<Heading tag="h5">{$i18n(titleResource)}</Heading>
	{#if isBusy}
		<Spinner />
	{/if}
</header>
