<script lang="ts">
	import { Navbar } from 'flowbite-svelte';
</script>

<Navbar {...$$props} class={`${$$props.class ?? ''}`}>
	<slot></slot>
</Navbar>
