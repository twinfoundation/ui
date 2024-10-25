<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Spinner } from 'flowbite-svelte';

	interface Props {
		size?: number;
	}

	let { size = 7, ...rest }: Props = $props();
</script>

<Spinner {size} {...rest} color="custom" customColor="fill-surface-brand-primary-1" />
