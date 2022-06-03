import SectionOne from "../../components/pages/mycenter/transrecord/SectionOne";
import SectionTwo from "../../components/pages/mycenter/transrecord/SectionTwo";

const TransRecord = () => {
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

export default TransRecord;
