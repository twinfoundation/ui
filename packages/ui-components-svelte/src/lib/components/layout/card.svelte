<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Card } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
	}

	let props: Props = $props();
</script>

<Card
	{...props}
	class={`bg-surface-main border-surface-primary dark:bg-surface-main-dark dark:border-surface-primary-dark ${props.class ?? ''}`}
	shadow={false}
>
	{@render props.children?.()}
</Card>
