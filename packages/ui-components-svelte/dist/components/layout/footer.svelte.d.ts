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
export type FooterProps = typeof __propDef.props;
export type FooterEvents = typeof __propDef.events;
export type FooterSlots = typeof __propDef.slots;
export default class Footer extends SvelteComponent<FooterProps, FooterEvents, FooterSlots> {
}
export {};
