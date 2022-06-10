import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

import info from "@/assets/images/pages/mycenter/info.webp";

const RightSidebarTwo = () => {
  return (
    <div className="p-3 flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div>优惠活动</div>
        <Link
          to="/mycenter/betrecord"
          className="text-secondary text-xs flex items-center space-x-1"
        >
          <span>更多</span>
          <BsChevronRight className="text-[8px]" />
        </Link>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <span className="text-light text-xs flex items-center space-x-1">
          <img src={info} className="w-4" alt="" />
          <span>还没有任何优惠活动</span>
        </span>
      </div>
    </div>
  );
};

export default RightSidebarTwo;
