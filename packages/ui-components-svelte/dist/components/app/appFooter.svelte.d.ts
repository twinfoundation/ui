declare const AppFooter: import("svelte").Component<{
    showColorTheme?: boolean;
    showLanguageSelector?: boolean;
    serverHealthStatus?: "error" | "warning" | "success";
    serverName?: string;
    serverVersion?: string;
}, {}, "">;
export default AppFooter;
