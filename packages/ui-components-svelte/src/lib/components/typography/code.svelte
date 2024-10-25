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

<div
	class="text-primary dark:text-primary-dark border-surface-primary dark:border-surface-primary-dark mt-2 w-full rounded-md border"
>
	<pre class={`w-full overflow-auto p-2 text-xs ${rest.class ?? ''}`}>{@render children?.()}</pre>
</div>
