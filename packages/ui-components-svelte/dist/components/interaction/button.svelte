<script>import { Button } from "flowbite-svelte";
export let outline = false;
export let color = "primary";
const regularClasses = {
  primary: `bg-primary-500 hover:bg-primary-600 focus:ring-primary-100 disabled:bg-primary-500 dark:disabled:bg-primary-500 focus:border-primary-500 dark:focus:ring-primary-900 focus:ring-4 ${$$props.class ?? ""}`,
  red: `bg-red-500 hover:bg-red-600 focus:ring-red-100 disabled:bg-red-500 dark:disabled:bg-red-500 focus:border-red-500 dark:focus:ring-red-900 focus:ring-4 ${$$props.class ?? ""}`,
  yellow: `bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-100 disabled:bg-yellow-500 dark:disabled:bg-yellow-500 focus:border-yellow-500 dark:focus:ring-yellow-900 focus:ring-4 ${$$props.class ?? ""}`,
  green: `bg-green-500 hover:bg-green-600 focus:ring-green-100 disabled:bg-green-500 dark:disabled:bg-green-500 focus:border-green-500 dark:focus:ring-green-900 focus:ring-4 ${$$props.class ?? ""}`
};
const outlineClasses = {
  primary: `border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white disabled:text-primary-500 disabled:bg-transparent dark:disabled:text-primary-500 dark:disabled:bg-transparent focus:ring-primary-100 focus:border-primary-500 dark:focus:ring-primary-900 focus:ring-4 ${$$props.class ?? ""}`,
  red: `border-red-500 text-red-500 hover:bg-red-500 hover:text-white disabled:text-red-500 disabled:bg-transparent dark:disabled:text-red-500 dark:disabled:bg-transparent focus:ring-red-100 focus:border-red-500 dark:focus:ring-red-900 focus:ring-4 ${$$props.class ?? ""}`,
  yellow: `border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white disabled:text-yellow-500 disabled:bg-transparent dark:disabled:text-yellow-500 dark:disabled:bg-transparent focus:ring-yellow-100 focus:border-yellow-500 dark:focus:ring-yellow-900 focus:ring-4 ${$$props.class ?? ""}`,
  green: `border-green-500 text-green-500 hover:bg-green-500 hover:text-white disabled:text-green-500 disabled:bg-transparent dark:disabled:text-green-500 dark:disabled:bg-transparent focus:ring-green-100 focus:border-green-500 dark:focus:ring-green-900 focus:ring-4 ${$$props.class ?? ""}`
};
</script>

<Button
	{...$$props}
	{outline}
	{color}
	class={outline ? outlineClasses[color] : regularClasses[color]}
	on:click
>
	<slot />
</Button>
