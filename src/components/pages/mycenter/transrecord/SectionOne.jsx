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

  const [select, setSelect] = useState("存款");

  const [boxValue, setBoxValue] = useState("今日");

  return (
    <div className="p-4 space-y-5">
      <h2>交易记录</h2>
      <p className="text-xs">当前系统支持查询最近30日的交易记录</p>

      <div className="flex items-center space-x-3">
        <label htmlFor="">类型：</label>

        <Select
          values={[
            "存款",
            "取款",
            "转账",
            "红利",
            "返水",
            "上分",
            "下分",
            "调整",
            "充币",
            "提币",
            "兑换",
            "其他",
          ]}
          defaultValue="待领取"
          onChange={(value) => setSelect(value)}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <label htmlFor="">日期：</label>
          <DateRange dates={dates} onChange={(value) => setDates(value)} />
          <BoxSelect
            values={["今日", "昨日", "近7日", "近30日"]}
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
