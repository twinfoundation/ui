import type { Snippet } from 'svelte';
import type { ISideBarGroup } from '../../models';
declare const AppLayout: import("svelte").Component<{
    sidebarGroups?: ISideBarGroup[];
    title?: string;
    initials?: string;
    profileNavRoute?: string;
    authenticated?: boolean;
    serverHealthStatus?: "error" | "warning" | "success";
    serverName?: string;
    serverVersion?: string;
    children?: Snippet;
}, {}, "">;
export default AppLayout;
