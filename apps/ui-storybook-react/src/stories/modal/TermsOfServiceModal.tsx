import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";

interface TermsOfServiceModalProps {
  buttonText: string;
  modalTitle: string;
  modalContent: string[];
  onAccept: () => void;
  onClose: () => void;
}

export const TermsOfServiceModal: React.FC<TermsOfServiceModalProps> = ({
  buttonText,
  modalTitle,
  modalContent,
  onAccept,
  onClose,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setOpenModal(false);
    onClose();
  };

  return (
    <>
      <Button onClick={handleOpen}>{buttonText}</Button>
      <Modal show={openModal} size="md" onClose={handleClose}>
        <Modal.Header>{modalTitle}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            {modalContent.map((content, index) => (
              <p key={index} className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {content}
              </p>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => { handleClose(); onAccept(); }}>I accept</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
