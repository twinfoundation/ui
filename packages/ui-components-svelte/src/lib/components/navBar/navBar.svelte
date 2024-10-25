<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Navbar } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		fluid?: boolean;
		class?: string;
		children?: Snippet;
	}

	let props: Props = $props();
</script>

<Navbar {...props}>
	{@render props.children?.()}
</Navbar>
