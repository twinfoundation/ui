<script lang="ts">
	import { Modal } from 'flowbite-svelte';
	import { Button, i18n, P } from '$lib';

	export let title: string;
	export let message: string;
	export let yesDanger: boolean = true;
	export let yesAction: () => Promise<void>;
	export let noAction: () => Promise<void>;
</script>

<Modal {title} {...$$props} classFooter="justify-end" dismissable={false}>
	<P>{message}</P>
	<svelte:fragment slot="footer">
		<Button color={yesDanger ? 'red' : 'primary'} on:click={async () => yesAction()}
			>{$i18n('actions.yes')}</Button
		>
		<Button outline on:click={async () => noAction()}>{$i18n('actions.no')}</Button>
	</svelte:fragment>
</Modal>
