import { useState } from "react";
import { BsArrowClockwise } from "react-icons/bs";

import wallet_usdt from "@/assets/images/pages/mycenter/wallet/wallet_usdt.webp";

import union from "@/assets/images/pages/mycenter/union.webp";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";

const SectionOne = () => {
  return (
    <div className="p-4 space-y-5 flex flex-col h-full overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="font-semibold text-xl">我的钱包</h2>
          <p className="text-sm text-light">您的总资产在这里一览无余</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src={union} className="w-5 cursor-pointer" />
          <span className="text-xs">总资产</span>
          <span className="text-secondary text-3xl font-medium mb-2">0.00</span>
          <span>元</span>
          <BsArrowClockwise className="text-secondary cursor-pointer" />
        </div>
      </div>

      <CardOne />
      <CardTwo />
    </div>
  );
};

export default SectionOne;
