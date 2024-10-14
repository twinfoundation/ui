<script lang="ts">
	import { TableBodyCell } from 'flowbite-svelte';

	export let wrap: boolean = false;
	export let actions: boolean = false;
</script>

<TableBodyCell
	{...$$props}
	class={`${actions ? 'flex flex-row gap-2' : ''} ${wrap ? 'whitespace-normal break-all' : ''} ${$$props.class ?? ''}`}
>
	<slot></slot>
</TableBodyCell>
