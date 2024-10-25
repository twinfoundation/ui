<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { SidebarGroup } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}

	let props: Props = $props();
</script>

<SidebarGroup {...props}>
	{@render props.children?.()}
</SidebarGroup>
