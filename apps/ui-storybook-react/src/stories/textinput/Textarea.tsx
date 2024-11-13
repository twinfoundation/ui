import { Button } from "@twin.org/ui-components-react";
import { Label, Textarea } from "flowbite-react";
import { HiPaperClip, HiEmojiHappy } from "react-icons/hi";
// import { HiBold, HiItalic} from "react-icons/hi";
export function SimpleTextarea() {
	return (
		<div className="max-w-md">
			<div className="mb-2 block">
				<Label htmlFor="comment" value="Your message" />
			</div>
			<Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
			<span className="mt-2 block text-sm text-gray-500">A note for extra info</span>
		</div>
	);
}

export function IconTextarea() {
	return (
		<div className="relative max-w-md">
			<div className="mb-2 flex justify-between">
				<Label htmlFor="message" value="Your message" />
				<span className="mt-2 block text-sm text-gray-500">A note for extra info</span>
			</div>
			<div className="bg-secondary relative">
				<Textarea
					id="message"
					placeholder="Type your message..."
					required
					rows={4}
					className="bg-secondary rounded-none pl-20 pr-14"
				/>
				<div className="bg-secondary flex justify-between border border-gray-200 px-3 py-2">
					<Button color={"info"}>Send</Button>
					<div className="flex items-center space-x-2">
						<HiPaperClip className="cursor-pointer text-gray-500" />
						<HiEmojiHappy className="cursor-pointer text-gray-500" />
					</div>
				</div>
			</div>
		</div>
	);
}

export function EditorTextarea() {
	return (
		<div className="max-w-md">
			<div className="mb-2 flex justify-between">
				<Label htmlFor="message" value="Your message" />
				<span className="mt-2 block text-sm text-gray-500">A note for extra info</span>
			</div>

			{/* Toolbar */}
			<div className="flex items-center space-x-3 rounded-md border border-b-0 border-gray-300 bg-gray-50 p-2">
				{/* <HiBold className="text-gray-500 cursor-pointer hover:text-black" />
        <HiItalic className="text-gray-500 cursor-pointer hover:text-black" /> */}
				<HiPaperClip className="cursor-pointer text-gray-500 hover:text-black" />
				<HiEmojiHappy className="cursor-pointer text-gray-500 hover:text-black" />
			</div>

			<Textarea
				id="editor"
				placeholder="Start typing..."
				required
				rows={6}
				className="mb-4 border-t-0"
			/>

			<Button color={"info"}>Submit</Button>
		</div>
	);
}
