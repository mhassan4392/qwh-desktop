import { useRef, useEffect, useState } from "react";

import ban_notice_bg from "@/assets/images/ban_notice_bg.webp";
import ban_notice_icon from "@/assets/images/ban_notice_icon.webp";
import ban_notice_more from "@/assets/images/ban_notice_more.webp";

import "./Banner.css";
import BannerModal from "./BannerModal";
import BannerModal2 from "./BannerModal2";
const Banner = () => {
  const bannerRef = useRef(null);
  const [transform, setTransform] = useState("100%");
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  useEffect(() => {
    if (bannerRef.current) {
      setTransform(bannerRef.current.clientWidth + "px");
    }
  }, [bannerRef.current]);

  return (
    <>
      <BannerModal open={modal} onClose={() => setModal(false)} />
      <BannerModal2 open={modal2} onClose={() => setModal2(false)} />
      <div className="px-4 my-5">
        <div className="contain mx-auto rounded-full shadow-inner shadow-gray-400">
          <div
            className="flex relative items-center justify-between py-1 px-3 rounded-full h-12 shadow-lg bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${ban_notice_bg})` }}
          >
            <div className="mr-1 shrink-0 bg-gradient-to-r from-primary to-primary-light p-2 rounded-full">
              <img src={ban_notice_icon} className="w-4" alt="" />
            </div>
            <div
              onClick={() => setModal2(true)}
              ref={bannerRef}
              className="grow h-4 overflow-hidden relative cursor-pointer"
            >
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
                onClick={() => setModal(true)}
                style={{ backgroundImage: `url(${ban_notice_more})` }}
                className="w-20 h-6 ml-1 bg-no-repeat bg-center bg-cover flex items-center justify-center text-white text-sm cursor-pointer"
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
