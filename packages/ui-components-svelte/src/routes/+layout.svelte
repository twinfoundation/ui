<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { HomeSolid } from 'flowbite-svelte-icons';
	import type { ISideBarGroup } from '$lib';
	import { AppFooter, AppHeader, AppSidebar } from '$lib';
	import '../app.css';

	const sidebarGroups: ISideBarGroup[] = [
		{
			items: [
				{
					label: 'navigation.home',
					route: '/',
					icon: HomeSolid
				}
			]
		}
	];
</script>

<div class="flex h-screen flex-col overflow-hidden">
	<AppHeader />
	<div class="mt-16 flex h-full w-full overflow-hidden sm:mt-20">
		<div
			class="dark:bg-cosmic-indigo flex h-full w-16 flex-col place-content-between overflow-y-auto bg-neutral-50 md:w-64"
		>
			<AppSidebar groups={sidebarGroups} />
		</div>
		<div class="dark:bg-cosmic-indigo flex h-full flex-1 flex-col overflow-auto bg-white p-6">
			<slot></slot>
		</div>
	</div>
	<AppFooter />
</div>
