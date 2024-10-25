import { Radio } from 'flowbite-svelte';
import type { Snippet } from 'svelte';
declare const Radio: import("svelte").Component<{
    checked: boolean;
    value?: string | number;
    group?: string | number;
    disabled?: boolean;
    class?: string;
    children?: Snippet;
}, {}, "checked">;
export default Radio;
