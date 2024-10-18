<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import {
		Button,
		Heading,
		i18n,
		Modal,
		ModalOk,
		ModalYesNo,
		ModalOkCancel,
		P
	} from '@twin.org/ui-components-svelte';

	let modalFullIsOpen = false;
	let modalOkIsOpen = false;
	let modalOkCancelIsOpen = false;
	let modalYesNoIsOpen = false;
	let modalErrorIsOpen = false;
	let modalErrorIsBusy = false;
	let modalErrorStatusMessage = '';
	let modalErrorStatusIsError = false;
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">{$i18n('navigation.modals')}</Heading>

	<Button on:click={() => (modalFullIsOpen = true)}>{$i18n('actions.open')}</Button>
	<Button on:click={() => (modalOkIsOpen = true)}>{$i18n('actions.ok')}</Button>
	<Button on:click={() => (modalOkCancelIsOpen = true)}
		>{$i18n('actions.ok')} / {$i18n('actions.cancel')}</Button
	>
	<Button on:click={() => (modalYesNoIsOpen = true)}
		>{$i18n('actions.yes')} / {$i18n('actions.no')}</Button
	>
	<Button on:click={() => (modalErrorIsOpen = true)}>{$i18n('pages.modals.busy')}</Button>

	<Modal title={$i18n('pages.modals.title')} open={modalFullIsOpen}>
		<P>{$i18n('pages.modals.message')}</P>
		<svelte:fragment slot="footer">
			<Button on:click={async () => (modalFullIsOpen = false)}>{$i18n('actions.ok')}</Button>
			<Button outline on:click={async () => (modalFullIsOpen = false)}
				>{$i18n('actions.cancel')}</Button
			>
		</svelte:fragment>
	</Modal>

	<ModalOk
		title={$i18n('pages.modals.title')}
		message={$i18n('pages.modals.message')}
		open={modalOkIsOpen}
		okAction={async () => {
			modalOkIsOpen = false;
		}}
	/>
	<ModalOkCancel
		title={$i18n('pages.modals.title')}
		message={$i18n('pages.modals.message')}
		open={modalOkCancelIsOpen}
		okAction={async () => {
			modalOkCancelIsOpen = false;
		}}
		cancelAction={async () => {
			modalOkCancelIsOpen = false;
		}}
	/>

	<ModalYesNo
		title={$i18n('pages.modals.titleConfirmation')}
		open={modalYesNoIsOpen}
		message={$i18n('pages.modals.messageConfirmation')}
		yesAction={async () => {
			modalYesNoIsOpen = false;
		}}
		noAction={async () => {
			modalYesNoIsOpen = false;
		}}
	/>

	<ModalYesNo
		title={$i18n('pages.modals.titleConfirmation')}
		open={modalYesNoIsOpen}
		message={$i18n('pages.modals.messageConfirmation')}
		yesAction={async () => {
			modalYesNoIsOpen = false;
		}}
		noAction={async () => {
			modalYesNoIsOpen = false;
		}}
	/>

	<ModalYesNo
		title={$i18n('pages.modals.titleConfirmation')}
		open={modalErrorIsOpen}
		message={$i18n('pages.modals.messageConfirmation')}
		busy={modalErrorIsBusy}
		statusMessage={modalErrorStatusMessage}
		statusIsError={modalErrorStatusIsError}
		yesColor="red"
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
