import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

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
      <div className="grow flex items-center justify-center">
        <span className="text-light text-xs">
          <span>还没有任何优惠活动</span>
        </span>
      </div>
    </div>
  );
};

export default RightSidebarTwo;
