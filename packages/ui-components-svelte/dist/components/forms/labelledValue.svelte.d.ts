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
export type LabelledValueProps = typeof __propDef.props;
export type LabelledValueEvents = typeof __propDef.events;
export type LabelledValueSlots = typeof __propDef.slots;
export default class LabelledValue extends SvelteComponent<LabelledValueProps, LabelledValueEvents, LabelledValueSlots> {
}
export {};
