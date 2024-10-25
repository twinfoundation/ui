<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Is, type IValidationFailure } from '@twin.org/core';
	import { Helper, i18n } from '$lib';

	interface Props {
		validationErrors: IValidationFailure[] | undefined;
	}

	let { validationErrors }: Props = $props();
</script>

{#if Is.arrayValue(validationErrors)}
	<Helper class="mt-2" color="error">
		{#each validationErrors as validationError}
			{$i18n(`error.${validationError.reason}`, validationError.properties)}
		{/each}
	</Helper>
{/if}
