<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Button, Heading, i18n, Modal, ModalOk, ModalYesNo, ModalOkCancel, P } from '$lib';

	let modalFullIsOpen = $state(false);
	let modalOkIsOpen = $state(false);
	let modalOkCancelIsOpen = $state(false);
	let modalYesNoIsOpen = $state(false);
	let modalErrorIsOpen = $state(false);
	let modalErrorIsBusy = $state(false);
	let modalErrorStatusMessage = $state('');
	let modalErrorStatusIsError = $state(false);
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">Modals</Heading>

	<Button on:click={() => (modalFullIsOpen = true)}>{$i18n('actions.open')}</Button>
	<Button on:click={() => (modalOkIsOpen = true)}>{$i18n('actions.ok')}</Button>
	<Button on:click={() => (modalOkCancelIsOpen = true)}
		>{$i18n('actions.ok')} / {$i18n('actions.cancel')}</Button
	>
	<Button on:click={() => (modalYesNoIsOpen = true)}
		>{$i18n('actions.yes')} / {$i18n('actions.no')}</Button
	>
	<Button on:click={() => (modalErrorIsOpen = true)}>Busy Modal</Button>

	<Modal title="My Modal" open={modalFullIsOpen}>
		<P>This is the content of the modal</P>
		{#snippet footer()}
			<Button color="secondary" on:click={async () => (modalFullIsOpen = false)}
				>{$i18n('actions.ok')}</Button
			>
			<Button color="plain" on:click={async () => (modalFullIsOpen = false)}
				>{$i18n('actions.cancel')}</Button
			>
		{/snippet}
	</Modal>

	<ModalOk
		title="My Modal"
		message="This is the content of the modal"
		open={modalOkIsOpen}
		okAction={async () => {
			modalOkIsOpen = false;
		}}
	/>
	<ModalOkCancel
		title="My Modal"
		message="This is the content of the modal"
		open={modalOkCancelIsOpen}
		okAction={async () => {
			modalOkCancelIsOpen = false;
		}}
		cancelAction={async () => {
			modalOkCancelIsOpen = false;
		}}
	/>

	<ModalYesNo
		title="Question"
		open={modalYesNoIsOpen}
		message="Are you sure you want to delete everything?"
		yesAction={async () => {
			modalYesNoIsOpen = false;
		}}
		noAction={async () => {
			modalYesNoIsOpen = false;
		}}
	/>

	<ModalYesNo
		title="Question"
		open={modalYesNoIsOpen}
		message="Are you sure you want to delete everything?"
		yesAction={async () => {
			modalYesNoIsOpen = false;
		}}
		noAction={async () => {
			modalYesNoIsOpen = false;
		}}
	/>

	<ModalYesNo
		title="Question"
		open={modalErrorIsOpen}
		message="Are you sure you want to delete everything?"
		busy={modalErrorIsBusy}
		statusMessage={modalErrorStatusMessage}
		statusIsError={modalErrorStatusIsError}
		yesColor="error"
		yesAction={async () => {
			modalErrorIsBusy = true;
			modalErrorStatusMessage = '';
			setTimeout(() => {
				modalErrorStatusMessage = 'Error message';
				modalErrorStatusIsError = true;
				modalErrorIsBusy = false;
			}, 2000);
		}}
		noAction={async () => {
			modalErrorStatusMessage = '';
			modalErrorStatusIsError = false;
			modalErrorIsOpen = false;
		}}
	/>
</section>
