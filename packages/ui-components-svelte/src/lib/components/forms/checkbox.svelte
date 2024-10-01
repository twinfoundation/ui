<script lang="ts">
	import { Checkbox } from 'flowbite-svelte';
	export let value: string | number;
</script>

<Checkbox {...$$props} class={$$props.class ?? ''} bind:value><slot /></Checkbox>

<style lang="postcss">
	:global(input[type='checkbox']) {
		@apply cursor-pointer;
		@apply border-neutral-300;
	}
	:global(input[type='checkbox']:focus) {
		@apply border-primary-500;
		@apply dark:ring-primary-900;
		@apply ring-primary-100;
		@apply ring-4;
	}
	:global(input[type='checkbox']:disabled) {
		@apply cursor-not-allowed;
	}
</style>
