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
export type SideBarGroupProps = typeof __propDef.props;
export type SideBarGroupEvents = typeof __propDef.events;
export type SideBarGroupSlots = typeof __propDef.slots;
export default class SideBarGroup extends SvelteComponent<SideBarGroupProps, SideBarGroupEvents, SideBarGroupSlots> {
}
export {};
