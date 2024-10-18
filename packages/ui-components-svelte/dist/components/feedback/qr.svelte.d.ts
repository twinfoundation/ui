import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        qrData: string;
        label: string;
        dimensions: number;
        foreground?: string | undefined;
        background?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export type QrProps = typeof __propDef.props;
export type QrEvents = typeof __propDef.events;
export type QrSlots = typeof __propDef.slots;
export default class Qr extends SvelteComponent<QrProps, QrEvents, QrSlots> {
}
export {};
