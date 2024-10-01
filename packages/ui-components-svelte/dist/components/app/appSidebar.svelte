<script>import { page } from "$app/stores";
import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, i18n } from "../..";
$: activeUrl = $page.url.pathname;
export let groups = [];
</script>

<Sidebar {activeUrl} class="h-full" asideClass="w-16 md:w-64">
	<SidebarWrapper class="dark:bg-cosmic-indigo-600 h-full">
		{#each groups as group}
			<SidebarGroup>
				{#each group.items as item}
					<SidebarItem label={$i18n(item.label)} href={item.route}>
						<svelte:fragment slot="icon">
							<svelte:component
								this={item.icon}
								class="h-6 w-6 text-neutral-500 transition duration-75 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-500"
							/>
						</svelte:fragment>
					</SidebarItem>
				{/each}
			</SidebarGroup>
		{/each}
	</SidebarWrapper>
</Sidebar>
