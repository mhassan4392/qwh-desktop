import bg_icon from "@/assets/images/pages/mycenter/deposit/bg_icon.webp";
import mydeposit from "@/assets/images/pages/mycenter/deposit/mydeposit2.png";
const DepositCard = () => {
  return (
    <div className="flex justify-between space-x-3">
      <div className="p-5 border rounded space-y-6 basis-[65%] hover:shadow-lg hover:bg-gray-50 transition-all duration-200">
        <div>
          <div className="flex items-center justify-between">
            <h3>USDT，最好的保值数字货币！</h3>
            <h3 className="cursor-pointer hover:text-secondary">了解更多</h3>
          </div>
          <p className="text-light mt-2">价格稳定 流通性高 不受机构监管</p>
        </div>
        <div className="flex items-center justify-between">
          {["选择冷钱包", "选择协议", "输入充币数量", "完成充币"].map(
            (value, i) => (
              <div key={i} className="relative">
                <span
                  className="absolute inset-0 flex items-center justify-center text-xs"
                  key={i}
                >
                  {value}
                </span>
                <img src={bg_icon} className="" alt="" />
              </div>
            )
          )}
        </div>
      </div>

      <div className="p-5 border rounded space-y-2 grow hover:shadow-lg hover:bg-gray-50 transition-all duration-200">
        <div>交易所推荐</div>
        <div className="border space-y-2 px-3 py-2 rounded inline-block">
          <img src={mydeposit} className="w-8 mx-auto" alt="" />
          <div className="text-center text-sm">易币付</div>
        </div>
      </div>
    </div>
  );
};

export default DepositCard;
