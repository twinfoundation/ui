<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import AppFooter from './appFooter.svelte';
	import AppHeader from './appHeader.svelte';
	import AppSidebar from './appSidebar.svelte';
	import type { ISideBarGroup } from '$lib/models';

	export let sidebarGroups: ISideBarGroup[] | undefined = undefined;
	export let initials: string = '';
	export let profileNavRoute: string = '';
	export let appNameResource: string = 'app.name';
	export let isAuthenticated: boolean | undefined = false;
	export let serverHealthStatus: 'error' | 'warning' | 'ok' | undefined = undefined;
	export let serverName: string | undefined = undefined;
	export let serverVersion: string | undefined = undefined;
</script>

<div class="flex h-screen w-screen min-w-96 flex-col overflow-hidden">
	<AppHeader {initials} {profileNavRoute} {appNameResource} {isAuthenticated} />
	<div class="flex h-full w-full overflow-hidden">
		<div
			class="dark:bg-cosmic-indigo flex h-full w-16 flex-col place-content-between overflow-y-auto bg-neutral-50 md:w-64"
		>
			<AppSidebar groups={sidebarGroups} />
		</div>
		<div class="dark:bg-cosmic-indigo flex h-full flex-1 flex-col overflow-auto bg-white p-6">
			<slot></slot>
		</div>
	</div>
	<AppFooter {serverHealthStatus} {serverName} {serverVersion} />
</div>
