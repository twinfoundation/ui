import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value: string | number;
        group?: number | string | undefined;
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
export type RadioProps = typeof __propDef.props;
export type RadioEvents = typeof __propDef.events;
export type RadioSlots = typeof __propDef.slots;
export default class Radio extends SvelteComponent<RadioProps, RadioEvents, RadioSlots> {
}
export {};
