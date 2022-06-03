import common_img_nodate from "@/assets/images/pages/mycenter/welfarecenter/common_img_nodate.webp";
import { useState } from "react";
import Table from "../Table";

const SectionTwo = () => {
  const [cols] = useState([
    { header: "序号", value: "one" },
    { header: "日期", value: "two" },
    { header: "订单号", value: "three" },
    { header: "交易类型", value: "four" },
    { header: "金额", value: "five" },
    {
      header: "状态",
      value: "six",
      render: ({ item }) => <span className="text-secondary">{item.six}</span>,
    },
  ]);

  const items = [
    {
      one: 1,
      two: "2022-06-03 19:52:15",
      three: "SF202206031952150022043",
      four: "虚拟币充值 (USDT/TRC20)	",
      five: "23,324.00元",
      six: "待确认",
    },
  ];
  return (
    <div className="p-4 flex flex-col h-full overflow-hidden">
      <div>
        <Table cols={cols} items={items} />
      </div>
      {items.length == 0 && (
        <div className="grow h-full flex items-center justify-center flex-col">
          <img src={common_img_nodate} className="w-52" alt="" />
          <p className="text-sm">暂时没有新的存款记录</p>
        </div>
      )}
    </div>
  );
};

export default SectionTwo;
