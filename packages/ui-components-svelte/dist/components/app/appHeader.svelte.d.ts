import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        initials?: string;
        profileNavRoute?: string;
        appNameResource?: string;
        isAuthenticated?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        start: {};
        middle: {};
        end: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AppHeaderProps = typeof __propDef.props;
export type AppHeaderEvents = typeof __propDef.events;
export type AppHeaderSlots = typeof __propDef.slots;
export default class AppHeader extends SvelteComponent<AppHeaderProps, AppHeaderEvents, AppHeaderSlots> {
}
export {};
