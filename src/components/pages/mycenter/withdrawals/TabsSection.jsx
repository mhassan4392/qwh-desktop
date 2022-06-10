import {
  Tabs,
  TabsButtons,
  TabButton,
  TabsItems,
  TabItem,
} from "@/components/tabs";
import { useState } from "react";

import { AiFillQuestionCircle } from "react-icons/ai";

import TabOne from "./TabOne";
import TabTwo from "./TabTwo";

const TabsSection = ({ setTabIndex }) => {
  const tabs = ["中心钱包取款", "虚拟币钱包提币"];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="p-4 space-y-5 flex flex-col h-full overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="font-semibold">
            {activeTab == 0 && "取款"}
            {activeTab == 1 && "提币"}
          </h2>
          <p className="text-sm text-light">
            {activeTab == 0 && "若长时间未到账，请联系在线客服核查"}
            {activeTab == 1 && "若长时间未到账，请联系在线客服核查"}
          </p>
        </div>
        {/* <div className="flex items-center space-x-2 cursor-pointer">
          <AiFillQuestionCircle className="text-secondary" />
          <p className="text-xs">存款教程</p>
        </div> */}
      </div>
      <Tabs className="grow h-full flex flex-col overflow-hidden">
        <TabsButtons className="flex items-center border-b">
          {tabs.map((tab, i) => (
            <TabButton
              onClick={() => {
                setActiveTab(i);
                setTabIndex(i);
              }}
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
              {activeTab == 0 && <TabOne />}
              {activeTab == 1 && <TabTwo />}
            </TabItem>
          ))}
        </TabsItems>
      </Tabs>
    </div>
  );
};

export default TabsSection;
