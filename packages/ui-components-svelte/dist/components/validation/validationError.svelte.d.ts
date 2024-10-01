import { SvelteComponent } from "svelte";
import { type IValidationFailure } from '@twin.org/core';
declare const __propDef: {
    props: {
        validationErrors: IValidationFailure[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ValidationErrorProps = typeof __propDef.props;
export type ValidationErrorEvents = typeof __propDef.events;
export type ValidationErrorSlots = typeof __propDef.slots;
export default class ValidationError extends SvelteComponent<ValidationErrorProps, ValidationErrorEvents, ValidationErrorSlots> {
}
export {};
