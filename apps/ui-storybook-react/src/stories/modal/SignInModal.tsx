import React, { useState } from "react";
import { Button, Modal, Checkbox, Label, TextInput } from "flowbite-react";

interface SignInModalProps {
  buttonText: string;
  modalTitle: string;
  emailPlaceholder: string;
  passwordPlaceholder: string;
  rememberText: string;
  forgotPasswordLink: string;
  createAccountLink: string;
  onSubmit: (email: string) => void;
  onClose: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({
  buttonText,
  modalTitle,
  emailPlaceholder,
  passwordPlaceholder,
  rememberText,
  forgotPasswordLink,
  createAccountLink,
  onSubmit,
  onClose,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setOpenModal(false);
    onClose();
  };

  const handleSubmit = () => {
    onSubmit(email);
    handleClose();
  };

  return (
    <>
      <Button onClick={handleOpen}>{buttonText}</Button>
      <Modal show={openModal} size="md" onClose={handleClose} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">{modalTitle}</h3>
            <div>
              <Label htmlFor="email" value="Your email" />
              <TextInput
                id="email"
                placeholder={emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password" value="Your password" />
              <TextInput id="password" placeholder={passwordPlaceholder} type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">{rememberText}</Label>
              </div>
              <a href={forgotPasswordLink} className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Lost Password?
              </a>
            </div>
            <Button className="w-full" onClick={handleSubmit}>
              Log in to your account
            </Button>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a href={createAccountLink} className="text-cyan-700 hover:underline dark:text-cyan-500">
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
