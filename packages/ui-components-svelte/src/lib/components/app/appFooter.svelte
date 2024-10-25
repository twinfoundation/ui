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

	interface Props {
		showColorTheme?: boolean;
		showLanguageSelector?: boolean;
		serverHealthStatus?: 'error' | 'warning' | 'success';
		serverName?: string;
		serverVersion?: string;
	}

	const {
		showColorTheme = true,
		showLanguageSelector = true,
		serverHealthStatus,
		serverName,
		serverVersion
	}: Props = $props();
</script>

<Footer
	class="bg-surface-main border-surface-primary dark:bg-surface-main-dark dark:border-surface-primary-dark border-t px-4 py-2"
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
				<DarkMode />
			</div>
		{/if}
	</div>
</Footer>
