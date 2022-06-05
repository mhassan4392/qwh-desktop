import { useState } from "react";
import nomessage from "@/assets/images/pages/mycenter/mail/nomessage.webp";
import { GoMailRead } from "react-icons/go";
import { BsChevronLeft, BsChevronRight, BsTrash } from "react-icons/bs";
import MailMessage from "./Message";
import DeleteModal from "./DeleteModal";

const SectionTwo = ({ tab, setMessage }) => {
  const [options, setOptions] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <div className="p-4 flex flex-col h-full overflow-hidden">
      <DeleteModal
        open={modal}
        onClose={() => setModal(false)}
        onSuccess={() => setModal(false)}
      />
      {tab.no && (
        <div>
          <div className="flex items-center justify-between text-sm py-3 border-b">
            <div>
              {options && (
                <div className="flex items-center space-x-5">
                  <span className="shrink-0">
                    <input
                      type="checkbox"
                      className="rounded-full border-light focus:ring-0 outline-none text-secondary cursor-pointer"
                      name=""
                      id=""
                    />
                  </span>
                  <span className="flex items-center space-x-2 text-secondary hover:text-opacity-50 cursor-pointer">
                    <GoMailRead />
                    <span>全部已读</span>
                  </span>

                  <span
                    className="flex items-center space-x-2 text-secondary hover:text-opacity-50 cursor-pointer"
                    onClick={() => setModal(true)}
                  >
                    <BsTrash />
                    <span>删除</span>
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-5">
              {!options && (
                <span className="flex items-center space-x-2 text-secondary hover:text-opacity-50 cursor-pointer">
                  <GoMailRead />
                  <span>全部已读</span>
                </span>
              )}
              <span
                className="text-secondary hover:text-opacity-50 cursor-pointer"
                onClick={() => setOptions(!options)}
              >
                编辑
              </span>
            </div>
          </div>
          {Array.from({ length: 10 }).map((item, i) => (
            <MailMessage options={options} setMessage={setMessage} key={i} />
          ))}

          <div className="flex items-center justify-center space-x-2 my-10">
            <div className="h-8 w-8 border rounded flex items-center justify-center hover:bg-gradient-to-b from-primary to-primary-light hover:text-white transition-all duration-100 hover:border-primary cursor-pointer">
              <BsChevronLeft />
            </div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`h-8 w-8 border rounded flex items-center justify-center hover:bg-gradient-to-b from-primary to-primary-light hover:text-white transition-all duration-100 hover:border-primary cursor-pointer ${
                  i == 1
                    ? "bg-gradient-to-b from-primary to-primary-light text-white"
                    : ""
                }`}
              >
                {i + 1}
              </div>
            ))}
            <div className="w-8 h-8 flex items-end justify-center">.....</div>
            <div className="h-8 w-8 border rounded flex items-center justify-center hover:bg-gradient-to-b from-primary to-primary-light hover:text-white transition-all duration-100 hover:border-primary cursor-pointer">
              30
            </div>
            <div className="h-8 w-8 border rounded flex items-center justify-center hover:bg-gradient-to-b from-primary to-primary-light hover:text-white transition-all duration-100 hover:border-primary cursor-pointer">
              <BsChevronRight />
            </div>
          </div>
        </div>
      )}
      {!tab.no && (
        <div className="grow h-full flex items-center justify-center flex-col">
          <img src={nomessage} className="w-52" alt="" />
          <p className="text-sm">暂时没有新的存款记录</p>
        </div>
      )}
    </div>
  );
};

export default SectionTwo;
