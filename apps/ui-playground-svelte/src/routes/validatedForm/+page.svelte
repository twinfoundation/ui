<script lang="ts">
	import { goto } from '$app/navigation';
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Is, type IValidationFailure, Validation } from '@twin.org/core';
	import {
		Heading,
		ValidatedForm,
		i18n,
		Label,
		Input,
		ValidationError
	} from '@twin.org/ui-components-svelte';
	import { onMount } from 'svelte';

	let isBusy = false;
	let validationErrors: {
		[field in 'firstName']?: IValidationFailure[] | undefined;
	} = {};

	let firstName: string;

	async function validate(validationFailures: IValidationFailure[]): Promise<void> {
		Validation.notEmpty(
			'firstName',
			Is.stringValue(firstName) ? firstName : undefined,
			validationFailures,
			$i18n('pages.validatedForm.firstName')
		);
	}

	async function action(): Promise<string | undefined> {
		await new Promise(resolve => setTimeout(resolve, 3000));
		// Do saving of data here, return error as string if there was one
		return undefined;
	}

	async function close(): Promise<void> {
		await goto('/');
		// Do saving of data here, return error as string if there was one
		return undefined;
	}

	onMount(async () => {
		isBusy = true;
		// Do loading of data here
		await new Promise(resolve => setTimeout(resolve, 1500));
		isBusy = false;
	});
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">{$i18n('navigation.validatedForm')}</Heading>

	<ValidatedForm
		titleResource="pages.validatedForm.title"
		validationMethod={validate}
		actionMethod={action}
		closeMethod={close}
		bind:validationErrors
		bind:isBusy
	>
		<svelte:fragment slot="fields">
			<Label>
				{$i18n('pages.validatedForm.firstName')}
				<Input
					type="text"
					name="filename"
					color={Is.arrayValue(validationErrors.firstName) ? 'red' : 'base'}
					bind:value={firstName}
					disabled={isBusy}
				/>
				<ValidationError validationErrors={validationErrors.firstName} />
			</Label>
		</svelte:fragment>
	</ValidatedForm>
</section>
