import BoxCheckboxes from "../../../checkbox/BoxCheckboxes";
import { AiFillQuestionCircle } from "react-icons/ai";
import download from "@/assets/images/pages/mycenter/deposit/download.png";
import DepositCard from "./DepositCard";
const TabItemTwo = () => {
  return (
    <div className="py-5 space-y-6">
      <div className="flex">
        <p className="text-sm mt-3 basis-[20%]">选择协议</p>
        <div className="space-y-2">
          <div className="flex items-center space-x-5">
            <BoxCheckboxes values={["TRC20", "ERC20"]} />
            <div className="flex items-center space-x-1">
              <AiFillQuestionCircle className="text-secondary" />
              <p className="text-xs text-light">协议区别</p>
            </div>
          </div>
          <div className="text-sm">
            至少充入
            <span className="text-light">
              <span className="text-primary">20</span>USDT
            </span>
            ，否则无法到账
          </div>
        </div>
      </div>

      <div className="flex">
        <p className="text-sm mt-3 basis-[20%]">USDT充币地址</p>
        <div>
          <div className="flex space-x-5">
            <div className="text-md space-y-3">
              TVDxLZDMw698HTPPWs2gNVazGRCztphJv6
              <br />
              <span className="text-sm">充币成功后自动到账</span>
            </div>
            <div className="flex items-center space-x-1">
              <button className="border border-secondary rounded py-1.5 px-4 text-secondary">
                复制
              </button>
            </div>
          </div>
          <div className="text-sm">
            <div className="w-32 mt-3">
              <img src={download} className="w-full" alt="" />
              <p className="text-center mt-1">扫描二维码</p>
            </div>
          </div>

          <div className="text-light space-y-6 my-5 text-sm">
            <p>建议使用冷钱包进行中转操作，不要直接使用交易所；</p>

            <p>冷钱包不需要开通法币交易，不用注册个人资料。</p>
          </div>
        </div>
      </div>

      <DepositCard />
    </div>
  );
};

export default TabItemTwo;
