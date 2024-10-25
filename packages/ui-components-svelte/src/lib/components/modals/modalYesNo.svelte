<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { i18n, ModalWithButtons } from '$lib';

	interface Props {
		open: boolean;
		title: string;
		message: string;
		statusMessage?: string;
		statusIsError?: boolean;
		busy?: boolean;
		yesColor?: 'error' | 'warning' | 'success' | 'info' | 'primary' | 'secondary' | 'plain';
		yesAction: () => Promise<void>;
		noAction: () => Promise<void>;
	}

	let {
		open,
		title,
		message,
		statusMessage,
		statusIsError = false,
		busy = false,
		yesColor = 'secondary',
		yesAction,
		noAction,
		...rest
	}: Props = $props();
</script>

<ModalWithButtons
	{open}
	{title}
	{message}
	{statusMessage}
	{statusIsError}
	{busy}
	{...rest}
	buttons={[
		{
			label: $i18n('actions.yes'),
			color: yesColor,
			action: yesAction
		},
		{
			label: $i18n('actions.no'),
			color: 'plain',
			action: noAction
		}
	]}
/>
