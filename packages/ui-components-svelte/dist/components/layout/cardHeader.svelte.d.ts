import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        titleResource: string;
        isBusy?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CardHeaderProps = typeof __propDef.props;
export type CardHeaderEvents = typeof __propDef.events;
export type CardHeaderSlots = typeof __propDef.slots;
export default class CardHeader extends SvelteComponent<CardHeaderProps, CardHeaderEvents, CardHeaderSlots> {
}
export {};
