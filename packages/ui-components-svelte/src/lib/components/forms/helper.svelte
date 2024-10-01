<script lang="ts">
	import { Helper } from 'flowbite-svelte';
</script>

<Helper {...$$props} class={`font-light text-neutral-900 ${$$props.class ?? ''}`}>
	<slot></slot>
</Helper>
