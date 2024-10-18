<script lang="ts">
	import { Checkbox } from 'flowbite-svelte';
	export let checked: boolean;
	export let disabled: boolean = false;
</script>

<Checkbox {...$$props} class={$$props.class ?? ''} bind:checked {disabled}><slot /></Checkbox>

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
		@apply opacity-50;
	}
</style>
