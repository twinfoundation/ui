<script lang="ts">
	import { TableBodyRow } from 'flowbite-svelte';
</script>

<TableBodyRow {...$$props} class={`${$$props.class ?? ''}`}>
	<slot></slot>
</TableBodyRow>
