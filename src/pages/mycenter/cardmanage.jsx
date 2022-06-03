import RightSidebarOne from "../../components/pages/mycenter/cardmanage/RightSidebarOne";
import RightSidebarTwo from "../../components/pages/mycenter/cardmanage/RightSidebarTwo";
import TabsSection from "../../components/pages/mycenter/cardmanage/TabsSection";
const CardManage = () => {
  return (
    <div className="rounded h-full flex gap-5">
      <div className="rounded basis-4/5 gap-5 flex flex-col">
        <div className="bg-white rounded grow">
          <TabsSection />
        </div>
      </div>
      <div className="basis-1/5 flex flex-col">
        <div className="bg-white h-[40%] rounded mb-5">
          <RightSidebarOne />
        </div>
        <div className="bg-white grow rounded">
          <RightSidebarTwo />
        </div>
      </div>
    </div>
  );
};

export default CardManage;
