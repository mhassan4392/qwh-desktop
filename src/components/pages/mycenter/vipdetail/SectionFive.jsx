import ListItem from "./ListItem";

const SectionFive = () => {
  return (
    <div className="p-4">
      <h3 className="mb-4">活动的一般条款与规则</h3>

      <div className="space-y-3 leading-4">
        <ListItem no={1}>
          晋升标准：累计投注额达到相应级别的要求，即可在次日24点前晋级相应VIP等级。
        </ListItem>

        <ListItem no={2}>
          晋升顺序：VIP等级达到相应的要求可每天晋升一级，但VIP等级不可越级晋升。
        </ListItem>
        <ListItem no={3}>
          保级要求：会员在达到某VIP等级后，三个月内投注需要完成保级要求。如果在此期间完成晋升，保级要求重新按照当前等级计算。
        </ListItem>
        <ListItem no={4}>
          降级标准：如果会员在一个季度（三个月计算）内没有完成相应的保级要求流水，系统会自动降级一个等级，相应的返水及其它优惠也会随之调整至降级后的等级。
        </ListItem>
        <ListItem no={5}>
          升级礼金：升级礼金在会员达到该会员级别后可在福利中心页面进行手动领取，每个级别的升级礼金每位会员仅能获得1次。（升级礼金1倍流水即可提款）
        </ListItem>
        <ListItem no={6}>
          生日礼金：会员在注册90天内过生日，今年将不能领取生日礼金。另注册时间大于90天的会员需在生日当天的VIP页面进行自助领取，每年可领取一次。（生日彩金1倍流水即可提款）
        </ListItem>
        <ListItem no={7}>
          每周红包：会员在上一周（周一0点至周日23点59分59秒）最近一次VIP等级对应的有效投注，达到会员VIP等级对应的有效投注要求，即可在每周一的13点后领取每周红包，每周五24点后红包将会过期，请及时领取。红包仅支持转入场馆钱包，满足对应场馆流水要求即可解锁。各等级红包金额和领取要求详见“VIP详情-每周红包规则表”。
        </ListItem>
        <ListItem no={8}>
          晋级优惠：可在VIP页面自助领取，领取晋级优惠活动后开始计算活动有效流水；此优惠不与平台其他优惠共享，仅与返水优惠共享。
        </ListItem>
        <ListItem no={9}>
          VIP晋级：每个等级的VIP晋级优惠仅支持指定场馆申请。（只可申请符合当前等级的晋级优惠）
        </ListItem>
        <ListItem no={10}>
          VIP返水：VIP返水优惠发放金额根据会员当天北京时间00:00—23:59之间的有效投注进行计算，当天所有的投注额返水将在注单结算当天结束后24小时内发放到福利中心，会员可在福利中心页面进行手动领取。（VIP返水1倍流水即可提款）
        </ListItem>
      </div>

      <p className="text-secondary text-sm mt-6">
        平台保留对活动的修改、停止及最终解释权。
      </p>
    </div>
  );
};

export default SectionFive;
