import { Modal } from "@/components/modal";
import { VscChromeClose } from "react-icons/vsc";
const CardModal = ({ open, onClose, onSuccess }) => {
  return (
    <>
      <Modal
        containerClass="bg-black bg-opacity-50"
        open={open}
        onOutsideClick={onClose}
        className="!w-[500px]"
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
        <Modal.Body className="px-10 py-8 space-y-8">
          <p className="text-sm">
            公司银行卡不定期更换，每次充值请根据提交订单，生成的银行卡转账，切勿直接转账至之前转入的银行卡，并且不要使用微信进行转账存款，否则无法到账，概不负责！
          </p>
          <div className="text-center">
            <button
              onClick={onSuccess}
              className="bg-gradient-to-r from-primary-light to-primary text-white py-2 rounded-full px-10"
            >
              确定
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardModal;
