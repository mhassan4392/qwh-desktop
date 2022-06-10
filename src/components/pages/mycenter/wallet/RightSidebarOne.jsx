import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

const RightSidebarOne = () => {
  return (
    <div className="p-3 flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div>投注记录</div>
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
          <span>暂时没有新的投注记录</span>
        </span>
      </div>
    </div>
  );
};

export default RightSidebarOne;
