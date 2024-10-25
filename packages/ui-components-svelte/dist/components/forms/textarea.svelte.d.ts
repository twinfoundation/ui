import { Textarea } from 'flowbite-svelte';
declare const Textarea: import("svelte").Component<{
    name?: string;
    color?: "default" | "error" | "success";
    disabled?: boolean;
    value: string;
    resize?: boolean;
    class?: string;
}, {}, "value">;
export default Textarea;
