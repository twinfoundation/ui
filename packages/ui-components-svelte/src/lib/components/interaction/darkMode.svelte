<script lang="ts">
	import { DarkMode } from 'flowbite-svelte';
</script>

<DarkMode
	{...$$props}
	class={`focus:ring-primary-100 focus:border-primary-500 dark:focus:ring-primary-900 dark:focus:border-primary-500 border focus:ring-4 focus-visible:outline-none dark:border-gray-600 ${$$props.class ?? ''}`}
></DarkMode>
