<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { TableBodyRow } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}

	let props: Props = $props();
</script>

<TableBodyRow
	{...props}
	class="bg-surface-main border-surface-primary dark:bg-surface-main-dark dark:border-surface-primary-dark"
>
	{@render props.children?.()}
</TableBodyRow>
