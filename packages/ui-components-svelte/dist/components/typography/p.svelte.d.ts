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
export type PProps = typeof __propDef.props;
export type PEvents = typeof __propDef.events;
export type PSlots = typeof __propDef.slots;
export default class P extends SvelteComponent<PProps, PEvents, PSlots> {
}
export {};
