import SectionHeader from "@/components/pages/index/SectionHeader";

import quality_service_title from "@/assets/images/quality_service_title.webp";

import quality_service_round_bg from "@/assets/images/quality_service_round_bg.webp";
import quality_service_money_icon from "@/assets/images/quality_service_money_icon.webp";
import quality_service_live_icon from "@/assets/images/quality_service_live_icon.webp";
import quality_service_safe_icon from "@/assets/images/quality_service_safe_icon.webp";
import quality_service_web_icon from "@/assets/images/quality_service_web_icon.webp";
import quality_service_icon_bg from "@/assets/images/quality_service_icon_bg.webp";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const rounds = [
  {
    no: "60",
    noTitle: "秒",
    title: "平均存款时间",
    subTitle: "AVERAGE TIME OF DEPOSIT",
  },
  {
    no: "80",
    noTitle: "家",
    title: "合作支付平台",
    subTitle: "PAYMENT PLATFORM PARTNERS",
  },
  {
    no: "90",
    noTitle: "秒",
    title: "平均取款时间",
    subTitle: "AVERAGE TIME OF WITHDRAW",
  },
  {
    no: "23",
    noTitle: "家",
    title: "合作游戏平台",
    subTitle: "GAMING PROVIDER PARTNERS",
  },
];

const qualities = [
  {
    image: quality_service_money_icon,
    title: "极速存取转款",
    subtitle:
      "最新技术自主研发的财务处理系统真正做到极速存、取、转独家网络优化技术，为您提供一流的游戏体验，最大优化网络延迟。",
  },
  {
    image: quality_service_live_icon,
    title: "海量赛事种类",
    subtitle:
      "每天为您提供近千场精彩体育赛事，更有真人、彩票、电子游戏等多种娱乐方式选择，让您拥有完美游戏体验。",
  },
  {
    image: quality_service_safe_icon,
    title: "加密安全管理",
    subtitle:
      "独家开发，采用128位加密技术和严格的安全管理体系，客户资金得到最完善的保障，让您全情尽享娱乐、赛事投注，无后顾之忧！",
  },
  {
    image: quality_service_web_icon,
    title: "三端任您选择",
    subtitle:
      "让您畅享Web、H5，更有iOS、Android原生APP，让您随时随地投注随心所欲！7x24小时在线客服提供最贴心、最优质的服务。",
  },
];

const QualityServices = () => {
  return (
    <div className="my-8">
      <div className="container mx-auto">
        <div className="mb-10">
          <SectionHeader
            logo={quality_service_title}
            title="优质服务"
            subtitle="我们全心全意为您提供最优质的服务"
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            {rounds.map((round, i) => (
              <div className="flex flex-col items-center space-y-3">
                <div key={i} className="relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[122px] mb-1 transform rotate-180">
                      <CircularProgressbar
                        styles={{
                          path: {
                            // Path color
                            stroke: "#ee3939",
                          },
                          trail: {
                            // Trail color
                            stroke: "transparent",
                          },
                        }}
                        value={round.no}
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      {round.no}
                    </h3>
                    <p className="text-xs text-primary mt-4">{round.noTitle}</p>
                  </div>
                  <img src={quality_service_round_bg} className="w-40" alt="" />
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-lg font-semibold mb-1">
                    {round.title}
                  </div>
                  <div className="text-sm text-light">{round.subTitle}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-10 my-10">
            {qualities.map((quality, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="relative w-56 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={quality.image}
                      className="w-20 mt-6 ml-6"
                      alt=""
                    />
                  </div>
                  <img
                    src={quality_service_icon_bg}
                    className="w-full"
                    alt=""
                  />
                </div>
                <div className="px-4 space-y-2">
                  <div className="text-lg font-bold">{quality.title}</div>
                  <div className="text-xs text-light">{quality.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <canvas id="35" class="circle_progress" width="262" height="262" style="width: 131px; height: 131px;"></canvas> */
}

export default QualityServices;
