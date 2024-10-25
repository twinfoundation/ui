import { Badge } from 'flowbite-svelte';
import type { Snippet } from 'svelte';
declare const Badge: import("svelte").Component<{
    color?: "error" | "warning" | "info" | "success" | "primary" | "secondary" | "plain";
    large?: boolean;
    class?: string;
    children?: Snippet;
}, {}, "">;
export default Badge;
