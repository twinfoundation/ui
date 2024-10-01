<script>import { currentLocale, DarkMode, Footer, i18n, Label, locales, Select } from "../..";
</script>

<Footer
	class="dark:bg-cosmic-indigo-600 border-t border-neutral-200 bg-white px-4 py-2 dark:border-neutral-900"
>
	<div class="flex flex-col items-center justify-between gap-2 md:flex-row">
		<slot name="start"></slot>
		<div class="flex flex-row flex-wrap items-center gap-2">
			<Label>{$i18n('footer.language')}</Label>
			<Select
				class="w-48"
				size="sm"
				name="language"
				placeholder={$i18n('footer.selectLanguage')}
				items={$locales.map(locale => ({
					value: locale.code,
					name: locale.label
				}))}
				bind:value={$currentLocale}
			></Select>
		</div>
		<div class="flex flex-row items-center gap-2">
			<Label>{$i18n('footer.colorTheme')}</Label>
			<DarkMode
				btnClass="text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg text-xl p-2"
			/>
		</div>
	</div>
</Footer>
