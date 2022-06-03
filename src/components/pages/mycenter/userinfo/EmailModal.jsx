import { useEffect } from "react";

import { Modal } from "@/components/modal";
import { VscChromeClose } from "react-icons/vsc";
import { useForm } from "react-hook-form";

const EmailModal = ({ open, onClose }) => {
  const {
    register,
    getFieldState,
    setValue,
    trigger,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    if (open) {
      setValue("code", "");
    }
  }, [open]);
  return (
    <Modal
      open={open}
      onOutsideClick={onClose}
      containerClass="bg-black bg-opacity-25"
    >
      <Modal.Header className="bg-gradient-to-r from-primary-light to-primary text-white relative px-5 flex items-center justify-center font-semibold">
        <div className="absolute inset-0 flex items-center justify-end px-3">
          <VscChromeClose
            className="text-2xl cursor-pointer transform hover:rotate-180 transition-all duration-300"
            onClick={onClose}
          />
        </div>
        电子邮箱
      </Modal.Header>
      <Modal.Body className="flex flex-col items-center justify-center space-y-5 py-8">
        <p className="text-xs text-center">
          为了您的安全，信息在确认后将无法修改，如需帮助请联系客服
        </p>

        <div className="w-2/3">
          <input
            type="text"
            placeholder="电子邮箱"
            className="w-full"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <div className="error-element">{errors.email.message}</div>
          )}
        </div>

        <div className="relative flex flex-col w-2/3">
          <input
            type="text"
            placeholder="验证码"
            className="w-full pr-20"
            {...register("code", { required: "Code is required" })}
          />
          {errors.code && (
            <div className="error-element w-full">{errors.code.message}</div>
          )}
          <span
            className="absolute right-2 text-sm text-secondary cursor-pointer mt-2.5"
            onClick={async () => {
              await trigger("email");
              const email = getFieldState("email");
            }}
          >
            获取验证码
          </span>
        </div>

        <div className="w-2/3">
          <button
            disabled={!isValid}
            className={`w-full bg-primary py-2 text-white rounded ${
              !isValid ? "bg-opacity-50" : ""
            }`}
          >
            完成
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EmailModal;
