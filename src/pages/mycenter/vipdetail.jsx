import SectionOne from "../../components/pages/mycenter/vipdetail/SectionOne";
import SectionTwo from "../../components/pages/mycenter/vipdetail/SectionTwo";

import SectionFour from "../../components/pages/mycenter/vipdetail/SectionFour";
import SectionThree from "../../components/pages/mycenter/vipdetail/SectionThree";
import SectionFive from "../../components/pages/mycenter/vipdetail/SectionFive";

const VipDetail = () => {
  return (
    <div className="h-full flex flex-col gap-5">
      <div className="bg-white rounded">
        <SectionOne />
      </div>
      <div className="bg-white rounded">
        <SectionTwo />
      </div>

      <div className="bg-white rounded">
        <SectionThree />
      </div>
      <div className="bg-white rounded">
        <SectionFour />
      </div>

      <div className="bg-white rounded grow">
        <SectionFive />
      </div>
    </div>
  );
};

export default VipDetail;
