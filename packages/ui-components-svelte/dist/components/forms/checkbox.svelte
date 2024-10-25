<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Checkbox } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		checked: boolean;
		value?: string | number;
		disabled?: boolean;
		children?: Snippet;
	}

	let { checked = $bindable(), value, disabled = false, children, ...rest }: Props = $props();
</script>

<Checkbox {...rest} bind:checked {value} {disabled}>
	<span class={disabled ? 'opacity-50' : ''}>
		{@render children?.()}
	</span>
</Checkbox>
