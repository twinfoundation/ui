import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

interface ConfirmationModalProps {
  triggerText: string;
  modalTitle: string;
  confirmationText: string;
  cancelText: string;
  icon?: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  triggerText,
  modalTitle,
  confirmationText,
  cancelText,
  icon = <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />,
  onConfirm,
  onCancel,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setOpenModal(false);
    onCancel();
  };

  const handleConfirm = () => {
    onConfirm();
    setOpenModal(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>{triggerText}</Button>
      <Modal show={openModal} size="md" onClose={handleClose} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            {icon}
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {modalTitle}
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleConfirm}>
                {confirmationText}
              </Button>
              <Button color="gray" onClick={handleClose}>
                {cancelText}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
