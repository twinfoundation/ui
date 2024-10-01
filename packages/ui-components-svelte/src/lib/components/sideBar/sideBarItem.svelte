<script lang="ts">
	import { SidebarItem } from 'flowbite-svelte';

	const activeClass =
		'flex items-center p-2 text-base font-normal text-white bg-primary-500 dark:bg-primary-600 rounded-lg dark:text-white hover:bg-primary-600 dark:hover:bg-neutral-700';
	const nonActiveClass =
		'flex items-center p-2 text-base font-normal text-neutral-900 rounded-lg dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700';
</script>

<SidebarItem
	{...$$props}
	{activeClass}
	{nonActiveClass}
	class={`focus:ring-primary-100 focus:border-primary-500 dark:focus:ring-primary-900 outline-none focus:ring-4 ${$$props.class ?? ''}`}
	spanClass="hidden md:block ms-3"
>
	<slot name="icon" slot="icon"></slot>
	<slot name="subtext" slot="subtext"></slot>
</SidebarItem>
