<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import type { Snippet } from 'svelte';
	import { AppLayout, Icons, type ISideBarGroup } from '$lib';
	import '$lib/css/index.css';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();

	const sidebarGroups: ISideBarGroup[] = [
		{
			items: [
				{
					label: 'Home',
					route: '/',
					icon: Icons.HomeSolid
				},
				{
					label: 'Theme',
					route: '/theme',
					icon: Icons.HomeSolid
				},
				{
					label: 'Typography',
					route: '/typography',
					icon: Icons.HomeSolid
				},
				{
					label: 'Buttons',
					route: '/buttons',
					icon: Icons.HomeSolid
				},
				{
					label: 'Links',
					route: '/links',
					icon: Icons.HomeSolid
				},
				{
					label: 'Forms',
					route: '/forms',
					icon: Icons.HomeSolid
				},
				{
					label: 'QR',
					route: '/qr',
					icon: Icons.HomeSolid
				},
				{
					label: 'Spinner',
					route: '/spinner',
					icon: Icons.HomeSolid
				},
				{
					label: 'Cards',
					route: '/cards',
					icon: Icons.HomeSolid
				},
				{
					label: 'Tables',
					route: '/tables',
					icon: Icons.HomeSolid
				},
				{
					label: 'Modals',
					route: '/modals',
					icon: Icons.HomeSolid
				},
				{
					label: 'Validated Form',
					route: '/validatedForm',
					icon: Icons.HomeSolid
				},
				{
					label: 'Badges',
					route: '/badges',
					icon: Icons.HomeSolid
				},
				{
					label: 'Tooltip',
					route: '/tooltip',
					icon: Icons.MessageCaptionOutline
				}
			]
		}
	];
</script>

<AppLayout
	title="TWIN UI Svelte Components"
	{sidebarGroups}
	authenticated={true}
	initials="TW"
	profileNavRoute="/"
>
	{@render children?.()}
</AppLayout>
