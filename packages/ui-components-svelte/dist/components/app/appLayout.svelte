<script>import AppFooter from "./appFooter.svelte";
import AppHeader from "./appHeader.svelte";
import AppSidebar from "./appSidebar.svelte";
export let sidebarGroups = void 0;
export let title = "";
export let initials = "";
export let profileNavRoute = "";
export let authenticated = false;
export let serverHealthStatus = void 0;
export let serverName = void 0;
export let serverVersion = void 0;
</script>

<div class="flex h-screen w-screen min-w-96 flex-col overflow-hidden">
	<AppHeader {initials} {profileNavRoute} {title} {authenticated} />
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
