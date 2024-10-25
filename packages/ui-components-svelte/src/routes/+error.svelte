<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { page } from '$app/stores';
	import { Card, Heading, i18n, P } from '$lib';
</script>

<Card class="h-full w-full max-w-full">
	<Heading tag="h5">{$i18n('pages.error.title')}</Heading>
	<P>
		{#if $page.status === 404}
			{$i18n('pages.error.notFound')}
		{:else}
			{$page.error?.message}
		{/if}
	</P>
</Card>
