import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { CryptoCardWeb3 } from "../Card.stories";

export const ConnectModal = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			<Button onClick={() => setOpenModal(true)}>Sign In</Button>
			<Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
				<Modal.Header />
				<Modal.Body>
          <CryptoCardWeb3 />
        </Modal.Body>
      </Modal>
    </>
  );
};