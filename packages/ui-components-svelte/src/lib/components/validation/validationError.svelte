<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Is, type IValidationFailure } from '@twin.org/core';
	import { Helper, i18n } from '$lib';

	export let validationErrors: IValidationFailure[] | undefined;
</script>

{#if Is.arrayValue(validationErrors)}
	<Helper class="mt-2" color="red">
		{#each validationErrors as validationError}
			{$i18n(`error.${validationError.reason}`, validationError.properties)}
		{/each}
	</Helper>
{/if}
