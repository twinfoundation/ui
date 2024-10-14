<script lang="ts">
	import { TableHeadCell } from 'flowbite-svelte';
</script>

<TableHeadCell {...$$props} class={`${$$props.class ?? ''}`}>
	<slot></slot>
</TableHeadCell>
