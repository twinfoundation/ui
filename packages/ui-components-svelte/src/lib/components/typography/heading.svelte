<script lang="ts">
	import { Heading } from 'flowbite-svelte';
</script>

<Heading {...$$props} class={`${$$props.class ?? ''}`}>
	<slot></slot>
</Heading>
