<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children?: Snippet;
	}

	let { children, ...rest }: Props = $props();
</script>

<footer class={`flex flex-row justify-between gap-5 ${rest.class ?? ''}`}>
	{@render children?.()}
</footer>
