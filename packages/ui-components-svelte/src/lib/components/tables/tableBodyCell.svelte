<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { TableBodyCell } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		wrap?: boolean;
		actions?: boolean;
		class?: string;
		children?: Snippet;
	}

	let { wrap = false, actions = false, children, ...rest }: Props = $props();
</script>

<TableBodyCell
	{...rest}
	class={`${actions ? 'flex flex-row gap-2' : ''} ${wrap ? 'whitespace-normal break-all' : ''} ${rest.class ?? ''}`}
>
	{@render children?.()}
</TableBodyCell>
