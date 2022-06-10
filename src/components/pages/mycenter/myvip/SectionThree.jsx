import vip_icon_help from "@/assets/images/pages/mycenter/vip_icon_help.svg";
import { Link } from "react-router-dom";

import Select from "../Select";

const SectionThree = ({ vip = 0 }) => {
  const features = [
    { title: "50.00", subtitle: "最低转账" },
    { title: "38.00%", subtitle: "红利比例" },
    { title: "38.00", subtitle: "最高奖金" },
    { title: "5.00倍", subtitle: "流水倍数" },
    { title: "仅一次", subtitle: "次数限制" },
    { title: "指定场馆", subtitle: "游戏场馆" },
  ];
  return (
    <div className="p-4 flex flex-col h-full">
      <h1 className="flex items-center space-x-2">
        <span>VIP{vip}晋级优惠</span>
        <img src={vip_icon_help} alt="" />
      </h1>

      {vip == 0 && (
        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
          <p className="text-sm">当前等级没有晋级优惠</p>
          <Link
            to="/mycenter/myvip/vipdetail"
            className="px-8 py-2 border border-primary rounded text-primary hover:text-opacity-60 text-md transition-all duration-300"
          >
            更多VIP特权
          </Link>
        </div>
      )}

      {vip > 0 && (
        <>
          <div className="grid grid-cols-6 gap-5 my-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center space-y-1"
              >
                <h3 className="text-xl font-medium text-secondary">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500">{f.subtitle}</p>
              </div>
            ))}
          </div>

          <h4>选择场馆</h4>

          <div className="my-5">
            <Select disabled defaultValue="等级不符" />
          </div>

          <button className="bg-primary bg-opacity-50 text-white w-64 rounded py-2">
            等级不符
          </button>
        </>
      )}
    </div>
  );
};

export default SectionThree;
