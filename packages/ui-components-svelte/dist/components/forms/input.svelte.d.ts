import { Input } from 'flowbite-svelte';
declare const Input: import("svelte").Component<{
    type?: "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "reset" | "submit" | "tel" | "text" | "time" | "url" | "week" | "search";
    value: unknown;
    name?: string;
    color?: "primary" | "error" | "success";
    disabled?: boolean;
    class?: string;
}, {}, "value">;
export default Input;
