<script>import { Span } from "flowbite-svelte";
</script>

<Span {...$$props} class={`${$$props.class ?? ''}`}>
	<slot></slot>
</Span>
