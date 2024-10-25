declare const ServerStatus: import("svelte").Component<{
    serverHealthStatus?: "error" | "warning" | "success";
    serverName?: string;
    serverVersion?: string;
}, {}, "">;
export default ServerStatus;
