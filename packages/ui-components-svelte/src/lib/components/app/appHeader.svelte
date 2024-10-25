<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Avatar, Link, Navbar, NavBrand, Span } from '$lib';

	interface Props {
		initials?: string;
		profileNavRoute?: string;
		title?: string;
		authenticated?: boolean;
	}

	const {
		initials = '',
		profileNavRoute = '',
		title = '',
		authenticated = false
	}: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Navbar
	fluid={true}
	class="bg-surface-main border-surface-primary dark:bg-surface-main-dark dark:border-surface-primary-dark z-20 min-w-96 flex-nowrap overflow-hidden border-b px-5 py-3"
>
	<div class="flex w-full flex-row justify-between gap-10">
		<NavBrand href="/" class="p-2">
			<img src="/images/logo-primary.svg" class="me-3 h-6 sm:h-9" alt={title} />
			<Span
				class="font-hdcoltonwidesemibold text-primary dark:text-primary-dark self-center whitespace-nowrap text-xl font-semibold"
				>{title}</Span
			>
		</NavBrand>
		{#if authenticated}
			<Link href={profileNavRoute} class="rounded-full"
				><Avatar class="cursor-pointer">{initials}</Avatar></Link
			>
		{/if}
	</div>
</Navbar>
