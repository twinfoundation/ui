<script lang="ts">
	import { Footer } from 'flowbite-svelte';
</script>

<Footer {...$$props} class={`${$$props.class ?? ''}`}>
	<slot></slot>
</Footer>
