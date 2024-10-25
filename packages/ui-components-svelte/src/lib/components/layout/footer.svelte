<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Footer } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
	}

	let props: Props = $props();
</script>

<Footer {...props}>
	{@render props.children?.()}
</Footer>
