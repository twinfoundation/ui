<script lang="ts">
	import { i18n, ModalWithButtons } from '$lib';

	export let title: string;
	export let message: string;
	export let statusMessage: string | undefined = undefined;
	export let statusIsError: boolean = false;
	export let isBusy: boolean = false;
	export let okColor: 'red' | 'yellow' | 'green' | 'primary' = 'primary';
	export let okAction: () => Promise<void>;
	export let cancelAction: () => Promise<void>;
</script>

<ModalWithButtons
	{title}
	{message}
	{statusMessage}
	{statusIsError}
	{isBusy}
	{...$$props}
	buttons={[
		{
			label: $i18n('actions.ok'),
			color: okColor,
			outline: false,
			action: okAction
		},
		{
			label: $i18n('actions.cancel'),
			color: 'primary',
			outline: true,
			action: cancelAction
		}
	]}
/>
