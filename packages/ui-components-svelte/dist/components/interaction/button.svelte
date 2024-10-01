<script>import { Button } from "flowbite-svelte";
export let outline = false;
const regularClass = `bg-primary-500 hover:bg-primary-600 focus:ring-primary-100 disabled:bg-primary-500 dark:disabled:bg-primary-500 focus:border-primary-500 dark:focus:ring-primary-900 focus:ring-4 ${$$props.class ?? ""}`;
const outlineClass = `border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white disabled:text-primary-500 disabled:bg-transparent dark:disabled:text-primary-500 dark:disabled:bg-transparent focus:ring-primary-100 focus:border-primary-500 dark:focus:ring-primary-900 focus:ring-4 ${$$props.class ?? ""}`;
</script>

<Button {...$$props} {outline} class={outline ? outlineClass : regularClass} on:click>
	<slot />
</Button>
