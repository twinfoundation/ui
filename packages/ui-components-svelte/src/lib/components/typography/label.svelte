<script lang="ts">
	import { Label } from 'flowbite-svelte';
</script>

<Label {...$$props} class={`flex flex-col gap-1 text-sm font-medium ${$$props.class ?? ''}`}>
	<slot></slot>
</Label>
