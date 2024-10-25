<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Is } from '@twin.org/core';
	import { Helper } from '../..';

	interface Props {
		error?: string;
	}

	let { error }: Props = $props();
</script>

{#if Is.stringValue(error)}
	<Helper color="error" class="whitespace-pre-line break-all">
		{error}
	</Helper>
{/if}
