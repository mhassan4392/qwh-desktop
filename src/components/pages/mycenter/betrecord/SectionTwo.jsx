import common_img_nodate from "@/assets/images/pages/mycenter/welfarecenter/common_img_nodate.webp";
import { useState } from "react";
import Table from "../Table";

const SectionTwo = () => {
  const [cols] = useState([
    { header: "日期" },
    { header: "订单号" },
    { header: "平台" },
    { header: "投注内容" },
    { header: "注单状态" },
    { header: "投注" },
    { header: "派彩" },
    { header: "有效投注额" },
  ]);

  const items = [];
  return (
    <div className="p-4 flex flex-col h-full overflow-hidden">
      <div>
        <Table cols={cols} />
      </div>
      {items.length == 0 && (
        <div className="grow h-full flex items-center justify-center flex-col">
          <img src={common_img_nodate} className="w-52" alt="" />
          <p className="text-sm">暂时没有新的投注记录</p>
        </div>
      )}
    </div>
  );
};

export default SectionTwo;
