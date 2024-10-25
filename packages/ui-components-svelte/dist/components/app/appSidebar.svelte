<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { page } from '$app/stores';
	import type { ISideBarGroup } from '../../models/ISideBarGroup';
	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from '../..';

	interface Props {
		groups?: ISideBarGroup[];
	}

	let activeUrl = $derived($page.url.pathname);
	let { groups = [] }: Props = $props();
</script>

<Sidebar {activeUrl} class="h-full" asideClass="w-16 md:w-64">
	<SidebarWrapper
		class="bg-surface-main border-surface-primary dark:bg-surface-main-dark dark:border-surface-primary-dark h-full rounded-none border-r"
	>
		{#each groups as group}
			<SidebarGroup>
				{#each group.items as item}
					<SidebarItem label={item.label} href={item.route}>
						{#snippet icon()}
							<item.icon
								class="text-secondary dark:text-secondary-dark h-6 w-6 transition duration-75"
							/>
						{/snippet}
					</SidebarItem>
				{/each}
			</SidebarGroup>
		{/each}
	</SidebarWrapper>
</Sidebar>
