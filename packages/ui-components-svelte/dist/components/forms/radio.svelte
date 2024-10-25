<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Radio } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		checked: boolean;
		value?: string | number;
		group?: string | number;
		disabled?: boolean;
		class?: string;
		children?: Snippet;
	}

	let { checked = $bindable(), value, disabled, group, children, ...rest }: Props = $props();
</script>

<Radio {...rest} bind:checked {disabled} {value} {group}>
	{@render children?.()}
</Radio>
