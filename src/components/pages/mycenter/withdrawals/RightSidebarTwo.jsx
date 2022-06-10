import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import SidebarModal from "./SidebarModal";

const RightSidebarTwo = () => {
  const [modal, setModal] = useState(false);
  const modals = [
    "怎么取款？",
    "可以使用别人的银行卡进行取款吗？",
    "申请取款需要注意些什么？",
    "游戏账户里有钱为什么无法取款？",
    "会员可以绑定多张银行卡吗？",
    "取款为什么还需要审核？",
    "取款要求（例：流水）",
    "我的流水还差多少？",
    "取款支持的银行",
    "取款输入金额无法提交申请？",
    "取款到账时间",
    "取款未到账，怎么办？",
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
