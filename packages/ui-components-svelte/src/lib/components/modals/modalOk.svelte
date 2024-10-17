<script lang="ts">
	import { i18n, ModalWithButtons } from '$lib';

	export let title: string;
	export let message: string;
	export let okColor: 'red' | 'yellow' | 'green' | 'primary' = 'primary';
	export let okAction: () => Promise<void>;
</script>

<ModalWithButtons
	{title}
	{message}
	{...$$props}
	buttons={[
		{
			label: $i18n('actions.ok'),
			color: okColor,
			outline: false,
			action: okAction
		}
	]}
/>
