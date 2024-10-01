<script>import { Badge } from "flowbite-svelte";
</script>

<Badge {...$$props} class={`${$$props.class ?? ''}`}>
	<slot></slot>
</Badge>
