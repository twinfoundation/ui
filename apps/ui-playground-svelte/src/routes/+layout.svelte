<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { AppLayout, type ISideBarGroup } from '@twin.org/ui-components-svelte';
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
				},
				{
					label: 'navigation.validatedForm',
					route: '/validatedForm',
					icon: HomeSolid
				}
			]
		}
	];
</script>

<AppLayout {sidebarGroups}>
	<slot></slot>
</AppLayout>
