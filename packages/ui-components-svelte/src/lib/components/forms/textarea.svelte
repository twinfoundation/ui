<script lang="ts">
	import { Textarea } from 'flowbite-svelte';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export let value: any;
	export let resize: boolean = false;
</script>

<Textarea
	{...$$props}
	unWrappedClass={`text-sm focus:ring-primary-100 focus:border-primary-500 dark:focus:ring-primary-900 border-neutral-300 focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed ${resize ? 'resize-y' : 'resize-none'} ${$$props.class ?? ''}`}
	bind:value
></Textarea>
