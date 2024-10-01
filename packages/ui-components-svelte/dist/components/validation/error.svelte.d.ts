import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        error: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ErrorProps = typeof __propDef.props;
export type ErrorEvents = typeof __propDef.events;
export type ErrorSlots = typeof __propDef.slots;
export default class Error extends SvelteComponent<ErrorProps, ErrorEvents, ErrorSlots> {
}
export {};
