import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type SideBarProps = typeof __propDef.props;
export type SideBarEvents = typeof __propDef.events;
export type SideBarSlots = typeof __propDef.slots;
export default class SideBar extends SvelteComponent<SideBarProps, SideBarEvents, SideBarSlots> {
}
export {};
