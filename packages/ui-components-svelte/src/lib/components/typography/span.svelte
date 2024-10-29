<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Span } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children?: Snippet;
	}

	let props: Props = $props();
</script>

<Span
	{...props}
	class={`text-primary dark:text-primary-dark break-all font-normal ${props.class ?? ''}`}
>
	{@render props.children?.()}
</Span>
