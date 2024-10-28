<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Is, Validation, type IValidationFailure } from '@twin.org/core';
	import type { Snippet } from 'svelte';
	import { Button, Card, Heading, Helper, Spinner, i18n } from '$lib';

	interface Props {
		title: string;
		actionButtonLabel?: string;
		actionSuccessLabel?: string;
		closeButtonLabel?: string;
		validationMethod?: (validationFailures: IValidationFailure[]) => Promise<void>;
		actionMethod?: () => Promise<string | undefined>;
		closeMethod?: (() => Promise<void>) | undefined;
		validationErrors: { [id: string]: IValidationFailure[] | undefined };
		busy?: boolean;
		result?: string;
		resultIsError?: boolean;
		resultTimeout?: number;
		fields?: Snippet;
		afterAction?: Snippet;
	}

	let {
		title,
		actionButtonLabel = $i18n('actions.save'),
		actionSuccessLabel = $i18n('actions.saveSuccess'),
		closeButtonLabel = $i18n('actions.close'),
		validationMethod,
		actionMethod,
		closeMethod,
		validationErrors = $bindable(),
		busy = $bindable(false),
		result = $bindable(''),
		resultIsError = $bindable(false),
		resultTimeout = $bindable(5000),
		fields,
		afterAction
	}: Props = $props();

	let timerId: NodeJS.Timeout | undefined;

	function resetState(): void {
		if (Is.notEmpty(timerId)) {
			clearTimeout(timerId);
		}
		timerId = undefined;
		result = '';
		resultIsError = false;
		validationErrors = {};
		busy = false;
	}

	async function handleSubmit(): Promise<void> {
		resetState();

		if (Is.function(validationMethod)) {
			const validationFailures: IValidationFailure[] = [];
			const newErrors: { [id: string]: IValidationFailure[] } = {};
			await validationMethod(validationFailures);
			Validation.toPropertyMap(validationFailures, newErrors);
			validationErrors = newErrors;
		}

		if (Object.keys(validationErrors).length === 0 && Is.function(actionMethod)) {
			busy = true;
			const actionResult = await actionMethod();
			busy = false;

			if (Is.stringValue(actionResult)) {
				result = actionResult;
				resultIsError = true;
			} else if (Is.stringValue(actionSuccessLabel)) {
				result = actionSuccessLabel;
			}
			if (resultTimeout > 0) {
				timerId = setTimeout(resetState, resultTimeout);
			}
		}
	}

	async function handleClose(): Promise<void> {
		resetState();

		if (Is.function(closeMethod)) {
			busy = true;
			await closeMethod();
			busy = false;
		}
	}
</script>

<Card class="w-96">
	<form class="flex flex-col gap-4">
		<div class="flex flex-row justify-between gap-5">
			<Heading tag="h5">{title}</Heading>
			{#if busy}
				<Spinner />
			{/if}
		</div>
		{@render fields?.()}
		{#if Is.stringValue(result)}
			<Helper
				color={resultIsError ? 'error' : 'success'}
				class="whitespace-pre-line break-all text-sm">{result}</Helper
			>
		{/if}
		<div class="flex flex-row gap-2">
			{#if Is.function(closeMethod)}
				<Button
					type="button"
					class="w-full"
					color="plain"
					on:click={async () => handleClose()}
					disabled={busy}
					>{closeButtonLabel}
				</Button>
			{/if}
			{#if Is.function(actionMethod)}
				<Button type="button" class="w-full" on:click={async () => handleSubmit()} disabled={busy}
					>{actionButtonLabel}
				</Button>
			{/if}
		</div>
		{@render afterAction?.()}
	</form>
</Card>
