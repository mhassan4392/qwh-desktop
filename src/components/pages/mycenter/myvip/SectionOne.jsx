import { useState } from "react";

import vip_medal from "@/assets/images/pages/mycenter/myvip/vip_medal.webp";
import vip_img_vip_select from "@/assets/images/pages/mycenter/myvip/vip_img_vip_select.svg";
import { Link } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

const SectionOne = ({ vip, setVip }) => {
  const [width, setWidth] = useState(0);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={vip_medal} className="w-36" alt="" />
          <div className="space-y-3">
            <h2 className="text-lg font-medium">当前等级:VIP0</h2>
            <p className="text-sm text-light">流水：¥0.00</p>
          </div>
        </div>

        <Link
          to="/mycenter/myvip/vipdetail"
          className="bg-gradient-to-r from-primary-light to-primary hover:to-primary-light hover:from-primary text-white py-2.5 px-14 rounded mr-6 text-sm"
        >
          查看VIP详情
        </Link>
      </div>

      <div className="flex items-center justify-between mx-8 rounded-lg mt-10 relative bg-[#ebedf0]">
        <div
          className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-primary-light to-primary rounded-lg transition-all duration-300"
          style={{ width: width + "px" }}
        ></div>
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`grow border-r bg-transparent border-white relative h-3 ${
              vip >= i + 1 ? "" : ""
            } ${i == 0 ? "!rounded-l-lg" : ""} ${
              i == 9 ? "!rounded-r-lg" : ""
            }`}
          >
            {i == 0 && (
              <span
                className={`absolute -left-5 -top-11 w-10 h-10 text-xs  rounded-full flex items-center justify-center cursor-pointer ${
                  vip == 0 ? "text-white" : ""
                }`}
                onClick={() => {
                  setVip(0);
                  setWidth(0);
                }}
              >
                <AnimatePresence>
                  {vip == 0 && (
                    <motion.img
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      src={vip_img_vip_select}
                      className="w-full"
                      alt=""
                    />
                  )}
                </AnimatePresence>
                <span className="absolute text-xs -mt-1">VIP{i}</span>
              </span>
            )}
            <span
              className={`absolute -right-5 -top-11 w-10 h-10 text-xs rounded-full flex items-center justify-center cursor-pointer ${
                vip == i + 1 ? " text-white" : ""
              }`}
              onClick={(e) => {
                setVip(i + 1);
                let w;
                if (e.target.classList.contains("vip-content")) {
                  w = e.target.parentElement.parentElement;
                } else {
                  w = e.target.parentElement;
                }
                setWidth((w.clientWidth + 0.5) * (i + 1));
              }}
            >
              <AnimatePresence>
                {vip == i + 1 && (
                  <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    src={vip_img_vip_select}
                    className="w-full"
                    alt=""
                  />
                )}
              </AnimatePresence>
              <span className="absolute text-xs -mt-1 vip-content">
                VIP{i + 1}
              </span>
            </span>
          </div>
        ))}
      </div>

      <div className="mx-8 bg-common-bg p-4 rounded-lg mt-4 mb-6 space-y-5">
        <h3>距离下一等级：VIP{vip}</h3>
        <div className="flex items-center space-x-4">
          <p className="text-light text-xs">流水</p>
          <div className="bg-[#ebedf0] h-2 w-64 rounded"></div>
          <p className="text-secondary text-xs">还需流水约6,000.00</p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
