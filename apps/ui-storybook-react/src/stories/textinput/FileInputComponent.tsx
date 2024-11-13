import { FileInput, Label } from "flowbite-react";

export function FileInputComponent({ label, helperText }: { label: string; helperText: string }) {
	return (
		<div id="fileUpload" className="max-w-md">
			<div className="mb-2 block">
				<Label htmlFor="file" value={label} />
			</div>
			<FileInput id="file" helperText={helperText} />
		</div>
	);
}
