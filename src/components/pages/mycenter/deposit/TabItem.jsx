import { Tabs, TabsButtons, TabButton, TabsItems } from "@/components/tabs";
import mydeposit1 from "@/assets/images/pages/mycenter/deposit/ebpay.png";
import mydeposit2 from "@/assets/images/pages/mycenter/deposit/mydeposit2.png";
import mydeposit3 from "@/assets/images/pages/mycenter/deposit/mydeposit3.png";
import mydeposit4 from "@/assets/images/pages/mycenter/deposit/mydeposit4.png";
import mydeposit5 from "@/assets/images/pages/mycenter/deposit/mydeposit5.png";
import mydeposit6 from "@/assets/images/pages/mycenter/deposit/mydeposit6.png";
import mydeposit7 from "@/assets/images/pages/mycenter/deposit/mydeposit7.png";
import mydeposit8 from "@/assets/images/pages/mycenter/deposit/mydeposit8.png";
import mydeposit9 from "@/assets/images/pages/mycenter/deposit/mydeposit9.png";

import NestedTabItem from "./NestedTabItem";

const TabOne = () => {
  const tabs = [
    { title: "EBpay", image: mydeposit1 },
    { title: "易币付", image: mydeposit2 },
    { title: "虚拟币扫码", image: mydeposit3 },
    { title: "网银转账", image: mydeposit4 },
    { title: "银行卡转账", image: mydeposit5 },
    { title: "极速微信", image: mydeposit6 },
    { title: "极速支付宝", image: mydeposit7 },
    { title: "支付宝", image: mydeposit8 },
    { title: "QQ扫码", image: mydeposit9 },
  ];
  return (
    <div>
      <Tabs defaultTab={0}>
        <div className="mt-5 ml-4 text-sm">支付方式</div>
        <TabsButtons className="grid grid-cols-5 gap-3 px-4 bg-white items-center text-xs pt-1 pb-8 justify-center cursor-pointer overflow-hidden">
          {tabs.map((tab, i) => (
            <TabButton
              className="text-xs flex flex-col h-20 rounded-lg items-center justify-center border space-y-1"
              activeClass="bg-white text-black border-[#4080ff] icon-select-bg"
              key={i}
              tab={i}
            >
              {({ isActive }) => (
                <>
                  <img src={tab.image} className="w-8" alt="" />
                  <div
                    className={`text-[10px] ${
                      isActive ? "text-secondary" : ""
                    }`}
                  >
                    <div>{tab.title}</div>
                  </div>
                </>
              )}
            </TabButton>
          ))}
        </TabsButtons>
        <TabsItems>
          {tabs.map((tab, i) => (
            <NestedTabItem key={i} i={i} />
          ))}
        </TabsItems>
      </Tabs>
    </div>
  );
};

export default TabOne;
