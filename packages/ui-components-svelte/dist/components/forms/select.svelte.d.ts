import { SvelteComponent } from "svelte";
import { type SelectOptionType } from 'flowbite-svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
        value: unknown;
        items: SelectOptionType<unknown>[];
    };
    events: {
        change: any;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type SelectProps = typeof __propDef.props;
export type SelectEvents = typeof __propDef.events;
export type SelectSlots = typeof __propDef.slots;
export default class Select extends SvelteComponent<SelectProps, SelectEvents, SelectSlots> {
}
export {};
