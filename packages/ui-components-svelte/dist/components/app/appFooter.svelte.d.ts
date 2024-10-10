import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        showColorTheme?: boolean;
        showLanguageSelector?: boolean;
        serverHealthStatus: "error" | "warning" | "ok" | undefined;
        serverName: string | undefined;
        serverVersion: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AppFooterProps = typeof __propDef.props;
export type AppFooterEvents = typeof __propDef.events;
export type AppFooterSlots = typeof __propDef.slots;
export default class AppFooter extends SvelteComponent<AppFooterProps, AppFooterEvents, AppFooterSlots> {
}
export {};
