// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import {
	Button as FlowbiteButton,
	Checkbox as FlowbiteCheckbox,
	FileInput as FlowbiteFileInput,
	Label as FlowbiteLabel,
	Radio as FlowbiteRadio,
	RangeSlider as FlowbiteRangeSlider,
	Select as FlowbiteSelect,
	Textarea as FlowbiteTextarea,
	TextInput as FlowbiteTextInput,
	ToggleSwitch as FlowbiteToggleSwitch
} from "flowbite-react";
import { MailBox } from "flowbite-react-icons/outline";
import React, { type ReactNode } from "react";
import { FormPropTypes, type FormProps } from "./formProps";

/**
 * Form component.
 */
export class Form extends React.Component<FormProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = FormPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: FormProps;

	/**
	 * Create a new instance of Form.
	 * @param props The props of the component.
	 */
	constructor(props: FormProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { size, disabled, required, readOnly } = this._props;
		return (
			<form className="flex h-[80vh] flex-col gap-4 overflow-auto">
				<div>
					<div className="mb-2 block">
						<FlowbiteLabel htmlFor="email1" value="Your email" />
					</div>
					<FlowbiteTextInput
						disabled={disabled ?? undefined}
						required={required ?? undefined}
						readOnly={readOnly ?? undefined}
						sizing={size ?? "md"}
						className="focus:border-surface-button rounded-lg border-2"
						id="email1"
						type="email"
						placeholder="name@flowbite.com"
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<FlowbiteLabel htmlFor="email3" value="Your email with helper text" />
					</div>
					<FlowbiteTextInput
						disabled={disabled ?? undefined}
						required={required ?? undefined}
						readOnly={readOnly ?? undefined}
						sizing={size ?? "md"}
						id="email3"
						type="email"
						placeholder="name@flowbite.com"
						helperText={
							<>
								We’ll never share your details. Read our
								<a
									href="#"
									className="ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
								>
									Privacy Policy
								</a>
								.
							</>
						}
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<FlowbiteLabel htmlFor="email3" value="Your email with icon" />
					</div>
					<FlowbiteTextInput
						disabled={disabled ?? undefined}
						required={required ?? undefined}
						readOnly={readOnly ?? undefined}
						sizing={size ?? "md"}
						id="email4"
						type="email"
						icon={MailBox}
						placeholder="name@flowbite.com"
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<FlowbiteLabel htmlFor="email3" value="Your email with icon on the right side" />
					</div>
					<FlowbiteTextInput
						disabled={disabled ?? undefined}
						required={required ?? undefined}
						readOnly={readOnly ?? undefined}
						sizing={size ?? "md"}
						id="email4"
						type="email"
						rightIcon={MailBox}
						placeholder="name@flowbite.com"
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<FlowbiteLabel htmlFor="email3" value="Your email with a custom icon" />
					</div>
					<FlowbiteTextInput
						disabled={disabled ?? undefined}
						required={required ?? undefined}
						readOnly={readOnly ?? undefined}
						sizing={size ?? "md"}
						id="email4"
						type="email"
						addon="@"
						placeholder="name@flowbite.com"
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<FlowbiteLabel htmlFor="password1" value="Your password" />
					</div>
					<FlowbiteTextInput
						disabled={disabled ?? undefined}
						required={required ?? undefined}
						readOnly={readOnly ?? undefined}
						sizing={size ?? "md"}
						id="password1"
						type="password"
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<FlowbiteLabel htmlFor="username3" color="success" value="Your name" />
					</div>
					<FlowbiteTextInput
						disabled={disabled ?? undefined}
						required={required ?? undefined}
						readOnly={readOnly ?? undefined}
						sizing={size ?? "md"}
						id="username"
						placeholder="Bonnie Green"
						color="success"
						helperText={
							<>
								<span className="font-medium">Alright!</span> Username available!
							</>
						}
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<FlowbiteLabel htmlFor="username4" color="failure" value="Your name" />
					</div>
					<FlowbiteTextInput
						disabled={disabled ?? undefined}
						required={required ?? undefined}
						readOnly={readOnly ?? undefined}
						sizing={size ?? "md"}
						id="username4"
						placeholder="Bonnie Green"
						color="failure"
						helperText={
							<>
								<span className="font-medium">Oops!</span> Username already taken!
							</>
						}
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<FlowbiteLabel htmlFor="input-gray" color="gray" value="Gray" />
					</div>
					<FlowbiteTextInput
						disabled={disabled ?? undefined}
						required={required ?? undefined}
						readOnly={readOnly ?? undefined}
						sizing={size ?? "md"}
						id="input-gray"
						placeholder="Input Gray"
						color="gray"
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<FlowbiteLabel htmlFor="input-info" color="info" value="Info" />
					</div>
					<FlowbiteTextInput
						disabled={disabled ?? undefined}
						required={required ?? undefined}
						readOnly={readOnly ?? undefined}
						sizing={size ?? "md"}
						id="input-info"
						placeholder="Input Info"
						color="info"
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<FlowbiteLabel htmlFor="input-success" color="success" value="Success" />
					</div>
					<FlowbiteTextInput
						disabled={disabled ?? undefined}
						required={required ?? undefined}
						readOnly={readOnly ?? undefined}
						sizing={size ?? "md"}
						id="input-success"
						placeholder="Input Success"
						color="success"
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<FlowbiteLabel htmlFor="input-failure" color="failure" value="Failure" />
					</div>
					<FlowbiteTextInput
						disabled={disabled ?? undefined}
						required={required ?? undefined}
						readOnly={readOnly ?? undefined}
						sizing={size ?? "md"}
						id="input-failure"
						placeholder="Input Failure"
						color="failure"
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<FlowbiteLabel htmlFor="input-warning" color="warning" value="Warning" />
					</div>
					<FlowbiteTextInput
						disabled={disabled ?? undefined}
						required={required ?? undefined}
						readOnly={readOnly ?? undefined}
						sizing={size ?? "md"}
						id="input-warning"
						placeholder="Input Warning"
						color="warning"
					/>
				</div>
				<div className="max-w-md">
					<div className="mb-2 block">
						<FlowbiteLabel htmlFor="comment" value="Your message in a Textarea" />
					</div>
					<FlowbiteTextarea
						disabled={disabled ?? undefined}
						required={required ?? undefined}
						readOnly={readOnly ?? undefined}
						id="comment"
						placeholder="Leave a comment..."
						rows={4}
					/>
				</div>
				<div className="max-w-md">
					<div className="mb-2 block">
						<FlowbiteLabel htmlFor="countries" value="Select your country" />
					</div>
					<FlowbiteSelect
						disabled={disabled ?? undefined}
						required={required ?? undefined}
						sizing={size ?? "md"}
						id="countries"
					>
						<option>United States</option>
						<option>Canada</option>
						<option>France</option>
						<option>Germany</option>
					</FlowbiteSelect>
				</div>
				<div className="flex items-center gap-2">
					<FlowbiteCheckbox
						disabled={disabled ?? undefined}
						required={required ?? undefined}
						readOnly={readOnly ?? undefined}
						id="remember"
					/>
					<FlowbiteLabel htmlFor="remember">Remember me</FlowbiteLabel>
				</div>
				<div className="flex max-w-md flex-col gap-4" id="checkbox">
					<div className="flex items-center gap-2">
						<FlowbiteCheckbox
							disabled={disabled ?? undefined}
							required={required ?? undefined}
							readOnly={readOnly ?? undefined}
							id="accept"
							defaultChecked
						/>
						<FlowbiteLabel htmlFor="accept" className="flex">
							I agree with the&nbsp;
							<a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
								terms and conditions
							</a>
						</FlowbiteLabel>
					</div>
					<div className="flex items-center gap-2">
						<FlowbiteCheckbox
							disabled={disabled ?? undefined}
							required={required ?? undefined}
							readOnly={readOnly ?? undefined}
							id="promotion"
						/>
						<FlowbiteLabel htmlFor="promotion">I want to get promotional offers</FlowbiteLabel>
					</div>
					<div className="flex items-center gap-2">
						<FlowbiteCheckbox
							disabled={disabled ?? undefined}
							required={required ?? undefined}
							readOnly={readOnly ?? undefined}
							id="age"
						/>
						<FlowbiteLabel htmlFor="age">I am 18 years or older</FlowbiteLabel>
					</div>
					<div className="flex gap-2">
						<div className="flex h-5 items-center">
							<FlowbiteCheckbox
								disabled={disabled ?? undefined}
								required={required ?? undefined}
								readOnly={readOnly ?? undefined}
								id="shipping"
							/>
						</div>
						<div className="flex flex-col">
							<FlowbiteLabel htmlFor="shipping">Free shipping via Flowbite</FlowbiteLabel>
							<div className="text-gray-500 dark:text-gray-300">
								<span className="text-xs font-normal">
									For orders shipped from Flowbite from <span className="font-medium">€ 25</span> in
									books or&nbsp;
									<span>€ 29</span> on other categories
								</span>
							</div>
						</div>
					</div>
				</div>
				<fieldset className="flex max-w-md flex-col gap-4">
					<legend className="mb-4">Choose your country</legend>
					<div className="flex items-center gap-2">
						<FlowbiteRadio
							disabled={disabled ?? undefined}
							required={required ?? undefined}
							readOnly={readOnly ?? undefined}
							id="united-state"
							name="countries"
							value="USA"
							defaultChecked
						/>
						<FlowbiteLabel htmlFor="united-state">United States</FlowbiteLabel>
					</div>
					<div className="flex items-center gap-2">
						<FlowbiteRadio
							disabled={disabled ?? undefined}
							required={required ?? undefined}
							readOnly={readOnly ?? undefined}
							id="germany"
							name="countries"
							value="Germany"
						/>
						<FlowbiteLabel htmlFor="germany">Germany</FlowbiteLabel>
					</div>
					<div className="flex items-center gap-2">
						<FlowbiteRadio
							disabled={disabled ?? undefined}
							required={required ?? undefined}
							readOnly={readOnly ?? undefined}
							id="spain"
							name="countries"
							value="Spain"
						/>
						<FlowbiteLabel htmlFor="spain">Spain</FlowbiteLabel>
					</div>
					<div className="flex items-center gap-2">
						<FlowbiteRadio
							disabled={disabled ?? undefined}
							required={required ?? undefined}
							readOnly={readOnly ?? undefined}
							id="uk"
							name="countries"
							value="United Kingdom"
						/>
						<FlowbiteLabel htmlFor="uk">United Kingdom</FlowbiteLabel>
					</div>
				</fieldset>
				<div id="fileUpload" className="max-w-md">
					<div className="mb-2 block">
						<FlowbiteLabel htmlFor="file" value="Upload file" />
					</div>
					<FlowbiteFileInput
						disabled={disabled ?? undefined}
						required={required ?? undefined}
						readOnly={readOnly ?? undefined}
						sizing={size ?? "md"}
						id="file"
						helperText="A profile picture is useful to confirm your are logged into your account"
					/>
				</div>
				<div className="flex max-w-md flex-col items-start gap-4">
					<FlowbiteToggleSwitch
						disabled={disabled ?? undefined}
						sizing={size ?? "md"}
						checked={false}
						label="Toggle me"
						onChange={() => {}}
					/>
					<FlowbiteToggleSwitch
						disabled={disabled ?? undefined}
						sizing={size ?? "md"}
						checked={true}
						label="Toggle me (checked)"
						onChange={() => {}}
					/>
				</div>
				<div className="flex max-w-md flex-col gap-4">
					<div>
						<div className="mb-1 block">
							<FlowbiteLabel htmlFor="default-range" value="Slider" />
						</div>
						<FlowbiteRangeSlider
							disabled={disabled ?? undefined}
							required={required ?? undefined}
							readOnly={readOnly ?? undefined}
							id="default-range"
							sizing={size ?? "md"}
						/>
					</div>
				</div>
				<div className="flex max-w-md flex-col gap-4">
					<FlowbiteButton
						disabled={disabled ?? undefined}
						className="text-invert bg-surface-button hover:enabled:bg-surface-button-hover focus:ring-surface-button-pressed border-2 border-transparent focus:ring"
						type="submit"
					>
						Submit
					</FlowbiteButton>
				</div>
			</form>
		);
	}
}
