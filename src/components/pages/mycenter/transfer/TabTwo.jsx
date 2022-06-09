import finance_exchange_usdt from "@/assets/images/pages/mycenter/transfer/finance_exchange_usdt.webp";
import finance_exchange_yen from "@/assets/images/pages/mycenter/transfer/finance_exchange_yen.webp";

import finance_exchange_1 from "@/assets/images/pages/mycenter/transfer/finance_exchange_f1.webp";
import finance_exchange_2 from "@/assets/images/pages/mycenter/transfer/finance_exchange_f2.webp";
import finance_exchange_3 from "@/assets/images/pages/mycenter/transfer/finance_exchange_f3.webp";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { RiExchangeFill } from "react-icons/ri";

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
        <div className="space-y-2">
          <p>兑换方向</p>
          <div className="flex items-center space-x-10">
            <div className="border rounded py-8 w-52 flex flex-col items-center justify-center">
              <p className="space-x-1">
                <small className="text-light">从</small>
                <span>{value1.title}</span>
              </p>
              <div className="flex items-center space-x-1">
                <img src={value1.image} className="w-5" alt="" />
                <h3 className="text-xl font-medium">{value1.balance}</h3>
              </div>
            </div>

            <RiExchangeFill
              className="text-3xl text-light shrink-0 cursor-pointer"
              onClick={() => setExchange(!exchange)}
            />

            <div className="border rounded py-8 w-52 flex flex-col items-center justify-center">
              <p className="space-x-1">
                <small className="text-light">到</small>
                <span>{value2.title}</span>
              </p>
              <div className="flex items-center space-x-1">
                <img src={value2.image} className="w-5" alt="" />
                <h3 className="text-xl font-medium">{value2.balance}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p>兑换金额</p>
          <div className="w-96 relative flex items-center">
            <img
              src={exchange ? finance_exchange_usdt : finance_exchange_yen}
              className="absolute left-3 w-5"
            />
            <input
              {...register("amount", { required: true })}
              type="number"
              placeholder={
                !exchange ? "请输入兑换人民币金额" : "请输入兑换USDT金额"
              }
              className="!h-14 w-full pl-10 pr-20 text-xl font-medium"
            />
            <span
              className="absolute right-3 text-secondary cursor-pointer text-xs"
              onClick={() => setValue("amount", 0.0)}
            >
              最大金额
            </span>
          </div>
          <div>
            参考汇率：{" "}
            <span className="font-medium">{exchange ? "6.71" : "6.63"}</span>
          </div>
        </div>

        <div>
          <button
            disabled={!isValid}
            className={`w-96 text-white rounded h-14 ${
              isValid
                ? "bg-gradient-to-r from-primary-light to-primary"
                : "bg-primary bg-opacity-50"
            }`}
          >
            立即兑换
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 my-16">
        {features.map((f, i) => (
          <div className="flex items-center justify-between bg-common-bg rounded py-5 px-3">
            <div className="space-y-2">
              <h3 className="truncate font-medium">{f.title}</h3>
              <p className="truncate text-light text-xs">{f.subtitle}</p>
            </div>
            <img src={f.image} className="w-8 shrink-0" alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default TabTwo;
