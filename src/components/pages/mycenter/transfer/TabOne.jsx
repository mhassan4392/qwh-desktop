import { useState } from "react";

import { AiFillWallet, AiFillLock } from "react-icons/ai";
import { BsArrowClockwise } from "react-icons/bs";
import TransferForm from "./TransferForm";
import ValueModal from "./ValueModal";
const TabOne = () => {
  const [value, setValue] = useState("自动免转");
  const [valueModal, setValueModal] = useState(false);
  const wallets = [
    {
      title: "中心钱包",
      icon: <AiFillWallet className="text-2xl text-light" />,
      balance: 0.0,
    },
    {
      title: "锁定钱包",
      icon: <AiFillLock className="text-2xl text-light" />,
      balance: 0.0,
    },
  ];

  const balances = [
    { title: "球王会体育", balance: 0.0 },
    { title: "OB体育", balance: 0.0 },
    { title: "FB体育", balance: 0.0 },
    { title: "eBET真人", balance: 0.0 },
    { title: "BG真人", balance: 0.0 },
    { title: "球王会真人", balance: 0.0 },
    { title: "雷火电竞", balance: 0.0 },
    { title: "IM电竞", balance: 0.0 },
    { title: "球王会电竞", balance: 0.0 },
    { title: "球王会彩票", balance: 0.0 },
    { title: "双赢彩票", balance: 0.0 },
    { title: "TCG彩票", balance: 0.0 },
    { title: "球王会棋牌", balance: 0.0 },
    { title: "IM棋牌", balance: 0.0 },
    { title: "博雅棋牌", balance: 0.0 },
    { title: "乐宝棋牌", balance: 0.0 },
    { title: "云游棋牌", balance: 0.0 },
    { title: "PG电子", balance: 0.0 },
    { title: "AG钱包", balance: 0.0 },
    { title: "球王会捕鱼", balance: 0.0 },
    { title: "博雅捕鱼", balance: 0.0 },
    { title: "球王会电子", balance: 0.0 },
  ];
  return (
    <div className="space-y-8 my-16">
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

      <div>{value == "手动转账" && <TransferForm />}</div>

      <div className="grid grid-cols-2 gap-5 items-center">
        {wallets.map((wallet, i) => (
          <div key={i} className="border rounded p-4 flex justify-between">
            <div className="flex items-center space-x-3">
              <span className="p-3 rounded-full bg-secondary bg-opacity-10">
                {wallet.icon}
              </span>
              <div>
                <p>{wallet.title}</p>
                <div className="flex items-center space-x-1">
                  <span className="text-3xl font-medium">{wallet.balance}</span>
                  <small>元</small>
                  <BsArrowClockwise className="text-secondary cursor-pointer" />
                </div>
              </div>
            </div>

            {i == 0 && (
              <div>
                <button className="bg-gradient-to-r from-secondary-light to-secondary px-4 py-1.5 rounded-full text-white text-xs">
                  一键回收
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div>
        <h3 className="mb-4">场馆钱包</h3>
        <div className="grid grid-cols-4 gap-5">
          {balances.map((balance, i) => (
            <div key={i} className="p-4 border rounded">
              <div className="flex items-center justify-between">
                <p className="text-light text-xs">{balance.title}</p>
                {value == "手动转账" && (
                  <button className="text-[9px] text-light hover:text-opacity-80">
                    一键转入
                  </button>
                )}
              </div>
              <div>
                <small>¥</small>{" "}
                <span className="text-2xl font-medium">{balance.balance}</span>
              </div>
              {value == "手动转账" && (
                <div className="flex items-center justify-end space-x-3 text-[9px]">
                  <p>转入</p>
                  <p>转出</p>
                </div>
              )}
            </div>
          ))}
        </div>
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
