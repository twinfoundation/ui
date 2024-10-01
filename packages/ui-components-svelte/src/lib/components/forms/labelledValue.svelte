<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Span } from '$lib';
</script>

<Span
	class={`whitespace-pre-wrap break-all font-light text-neutral-900 dark:text-white ${$$restProps.class ?? ''}`}
	><slot></slot></Span
>
