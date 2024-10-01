<script lang="ts">
	import { Select, type SelectOptionType } from 'flowbite-svelte';
	export let value: unknown;
	export let items: SelectOptionType<unknown>[];
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
