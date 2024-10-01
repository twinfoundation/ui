import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {
            slot: string;
        };
        subtext: {
            slot: string;
        };
    };
    exports?: undefined;
    bindings?: undefined;
};
export type SideBarItemProps = typeof __propDef.props;
export type SideBarItemEvents = typeof __propDef.events;
export type SideBarItemSlots = typeof __propDef.slots;
export default class SideBarItem extends SvelteComponent<SideBarItemProps, SideBarItemEvents, SideBarItemSlots> {
}
export {};
