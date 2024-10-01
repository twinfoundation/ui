import { SvelteComponent } from "svelte";
import type { ISideBarGroup } from '../../models/ISideBarGroup';
declare const __propDef: {
    props: {
        groups?: ISideBarGroup[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AppSidebarProps = typeof __propDef.props;
export type AppSidebarEvents = typeof __propDef.events;
export type AppSidebarSlots = typeof __propDef.slots;
export default class AppSidebar extends SvelteComponent<AppSidebarProps, AppSidebarEvents, AppSidebarSlots> {
}
export {};
