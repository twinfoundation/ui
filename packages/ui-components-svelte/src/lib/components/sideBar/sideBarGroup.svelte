<script lang="ts">
	import { SidebarGroup } from 'flowbite-svelte';
</script>

<SidebarGroup {...$$props} class={`${$$props.class ?? ''}`}>
	<slot></slot>
</SidebarGroup>
