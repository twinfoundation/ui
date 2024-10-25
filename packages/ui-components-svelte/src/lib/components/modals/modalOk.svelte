<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { i18n, ModalWithButtons } from '$lib';

	interface Props {
		open: boolean;
		title: string;
		message: string;
		okColor?: 'error' | 'warning' | 'success' | 'info' | 'primary' | 'secondary' | 'plain';
		okAction: () => Promise<void>;
	}

	let { open, title, message, okColor = 'secondary', okAction, ...rest }: Props = $props();
</script>

<ModalWithButtons
	{open}
	{title}
	{message}
	{...rest}
	buttons={[
		{
			label: $i18n('actions.ok'),
			color: okColor,
			action: okAction
		}
	]}
/>
