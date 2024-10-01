<script lang="ts">
	import { Input } from 'flowbite-svelte';
	export let value: unknown;
</script>

<Input
	{...$$props}
	class="{`focus:ring-primary-100 focus:border-primary-500 dark:focus:ring-primary-900 border-neutral-300 focus:ring-4 ${$$props.class ?? ''}`}}"
	bind:value
></Input>
