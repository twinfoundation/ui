import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value: string;
        files: FileList | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export type FileUploadProps = typeof __propDef.props;
export type FileUploadEvents = typeof __propDef.events;
export type FileUploadSlots = typeof __propDef.slots;
export default class FileUpload extends SvelteComponent<FileUploadProps, FileUploadEvents, FileUploadSlots> {
}
export {};
