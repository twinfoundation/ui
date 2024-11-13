import { useState } from "react";
import { Button, Modal } from "flowbite-react";

export const TermsOfServiceModal = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			<Button onClick={() => setOpenModal(true)}>Show Terms of Service</Button>
			<Modal show={openModal} onClose={() => setOpenModal(false)}>
				<Modal.Header>Terms of Service</Modal.Header>
				<Modal.Body>
					<div className="space-y-6">
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							With less than a month to go before the European Union enacts new consumer privacy
							laws...
						</p>
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on
							May 25...
						</p>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => setOpenModal(false)}>I accept</Button>
					<Button color="gray" onClick={() => setOpenModal(false)}>
						Decline
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
