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

<section class={`flex flex-1 flex-col justify-between gap-5 py-2 ${rest.class ?? ''}`}>
	{@render children?.()}
</section>
