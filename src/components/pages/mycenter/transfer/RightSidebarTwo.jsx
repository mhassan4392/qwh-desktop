import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import SidebarModal from "../SidebarModal";

const RightSidebarTwo = () => {
  const [modal, setModal] = useState(false);
  const modals = [
    "怎么转账？",
    "开启自动转账后怎么取款？",
    "转账到游戏，金额变少？",
    "转账没有成功，但是钱却没了怎么办？",
    "中心钱包，转游戏钱包失败？",
  ];
  return (
    <div className="p-3 flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div>帮助中心</div>
        <Link
          to="/mycenter/betrecord"
          className="text-secondary text-xs flex items-center space-x-1"
        >
          <span>更多</span>
          <BsChevronRight className="text-[8px]" />
        </Link>
      </div>
      {/* <div className="grow flex items-center justify-center">
        <span className="text-light text-xs">
          <span>还没有任何优惠活动</span>
        </span>
      </div> */}

      <div className="my-6">
        {modals.map((modal, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b py-2 mb-2 cursor-pointer"
            onClick={() => setModal(true)}
          >
            <p className="truncate text-[10px]">{modal}</p>
            <BsChevronRight className="shrink-0 text-xs text-light" />
          </div>
        ))}
      </div>

      <SidebarModal
        header="帮助中心"
        open={modal}
        onClose={() => setModal(false)}
      />
    </div>
  );
};

export default RightSidebarTwo;
