import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        disabled?: boolean | undefined;
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
export type LinkProps = typeof __propDef.props;
export type LinkEvents = typeof __propDef.events;
export type LinkSlots = typeof __propDef.slots;
export default class Link extends SvelteComponent<LinkProps, LinkEvents, LinkSlots> {
}
export {};
