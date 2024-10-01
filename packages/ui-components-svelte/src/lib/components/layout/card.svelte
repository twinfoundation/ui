<script lang="ts">
	import { Card } from 'flowbite-svelte';
</script>

<Card
	{...$$props}
	class={`dark:bg-cosmic-indigo dark:border-neutral-900 ${$$props.class ?? ''}`}
	shadow={false}
>
	<slot></slot>
</Card>
