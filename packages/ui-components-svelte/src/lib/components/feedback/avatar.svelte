<script lang="ts">
	import { Avatar } from 'flowbite-svelte';
</script>

<Avatar
	border
	{...$$props}
	class={`${$$props.class ?? ''} ring-primary-600 dark:ring-primary-600 ring-1`}
>
	<slot></slot>
</Avatar>
