import SectionOne from "@/components/pages/mycenter/mail/SectionOne";
import SectionTwo from "@/components/pages/mycenter/mail/SectionTwo";
import { useState } from "react";
import SingleMail from "../../components/pages/mycenter/mail/Mail";

const Mail = () => {
  const [message, setMessage] = useState(false);
  const tabs = [
    { title: "通知", no: 8 },
    { title: "活动" },
    { title: "公告", no: 2 },
    { title: "充提" },
  ];
  const [tab, setTab] = useState({ ...tabs[0] });
  return (
    <div className="rounded h-full flex flex-col gap-5">
      {!message && (
        <>
          <div className="bg-white rounded">
            <SectionOne setTab={setTab} tabs={tabs} />
          </div>
          <div className="bg-white rounded grow">
            <SectionTwo setMessage={setMessage} tab={tab} />
          </div>
        </>
      )}

      {message && (
        <div className="bg-white rounded grow">
          <SingleMail setMessage={setMessage} />
        </div>
      )}
    </div>
  );
};

export default Mail;
