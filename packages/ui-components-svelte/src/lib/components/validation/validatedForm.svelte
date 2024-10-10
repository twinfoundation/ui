<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Is, Validation, type IValidationFailure } from '@twin.org/core';
	import { Button, Card, Heading, P, Spinner, i18n } from '$lib';

	export let titleResource: string;
	export let actionButtonResource: string = 'actions.save';
	export let actionSuccessResource: string = 'actions.saveSuccess';
	export let closeButtonResource: string = 'actions.close';
	export let validationMethod:
		| ((validationFailures: IValidationFailure[]) => Promise<void>)
		| undefined;
	export let actionMethod: (() => Promise<string | undefined>) | undefined = undefined;
	export let closeMethod: (() => Promise<void>) | undefined = undefined;
	export let validationErrors: { [id: string]: IValidationFailure[] | undefined };
	export let isBusy: boolean = false;

	let submitResult: string | undefined = '';
	let submitResultIsError: boolean = false;
	let submitResultTimeout: number | undefined;

	async function handleSubmit(): Promise<void> {
		submitResult = '';
		submitResultIsError = false;
		clearTimeout(submitResultTimeout);

		if (Is.function(validationMethod)) {
			const validationFailures: IValidationFailure[] = [];
			const newErrors: { [id: string]: IValidationFailure[] } = {};
			await validationMethod(validationFailures);
			Validation.toPropertyMap(validationFailures, newErrors);
			validationErrors = newErrors;
		}

		if (Object.keys(validationErrors).length === 0 && Is.function(actionMethod)) {
			isBusy = true;
			const timeStart = Date.now();
			submitResult = (await actionMethod()) ?? '';
			submitResultIsError = Is.stringValue(submitResult);

			// If the operation is fast, show the spinner for at least 1 second
			if (Date.now() - timeStart > 1000) {
				await showResult();
			} else {
				setTimeout(showResult, 1000);
			}
		}
	}

	async function showResult(): Promise<void> {
		isBusy = false;
		if (!submitResultIsError && Is.stringValue(actionSuccessResource)) {
			submitResult = $i18n(actionSuccessResource);
		}
		submitResultTimeout = setTimeout(() => {
			submitResult = '';
		}, 5000);
	}
</script>

<Card class="w-96">
	<form class="flex flex-col gap-4">
		<div class="flex flex-row justify-between gap-5">
			<Heading tag="h5">{$i18n(titleResource)}</Heading>
			{#if isBusy}
				<Spinner />
			{/if}
		</div>
		<slot name="fields"></slot>
		<div class="flex flex-row gap-2">
			{#if !Is.empty(closeMethod)}
				<Button type="button" class="w-full" on:click={async () => closeMethod()} disabled={isBusy}
					>{$i18n(closeButtonResource)}
				</Button>
			{/if}
			<Button type="button" class="w-full" on:click={async () => handleSubmit()} disabled={isBusy}
				>{$i18n(actionButtonResource)}
			</Button>
		</div>
		<slot name="after-action"></slot>
		<P
			class={`whitespace-pre-line text-sm ${submitResultIsError ? 'text-red-500 dark:text-red-400' : 'text-green-500 dark:text-green-400'}`}
		>
			{submitResult}
		</P>
		<slot name="after-result"></slot>
	</form>
</Card>
