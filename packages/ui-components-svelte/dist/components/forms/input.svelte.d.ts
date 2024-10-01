import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value: unknown;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponent<InputProps, InputEvents, InputSlots> {
}
export {};
