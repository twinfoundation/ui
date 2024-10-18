<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { goto } from '$app/navigation';
	import { Is, type IValidationFailure, Validation } from '@twin.org/core';
	import {
		Checkbox,
		Heading,
		ValidatedForm,
		i18n,
		Label,
		Input,
		ValidationError
	} from '@twin.org/ui-components-svelte';
	import { onMount } from 'svelte';

	let busy = false;
	let validationErrors: {
		[field in 'firstName']?: IValidationFailure[] | undefined;
	} = {};

	let firstName: string;
	let showErrorResult: boolean = false;

	async function validate(validationFailures: IValidationFailure[]): Promise<void> {
		Validation.notEmpty(
			'firstName',
			Is.stringValue(firstName) ? firstName : undefined,
			validationFailures,
			$i18n('pages.validatedForm.firstName')
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
	<Heading tag="h3">{$i18n('navigation.validatedForm')}</Heading>

	<ValidatedForm
		title={$i18n('pages.validatedForm.title')}
		validationMethod={validate}
		actionMethod={action}
		closeMethod={close}
		bind:validationErrors
		bind:busy
	>
		<svelte:fragment slot="fields">
			<Label>
				{$i18n('pages.validatedForm.firstName')}
				<Input
					type="text"
					name="filename"
					color={Is.arrayValue(validationErrors.firstName) ? 'red' : 'base'}
					bind:value={firstName}
					disabled={busy}
				/>
				<ValidationError validationErrors={validationErrors.firstName} />
			</Label>
			<Label>
				<Checkbox bind:checked={showErrorResult} disabled={busy}
					>{$i18n('pages.validatedForm.showErrorResult')}</Checkbox
				>
			</Label>
		</svelte:fragment>
	</ValidatedForm>
</section>
