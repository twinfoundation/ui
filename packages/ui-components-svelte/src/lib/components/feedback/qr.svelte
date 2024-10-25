<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Converter } from '@twin.org/core';
	import { PngRenderer, QR } from '@twin.org/qr';
	import { onMount } from 'svelte';
	import { Link } from '$lib';

	interface Props {
		qrData: string;
		label: string;
		dimensions: number;
		foreground?: string;
		background?: string;
		class?: string;
	}

	const {
		qrData,
		label,
		dimensions,
		foreground = '#000000',
		background = '#FFFFFF',
		...rest
	}: Props = $props();

	let pngBase64: string | undefined = $state();
	const linkItem: boolean = qrData.startsWith('http');

	onMount(async () => {
		const qr = new QR(0);
		qr.addText(qrData);

		const cellData = qr.generate();

		const pngData = await PngRenderer.render(cellData, { foreground, background });
		pngBase64 = `data:image/png;base64,${Converter.bytesToBase64(pngData)}`;
	});
</script>

<div class={rest.class ?? ''} style="width:{`${dimensions}px`};height:{`${dimensions}px`}">
	{#snippet image()}
		<img
			src={pngBase64}
			alt={label}
			class="rounded-sm"
			style="width:{`${dimensions - 2}px`};height:{`${dimensions - 2}px`};min-width:{`${dimensions - 2}px`};min-height:{`${dimensions - 2}px`}"
		/>
	{/snippet}
	{#if linkItem}
		<Link
			href={qrData}
			target="_blank"
			class="focus:border-primary-500 block border border-transparent"
		>
			{@render image()}
		</Link>
	{:else}
		{@render image()}
	{/if}
</div>
