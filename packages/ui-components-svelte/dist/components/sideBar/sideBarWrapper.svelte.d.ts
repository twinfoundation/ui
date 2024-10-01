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
export type SideBarWrapperProps = typeof __propDef.props;
export type SideBarWrapperEvents = typeof __propDef.events;
export type SideBarWrapperSlots = typeof __propDef.slots;
export default class SideBarWrapper extends SvelteComponent<SideBarWrapperProps, SideBarWrapperEvents, SideBarWrapperSlots> {
}
export {};
