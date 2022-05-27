import { useState } from "react";

import SectionHeader from "@/components/pages/index/SectionHeader";

import topgames_title from "@/assets/images/topgames/topgames_title.webp";

import topgames_slider_1 from "@/assets/images/topgames/topgames_slider_1.webp";
import topgames_slider_2 from "@/assets/images/topgames/topgames_slider_2.webp";
import topgames_slider_3 from "@/assets/images/topgames/topgames_slider_3.webp";
import topgames_slider_4 from "@/assets/images/topgames/topgames_slider_4.webp";
import topgames_slider_5 from "@/assets/images/topgames/topgames_slider_5.webp";
import topgames_slider_6 from "@/assets/images/topgames/topgames_slider_6.webp";
import topgames_slider_bg from "@/assets/images/topgames/topgames_slider_bg.webp";

import topgames_bg from "@/assets/images/topgames/topgames_bg.webp";

import topgames_arrow_right from "@/assets/images/topgames/topgames_arrow_right.webp";
import topgames_arrow_left from "@/assets/images/topgames/topgames_arrow_left.webp";

import topgames_btns_bg from "@/assets/images/topgames/topgames_btns_bg.webp";
import topgames_btn from "@/assets/images/topgames/topgames_btn.webp";

import topgames_footbal_icon from "@/assets/images/topgames/topgames_football_icon.webp";
import topgames_footbal_icon_select from "@/assets/images/topgames/topgames_football_icon_select.webp";
import topgames_casino_icon from "@/assets/images/topgames/topgames_casino_icon.webp";
import topgames_casino_icon_select from "@/assets/images/topgames/topgames_casino_icon_select.webp";
import topgames_board_icon from "@/assets/images/topgames/topgames_board_icon.webp";
import topgames_board_icon_select from "@/assets/images/topgames/topgames_board_icon_select.webp";
import topgames_esports_icon from "@/assets/images/topgames/topgames_esports_icon.webp";
import topgames_esports_icon_select from "@/assets/images/topgames/topgames_esports_icon_select.webp";
import topgames_lottery_icon from "@/assets/images/topgames/topgames_lottery_icon.webp";
import topgames_lottery_icon_select from "@/assets/images/topgames/topgames_lottery_icon_select.webp";
import topgames_slot_icon from "@/assets/images/topgames/topgames_slot_icon.webp";
import topgames_slot_icon_select from "@/assets/images/topgames/topgames_slot_icon_select.webp";

import topgames_btn_bg from "@/assets/images/topgames/topgames_btn_bg.webp";

import Slider from "react-slick/lib/slider";
import "./TopGames.css";
import { AnimatePresence, motion } from "framer-motion";
import TopGamesModal from "./TopGamesModal";

const TopGames = () => {
  const slides = [
    { image: topgames_slider_1, buttons: ["球王会体育", "OB体育", "FB体育"] },
    {
      image: topgames_slider_2,
      buttons: ["球王会体育", "OB体育", "FB体育", "AG捕鱼", "PG电子"],
    },
    {
      image: topgames_slider_3,
      buttons: ["球王会体育", "OB体育", "FB体育", "PG电子"],
    },
    { image: topgames_slider_4, buttons: ["球王会体育", "OB体育", "FB体育"] },
    {
      image: topgames_slider_5,
      buttons: ["球王会体育", "OB体育", "FB体育", "AG捕鱼", "PG电子"],
    },
    { image: topgames_slider_6, buttons: ["球王会体育", "OB体育", "FB体育"] },
  ];

  const slideBtns = [
    {
      image1: topgames_footbal_icon,
      image2: topgames_footbal_icon_select,
      title: "体育",
    },
    {
      image1: topgames_casino_icon,
      image2: topgames_casino_icon_select,
      title: "真人",
    },
    {
      image1: topgames_board_icon,
      image2: topgames_board_icon_select,
      title: "棋牌",
    },
    {
      image1: topgames_esports_icon,
      image2: topgames_esports_icon_select,
      title: "电竞",
    },
    {
      image1: topgames_lottery_icon,
      image2: topgames_lottery_icon_select,
      title: "彩票",
    },
    {
      image1: topgames_slot_icon,
      image2: topgames_slot_icon_select,
      title: "电子",
    },
  ];
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    nextArrow: <img src={topgames_arrow_right} />,
    prevArrow: <img src={topgames_arrow_left} />,
    afterChange: (i) => {
      setSelectedIndex(i);
    },
  };

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [modal, setModal] = useState(false);

  const handleClick = (i) => {
    nav1.slickGoTo(i);
  };
  return (
    <div className="my-8">
      <div
        className="contain mx-auto bg-no-repeat bg-bottom bg-contain pb-20 overflow-hidden relative"
        style={{
          backgroundImage: `url(${topgames_bg})`,
        }}
      >
        {/* slide button */}
        <div className="absolute bottom-24 z-20 left-0 right-0 flex items-center justify-center">
          {slides[selectedIndex].buttons.map((button, i) => (
            <AnimatePresence>
              <motion.div
                onClick={() => setModal(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mx-5 relative cursor-pointer"
                key={i}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <span>{button}</span>
                </div>
                <img src={topgames_btn} className="w-44" alt="" />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>

        <TopGamesModal open={modal} onClose={() => setModal(false)} />

        <div className="mb-10">
          <SectionHeader
            logo={topgames_title}
            title="热门游戏"
            subtitle="您想要的我们都有，带给您丰富的游戏体验"
          />
        </div>

        <div className="w-[910px] mx-auto relative h-16">
          <img src={topgames_btns_bg} className="w-full h-16" alt="" />
          <div className="absolute inset-0 flex items-center justify-between px-[5px]">
            <img
              src={topgames_btn_bg}
              className="w-[150px] h-14 transition-all duration-300"
              alt=""
              style={{ transform: `translateX(${150 * selectedIndex + "px"})` }}
            />
          </div>
          <div className="absolute inset-0 flex items-center px-[5px]">
            {slideBtns.map((button, i) => (
              <div
                onClick={() => handleClick(i)}
                key={i}
                className="w-[150px] h-10 flex items-center justify-center rounded-full hover:bg-light hover:bg-opacity-20 cursor-pointer"
              >
                {selectedIndex != i && (
                  <img src={button.image1} className="w-14 -ml-3" alt="" />
                )}
                {selectedIndex == i && (
                  <img src={button.image2} className="w-14 -ml-3" alt="" />
                )}
                <div className="">{button.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="topgames-slider mt-20 pb-32">
          <Slider
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
            {...settings}
          >
            {slides.map((slide, i) => (
              <div key={i} className="flex items-center justify-center">
                <div className=" relative w-2/3">
                  <div className="absolute inset-0">
                    <div className="w-[98%] overflow-hidden h-[96%] rounded-[30px] image-container opacity-75">
                      <img
                        src={slide.image}
                        className="scale-[2] mt-20"
                        alt=""
                      />
                    </div>
                  </div>
                  <img
                    src={topgames_slider_bg}
                    className="slider-bg w-full"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

{
  /* <canvas id="35" class="circle_progress" width="262" height="262" style="width: 131px; height: 131px;"></canvas> */
}

export default TopGames;
