import { useState } from "react";
import { Modal } from "@/components/modal";
import { VscChromeClose } from "react-icons/vsc";
import BoxCheckboxes from "../../../checkbox/BoxCheckboxes";
import Select from "../Select";
import CodeModal from "../../auth/CodeModal";
import info from "@/assets/images/pages/mycenter/info.webp";
const WithdrawalModal = ({ open, onClose }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Modal
        containerClass="bg-black bg-opacity-50"
        size="sm"
        open={open}
        onOutsideClick={onClose}
        className="!w-[600px]"
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
          添加银行卡
        </Modal.Header>
        <Modal.Body className="px-10 py-8">
          <div className="flex my-4">
            <label
              htmlFor=""
              className="mt-2 basis-[20%] text-right mr-4 text-sm"
            >
              持卡人姓名：
            </label>
            <div className="flex flex-col grow">
              <input
                type="text"
                name=""
                className="w-full"
                placeholder="请输入持卡人姓名"
                id=""
              />
              <div className="text-xs text-light mt-1.5">
                为了您的资金能够迅速到账，请确保填写的姓名与银行卡的开户姓名一致
              </div>
            </div>
          </div>

          <div className="flex my-4">
            <label
              htmlFor=""
              className="mt-2 basis-[20%] text-right mr-4 text-sm"
            >
              银行卡号：
            </label>
            <div className="flex flex-col grow">
              <input
                type="text"
                name=""
                className="w-full"
                placeholder="请输入银行卡号"
                id=""
              />
              <div className="text-xs text-light mt-1.5">
                请认真校对银行卡号，卡号错误资金将无法到账
              </div>
            </div>
          </div>

          <div className="flex my-4">
            <label
              htmlFor=""
              className="mt-2 basis-[20%] text-right mr-4 text-sm"
            >
              银行卡类型：
            </label>
            <div className="flex flex-col grow">
              <BoxCheckboxes values={["储蓄卡", "信用卡"]} />
              <div className="text-xs text-light mt-1.5">
                请选择正确的银行卡类型，否则会造成无法提款的问题
              </div>
            </div>
          </div>

          <div className="flex my-4">
            <label
              htmlFor=""
              className="mt-2 basis-[20%] text-right mr-4 text-sm"
            >
              开户银行：
            </label>
            <div className="flex flex-col grow">
              <Select
                values={[
                  "中国银行",
                  "建设银行",
                  "农业银行",
                  "工商银行",
                  "中国邮政储蓄银行",
                  "招商银行",
                  "交通银行",
                  "中信银行",
                  "平安银行",
                  "光大银行",
                  "浦发银行",
                ]}
                defaultValue="中国银行"
              />
            </div>
          </div>

          <div className="flex my-4">
            <label
              htmlFor=""
              className="mt-2 basis-[20%] text-right mr-4 text-sm"
            >
              银行卡类型：
            </label>
            <div className="flex flex-col grow">
              <input
                type="text"
                name=""
                disabled
                className="w-full placeholder:text-lg placeholder:text-black bg-gray-100"
                placeholder="185****8857"
                id=""
              />
              <div className="text-xs text-light mt-1.5">
                请认真校对银行卡号，卡号错误资金将无法到账
              </div>
            </div>
          </div>

          <div className="flex my-4">
            <label
              htmlFor=""
              className="mt-2 basis-[20%] text-right mr-4 text-sm"
            >
              验证码：
            </label>
            <div className="flex flex-col grow relative">
              <span
                className="absolute right-0 top-3.5 text-xs text-light mr-2 cursor-pointer"
                onClick={() => setModal(true)}
              >
                获取验证码
              </span>
              <input
                type="text"
                name=""
                className="w-full"
                placeholder="验证码"
                id=""
              />
            </div>
          </div>

          <div className="text-xs text-center flex items-center justify-center space-x-1 text-light my-5">
            <img src={info} className="w-5" alt="" />
            <span>有任何疑问请联系</span>
            <span to="/" className="text-secondary cursor-pointer">
              在线客服
            </span>
          </div>

          <div className="flex items-center justify-center my-5">
            <button className="w-64 bg-primary bg-opacity-50 py-2 text-white rounded">
              确认提交
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <CodeModal open={modal} onClose={() => setModal(false)} />
    </>
  );
};

export default WithdrawalModal;
