import { useState } from "react";
import BoxCheckboxes from "../../../checkbox/BoxCheckboxes";

const SectionTwo = () => {
  const [text, setText] = useState("");
  const boxValues = ["男", "女"];
  const [gender, setGender] = useState("男");
  return (
    <div className="p-5">
      <h2 className="mb-5">基本资料</h2>

      <div className="text-sm space-y-4">
        <div className="flex items-center space-x-5">
          <label htmlFor="name" className="basis-[15%] text-right">
            真实姓名：
          </label>
          <input
            type="text"
            className="border-light placeholder:text-light text-black focus:border-primary focus:ring-0 rounded placeholder:text-xs h-10"
            placeholder="姓名需与银行卡持卡人姓名一致，否则无法提款"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="flex items-center space-x-5">
          <label htmlFor="" className="basis-[15%] text-right">
            性别：{" "}
          </label>
          <BoxCheckboxes
            boxClass="!text-xs"
            values={boxValues}
            defaultValue="男"
            onChange={(v) => setGender(v)}
          />
        </div>

        <div className="flex items-center space-x-5">
          <label htmlFor="" className="basis-[15%] text-right">
            出生日期：
          </label>
          <input
            type="date"
            name=""
            className="border-light rounded cursor-pointer focus:ring-0 focus:border-primary placeholder:text-light text-xs h-10"
            id=""
          />
        </div>

        <div className="flex items-center space-x-5">
          <label htmlFor="" className="basis-[15%] text-right">
            注册日期：
          </label>
          <div className="text-light text-sm">2021-09-20 16:41:56</div>
        </div>

        <div>
          <button
            disabled
            className="w-64 bg-primary text-white bg-opacity-50 ml-24 py-2"
          >
            完成
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
