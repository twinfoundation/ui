<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { goto } from '$app/navigation';
	import { Is, type IValidationFailure, Validation } from '@twin.org/core';
	import { onMount } from 'svelte';
	import { Checkbox, Heading, Input, Label, ValidatedForm, ValidationError } from '$lib';

	let busy = $state(false);
	let validationErrors: {
		[field in 'firstName']?: IValidationFailure[] | undefined;
	} = $state({});

	let firstName: string = $state('');
	let showErrorResult: boolean = $state(false);

	async function validate(validationFailures: IValidationFailure[]): Promise<void> {
		Validation.notEmpty(
			'firstName',
			Is.stringValue(firstName) ? firstName : undefined,
			validationFailures,
			'First Name'
		);
	}

	async function action(): Promise<string | undefined> {
		for (let i = 0; i < 1000; i++) {
			await new Promise(resolve => setTimeout(resolve, 3));
		}

		if (showErrorResult) {
			return 'There was an error';
		}
		// Do saving of data here, return error as string if there was one
		return undefined;
	}

	async function close(): Promise<void> {
		await goto('/');
		// Do saving of data here, return error as string if there was one
		return undefined;
	}

	onMount(async () => {
		busy = true;
		// Do loading of data here
		await new Promise(resolve => setTimeout(resolve, 1500));
		busy = false;
	});
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">Validated Form</Heading>

	<ValidatedForm
		title="My Form"
		validationMethod={validate}
		actionMethod={action}
		closeMethod={close}
		bind:validationErrors
		bind:busy
	>
		{#snippet fields()}
			<Label>
				First Name
				<Input
					type="text"
					name="filename"
					color={Is.arrayValue(validationErrors.firstName) ? 'error' : 'default'}
					bind:value={firstName}
					disabled={busy}
				/>
				<ValidationError validationErrors={validationErrors.firstName} />
			</Label>
			<Label>
				<Checkbox bind:checked={showErrorResult} disabled={busy}>Show Error Result</Checkbox>
			</Label>
		{/snippet}
	</ValidatedForm>
</section>
