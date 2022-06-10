import { useState } from "react";

import { AiOutlineWallet } from "react-icons/ai";
import { BsArrowClockwise, BsChevronDoubleDown } from "react-icons/bs";

import { Link } from "react-router-dom";

import feature_moneydraw from "@/assets/images/pages/mycenter/wallet/feature_moneydraw.webp";
import feature_moneytransfer from "@/assets/images/pages/mycenter/wallet/feature_moneytransfer.webp";
import feature_withdrawmoney from "@/assets/images/pages/mycenter/wallet/feature_withdrawmoney.webp";
import feature_carmoney from "@/assets/images/pages/mycenter/wallet/feature_carmoney.webp";
const CardOne = () => {
  const wallets = [
    {
      title: "中心钱包",
      icon: <AiOutlineWallet className="text-2xl text-light" />,
      balance: 0.0,
    },
    {
      title: "锁定钱包",
      icon: <AiOutlineWallet className="text-2xl text-light" />,
      balance: 0.0,
    },
  ];

  const features = [
    { title: "存款", image: feature_moneydraw, to: "/mycenter/deposit" },
    { title: "转账", image: feature_moneytransfer, to: "/mycenter/transfer" },
    {
      title: "取款",
      image: feature_withdrawmoney,
      to: "/mycenter/withdrawals",
    },
    { title: "取款卡", image: feature_carmoney, to: "/mycenter/cardmanage" },
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
    <div>
      <div className="bg-[#f2f5f8] py-4 px-4 rounded-t-lg">
        <h1 className="border-l-2 pl-2 border-gray-500 py-0 leading-none">
          中心钱包(元)
        </h1>
      </div>
      <div className="border border-t-0 p-3 space-y-5">
        <div className="flex space-x-3">
          <div className="flex gap-5 items-center border rounded p-4">
            {wallets.map((wallet, i) => (
              <div
                key={i}
                className={`rounded flex justify-between items-start px-4 ${
                  i == 0 ? "border-r" : ""
                }`}
              >
                <div>
                  <div>
                    <div className="flex items-center space-x-2">
                      {wallet.icon}
                      <p>{wallet.title}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-3xl font-medium">
                        {wallet.balance}
                      </span>
                      <small>元</small>
                      <BsArrowClockwise className="text-secondary cursor-pointer" />
                    </div>
                  </div>
                </div>

                {i == 0 && (
                  <div className="flex items-start">
                    <button className="bg-gradient-to-r from-[#fdbb69] to-[#ff6735] px-2 py-0.5 rounded-full text-white text-[8px] mr-1 ml-4">
                      一键回收
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center space-x-2 border rounded p-4 grow">
            {features.map((f, i) => (
              <Link
                to={f.to}
                key={i}
                className="flex flex-col items-center justify-center space-y-1 cursor-pointer"
              >
                <img src={f.image} className="w-12 hover:scale-105" alt="" />
                <p className="text-sm">{f.title}</p>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm mb-2">场馆钱包</h3>
          <div className="grid grid-cols-4 gap-5">
            {bl.map((balance, i) => (
              <div key={i} className="p-4 border rounded">
                <div className="flex items-center justify-between">
                  <p className="text-light text-xs">{balance.title}</p>
                </div>
                <div>
                  <small>¥</small>{" "}
                  <span className="text-2xl font-medium">
                    {balance.balance}
                  </span>
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
      </div>
    </div>
  );
};

export default CardOne;
