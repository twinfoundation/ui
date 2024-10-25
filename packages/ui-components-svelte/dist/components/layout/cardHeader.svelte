<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Heading, Spinner } from '../..';

	interface Props {
		title: string;
		busy?: boolean;
	}

	const { title, busy = false }: Props = $props();
</script>

<header class="flex flex-row justify-between gap-5">
	<Heading tag="h5">{title}</Heading>
	{#if busy}
		<Spinner />
	{/if}
</header>
