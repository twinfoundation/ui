<script lang="ts">
	import { P } from 'flowbite-svelte';
</script>

<P {...$$props} class={`${$$props.class ?? ''}`}>
	<slot></slot>
</P>
