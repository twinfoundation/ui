<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Is } from '@twin.org/core';
	import { Modal } from 'flowbite-svelte';
	import { Button, Helper, P, Spinner } from '$lib';

	interface Props {
		open: boolean;
		title: string;
		message: string;
		statusMessage?: string;
		statusIsError?: boolean;
		busy?: boolean;
		buttons: {
			label: string;
			color?: 'error' | 'warning' | 'success' | 'info' | 'primary' | 'secondary' | 'plain';
			action: () => Promise<void>;
		}[];
	}

	let {
		open,
		title,
		message,
		statusMessage,
		statusIsError = false,
		busy = false,
		buttons,
		...rest
	}: Props = $props();
</script>

<Modal
	{open}
	{title}
	{...rest}
	classHeader="text-primary dark:text-primary-dark bg-transparent dark:bg-transparent"
	classBody="text-primary dark:text-primary-dark bg-transparent dark:bg-transparent"
	classFooter={'text-primary dark:text-primary-dark bg-transparent dark:bg-transparent justify-between'}
	class="bg-surface-main border-surface-primary dark:bg-surface-main-dark dark:border-surface-primary-dark text-primary min-w-96"
	dismissable={false}
>
	<P>{message}</P>
	{#if Is.stringValue(statusMessage)}
		<Helper
			color={statusIsError ? 'error' : 'success'}
			class="whitespace-pre-line break-all text-sm">{statusMessage}</Helper
		>
	{/if}
	<svelte:fragment slot="footer">
		<div class="flex flex-row gap-2">
			{#each buttons as button}
				<Button
					color={button.color ?? 'plain'}
					on:click={async () => button.action()}
					disabled={busy}
				>
					{button.label}
				</Button>
			{/each}
		</div>
		{#if busy}
			<Spinner />
		{/if}
	</svelte:fragment>
</Modal>
