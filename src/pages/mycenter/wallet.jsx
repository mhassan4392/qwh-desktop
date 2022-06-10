import Loader from "../../components/pages/mycenter/Loader";
import RightSidebarOne from "../../components/pages/mycenter/wallet/RightSidebarOne";
import RightSidebarTwo from "../../components/pages/mycenter/wallet/RightSidebarTwo";
import SectionOne from "../../components/pages/mycenter/wallet/SectionOne";
const Wallet = () => {
  return (
    <div className="rounded h-full flex gap-5">
      {/* <Loader open={true} /> */}
      <div className="basis-4/5 gap-5 flex flex-col">
        <div className="bg-white rounded-lg grow">
          <SectionOne />
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

export default Wallet;
