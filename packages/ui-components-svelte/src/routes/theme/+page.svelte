<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Coerce, Is, StringHelper } from '@twin.org/core';
	import { Button, Clipboard, Icons, Heading, P, Span, TailwindConfig } from '$lib';

	const { colors } = TailwindConfig.getTheme() as {
		colors: { [id: string]: { [id: string]: { [id: string]: unknown | string } } };
	};

	const colorCollectionKeys = Object.keys(colors);

	function mapKeyName(colorCollectionKey: string, key: string): string {
		if (Coerce.number(key)) {
			return `${colorCollectionKey}-${key}`;
		}
		let finalKey = key === 'DEFAULT' ? 'light' : key;

		if (finalKey === 'light' || finalKey === 'dark') {
			finalKey = `${colorCollectionKey}-${finalKey}`;
		}

		return finalKey;
	}

	function mapUseName(keyName: string): string {
		let finalName = keyName;

		if (keyName.includes('-hover')) {
			finalName = `hover:enabled:${finalName}`;
		}
		if (keyName.includes('-pressed')) {
			finalName = `active:${finalName}`;
		}

		if (keyName.includes('-dark')) {
			finalName = `dark:${finalName}`;
		} else if (keyName.includes('-light')) {
			finalName = finalName.replace('-light', '');
		}

		return finalName;
	}
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">Theme</Heading>
	{#each colorCollectionKeys as colorCollectionKey}
		<Heading tag="h5">{StringHelper.titleCase(colorCollectionKey)}</Heading>

		{#each Object.keys(colors[colorCollectionKey]) as colorKey}
			<div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-5">
				<P class="min-w-64 text-sm">{mapKeyName(colorCollectionKey, colorKey)}</P>
				{#if Is.object(colors[colorCollectionKey][colorKey])}
					<div class="item-center flex min-w-40 flex-row gap-2">
						{#each Object.keys(colors[colorCollectionKey][colorKey]) as colorVariantKey}
							<div
								class="h-5 w-5 rounded-md border border-neutral-300"
								style="background-color: {colors[colorCollectionKey][colorKey][colorVariantKey]}"
							></div>
							<Span>{colors[colorCollectionKey][colorKey][colorVariantKey]}</Span>
						{/each}
					</div>
				{:else}
					<div class="flex min-w-40 flex-row items-center gap-2 text-sm">
						<div
							class="h-5 w-5 rounded-md border border-neutral-300"
							style="background-color: {colors[colorCollectionKey][colorKey]}"
						></div>
						<Span>{colors[colorCollectionKey][colorKey]}</Span>
					</div>
				{/if}
				<div class="flex flex-row items-center gap-2">
					<P class="text-sm">{mapUseName(mapKeyName(colorCollectionKey, colorKey))}</P>
					<Span>
						<Button
							color="plain"
							class="p-1"
							on:click={() => Clipboard.copy(mapUseName(mapKeyName(colorCollectionKey, colorKey)))}
							><Icons.FileCopyOutline /></Button
						>
					</Span>
				</div>
			</div>
		{/each}
	{/each}
</section>
