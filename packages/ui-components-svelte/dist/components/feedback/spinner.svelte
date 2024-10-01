<script>import { Spinner } from "flowbite-svelte";
export let size = 7;
</script>

<Spinner {size} {...$$props} class={`${$$props.class ?? ''}`} color="primary" />
