import { useState, useRef, useEffect } from "react";
import { Modal } from "@/components/modal";
import FourDigitInput from "./Input";
const CodeModal = ({ open, onClose, setTimer = () => {} }) => {
  const [code, setCode] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      inputRef.current.focus();
      inputRef.current.click();
    }
  }, [open]);
  return (
    <div>
      <Modal
        open={open}
        onClick={() => {
          inputRef.current.click();
          inputRef.current.focus();
        }}
        onOutsideClick={() => {
          setCode("");
          onClose();
        }}
        containerClass="!bg-black !bg-opacity-75"
      >
        <Modal.Header className="bg-gradient-to-r from-primary-light to-primary text-white text-center text-lg">
          安全校验
        </Modal.Header>
        <Modal.Body className="text-center">
          <div className="space-y-3">
            <p>
              请补全
              <span className="text-primary">手机号中间四位</span>
              ，确保您的账户安全
            </p>
            <p>
              185<span className="text-primary">****</span>8857
            </p>
          </div>

          <div className="px-4 py-5 w-64 mx-auto">
            <FourDigitInput focus={open} onChange={(value) => setCode(value)} />
          </div>

          <input
            autoFocus
            type="number"
            ref={inputRef}
            className="absolute"
            style={{ transform: "translateX(-5000px)" }}
          />

          <div>
            <button
              onClick={() => {
                if (code.length == 4) {
                  setCode("");
                  onClose();
                  setTimer();
                }
              }}
              disabled={code.length != 4}
              className={`w-64 text-center py-2 rounded text-white ${
                code.length != 4
                  ? "!bg-opacity-50 !bg-primary"
                  : "bg-gradient-to-r from-primary-light to-primary"
              }`}
            >
              确定
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CodeModal;
