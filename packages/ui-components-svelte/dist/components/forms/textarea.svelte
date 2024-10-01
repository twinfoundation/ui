<script>import { Textarea } from "flowbite-svelte";
export let value;
export let resize = false;
</script>

<Textarea
	{...$$props}
	unWrappedClass={`text-sm focus:ring-primary-100 focus:border-primary-500 dark:focus:ring-primary-900 border-neutral-300 focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed ${resize ? 'resize-y' : 'resize-none'} ${$$props.class ?? ''}`}
	bind:value
></Textarea>
