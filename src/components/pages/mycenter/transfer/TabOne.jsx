import { useState } from "react";

import { AiFillWallet, AiFillLock } from "react-icons/ai";
import ValueModal from "./ValueModal";
const TabOne = () => {
  const [value, setValue] = useState("自动免转");
  const [valueModal, setValueModal] = useState(false);
  const wallets = [
    { title: "中心钱包", icon: AiFillWallet },
    { title: "锁定钱包", icon: AiFillLock },
  ];
  return (
    <div>
      <div className="flex items-center space-x-5">
        <label htmlFor="">转账模式</label>
        <div className="flex items-center space-x-2">
          {["自动免转", "手动转账"].map((v, i) => (
            <div
              key={i}
              onClick={() => {
                if (i == 0) {
                  setValue(v);
                } else {
                  setValueModal(true);
                }
              }}
              className={`px-4 py-1.5 border-2 rounded cursor-pointer shadow hover:border-secondary ${
                v == value ? "border-secondary icon-select-bg" : ""
              }`}
            >
              {v}
            </div>
          ))}
        </div>
      </div>

      <div>
        <div></div>
      </div>

      <ValueModal
        open={valueModal}
        onClose={() => setValueModal(false)}
        onSuccess={() => {
          setValueModal(false);
          setValue("手动转账");
        }}
      />
    </div>
  );
};

export default TabOne;
