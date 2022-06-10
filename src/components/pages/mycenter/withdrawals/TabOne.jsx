import { useState } from "react";

import plus from "@/assets/images/pages/mycenter/plus.webp";
import info from "@/assets/images/pages/mycenter/info.webp";

import { AiFillWallet, AiFillLock } from "react-icons/ai";
import {
  BsArrowClockwise,
  BsChevronDoubleDown,
  BsExclamation,
} from "react-icons/bs";
import TransferForm from "./TransferForm";
import WithdrawalModal from "./WithdrawalModal";
const TabOne = () => {
  const [value, setValue] = useState(0);
  const [modal, setModal] = useState(false);
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

  const [more, setMore] = useState(false);

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

  const bl = more ? balances : balances.slice(0, 4);
  return (
    <div className="space-y-8 my-16">
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
          {bl.map((balance, i) => (
            <div key={i} className="p-4 border rounded">
              <div className="flex items-center justify-between">
                <p className="text-light text-xs">{balance.title}</p>
              </div>
              <div>
                <small>¥</small>{" "}
                <span className="text-2xl font-medium">{balance.balance}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <div
            className="flex space-x-1 text-secondary cursor-pointer items-center my-4"
            onClick={() => setMore(!more)}
          >
            <p>收起</p>
            <BsChevronDoubleDown
              className={`transform transition-all duration-300 ${
                more ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-5">
        <label htmlFor="">取款方式</label>
        <div className="flex items-center space-x-2">
          {["极速取款", "EBpay提币"].map((v, i) => (
            <div
              key={i}
              onClick={() => setValue(i)}
              className={`px-4 py-1.5 border-2 rounded cursor-pointer shadow hover:border-secondary ${
                i == value ? "border-secondary icon-select-bg" : ""
              }`}
            >
              {v}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <p>到账银行卡</p>
        <button
          onClick={() => {
            if (value == 0) {
              setModal(true);
            }
          }}
          className="w-64 py-5 rounded border flex items-center justify-center space-x-1"
        >
          <img src={plus} className="w-5" alt="" />
          <span>
            {value == 0 && "添加银行卡"} {value == 1 && "添加EBpay地址"}
          </span>
        </button>

        <WithdrawalModal open={modal} onClose={() => setModal(false)} />
      </div>

      <div className="flex items-center space-x-1">
        <img src={info} className="w-5" alt="" />
        <p className="text-xs">
          {value == 0 && "请先绑定一张银行卡，用于收款"}{" "}
          {value == 1 && "请先绑定一个EBpay地址，用于收款"}
        </p>
      </div>
    </div>
  );
};

export default TabOne;
