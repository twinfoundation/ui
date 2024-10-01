import { I18n, type ILocale } from "@twin.org/core";
import { type Writable } from "svelte/store";
/**
 * The locales dictionaries for each code.
 */
export declare const localeDictionaries: Writable<{
    [code: string]: {
        [key: string]: string;
    };
}>;
/**
 * The complete list of locales.
 */
export declare const locales: Writable<ILocale[]>;
/**
 * The current locale.
 */
export declare const currentLocale: Writable<string>;
/**
 * The active locale.
 */
export declare const activeLocale: Writable<string>;
/**
 * Load the locales.
 * @param rootUrl The root URL.
 * @param localesIndex The locales index.
 * @param debugLanguages Should we load the debug languages.
 */
export declare function initLocales(rootUrl: URL, localesIndex: ILocale[], debugLanguages: boolean): Promise<void>;
/**
 * Format the message.
 */
export declare const i18n: import("svelte/store").Readable<typeof I18n.formatMessage>;
