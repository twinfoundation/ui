<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Avatar } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
	}

	let props: Props = $props();
</script>

<Avatar
	border
	{...props}
	class={`${props.class ?? ''} ring-primary-600 dark:ring-primary-600 ring-1`}
>
	{@render props.children?.()}
</Avatar>
