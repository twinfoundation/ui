declare const Qr: import("svelte").Component<{
    qrData: string;
    label: string;
    dimensions: number;
    foreground?: string;
    background?: string;
    class?: string;
}, {}, "">;
export default Qr;
