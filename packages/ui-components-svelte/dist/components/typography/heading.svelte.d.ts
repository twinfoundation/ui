import { Heading } from 'flowbite-svelte';
import type { Snippet } from 'svelte';
declare const Heading: import("svelte").Component<{
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    class?: string;
    children?: Snippet;
}, {}, "">;
export default Heading;
