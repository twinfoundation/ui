<script lang="ts">
	import { i18n, ModalWithButtons } from '$lib';

	export let title: string;
	export let message: string;
	export let statusMessage: string | undefined = undefined;
	export let statusIsError: boolean = false;
	export let busy: boolean = false;
	export let yesColor: 'red' | 'yellow' | 'green' | 'primary' = 'primary';
	export let yesAction: () => Promise<void>;
	export let noAction: () => Promise<void>;
</script>

<ModalWithButtons
	{title}
	{message}
	{statusMessage}
	{statusIsError}
	{busy}
	{...$$props}
	buttons={[
		{
			label: $i18n('actions.yes'),
			color: yesColor,
			outline: false,
			action: yesAction
		},
		{
			label: $i18n('actions.no'),
			color: 'primary',
			outline: true,
			action: noAction
		}
	]}
/>
