import {
  Tabs,
  TabsButtons,
  TabButton,
  TabsItems,
  TabItem,
} from "@/components/tabs";
import { useState } from "react";

import common_img_nodate from "@/assets/images/pages/mycenter/common_img_nodate.webp";

const TabsSection = () => {
  const tabs = ["银行卡", "虚拟币", "EBpay"];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="p-4 space-y-5 flex flex-col h-full overflow-hidden">
      <div className="flex items-center space-x-4">
        <h2 className="font-semibold">取款卡</h2>
        <p className="text-sm text-light">
          {activeTab == 0 && "最多支持绑定10张银行卡"}
          {activeTab == 1 && "最多支持绑定5条虚拟币地址"}
          {activeTab == 2 && "最多支持绑定5条EBpay地址"}
        </p>
      </div>
      <Tabs className="grow h-full flex flex-col overflow-hidden">
        <TabsButtons className="flex items-center border-b">
          {tabs.map((tab, i) => (
            <TabButton
              onClick={() => setActiveTab(i)}
              key={i}
              tab={i}
              className="border w-36 py-3 text-center relative"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute inset-0 flex items-end justify-end">
                      <span className="w-full h-0.5 bg-primary"></span>
                    </div>
                  )}
                  {tab}
                </>
              )}
            </TabButton>
          ))}
        </TabsButtons>
        <TabsItems className="h-full overflow-hidden grow">
          {tabs.map((tab, i) => (
            <TabItem
              key={i}
              tab={i}
              defaultTab={i == 0}
              className="h-full overflow-hidden"
            >
              <div className="h-full flex flex-col items-center justify-center">
                <img src={common_img_nodate} className="w-48" alt="" />
                <p className="text-sm mb-5">
                  {activeTab == 0 && "暂无绑定银行卡"}
                  {activeTab == 1 && "暂无绑定虚拟币地址"}
                  {activeTab == 2 && "暂无绑定EBpay地址"}
                </p>
                <button className="w-64 bg-gradient-to-r from-primary-light to-primary text-white py-2 rounded text-sm">
                  {activeTab == 0 && "添加银行卡"}
                  {activeTab == 1 && "添加虚拟币地址"}
                  {activeTab == 2 && "添加EBpay地址"}
                </button>
              </div>
            </TabItem>
          ))}
        </TabsItems>
      </Tabs>
    </div>
  );
};

export default TabsSection;
