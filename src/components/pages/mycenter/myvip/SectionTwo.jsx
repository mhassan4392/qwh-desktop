import vip_icon_withdrawaltimes from "@/assets/images/pages/mycenter/myvip/vip_icon_withdrawaltimes.webp";
import vip_icon_withdrawalamount from "@/assets/images/pages/mycenter/myvip/vip_icon_withdrawalamount.webp";
import vip_icon_update from "@/assets/images/pages/mycenter/myvip/vip_icon_update.webp";
import vip_icon_birthday from "@/assets/images/pages/mycenter/myvip/vip_icon_birthday.webp";
import vip_icon_redmoney from "@/assets/images/pages/mycenter/myvip/vip_icon_redmoney.webp";

const SectionTwo = ({ vip = 0 }) => {
  const features = [
    { title: "每日提款次数", no: "5", image: vip_icon_withdrawaltimes },
    {
      title: "每日提款额度",
      no: "200,000.00",
      image: vip_icon_withdrawalamount,
    },
    { title: "升级礼金", no: "0.00", image: vip_icon_update },
    { title: "生日礼金", no: "0.00", image: vip_icon_birthday },
    { title: "每周红包(每周一领取)", no: "0.00", image: vip_icon_redmoney },
  ];
  return (
    <div className="p-4">
      <h2 className="mb-5">
        VIP<span>{vip}</span>尊享
      </h2>
      <div className="grid grid-cols-5 gap-5">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <img src={f.image} className="w-16" alt="" />
            <h2 className="text-xl font-medium">{f.no}</h2>
            <p className="text-sm text-gray-500">{f.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
