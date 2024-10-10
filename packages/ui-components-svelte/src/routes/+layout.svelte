<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { HomeSolid } from 'flowbite-svelte-icons';
	import type { ISideBarGroup } from '$lib';
	import { AppLayout } from '$lib';
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

<AppLayout {sidebarGroups} isAuthenticated={true} initials="TW" serverHealthStatus="ok">
	<slot></slot>
</AppLayout>
