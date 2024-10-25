import { Checkbox } from 'flowbite-svelte';
import type { Snippet } from 'svelte';
declare const Checkbox: import("svelte").Component<{
    checked: boolean;
    value?: string | number;
    disabled?: boolean;
    children?: Snippet;
}, {}, "checked">;
export default Checkbox;
