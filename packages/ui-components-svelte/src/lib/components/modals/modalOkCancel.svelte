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
		okColor?: 'error' | 'warning' | 'success' | 'info' | 'primary' | 'secondary' | 'plain';
		okAction: () => Promise<void>;
		cancelAction: () => Promise<void>;
	}

	let {
		open,
		title,
		message,
		statusMessage,
		statusIsError = false,
		busy = false,
		okColor = 'secondary',
		okAction,
		cancelAction,
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
			label: $i18n('actions.ok'),
			color: okColor,
			action: okAction
		},
		{
			label: $i18n('actions.cancel'),
			color: 'plain',
			action: cancelAction
		}
	]}
/>
