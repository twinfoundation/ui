<script lang="ts">
	import { Table } from 'flowbite-svelte';

	export let limitWidth: boolean = true;
</script>

{#if limitWidth}
	<div class="w-full min-w-96 overflow-x-auto rounded-md border">
		<Table {...$$props} class={`${$$props.class ?? ''}`}>
			<slot></slot>
		</Table>
	</div>
{:else}
	<Table {...$$props} class={`${$$props.class ?? ''}`}>
		<slot></slot>
	</Table>
{/if}
