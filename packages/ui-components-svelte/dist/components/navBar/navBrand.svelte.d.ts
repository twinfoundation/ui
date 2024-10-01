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
export type NavBrandProps = typeof __propDef.props;
export type NavBrandEvents = typeof __propDef.events;
export type NavBrandSlots = typeof __propDef.slots;
export default class NavBrand extends SvelteComponent<NavBrandProps, NavBrandEvents, NavBrandSlots> {
}
export {};
