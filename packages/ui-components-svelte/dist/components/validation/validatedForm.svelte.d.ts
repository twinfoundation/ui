import { type IValidationFailure } from '@twin.org/core';
import type { Snippet } from 'svelte';
declare const ValidatedForm: import("svelte").Component<{
    title: string;
    actionButtonLabel?: string;
    actionSuccessLabel?: string;
    closeButtonLabel?: string;
    validationMethod?: (validationFailures: IValidationFailure[]) => Promise<void>;
    actionMethod?: () => Promise<string | undefined>;
    closeMethod?: (() => Promise<void>) | undefined;
    validationErrors: {
        [id: string]: IValidationFailure[] | undefined;
    };
    busy?: boolean;
    result?: string;
    resultIsError?: boolean;
    resultTimeout?: number;
    fields?: Snippet;
    afterAction?: Snippet;
}, {}, "busy" | "validationErrors">;
export default ValidatedForm;
