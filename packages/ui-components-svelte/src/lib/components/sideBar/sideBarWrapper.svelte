<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { SidebarWrapper } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children?: Snippet;
	}

	let props: Props = $props();
</script>

<SidebarWrapper {...props}>
	{@render props.children?.()}
</SidebarWrapper>
