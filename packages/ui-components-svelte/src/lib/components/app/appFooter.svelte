<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import {
		currentLocale,
		DarkMode,
		Footer,
		i18n,
		Label,
		locales,
		Select,
		ServerStatus
	} from '$lib';

	export let showColorTheme = true;
	export let showLanguageSelector = true;
	export let serverHealthStatus: 'error' | 'warning' | 'ok' | undefined;
	export let serverName: string | undefined;
	export let serverVersion: string | undefined;
</script>

<Footer
	class="dark:bg-cosmic-indigo-600 border-t border-neutral-200 bg-white px-4 py-2 dark:border-neutral-900"
>
	<div class="flex flex-col items-center justify-between gap-2 md:flex-row">
		<ServerStatus {serverHealthStatus} {serverName} {serverVersion} />
		{#if showLanguageSelector}
			<div class="flex flex-row flex-wrap items-center gap-2">
				<Label>{$i18n('components.appFooter.language')}</Label>
				<Select
					class="w-48"
					size="sm"
					name="language"
					placeholder={$i18n('components.appFooter.selectLanguage')}
					items={$locales.map(locale => ({
						value: locale.code,
						name: locale.label
					}))}
					bind:value={$currentLocale}
				></Select>
			</div>
		{/if}
		{#if showColorTheme}
			<div class="flex flex-row items-center gap-2">
				<Label>{$i18n('components.appFooter.colorTheme')}</Label>
				<DarkMode
					btnClass="text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg text-xl p-2"
				/>
			</div>
		{/if}
	</div>
</Footer>
