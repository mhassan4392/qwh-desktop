import { useState } from "react";
import EmailModal from "./EmailModal";
import PhoneModal from "./PhoneModal";

const SectionThree = () => {
  const [emailModal, setEmailModal] = useState(false);
  const [phoneModal, setPhoneModal] = useState(false);
  return (
    <div className="p-5 space-y-5">
      <h2>账户安全</h2>

      <div className="space-y-10 text-sm">
        <div className="flex items-center">
          <div className="flex items-center space-x-5 basis-1/2">
            <div>手机号码：</div>
            <div>185****8857</div>
          </div>
          <div className="basis-1/2">
            <span className="ml-5 text-light">已验证</span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex items-center space-x-5 basis-1/2">
            <div>电子邮箱：</div>
            <div className="text-light">未验证</div>
          </div>
          <div className="basis-1/2">
            <span
              onClick={() => setEmailModal(true)}
              className="py-3 px-6 border border-primary rounded text-primary cursor-pointer"
            >
              验证
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex items-center space-x-5 basis-1/2">
            <div>账户密码：</div>
            <div>*******</div>
          </div>
          <div className="basis-1/2">
            <span
              className="py-3 px-6 border border-primary rounded text-primary cursor-pointer"
              onClick={() => setPhoneModal(true)}
            >
              修改
            </span>
          </div>
        </div>
      </div>

      <PhoneModal open={phoneModal} onClose={() => setPhoneModal(false)} />
      <EmailModal open={emailModal} onClose={() => setEmailModal(false)} />
    </div>
  );
};

export default SectionThree;
