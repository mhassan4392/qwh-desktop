import { Modal } from "@/components/modal";
import { VscChromeClose } from "react-icons/vsc";

const ValueModal = ({ open, onClose, onSuccess }) => {
  return (
    <Modal
      open={open}
      containerClass="bg-black bg-opacity-50"
      onOutsideClick={onClose}
    >
      <Modal.Header className="bg-gradient-to-r from-primary-light to-primary text-white relative px-5 flex items-center justify-center font-semibold">
        <div className="absolute inset-0 flex items-center justify-end px-3">
          <VscChromeClose
            className="text-2xl cursor-pointer transform hover:rotate-180 transition-all duration-300"
            onClick={() => {
              onClose();
            }}
          />
        </div>
        温馨提示
      </Modal.Header>
      <Modal.Body className="py-8 px-6 space-y-8">
        <p className="text-sm text-center">是否关闭自动转账功能？</p>
        <div className="flex items-center justify-center space-x-5">
          <button
            onClick={onClose}
            className="w-36 border text-primary text-md border-primary rounded py-2"
          >
            取消
          </button>
          <button
            onClick={() => {
              onClose();
              onSuccess();
            }}
            className="w-36 border text-md bg-gradient-to-r from-primary to-primary-light text-white hover:from-primary-light transition-all duration-200 hover:to-primary rounded py-2"
          >
            确定
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ValueModal;
