<script>import { Radio } from "flowbite-svelte";
export let value;
export let group = void 0;
</script>

<Radio {...$$props} class={$$props.class ?? ''} bind:value {group}><slot /></Radio>

<style>
	:global(input[type='radio']) {
    cursor: pointer;
    --tw-border-opacity: 1;
    border-color: rgb(223 228 235 / var(--tw-border-opacity))
}
	:global(input[type='radio']:focus) {
    --tw-border-opacity: 1;
    border-color: rgb(255 124 21 / var(--tw-border-opacity))
}
	:global(input[type='radio']:focus):is(.dark *) {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(109 51 6 / var(--tw-ring-opacity))
}
	:global(input[type='radio']:focus) {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(255 226 205 / var(--tw-ring-opacity));
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
}
	:global(input[type='radio']:disabled) {
    cursor: not-allowed
}
</style>
