import Slider from "react-slick/lib/slider";
import "./ShowcaseSlider.css";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import slider1 from "@/assets/images/slider1.jpg";
import slider2 from "@/assets/images/slider2.jpg";
import slider3 from "@/assets/images/slider3.jpg";
import slider4 from "@/assets/images/slider4.jpg";
import slider5 from "@/assets/images/slider5.jpg";
import slider6 from "@/assets/images/slider6.jpg";
import slider7 from "@/assets/images/slider7.jpg";
import slider8 from "@/assets/images/slider8.jpg";
import slider9 from "@/assets/images/slider9.jpg";
import slider10 from "@/assets/images/slider10.jpg";
import slider11 from "@/assets/images/slider11.jpg";

const ShowcaseSlider = () => {
  const slides = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
    slider8,
    slider9,
    slider10,
    slider11,
  ];
  const settings = {
    dots: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FiChevronRight />,
    prevArrow: <FiChevronLeft />,
  };
  return (
    <div>
      <div className="showcase-slider min-w-[1200px]">
        <Slider {...settings}>
          {slides.map((slide, i) => (
            <div key={i}>
              <img src={slide} className="w-full" alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ShowcaseSlider;
