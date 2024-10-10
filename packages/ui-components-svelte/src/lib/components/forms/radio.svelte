<script lang="ts">
	import { Radio } from 'flowbite-svelte';
	export let value: string | number;
	export let group: number | string | undefined = undefined;
</script>

<Radio {...$$props} class={$$props.class ?? ''} bind:value {group}><slot /></Radio>

<style lang="postcss">
	:global(input[type='radio']) {
		@apply cursor-pointer;
		@apply border-neutral-300;
	}
	:global(input[type='radio']:focus) {
		@apply border-primary-500;
		@apply dark:ring-primary-900;
		@apply ring-primary-100;
		@apply ring-4;
	}
	:global(input[type='radio']:disabled) {
		@apply cursor-not-allowed;
	}
</style>
