import SectionHeader from "@/components/pages/index/SectionHeader";

import home_download_title from "@/assets/images/home_download_title.webp";

import home_download_h5 from "@/assets/images/home_download_h5.webp";
import home_download_1 from "@/assets/images/home_download_1.webp";
import home_download_2 from "@/assets/images/home_download_2.webp";
import home_download_3 from "@/assets/images/home_download_3.webp";
import home_download_4 from "@/assets/images/home_download_4.webp";
import home_download_5 from "@/assets/images/home_download_5.webp";
import home_download_6 from "@/assets/images/home_download_6.webp";
import home_download_7 from "@/assets/images/home_download_7.webp";
import home_download_8 from "@/assets/images/home_download_8.webp";
import home_download_9 from "@/assets/images/home_download_9.webp";

const AppDownload = () => {
  return (
    <div className="my-8">
      <div className="contain mx-auto">
        <div className="mb-10">
          <SectionHeader
            title="APP下载"
            subtitle="独家原生APP支持全部移动端"
            logo={home_download_title}
          />
        </div>

        <div className="flex items-center justify-between my-5">
          <div className="basis-[35%] space-y-5 px-4 relative">
            {/* floating images */}
            <img
              src={home_download_1}
              className="w-16 absolute top-[320px] animate-bounce -left-6 z-10"
              alt=""
            />

            <img
              src={home_download_2}
              className="w-16 absolute top-32 animate-bounce -right-20 z-10"
              alt=""
            />

            <img
              src={home_download_3}
              className="w-16 absolute top-[360px] animate-bounce -right-[100px] z-10"
              alt=""
            />

            <h2 className="text-3xl font-semibold">极速稳定 指尖畅享</h2>
            <p className="text-sm text-light">
              全球首家一体化娱乐原生APP，尽显流畅，完美操作。海量体育，电竞顶尖赛事，真人娱乐，彩票投注及电子游艺等，最新最全娱乐项目尽在掌中体验。扫码下载，即刻拥有!
            </p>
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1/2 text-center">
                    <img src={home_download_h5} className="w-full" alt="" />
                    <div className="text-xs">无需下载直接访问</div>
                    <hr className="my-2 bg-light shadow-lg" />
                    <div className="text-[10px] text-light">
                      支持iOS & Android
                    </div>
                    <p
                      href="#"
                      className="text-[10px] break-words leading-none text-light my-2"
                    >
                      {" "}
                      全部移动设备
                    </p>
                  </div>
                </div>
                <img src={home_download_9} alt="" />
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1/2 text-center">
                    <img src={home_download_h5} className="w-full" alt="" />
                    <div className="text-xs">无需下载直接访问</div>
                    <hr className="my-2 bg-light shadow-lg" />
                    <div className="text-[9px] text-light">
                      手机输入网址即可访问
                    </div>
                    <p className="text-[10px] break-words leading-none text-primary mt-2">
                      {" "}
                      https://www.qwhvip51.com:35560
                    </p>
                  </div>
                </div>
                <img src={home_download_9} alt="" />
              </div>
            </div>
            <img src={home_download_8} className="w-full scale-x-125" alt="" />
          </div>
          <div className="basis-[65%] relative">
            {/* floating images */}
            <img
              src={home_download_4}
              className="w-20 absolute top-[335px] animate-bounce right-0 z-10"
              alt=""
            />

            <img
              src={home_download_5}
              className="w-16 absolute top-[410px] animate-bounce right-[220px] z-10"
              alt=""
            />

            <img
              src={home_download_6}
              className="w-16 absolute top-[95px] animate-bounce right-2 z-10"
              alt=""
            />

            <div className="flex justify-center">
              <img
                src={home_download_7}
                className="w-full scale-x-125 scale-y-110"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
