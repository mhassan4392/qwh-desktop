import { useState } from "react";
import RightSidebarOne from "../../components/pages/mycenter/transfer/RightSidebarOne";
import RightSidebarTwo from "../../components/pages/mycenter/transfer/RightSidebarTwo";
import TabsSection from "../../components/pages/mycenter/transfer/TabsSection";
const Transfer = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="rounded h-full flex gap-5">
      <div className="rounded basis-4/5 gap-5 flex flex-col">
        <div className="bg-white rounded grow">
          <TabsSection setTabIndex={setTabIndex} />
        </div>
      </div>
      <div className="basis-1/5 flex flex-col">
        <div className="bg-white h-[40%] rounded mb-5">
          <RightSidebarOne tabIndex={tabIndex} />
        </div>
        <div className="bg-white grow rounded">
          <RightSidebarTwo />
        </div>
      </div>
    </div>
  );
};

export default Transfer;
