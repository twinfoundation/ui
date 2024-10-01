import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export type DarkModeProps = typeof __propDef.props;
export type DarkModeEvents = typeof __propDef.events;
export type DarkModeSlots = typeof __propDef.slots;
export default class DarkMode extends SvelteComponent<DarkModeProps, DarkModeEvents, DarkModeSlots> {
}
export {};
