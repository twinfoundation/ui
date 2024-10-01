<script lang="ts">
	import { Sidebar } from 'flowbite-svelte';
</script>

<Sidebar {...$$props} class={`${$$props.class ?? ''}`}>
	<slot></slot>
</Sidebar>
