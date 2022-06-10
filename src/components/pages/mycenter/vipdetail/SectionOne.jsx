import { BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

import Slider from "react-slick/lib/slider";
import "./Slider.css";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import vip_medal_vip1_normal from "@/assets/images/pages/mycenter/vipdetail/vip_medal_vip1_normal.webp";
import vip_slider_bg from "@/assets/images/pages/mycenter/vipdetail/vip_slider_bg.webp";

const SectionOne = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FiChevronRight />,
    prevArrow: <FiChevronLeft />,
  };
  return (
    <div className="p-4">
      <Link
        to="/mycenter/vip/vipdetail"
        className="flex items-center space-x-1 hover:text-light text-xl mb-4"
      >
        <BsChevronLeft />
        <h3>VIP详情</h3>
      </Link>

      <div className="vip-slider">
        <Slider {...settings}>
          {Array.from({ length: 10 }).map((slide, i) => (
            <div key={i} className="w-full relative p-20">
              <img src={vip_slider_bg} className="w-full" alt="" />
              <div className="absolute inset-0 p-20 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <h2 className="text-[50px] text-white font-medium ml-20">
                    Vip1
                  </h2>
                  <img src={vip_medal_vip1_normal} className="w-40" alt="" />
                </div>

                <div className="w-2/3 mx-auto flex items-center' justify-between text-white mb-10">
                  <div className="flex flex-col items-center justify-center">
                    <h4 className="text-xl">50,000.00</h4>
                    <p>流水要求:</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h4 className="text-xl">30,000.00</h4>
                    <p>保级流水三个月</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionOne;
