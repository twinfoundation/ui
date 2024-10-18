import { SvelteComponent } from "svelte";
import type { ISideBarGroup } from '../../models';
declare const __propDef: {
    props: {
        sidebarGroups?: ISideBarGroup[] | undefined;
        title?: string;
        initials?: string;
        profileNavRoute?: string;
        authenticated?: boolean | undefined;
        serverHealthStatus?: "error" | "warning" | "ok" | undefined;
        serverName?: string | undefined;
        serverVersion?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AppLayoutProps = typeof __propDef.props;
export type AppLayoutEvents = typeof __propDef.events;
export type AppLayoutSlots = typeof __propDef.slots;
export default class AppLayout extends SvelteComponent<AppLayoutProps, AppLayoutEvents, AppLayoutSlots> {
}
export {};
