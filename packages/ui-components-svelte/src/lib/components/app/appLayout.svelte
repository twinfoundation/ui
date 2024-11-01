<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import type { Snippet } from 'svelte';
	import AppFooter from './appFooter.svelte';
	import AppHeader from './appHeader.svelte';
	import AppSidebar from './appSidebar.svelte';
	import type { ISideBarGroup } from '$lib/models';

	interface Props {
		showSideBar?: boolean;
		showFooter?: boolean;
		sidebarGroups?: ISideBarGroup[];
		title?: string;
		homeNavRoute?: string;
		initials?: string;
		profileNavRoute?: string;
		authenticated?: boolean;
		serverHealthStatus?: 'error' | 'warning' | 'success';
		serverName?: string;
		serverVersion?: string;
		children?: Snippet;
	}

	let {
		showSideBar = true,
		showFooter = true,
		sidebarGroups,
		title = '',
		homeNavRoute,
		initials = '',
		profileNavRoute = '',
		authenticated = false,
		serverHealthStatus,
		serverName,
		serverVersion,
		children
	}: Props = $props();
</script>

<div class="flex h-screen w-screen min-w-96 flex-col overflow-hidden">
	<AppHeader {title} {homeNavRoute} {authenticated} {initials} {profileNavRoute} />
	<div class="flex h-full w-full overflow-hidden">
		{#if showSideBar}
			<div class="flex h-full w-16 flex-col place-content-between overflow-y-auto md:w-64">
				<AppSidebar groups={sidebarGroups} />
			</div>
		{/if}
		<div
			class="bg-surface-main border-surface-primary dark:bg-surface-main-dark dark:border-surface-primary-dark flex h-full flex-1 flex-col overflow-auto p-6"
		>
			{@render children?.()}
		</div>
	</div>
	{#if showFooter}
		<AppFooter {serverHealthStatus} {serverName} {serverVersion} />
	{/if}
</div>
