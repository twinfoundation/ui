<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { AppLayout, i18n, type ISideBarGroup } from '@twin.org/ui-components-svelte';
	import { HomeSolid } from 'flowbite-svelte-icons';
	import '../app.css';

	const sidebarGroups: ISideBarGroup[] = [
		{
			items: [
				{
					label: $i18n('navigation.home'),
					route: '/',
					icon: HomeSolid
				},
				{
					label: $i18n('navigation.typography'),
					route: '/typography',
					icon: HomeSolid
				},
				{
					label: $i18n('navigation.buttons'),
					route: '/buttons',
					icon: HomeSolid
				},
				{
					label: $i18n('navigation.forms'),
					route: '/forms',
					icon: HomeSolid
				},
				{
					label: $i18n('navigation.qr'),
					route: '/qr',
					icon: HomeSolid
				},
				{
					label: $i18n('navigation.spinner'),
					route: '/spinner',
					icon: HomeSolid
				},
				{
					label: $i18n('navigation.cards'),
					route: '/cards',
					icon: HomeSolid
				},
				{
					label: $i18n('navigation.tables'),
					route: '/tables',
					icon: HomeSolid
				},
				{
					label: $i18n('navigation.modals'),
					route: '/modals',
					icon: HomeSolid
				},
				{
					label: $i18n('navigation.validatedForm'),
					route: '/validatedForm',
					icon: HomeSolid
				}
			]
		}
	];
</script>

<AppLayout title={$i18n('app.name')} {sidebarGroups}>
	<slot></slot>
</AppLayout>
