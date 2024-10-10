<script>import { Helper } from "flowbite-svelte";
</script>

<Helper {...$$props} class={`font-light ${$$props.class ?? ''}`}>
	<slot></slot>
</Helper>
