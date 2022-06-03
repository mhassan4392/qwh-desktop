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

  const [select, setSelect] = useState("");
  const [select2, setSelect2] = useState("");

  const [boxValue, setBoxValue] = useState("今日");

  return (
    <div className="p-4 space-y-5">
      <h2>投注记录</h2>
      <p className="text-xs">当前系统支持查询最近30日的投注记录</p>

      <div className="flex items-center space-x-3">
        <label htmlFor="">类型：</label>

        <Select
          values={[
            "全部",
            "球王会体育",
            "OB体育",
            "FB体育",
            "雷火电竞",
            "IM电竞",
            "球王会电竞",
            "AG真人",
            "eBET真人",
            "BG真人",
            "球王会真人",
            "球王会彩票",
            "双赢彩票",
            "TCG彩票",
            "球王会棋牌",
            "IM棋牌",
            "博雅棋牌",
            "乐宝棋牌",
            "云游棋牌",
            "PG电子",
            "球王会电子",
            "AG捕鱼",
            "球王会捕鱼",
            "博雅捕鱼",
          ]}
          defaultValue="全部"
          onChange={(value) => setSelect(value)}
        />

        <label htmlFor="">注单状态：</label>

        <Select
          values={["全部", "已结算", "未结算"]}
          defaultValue="全部"
          onChange={(value) => setSelect2(value)}
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
