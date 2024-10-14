<script lang="ts">
	import { TableHead } from 'flowbite-svelte';
</script>

<TableHead {...$$props} class={`${$$props.class ?? ''}`}>
	<slot></slot>
</TableHead>
