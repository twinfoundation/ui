import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export type SpinnerProps = typeof __propDef.props;
export type SpinnerEvents = typeof __propDef.events;
export type SpinnerSlots = typeof __propDef.slots;
export default class Spinner extends SvelteComponent<SpinnerProps, SpinnerEvents, SpinnerSlots> {
}
export {};
