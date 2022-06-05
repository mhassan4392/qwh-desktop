import { useState } from "react";

const SectionOne = ({ setTab, tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="px-4 pt-4 space-y-5">
      <h2>消息中心</h2>
      <div className="flex items-center space-x-5">
        {tabs.map((tab, i) => (
          <div
            key={i}
            className="w-16 flex items-center justify-center h-10 relative cursor-pointer"
            onClick={() => {
              setActiveTab(i);
              setTab({ ...tabs[i] });
            }}
          >
            <>
              {tab.no && (
                <div className="absolute right-0 top-0 w-4 h-4 text-[10px] bg-primary rounded-full text-white flex items-center justify-center">
                  <span className="ml-0.5">{tab.no}</span>
                </div>
              )}
              {i == activeTab && (
                <span className="absolute bottom-0 w-full h-0.5 bg-secondary"></span>
              )}
              {tab.title}
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionOne;
