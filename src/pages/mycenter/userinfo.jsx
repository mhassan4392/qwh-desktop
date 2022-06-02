import SectionOne from "@/components/pages/mycenter/userinfo/SectionOne";
import RightSidebarOne from "../../components/pages/mycenter/userinfo/RightSidebarOne";
import RightSidebarTwo from "../../components/pages/mycenter/userinfo/RightSidebarTwo";
import SectionThree from "../../components/pages/mycenter/userinfo/SectionThree";
import SectionTwo from "../../components/pages/mycenter/userinfo/SectionTwo";
const UserInfo = () => {
  return (
    <div className="rounded h-full flex gap-5">
      <div className="rounded basis-4/5 gap-5 flex flex-col">
        <div className="bg-white rounded">
          <SectionOne />
        </div>
        <div className="bg-white rounded">
          <SectionTwo />
        </div>
        <div className="bg-white rounded grow">
          <SectionThree />
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

export default UserInfo;
