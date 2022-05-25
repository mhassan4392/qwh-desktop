import { useRef, useEffect, useState } from "react";

import ban_notice_bg from "@/assets/images/ban_notice_bg.webp";
import ban_notice_icon from "@/assets/images/ban_notice_icon.webp";
import ban_notice_more from "@/assets/images/ban_notice_more.webp";

import "./Banner.css";
const Banner = () => {
  const bannerRef = useRef(null);
  const [transform, setTransform] = useState("100%");

  useEffect(() => {
    if (bannerRef.current) {
      setTransform(bannerRef.current.clientWidth + "px");
    }
  }, [bannerRef.current]);

  return (
    <>
      <div className="px-4 my-5">
        <div className="container mx-auto rounded-full shadow-inner shadow-gray-400">
          <div
            className="flex relative items-center justify-between py-1 px-3 rounded-full h-12 shadow-lg bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${ban_notice_bg})` }}
          >
            <div className="mr-1 shrink-0 bg-gradient-to-r from-primary to-primary-light p-2 rounded-full">
              <img src={ban_notice_icon} className="w-4" alt="" />
            </div>
            <div ref={bannerRef} className="grow h-4 overflow-hidden relative">
              <div
                style={{
                  transform: `translateX(${transform})`,
                }}
                className="absolute inset-0 min-w-max flex items-center banner-content text-xs text-light"
              >
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum eaque perspiciatis, quis maiores aliquid velit
                  debitis incidunt nisi at, voluptatem, perferendis iure?
                  Voluptates, repellendus. Doloremque labore repellat commodi!
                  Esse, quod?
                </span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum eaque perspiciatis, quis maiores aliquid velit
                  debitis incidunt nisi at, voluptatem, perferendis iure?
                  Voluptates, repellendus. Doloremque labore repellat commodi!
                  Esse, quod?
                </span>
              </div>
            </div>
            <div className="flex justify-end shrink-0">
              <p
                style={{ backgroundImage: `url(${ban_notice_more})` }}
                className="w-20 h-6 ml-1 bg-no-repeat bg-center bg-cover flex items-center justify-center text-white text-sm"
              >
                更多
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
