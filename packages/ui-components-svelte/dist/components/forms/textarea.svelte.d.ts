import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value: any;
        resize?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export type TextareaProps = typeof __propDef.props;
export type TextareaEvents = typeof __propDef.events;
export type TextareaSlots = typeof __propDef.slots;
export default class Textarea extends SvelteComponent<TextareaProps, TextareaEvents, TextareaSlots> {
}
export {};
