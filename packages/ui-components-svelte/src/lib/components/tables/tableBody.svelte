<script lang="ts">
	import { TableBody } from 'flowbite-svelte';
</script>

<TableBody {...$$props} class={`${$$props.class ?? ''}`}>
	<slot></slot>
</TableBody>
