<script>import { Select } from "flowbite-svelte";
export let value;
export let items;
</script>

<Select
	{...$$props}
	class={`focus:ring-primary-100 focus:border-primary-500 dark:focus:ring-primary-900 border-neutral-300 focus:ring-4 disabled:cursor-not-allowed ${$$props.class ?? ''}`}
	on:change
	bind:value
	bind:items
>
	<slot />
</Select>
