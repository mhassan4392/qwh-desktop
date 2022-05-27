import { Modal } from "@/components/modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
const BannerModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onOutsideClick={onClose}
      containerClass="bg-black bg-opacity-50 !z-50"
    >
      <Modal.Header className="bg-gradient-to-r from-primary-light to-primary text-white text-center">
        温馨提示
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col items-center space-y-4 justify-center">
          <AiOutlineCloseCircle className="text-primary text-3xl" />
          <p className="text-center">请先登录账号，才能了解更多</p>
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary w-64 py-2 rounded text-white mx-auto"
          >
            确定
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default BannerModal;
