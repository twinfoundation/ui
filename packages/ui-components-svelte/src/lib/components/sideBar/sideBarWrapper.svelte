<script lang="ts">
	import { SidebarWrapper } from 'flowbite-svelte';
</script>

<SidebarWrapper {...$$props} class={`${$$props.class ?? ''}`}>
	<slot></slot>
</SidebarWrapper>
