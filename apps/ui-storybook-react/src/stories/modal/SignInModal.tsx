import { useState } from "react";
import { Button, Modal, Checkbox, Label, TextInput } from "flowbite-react";

export const SignInModal = () => {
	const [openModal, setOpenModal] = useState(false);
	const [email, setEmail] = useState("");

	return (
		<>
			<Button onClick={() => setOpenModal(true)}>Sign In</Button>
			<Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
				<Modal.Header />
				<Modal.Body>
					<div className="space-y-6">
						<h3 className="text-xl font-medium text-gray-900 dark:text-white">
							Sign in to our platform
						</h3>
						<div>
							<Label htmlFor="email" value="Your email" />
							<TextInput
								id="email"
								placeholder="name@company.com"
								value={email}
								onChange={e => setEmail(e.target.value)}
								required
							/>
						</div>
						<div>
							<Label htmlFor="password" value="Your password" />
							<TextInput id="password" type="password" required />
						</div>
						<div className="flex justify-between">
							<div className="flex items-center gap-2">
								<Checkbox id="remember" />
								<Label htmlFor="remember">Remember me</Label>
							</div>
							<a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
								Lost Password?
							</a>
						</div>
						<Button className="w-full">Log in to your account</Button>
						<div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
							Not registered?&nbsp;
							<a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
								Create account
							</a>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};
