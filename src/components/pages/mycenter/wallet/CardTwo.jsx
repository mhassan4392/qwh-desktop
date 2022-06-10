import { useState } from "react";

import { AiOutlineWallet } from "react-icons/ai";
import { BsArrowClockwise, BsChevronDoubleDown } from "react-icons/bs";

import { Link } from "react-router-dom";

import currency_recharge from "@/assets/images/pages/mycenter/wallet/currency_recharge.webp";
import currency_withdraw from "@/assets/images/pages/mycenter/wallet/currency_withdraw.webp";
import currency_exchange from "@/assets/images/pages/mycenter/wallet/currency_exchange.webp";
import currency_address from "@/assets/images/pages/mycenter/wallet/currency_address.webp";

import f_1 from "@/assets/images/pages/mycenter/wallet/f_1.webp";
import f_2 from "@/assets/images/pages/mycenter/wallet/f_2.webp";
import f_3 from "@/assets/images/pages/mycenter/wallet/f_3.webp";

import virtual_currency_divider_right from "@/assets/images/pages/mycenter/wallet/virtual_currency_divider_right.webp";
import virtual_currency_divider_left from "@/assets/images/pages/mycenter/wallet/virtual_currency_divider_left.webp";

import virtual_currency_wallet from "@/assets/images/pages/mycenter/withdrawals/virtual_currency_wallet.webp";
import lock_wallet from "@/assets/images/pages/mycenter/withdrawals/lock_wallet.webp";
const CardTwo = () => {
  const wallets = [
    {
      title: "虚拟币钱包",
      image: virtual_currency_wallet,
      balance: 0.0,
    },
    {
      title: "锁定钱包",
      image: lock_wallet,
      balance: 0.0,
    },
  ];

  const features = [
    {
      title: "充币",
      image: currency_recharge,
      to: "/mycenter/deposit",
      bg: "#fffbf5",
      border: "#ffd5a3",
    },
    {
      title: "提币",
      image: currency_withdraw,
      to: "/mycenter/withdrawals",
      bg: "#f8f9ff",
      border: "#cad6ff",
    },
    {
      title: "兑换",
      image: currency_exchange,
      to: "/mycenter/transfer",
      bg: "#fff9f9",
      border: "#ffceca",
    },
    {
      title: "地址管理",
      image: currency_address,
      to: "/mycenter/cardmanage",
      bg: "#f5fcff",
      border: "#b4e7ff",
    },
  ];

  const features2 = [
    {
      title: "用于存放USDT数字货币",
      image: f_1,
      subtitle: "安全稳定、不受监管",
    },
    {
      title: "USDT随意充币/提币",
      image: f_2,
      subtitle: "兑换至【中心钱包】即可游戏",
    },
    {
      title: "与中心钱包间兑换",
      image: f_3,
      subtitle: "无手续费，秒到账",
    },
  ];

  return (
    <div>
      <div className="bg-[#f2f5f8] py-4 px-4 rounded-t-lg">
        <h1 className="border-l-2 pl-2 border-gray-500 py-0 leading-none">
          虚拟币钱包(USDT)
        </h1>
      </div>
      <div className="border border-t-0 p-3 space-y-5">
        <div className="grid grid-cols-2 gap-5 items-center">
          {wallets.map((wallet, i) => (
            <div key={i} className="border rounded p-4 flex justify-between">
              <div className="flex items-center space-x-3">
                <img src={wallet.image} className="w-10" alt="" />
                <div>
                  <p>{wallet.title}</p>
                  <div className="flex items-center space-x-1">
                    <span className="text-3xl font-medium">
                      {wallet.balance}
                    </span>
                    <span className="text-light text-md mt-2">USDT</span>
                    <BsArrowClockwise className="text-secondary mt-2 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-5">
          {features.map((f, i) => (
            <Link
              to={f.to}
              key={i}
              className="space-x-1 flex items-center justify-center border rounded py-2 hover:shadow-lg transition-all duration-300"
              style={{
                backgroundColor: f.bg,
                borderColor: f.border,
                boxShadow: f.border,
              }}
            >
              <img src={f.image} className="w-12" alt="" />
              <p>{f.title}</p>
            </Link>
          ))}
        </div>

        <div>
          <div className="flex items-center justify-center space-x-5 my-10">
            <img src={virtual_currency_divider_left} className="w-32" alt="" />
            <h3>虚拟币钱包优势</h3>
            <img src={virtual_currency_divider_right} className="w-32" alt="" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {features2.map((f, i) => (
            <div
              key={i}
              className="flex items-center justify-center space-x-2 text-xs"
            >
              <img src={f.image} className="w-14" alt="" />
              <div className="space-y-1">
                <p>{f.title}</p>
                <p>{f.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
