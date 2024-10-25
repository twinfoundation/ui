<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Sidebar } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		activeUrl?: string;
		class?: string;
		asideClass?: string;
		children?: Snippet;
	}

	let props: Props = $props();
</script>

<Sidebar {...props}>
	{@render props.children?.()}
</Sidebar>
