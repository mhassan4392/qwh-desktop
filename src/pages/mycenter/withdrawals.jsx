import { useState } from "react";
import RightSidebarOne from "../../components/pages/mycenter/withdrawals/RightSidebarOne";
import RightSidebarTwo from "../../components/pages/mycenter/withdrawals/RightSidebarTwo";
import TabsSection from "../../components/pages/mycenter/withdrawals/TabsSection";
const Withdrawals = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="h-full flex gap-5">
      <div className="basis-4/5 gap-5 flex flex-col">
        <div className="bg-white rounded-lg grow">
          <TabsSection setTabIndex={setTabIndex} />
        </div>
      </div>
      <div className="basis-1/5 flex flex-col">
        <div className="bg-white h-[40%] shrink-0 rounded mb-5">
          <RightSidebarOne tabIndex={tabIndex} />
        </div>
        <div className="bg-white grow rounded h-full overflow-y-auto">
          <RightSidebarTwo />
        </div>
      </div>
    </div>
  );
};

export default Withdrawals;
