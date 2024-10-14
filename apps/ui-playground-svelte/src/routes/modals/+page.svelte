<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Button, Heading, i18n, Modal, ModalYesNo, P } from '@twin.org/ui-components-svelte';

	let modal1IsOpen = false;
	let modal2IsOpen = false;
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">{$i18n('navigation.modals')}</Heading>

	<Button on:click={() => (modal1IsOpen = true)}>{$i18n('actions.open')}</Button>
	<Button on:click={() => (modal2IsOpen = true)}
		>{$i18n('actions.yes')} / {$i18n('actions.no')}</Button
	>

	<Modal title={$i18n('pages.modals.title')} open={modal1IsOpen}>
		<P>{$i18n('pages.modals.message')}</P>
		<svelte:fragment slot="footer">
			<Button on:click={async () => (modal1IsOpen = false)}>{$i18n('actions.ok')}</Button>
			<Button outline on:click={async () => (modal1IsOpen = false)}
				>{$i18n('actions.cancel')}</Button
			>
		</svelte:fragment>
	</Modal>

	<ModalYesNo
		title={$i18n('pages.modals.titleConfirmation')}
		open={modal2IsOpen}
		message={$i18n('pages.modals.messageConfirmation')}
		yesAction={async () => {
			modal2IsOpen = false;
		}}
		noAction={async () => {
			modal2IsOpen = false;
		}}
	/>
</section>
