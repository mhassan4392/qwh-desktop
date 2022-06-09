import { useEffect, useState } from "react";
import Select from "../Select";

import { RiExchangeFill } from "react-icons/ri";

import { useForm } from "react-hook-form";

const TransferForm = () => {
  const options1 = [
    "中心钱包",
    "球王会体育",
    "OB体育",
    "FB体育",
    "eBET真人",
    "BG真人",
    "球王会真人",
    "雷火电竞",
    "IM电竞",
    "球王会电竞",
    "球王会彩票",
    "双赢彩票",
    "TCG彩票",
    "球王会棋牌",
    "IM棋牌",
    "博雅棋牌",
    "乐宝棋牌",
    "云游棋牌",
    "PG电子",
    "AG钱包",
    "球王会捕鱼",
    "博雅捕鱼",
    "球王会电子",
  ];
  const options2 = [
    "球王会体育",
    "OB体育",
    "FB体育",
    "eBET真人",
    "BG真人",
    "球王会真人",
    "雷火电竞",
    "IM电竞",
    "球王会电竞",
    "球王会彩票",
    "双赢彩票",
    "TCG彩票",
    "球王会棋牌",
    "IM棋牌",
    "博雅棋牌",
    "乐宝棋牌",
    "云游棋牌",
    "PG电子",
    "AG钱包",
    "球王会捕鱼",
    "博雅捕鱼",
    "球王会电子",
  ];

  const [selects1, setSelects1] = useState([...options1]);
  const [selects2, setSelects2] = useState([...options2]);

  const [select1, setSelect1] = useState("中心钱包");
  const [select2, setSelect2] = useState("球王会体育");

  const [exchange, setExchange] = useState(false);

  const {
    register,
    formState: { isValid },
    setValue,
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    if (exchange) {
      setSelects1([...options2]);
      setSelects2([...options1]);
      setSelect1("球王会体育");
      setSelect2("中心钱包");
    } else {
      setSelects1([...options1]);
      setSelects2([...options2]);
      setSelect1("中心钱包");
      setSelect2("球王会体育");
    }
  }, [exchange]);
  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm mb-1">转账方向</p>

        <div className="flex items-center justify-between">
          <Select values={selects1} defaultValue={select1} />

          <RiExchangeFill
            className="text-3xl text-light shrink-0 cursor-pointer"
            onClick={() => setExchange(!exchange)}
          />

          <Select values={selects2} defaultValue={select2} />

          {/* <div className="flex items-center space-x-1 shrink-0">
            <span className="rounded-full bg-gradient-to-r from-secondary-light to-secondary w-5 h-5 text-sm flex items-center justify-center">
              !
            </span>
            <p className="text-xs">场馆钱包之间不能直接互转</p>
          </div> */}
        </div>
      </div>

      <div>
        <p className="text-sm mb-1">转账金额</p>
        <div className="w-96 relative flex items-center">
          <span
            className="text-xs absolute right-4 text-secondary cursor-pointer"
            onClick={() => setValue("amount", 0.0)}
          >
            最大金额
          </span>
          <input
            type="number"
            className="w-full !h-14 text-xl font-semibold placeholder:text-light placeholder:font-normal pr-20"
            placeholder="输入转账金额"
            {...register("amount", {
              required: true,
            })}
          />
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
          立即转账
        </button>
      </div>
    </div>
  );
};

export default TransferForm;
