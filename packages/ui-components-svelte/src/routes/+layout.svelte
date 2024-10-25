<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import '$lib/css/index.css';
	import { HomeSolid } from 'flowbite-svelte-icons';
	import type { Snippet } from 'svelte';
	import { AppLayout, type ISideBarGroup } from '$lib';

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
					icon: HomeSolid
				},
				{
					label: 'Typography',
					route: '/typography',
					icon: HomeSolid
				},
				{
					label: 'Buttons',
					route: '/buttons',
					icon: HomeSolid
				},
				{
					label: 'Links',
					route: '/links',
					icon: HomeSolid
				},
				{
					label: 'Forms',
					route: '/forms',
					icon: HomeSolid
				},
				{
					label: 'QR',
					route: '/qr',
					icon: HomeSolid
				},
				{
					label: 'Spinner',
					route: '/spinner',
					icon: HomeSolid
				},
				{
					label: 'Cards',
					route: '/cards',
					icon: HomeSolid
				},
				{
					label: 'Tables',
					route: '/tables',
					icon: HomeSolid
				},
				{
					label: 'Modals',
					route: '/modals',
					icon: HomeSolid
				},
				{
					label: 'Validated Form',
					route: '/validatedForm',
					icon: HomeSolid
				},
				{
					label: 'Badges',
					route: '/badges',
					icon: HomeSolid
				}
			]
		}
	];
</script>

<AppLayout title="TWIN UI Svelte Components" {sidebarGroups}>
	{@render children?.()}
</AppLayout>
