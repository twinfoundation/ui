<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Label } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children?: Snippet;
	}

	let props: Props = $props();
</script>

<Label
	{...props}
	class={`text-primary dark:text-primary-dark flex flex-col gap-1 text-sm font-medium ${props.class ?? ''}`}
>
	{@render props.children?.()}
</Label>
