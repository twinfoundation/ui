import { SvelteComponent } from "svelte";
import { type IValidationFailure } from '@twin.org/core';
declare const __propDef: {
    props: {
        titleResource: string;
        actionButtonResource?: string;
        actionButtonBusyResource?: string;
        actionSuccessResource?: string;
        validationMethod: ((validationFailures: IValidationFailure[]) => Promise<void>) | undefined;
        actionMethod: (() => Promise<string | undefined>) | undefined;
        validationErrors: {
            [id: string]: IValidationFailure[] | undefined;
        };
        isBusy?: boolean;
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
