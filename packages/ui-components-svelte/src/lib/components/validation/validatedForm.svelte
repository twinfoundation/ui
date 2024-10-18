<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Is, Validation, type IValidationFailure } from '@twin.org/core';
	import { Button, Card, Heading, P, Spinner, i18n } from '$lib';

	export let title: string;
	export let actionButtonLabel: string = $i18n('actions.save');
	export let actionSuccessLabel: string = $i18n('actions.saveSuccess');
	export let closeButtonLabel: string = $i18n('actions.close');
	export let validationMethod:
		| ((validationFailures: IValidationFailure[]) => Promise<void>)
		| undefined;
	export let actionMethod: (() => Promise<string | undefined>) | undefined = undefined;
	export let closeMethod: (() => Promise<void>) | undefined = undefined;
	export let validationErrors: { [id: string]: IValidationFailure[] | undefined };
	export let busy: boolean = false;
	export let result: string = '';
	export let resultIsError: boolean = false;
	export let resultTimeout: number = 5000;

	let submitResultTimeout: number | undefined;

	async function handleSubmit(): Promise<void> {
		result = '';
		resultIsError = false;
		clearTimeout(submitResultTimeout);
		validationErrors = {};

		if (Is.function(validationMethod)) {
			const validationFailures: IValidationFailure[] = [];
			const newErrors: { [id: string]: IValidationFailure[] } = {};
			await validationMethod(validationFailures);
			Validation.toPropertyMap(validationFailures, newErrors);
			validationErrors = newErrors;
		}

		if (Object.keys(validationErrors).length === 0 && Is.function(actionMethod)) {
			busy = true;
			const timeStart = Date.now();
			result = (await actionMethod()) ?? '';
			resultIsError = Is.stringValue(result);

			// If the operation is fast, show the spinner for at least 1 second
			if (Date.now() - timeStart > 1000) {
				await showResult();
			} else {
				setTimeout(showResult, 1000);
			}
		}
	}

	async function handleClose(): Promise<void> {
		result = '';
		resultIsError = false;
		clearTimeout(submitResultTimeout);
		validationErrors = {};

		if (Is.function(closeMethod)) {
			busy = true;
			await closeMethod();
			busy = false;
		}
	}

	async function showResult(): Promise<void> {
		busy = false;
		if (!resultIsError && Is.stringValue(actionSuccessLabel)) {
			result = actionSuccessLabel;
		}
		if (resultTimeout > 0) {
			submitResultTimeout = setTimeout(() => {
				result = '';
			}, resultTimeout);
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
		<slot name="fields"></slot>
		<div class="flex flex-row gap-2">
			{#if Is.function(closeMethod)}
				<Button
					type="button"
					class="w-full"
					outline
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
		<slot name="after-action"></slot>
		<P
			class={`whitespace-pre-line text-sm ${resultIsError ? 'text-red-500 dark:text-red-400' : 'text-green-500 dark:text-green-400'}`}
		>
			{result}
		</P>
		<slot name="after-result"></slot>
	</form>
</Card>
