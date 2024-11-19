import { Modal } from "@/components/Modal";
import NiceModal, { useModal } from "@ebay/nice-modal-react";

export const SettingModal = NiceModal.create(() => {
	const modal = useModal();

	console.log(1111, modal);

	return <Modal visible={modal.visible} onHide={modal.hide} onShow={modal.show}></Modal>;
});
