import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

const RightSidebarOne = ({ tabIndex }) => {
  return (
    <div className="p-3 flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div>
          {tabIndex == 0 && "投注记录"}
          {tabIndex == 1 && "充币记录"}
        </div>
        <Link
          to="/mycenter/betrecord"
          className="text-secondary text-xs flex items-center space-x-1"
        >
          <span>更多</span>
          <BsChevronRight className="text-[8px]" />
        </Link>
      </div>
      {tabIndex == 0 && (
        <>
          <div className="flex items-center justify-between text-xs text-light mt-5">
            <div>存款</div>
            <div>已取消</div>
          </div>
          <div className="mt-1 mb-3 text-sm">虚拟币扫码</div>
          <hr />
        </>
      )}
      {tabIndex == 0 && (
        <div className="grow flex items-center justify-center">
          <span className="text-light text-xs">
            <span>暂时没有新的投注记录</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default RightSidebarOne;
