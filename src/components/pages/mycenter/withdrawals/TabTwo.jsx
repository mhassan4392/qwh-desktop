import finance_exchange_usdt from "@/assets/images/pages/mycenter/transfer/finance_exchange_usdt.webp";
import finance_exchange_yen from "@/assets/images/pages/mycenter/transfer/finance_exchange_yen.webp";

import finance_exchange_1 from "@/assets/images/pages/mycenter/transfer/finance_exchange_f1.webp";
import finance_exchange_2 from "@/assets/images/pages/mycenter/transfer/finance_exchange_f2.webp";
import finance_exchange_3 from "@/assets/images/pages/mycenter/transfer/finance_exchange_f3.webp";

import virtual_currency_wallet from "@/assets/images/pages/mycenter/withdrawals/virtual_currency_wallet.webp";
import lock_wallet from "@/assets/images/pages/mycenter/withdrawals/lock_wallet.webp";

import info from "@/assets/images/pages/mycenter/info.webp";
import plus from "@/assets/images/pages/mycenter/plus.webp";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { BsArrowClockwise } from "react-icons/bs";

const usdt = {
  title: "中心钱包",
  image: finance_exchange_usdt,
  balance: 0.0,
};

const yen = {
  title: "虚拟币钱包",
  image: finance_exchange_yen,
  balance: 0.0,
};

const TabTwo = () => {
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

  const {
    register,
    formState: { isValid },
    setValue,
  } = useForm({ mode: "onChange" });

  const [exchange, setExchange] = useState(false);
  const [value1, setValue1] = useState({ ...yen });
  const [value2, setValue2] = useState({ ...usdt });

  useEffect(() => {
    if (exchange) {
      setValue1({ ...usdt });
      setValue2({ ...yen });
    } else {
      setValue2({ ...usdt });
      setValue1({ ...yen });
    }
  }, [exchange]);

  const features = [
    {
      title: "随意兑换",
      subtitle: "兑至中心钱包即可游戏",
      image: finance_exchange_1,
    },
    {
      title: "免手续费",
      subtitle: "汇率稳定，币种随意切换",
      image: finance_exchange_2,
    },
    {
      title: "无延迟",
      subtitle: "兑换无延迟，秒到账",
      image: finance_exchange_3,
    },
  ];
  return (
    <>
      <div className="my-10 space-y-5">
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

        <div className="space-y-2">
          <p>到账虚拟币地址</p>
          <button className="w-64 py-5 rounded border flex items-center justify-center space-x-1">
            <img src={plus} className="w-5" alt="" />
            <span>添加虚拟币地址</span>
          </button>
        </div>

        <div className="flex items-center space-x-1">
          <img src={info} className="w-5" alt="" />
          <p className="text-xs">请先绑定一个虚拟币地址，用于收款</p>
        </div>
      </div>
    </>
  );
};

export default TabTwo;
