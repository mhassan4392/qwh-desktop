import {
  Tabs,
  TabsButtons,
  TabButton,
  TabsItems,
  TabItem,
} from "@/components/tabs";
import { Link } from "react-router-dom";

const RightSidebarTwo = () => {
  const tabs = ["卡片管理", "虚拟币管理"];
  return (
    <div className="p-3 h-full">
      <Tabs className="h-full flex flex-col">
        <TabsButtons className="flex items-center justify-between border-b">
          {tabs.map((tab, i) => (
            <TabButton
              key={i}
              tab={i}
              className="text-sm relative pb-1.5"
              activeClass="text-secondary"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute inset-0 flex items-end justify-center">
                      <span className="w-4/5 h-0.5 bg-secondary"></span>
                    </div>
                  )}
                  {tab}
                </>
              )}
            </TabButton>
          ))}
        </TabsButtons>

        <TabsItems className="h-full grow">
          <TabItem
            tab={0}
            defaultItem
            className="h-full flex items-center justify-center overflow-hidden"
          >
            <span className="text-xs text-light text-center">
              暂未绑定银行卡，请
              <Link to="/mycenter/cardmanage" className="text-secondary">
                添加
              </Link>{" "}
            </span>
          </TabItem>
          <TabItem
            tab={1}
            className="h-full flex items-center justify-center overflow-hidden"
          >
            <span className="text-xs text-light text-center">
              暂未绑定虚拟币账户，请
              <Link to="/mycenter/cardmanage" className="text-secondary">
                添加
              </Link>{" "}
            </span>
          </TabItem>
        </TabsItems>
      </Tabs>
    </div>
  );
};

export default RightSidebarTwo;
