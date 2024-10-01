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
export type SpanProps = typeof __propDef.props;
export type SpanEvents = typeof __propDef.events;
export type SpanSlots = typeof __propDef.slots;
export default class Span extends SvelteComponent<SpanProps, SpanEvents, SpanSlots> {
}
export {};
