import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        serverHealthStatus: "error" | "warning" | "ok" | undefined;
        serverName?: string | undefined;
        serverVersion?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ServerStatusProps = typeof __propDef.props;
export type ServerStatusEvents = typeof __propDef.events;
export type ServerStatusSlots = typeof __propDef.slots;
export default class ServerStatus extends SvelteComponent<ServerStatusProps, ServerStatusEvents, ServerStatusSlots> {
}
export {};
