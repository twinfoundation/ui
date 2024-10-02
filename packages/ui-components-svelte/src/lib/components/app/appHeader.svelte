<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Avatar, i18n, Link, Navbar, NavBrand, Span } from '$lib';

	export let initials: string = '';
	export let profileNavRoute: string = '';
	export let appNameResource: string = 'app.name';
	export let isAuthenticated: boolean | undefined = false;
</script>

<svelte:head>
	<title>{$i18n(appNameResource)}</title>
</svelte:head>

<Navbar
	fluid={true}
	class=" dark:bg-cosmic-indigo-600 fixed start-0 top-0 z-20 h-16 w-full min-w-72 border-b border-neutral-200 px-5 py-3 sm:h-20 dark:border-neutral-900"
>
	<slot name="start"></slot>
	<NavBrand href="/" class="p-2">
		<img src="/images/logo-primary.svg" class="me-3 h-6 sm:h-9" alt={$i18n(appNameResource)} />
		<Span
			class="font-hdcoltonwidesemibold self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>{$i18n(appNameResource)}</Span
		>
	</NavBrand>
	<slot name="middle"></slot>
	{#if isAuthenticated}
		<Link href={profileNavRoute} class="rounded-full"
			><Avatar class="cursor-pointer">{initials}</Avatar></Link
		>
	{/if}
	<slot name="end"></slot>
</Navbar>
