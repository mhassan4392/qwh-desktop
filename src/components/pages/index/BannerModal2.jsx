import { Modal } from "@/components/modal";
import { AiOutlineClose } from "react-icons/ai";
const BannerModal2 = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onOutsideClick={onClose}
      containerClass="bg-black bg-opacity-50 !z-50"
    >
      <Modal.Header className="bg-gradient-to-r from-primary-light to-primary text-white text-center relative">
        <AiOutlineClose
          className="absolute mx-3 mt-1 text-xl right-0 cursor-pointer transform hover:rotate-180 transition-all duration-500"
          onClick={onClose}
        />
        【温馨提醒】
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col items-center space-y-8 justify-center py-3 px-4">
          <p className="text-center">
            尊敬的VIP会员：您好！为了您的资金以及隐私安全，极不推荐下载反诈骗App，若您被该App监控到支付流水会导致您的银行卡或支付宝被冻结，建议已下载的用户立即删除该App，避免造成损失！
          </p>
          <div className="flex items-center justify-center space-x-6">
            <button
              onClick={onClose}
              className="border border-primary rounded text-primary w-32 py-2"
            >
              关闭
            </button>
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-primary border border-primary to-primary-light hover:from-primary-light hover:to-primary w-32 py-2 rounded text-white mx-auto"
            >
              查看全部公告
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default BannerModal2;
