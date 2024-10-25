<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Heading } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
		class?: string;
		children?: Snippet;
	}

	let { tag, children, ...rest }: Props = $props();
</script>

<Heading {...rest} {tag} class={`text-primary dark:text-primary-dark ${rest.class ?? ''}`}>
	{@render children?.()}
</Heading>
