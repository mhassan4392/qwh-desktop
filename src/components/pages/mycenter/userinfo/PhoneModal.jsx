import { Modal } from "@/components/modal";
import { VscChromeClose } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import FourDigitInput from "../../../FourDigitInput";

const PhoneModal = ({ open, onClose }) => {
  const [getCode, setGetCode] = useState(false);
  const [digits, setDigits] = useState("");
  const {
    register,
    getFieldState,
    trigger,
    setValue,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    if (open) {
      setGetCode(false);
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
            onClick={() => {
              if (getCode) {
                setGetCode(false);
              } else {
                onClose();
              }
            }}
          />
        </div>
        {getCode ? "安全校验" : "电子邮箱"}
      </Modal.Header>
      <Modal.Body className="flex flex-col items-center justify-center space-y-5 py-8">
        {!getCode && (
          <>
            <p className="text-xs text-center">
              为了您的安全，信息在确认后将无法修改，如需帮助请联系客服
            </p>

            <div className="w-2/3">
              <input
                type="text"
                placeholder="电子邮箱"
                className="w-full"
                {...register("phone", { required: "Phone is required" })}
              />
              {errors.phone && (
                <div className="error-element">{errors.phone.message}</div>
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
                <div className="error-element w-full">
                  {errors.code.message}
                </div>
              )}
              <span
                className="absolute right-2 text-sm text-secondary cursor-pointer mt-2.5"
                onClick={async () => {
                  await trigger("phone");
                  const phone = getFieldState("phone");
                  console.log(phone);
                  if (!phone.invalid) {
                    setGetCode(true);
                  }
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
          </>
        )}

        {getCode && (
          <>
            <p>
              请补全
              <span className="text-primary">手机号中间四位</span>
              ，确保您的账户安全
            </p>
            <p>
              185<span className="text-primary">****</span>8857
            </p>
            <div className="w-1/2">
              <FourDigitInput
                focus={open}
                onChange={(value) => setDigits(value)}
              />
            </div>

            <div>
              <button
                onClick={() => {
                  if (digits.length == 4) {
                    setDigits("");
                    setGetCode(false);
                  }
                }}
                disabled={digits.length != 4}
                className={`w-64 text-center py-2 rounded text-white ${
                  digits.length != 4
                    ? "!bg-opacity-50 !bg-primary"
                    : "bg-gradient-to-r from-primary-light to-primary"
                }`}
              >
                确定
              </button>
            </div>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default PhoneModal;
