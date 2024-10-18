import { SvelteComponent } from "svelte";
import { type IValidationFailure } from '@twin.org/core';
declare const __propDef: {
    props: {
        title: string;
        actionButtonLabel?: string;
        actionSuccessLabel?: string;
        closeButtonLabel?: string;
        validationMethod: ((validationFailures: IValidationFailure[]) => Promise<void>) | undefined;
        actionMethod?: (() => Promise<string | undefined>) | undefined;
        closeMethod?: (() => Promise<void>) | undefined;
        validationErrors: {
            [id: string]: IValidationFailure[] | undefined;
        };
        busy?: boolean;
        result?: string;
        resultIsError?: boolean;
        resultTimeout?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        fields: {};
        'after-action': {};
        'after-result': {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ValidatedFormProps = typeof __propDef.props;
export type ValidatedFormEvents = typeof __propDef.events;
export type ValidatedFormSlots = typeof __propDef.slots;
export default class ValidatedForm extends SvelteComponent<ValidatedFormProps, ValidatedFormEvents, ValidatedFormSlots> {
}
export {};
