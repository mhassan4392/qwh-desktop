import personal_icon_user_unbound from "@/assets/images/pages/mycenter/wallet/personal_icon_user_unbound.webp";
import personal_icon_email_unbound from "@/assets/images/pages/mycenter/wallet/personal_icon_email_unbound.webp";
import personal_icon_bank_unbound from "@/assets/images/pages/mycenter/wallet/personal_icon_bank_unbound.webp";

import personal_icon_mobile_completed from "@/assets/images/pages/mycenter/wallet/personal_icon_mobile_completed.webp";

const SectionOne = () => {
  const features = [
    { title: "填写基本资料", image: personal_icon_user_unbound },
    { title: "已绑定手机号码", image: personal_icon_email_unbound },
    {
      title: "绑定电子邮箱",
      image: personal_icon_mobile_completed,
      completed: true,
    },
    { title: "添加银行卡", image: personal_icon_bank_unbound },
  ];
  return (
    <div className="p-5">
      <h2 className="mb-4">个人资料</h2>
      <div>
        <div className="border rounded p-3 space-y-4">
          <p className="text-sm">
            账户安全等级： <span className="text-primary">低</span>
          </p>
          <p className="text-xs text-light">
            为了确保您的账户安全，请您填写相关安全信息，以备不时之需
          </p>
          <hr />
          <div className="flex items-center space-x-2">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`flex items-center space-x-1 text-sm hover:bg-opacity-50 cursor-pointer hover:text-light relative ${
                  feature.completed ? "text-black" : "text-light"
                }`}
              >
                <div className="absolute inset-0 hover:bg-white hover:bg-opacity-50"></div>
                <img src={feature.image} className="w-8" alt="" />
                <p>{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
