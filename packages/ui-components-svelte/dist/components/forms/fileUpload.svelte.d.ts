declare const FileUpload: import("svelte").Component<{
    files?: FileList;
    name?: string;
    color?: "default" | "error" | "success";
    disabled?: boolean;
    class?: string;
}, {}, "files">;
export default FileUpload;
