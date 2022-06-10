import { Modal } from "@/components/modal";
import { VscChromeClose } from "react-icons/vsc";
import { BsInfoLg } from "react-icons/bs";

const SidebarModal = ({ open, onClose, children, header }) => {
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
              <h3 className="text-xl font-semibold text-md mb-2">怎么取款？</h3>
              <p>
                登录球王会账号——点击网站首页上方会员账号——我的钱包点击“取款”按钮——取款页面
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  第一次取款请先绑定银行卡，绑定银行卡步骤：
                  <br />
                  <span className="pl-3">
                    登录球王会账号——点击官网首页上方会员账号——我的钱包——卡片管理——添加银行卡
                  </span>
                </li>
                <li>绑定完成后在取款金额输入框输入金额，点击立即取款。</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-md mb-2">
                可以使用别人的银行卡进行取款吗？
              </h3>
              <p>
                为了确保客户的账户资金安全，取款需要使用账号本人的银行卡才可以进行取款哦，且取款银行卡姓名必须与注册姓名一致。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-md mb-2">
                申请取款需要注意些什么？
              </h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>绑定的银行卡姓名需与球王会账户的注册姓名一致。</li>
                <li>绑定的银行卡信息需要正确。</li>
                <li>若您未申请任何红利优惠，投注满一倍流水即可申请取款。</li>
                <li>若申请了红利，则需要满足优惠活动写明的有效投注额要求。</li>
                <li>全天24小时都可进行取款申请。</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-md mb-2">
                游戏账户里有钱为什么无法取款？
              </h3>
              <p>
                有可能您在对应游戏参加了优惠活动，游戏金额锁定。有任何疑问可以联系在线客服为您核查！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-md mb-2">
                会员可以绑定多张银行卡吗？
              </h3>
              <p>
                球王会会员最多可以绑定10张银行卡进行取款操作，在个人中心选择“我的钱包”，按步骤添加银行卡即可。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-md mb-2">
                取款为什么还需要审核？
              </h3>
              <p>
                取款审核是相关部门在给您办理出款之前的一个简单核实步骤，是为了确保客户资金安全，需要核实相关信息，若给您带来不便敬请谅解。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-md mb-2">
                取款要求（例：流水）
              </h3>
              <p>
                球王会用户只要达到存款全额投注，可以随时申请取款。比如，您存100元，在该笔存款后，您累计下注达到100元的取款流水，即可办理取款！
                <br />
                温馨提示：若会员有领取其他优惠，必须达到相对应的有效流水才能办理取款哦！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-md mb-2">
                我的流水还差多少？
              </h3>
              <p>
                首先确认自己是否有申请优惠活动，若是，需找到对应优惠活动查看所需流水，再点击个人中心——投注记录查看流水；若否，达到存款1倍流水即可。
                <br />
                若无法确认自己所需流水倍数，可直接联系在线客服进行咨询。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-md mb-2">
                取款支持的银行
              </h3>
              <p>
                现为您提供15家取款银行：中国银行、工商银行、建设银行、交通银行、农业银行、招商银行、桂林银行、平安银行、华夏银行、广东发展银行、邮政储蓄银行、中信银行、兴业银行、上海浦发银行、光大银行。系统不定时会有所调整，具体还请您以添加银行卡时提供的银行为准。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-md mb-2">
                取款输入金额无法提交申请？
              </h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>金额是否从场馆成功转出至中心钱包。</li>
                <li>若提示"您有订单尚未核实成功”请联系在线客服进行咨询。</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-md mb-2">
                取款到账时间
              </h3>
              <p>
                球王会用户取款一般10分钟内到账，如果30分钟还未到账可以联系在线客服为您核查！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-md mb-2">
                取款输入金额无法提交申请？
              </h3>
              <p className="mb-2">
                正常情况下10分钟以内即可到账，若有延迟，一般是网络波动、风控审核等，耐心等待片刻即可，若30分钟以后未到账可以联系在线客服，同时提供以下信息：
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>会员账号</li>
                <li>出款时间</li>
                <li>出款金额</li>
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
