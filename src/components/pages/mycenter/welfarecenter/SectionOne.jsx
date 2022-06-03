import common_icon_welfareCenter_pending from "@/assets/images/pages/mycenter/welfarecenter/common_icon_welfareCenter_pending.webp";
import common_icon_welfareCenter_distributed from "@/assets/images/pages/mycenter/welfarecenter/common_icon_welfareCenter_distributed.webp";

import { useState } from "react";

import DateRange from "../DateRange";
import BoxSelect from "../BoxSelect";
import Select from "../Select";

const SectionOne = () => {
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [select, setSelect] = useState("待领取");

  const [boxValue, setBoxValue] = useState("今日");

  const balances = [
    {
      title: "待领取",
      balance: "0.00",
      image: common_icon_welfareCenter_pending,
    },
    {
      title: "累计领取",
      balance: "0.00",
      image: common_icon_welfareCenter_distributed,
    },
  ];
  return (
    <div className="p-4 space-y-5">
      <h2>福利中心</h2>

      <div className="flex items-center p-3 border rounded-lg grow w-max">
        {balances.map((balance, i) => (
          <div
            key={i}
            className={`flex items-center space-x-2 pr-32 pl-6  ${
              i == 0 ? "border-r" : ""
            }`}
          >
            <img src={balance.image} className="w-16" alt="" />
            <div>
              <p>{balance.title}</p>
              <div className="text-xl text-primary font-semibold">
                <small className="text-sm">￥</small> {balance.balance}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-3">
        <label htmlFor="">状态：</label>

        <Select
          values={["待领取", "领取成功", "已过期"]}
          defaultValue="待领取"
          onChange={(value) => setSelect(value)}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <label htmlFor="">日期：</label>
          <DateRange dates={dates} onChange={(value) => setDates(value)} />
          <BoxSelect
            values={["今日", "昨日", "近7日", "近30日", "全部"]}
            onChange={(v) => setBoxValue(v)}
            defaultValue="今日"
          />
        </div>
        <div className="flex items-center space-x-3">
          <button className="w-24 bg-gradient-to-r from-primary-light to-primary hover:from-primary hover:to-primary-light h-10 text-xs rounded-md text-white transition-all duration-300">
            查询
          </button>

          <button className="w-24 h-10 text-xs rounded-md hover:text-primary hover:border-primary border transition-all duration-300">
            重置
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
