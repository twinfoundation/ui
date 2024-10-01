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
export type HelperProps = typeof __propDef.props;
export type HelperEvents = typeof __propDef.events;
export type HelperSlots = typeof __propDef.slots;
export default class Helper extends SvelteComponent<HelperProps, HelperEvents, HelperSlots> {
}
export {};
