<script lang="ts">
	import { Is } from '@twin.org/core';
	import { Modal } from 'flowbite-svelte';
	import { Button, P, Spinner } from '$lib';

	export let title: string;
	export let message: string;
	export let statusMessage: string | undefined = undefined;
	export let statusIsError: boolean = false;
	export let busy: boolean = false;
	export let buttons: {
		label: string;
		color?: 'red' | 'yellow' | 'green' | 'primary';
		outline?: boolean;
		action: () => Promise<void>;
	}[];
</script>

<Modal
	{title}
	{...$$props}
	classFooter={busy ? 'justify-between' : 'justify-end'}
	dismissable={false}
>
	<P>{message}</P>
	{#if Is.stringValue(statusMessage)}
		<P
			class={`whitespace-pre-line break-all text-sm ${statusIsError ? 'text-red-500 dark:text-red-400' : 'text-green-500 dark:text-green-400'}`}
		>
			{statusMessage}
		</P>
	{/if}
	<svelte:fragment slot="footer">
		{#if busy}
			<Spinner />
		{/if}
		<div class="flex flex-row gap-2">
			{#each buttons as button}
				<Button
					color={button.color ?? 'primary'}
					outline={button.outline ?? true}
					on:click={async () => button.action()}
					disabled={busy}
				>
					{button.label}
				</Button>
			{/each}
		</div>
	</svelte:fragment>
</Modal>
