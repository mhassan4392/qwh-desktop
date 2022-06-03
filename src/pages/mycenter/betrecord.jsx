import SectionOne from "../../components/pages/mycenter/betrecord/SectionOne";
import SectionTwo from "../../components/pages/mycenter/betrecord/SectionTwo";

const BetRecord = () => {
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

export default BetRecord;
