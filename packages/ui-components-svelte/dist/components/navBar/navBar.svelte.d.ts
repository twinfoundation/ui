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
export type NavBarProps = typeof __propDef.props;
export type NavBarEvents = typeof __propDef.events;
export type NavBarSlots = typeof __propDef.slots;
export default class NavBar extends SvelteComponent<NavBarProps, NavBarEvents, NavBarSlots> {
}
export {};
