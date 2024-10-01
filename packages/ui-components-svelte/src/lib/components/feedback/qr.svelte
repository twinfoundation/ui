<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Converter } from '@twin.org/core';
	import { PngRenderer, QR } from '@twin.org/qr';
	import { onMount } from 'svelte';
	import { Link, i18n } from '$lib';

	export let qrData: string;
	export let labelResource: string;
	export let dimensions: number;
	export let foreground: string = '#000000';
	export let background: string = '#FFFFFF';

	let pngBase64: string;
	const linkItem: boolean = qrData.startsWith('http');

	onMount(async () => {
		const qr = new QR(0);
		qr.addText(qrData);

		const cellData = qr.generate();

		const pngData = await PngRenderer.render(cellData, { foreground, background });
		pngBase64 = `data:image/png;base64,${Converter.bytesToBase64(pngData)}`;
	});
</script>

<div class={$$restProps.class ?? ''} style="width:{`${dimensions}px`};height:{`${dimensions}px`}">
	{#if linkItem}
		<Link
			href={qrData}
			target="_blank"
			class="focus:border-primary-500 block border border-transparent"
		>
			<img
				src={pngBase64}
				alt={$i18n(labelResource)}
				class="rounded-sm"
				style="width:{`${dimensions - 2}px`};height:{`${dimensions - 2}px`};min-width:{`${dimensions - 2}px`};min-height:{`${dimensions - 2}px`}"
			/>
		</Link>
	{:else}
		<img
			src={pngBase64}
			alt={$i18n(labelResource)}
			class="rounded-sm"
			style="width:{`${dimensions - 2}px`};height:{`${dimensions - 2}px`};min-width:{`${dimensions - 2}px`};min-height:{`${dimensions - 2}px`}"
		/>
	{/if}
</div>
