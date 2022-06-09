import { Modal } from "@/components/modal";
import { VscChromeClose } from "react-icons/vsc";
import { BsInfoLg } from "react-icons/bs";

const SidebarModal = ({ open, onClose, children, header }) => {
  console.log(children);
  return (
    <Modal
      open={open}
      containerClass="bg-black bg-opacity-50"
      onOutsideClick={onClose}
      className="!w-[700px] !h-[500px]"
    >
      <Modal.Header className="bg-gradient-to-r from-primary-light to-primary text-white relative px-5 flex items-center justify-center font-semibold">
        <div className="absolute inset-0 flex items-center justify-end px-3">
          <VscChromeClose
            className="text-2xl cursor-pointer transform hover:rotate-180 transition-all duration-300"
            onClick={() => {
              onClose();
            }}
          />
        </div>
        {header}
      </Modal.Header>
      <Modal.Body className="p-5">
        {children}
        {!children && (
          <div className="text-xs space-y-3">
            <div>
              <h3 className="text-xl font-semibold text-md mb-2">怎么转账？</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  .登录球王会账号——点击官网首页上方会员账号——我的钱包——点击转账——转账页面
                </li>
                <li>手动转账步骤：</li>
                <ul
                  className="list-decimal list-inside pl-4 my-2 space-y-2"
                  style={{ listStyleType: "lower-alpha" }}
                >
                  <li>在转账该页面选择转出转入的钱包</li>
                  <li>输入金额，或点击最大金额</li>
                  <li>点击立即转账</li>
                </ul>
                <li>自动转账步骤：</li>
                <ul
                  className="list-decimal list-inside pl-4 my-2 space-y-2"
                  style={{ listStyleType: "lower-alpha" }}
                >
                  <li>
                    .在转账页面（向右）打开“自动转账”开关（进入某游戏时，中心钱包的金额自动带入到对应的游戏钱包中）
                  </li>
                </ul>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-md mb-2">
                开启自动转账后怎么取款？
              </h3>
              <p>
                开启自动转账后，当您进入取款页面时，会自动回收所有游戏的余额，直接进行取款申请的操作即可，若因网络原因造成游戏的余额没有及时回收到中心钱包，点击钱包金额右方的“一键回收”按钮即可进行二次回收游戏余额。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-md mb-2">
                转账到游戏，金额变少？
              </h3>
              <p>
                大部分金额变少或金额变负数是系统二次结算导致的结果，若对该部分有疑问可联系在线客服进行详细咨询。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-md mb-2">
                转账没有成功，但是钱却没了怎么办？
              </h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>转账时请先退出游戏平台再操作。</li>
                <li>
                  如果转账出现金额丢失，请及时联系在线客服，并提供以下信息：
                </li>
                <ul
                  className="list-decimal list-inside pl-4 my-2 space-y-2"
                  style={{ listStyleType: "lower-alpha" }}
                >
                  <li>会员账号</li>
                  <li>丢失金额</li>
                  <li>问题游戏</li>
                </ul>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-md mb-2">
                中心钱包，转游戏钱包失败？
              </h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  查看对应游戏是否处于维护当中，若游戏处于维护状态是不可以进行转账的。
                </li>
                <li>
                  2.是否存在频繁转账操作，因转账人数较多，单个账户若频繁转账会有网络延迟，从而造成数据更新不及时或数据丢失。
                </li>
                <li>请尝试转入整数。</li>
                <li>联系在线客服进行咨询。</li>
              </ol>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="p-5">
        <div className="flex space-x-1">
          <span className="p-1 rounded-full bg-secondary">
            <BsInfoLg className="text-xs text-white" />
          </span>
          <p className="text-xs">
            如有其他问题，请联系
            <span className="text-secondary">客服</span>
          </p>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default SidebarModal;
