<script lang="ts">
	import { Spinner } from 'flowbite-svelte';

	export let size: number = 7;
</script>

<Spinner {size} {...$$props} class={`${$$props.class ?? ''}`} color="primary" />
