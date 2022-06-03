import common_img_nodate from "@/assets/images/pages/mycenter/welfarecenter/common_img_nodate.webp";
import { useState } from "react";
import Table from "../Table";

const SectionTwo = () => {
  const [cols] = useState([
    { header: "序号" },
    { header: "日期" },
    { header: "订单号" },
    { header: "红利类型" },
    { header: "红利金额" },
    { header: "红利信息" },
    { header: "红利信息" },
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
          <p className="text-sm">暂无记录</p>
        </div>
      )}
    </div>
  );
};

export default SectionTwo;
