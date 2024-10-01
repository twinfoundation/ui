<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import {
		AppFooter,
		AppHeader,
		AppSidebar,
		type ISideBarGroup
	} from '@twin.org/ui-components-svelte';
	import { HomeSolid } from 'flowbite-svelte-icons';
	import '../app.css';

	const sidebarGroups: ISideBarGroup[] = [
		{
			items: [
				{
					label: 'navigation.home',
					route: '/',
					icon: HomeSolid
				},
				{
					label: 'navigation.typography',
					route: '/typography',
					icon: HomeSolid
				},
				{
					label: 'navigation.buttons',
					route: '/buttons',
					icon: HomeSolid
				},
				{
					label: 'navigation.forms',
					route: '/forms',
					icon: HomeSolid
				},
				{
					label: 'navigation.qr',
					route: '/qr',
					icon: HomeSolid
				},
				{
					label: 'navigation.spinner',
					route: '/spinner',
					icon: HomeSolid
				},
				{
					label: 'navigation.cards',
					route: '/cards',
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
