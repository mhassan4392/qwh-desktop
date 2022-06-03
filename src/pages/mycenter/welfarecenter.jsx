import SectionOne from "../../components/pages/mycenter/welfarecenter/SectionOne";
import SectionTwo from "../../components/pages/mycenter/welfarecenter/SectionTwo";

const WelfareCenter = () => {
  return (
    <div className="rounded h-full flex flex-col gap-5">
      <div className="bg-white rounded">
        <SectionOne />
      </div>
      <div className="bg-white rounded grow">
        <SectionTwo />
      </div>
    </div>
  );
};

export default WelfareCenter;
