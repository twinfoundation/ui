import { type Writable } from "svelte/store";
/**
 * Persist a writable Svelte store to local storage.
 * @param key The key to store the variable with.
 * @param initialValue The initial value for the persistent value.
 * @returns The writable value.
 */
export declare function persistent<T>(key: string, initialValue: T): Writable<T>;
