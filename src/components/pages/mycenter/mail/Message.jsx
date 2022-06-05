import { useRef } from "react";
import bell from "@/assets/images/pages/mycenter/mail/bell.png";

const MailMessage = ({ options, setMessage, ...rest }) => {
  const inputRef = useRef(null);
  return (
    <div
      onClick={() => {
        if (options) {
          inputRef.current.click();
        } else {
          setMessage(true);
        }
      }}
      className="flex py-3 border-b hover:bg-common-bg cursor-pointer transition-all duration-300"
      {...rest}
    >
      <div className="flex items-center basis-[40%]">
        {options && (
          <div>
            <input
              ref={inputRef}
              type="checkbox"
              className="rounded-full mr-3 border-light focus:ring-0 outline-none text-secondary cursor-pointer"
              name=""
              id=""
            />
          </div>
        )}
        <img src={bell} className="w-8 shrink-0" alt="" />
        <h2 className="grow text-md truncate">
          【6月5日 足球盘口推荐⚽️⚽️⚽️】
        </h2>
      </div>
      <div className="flex items-center space-x-6 basis-[60%] overflow-hidden justify-between">
        <p className="truncate grow text-sm">
          6月5日 足球盘口推荐⚽️⚽️⚽️ 标题：02:45 欧足联国家联赛
          内容：⚽️意大利 VS 德国⚽️ ☝️意大利能否阻挡德国战车的推进呢？
          🔥盘口推荐：德国 -0/0.5，赔率: 2.06👉 标题：02:45 欧足联国家联赛
          内容：⚽️黑山 VS 罗马尼亚⚽️
          ☝️或许，黑山还没有拦下罗马尼亚全身而退的实力。 🔥盘口推荐：罗马尼亚
          -0/0.5，赔率: 2.12👉 标题：23:59 欧洲预选 内容：⚽️威尔士 VS 乌克兰⚽️
          ☝️对于表现平平的威尔士，乌克兰走访似乎具备赢面。 🔥盘口推荐：乌克兰
          +0/0.5，赔率: 1.69👉 标题：03:00 西班牙乙级联赛-附加赛
          内容：⚽️拉斯帕尔马斯 VS 特内里费⚽️
          ☝️面对特内里费的侵袭，拉斯帕尔马斯也许会让他们铩羽而归吧。
          🔥盘口推荐：拉斯帕尔马斯 -0.5，赔率: 1.95👉 标题：19:00 中国超级联赛
          内容：⚽️北京国安 VS 沧州雄狮⚽️
          ☝️状态欠佳的北京国安似乎不是沧州雄狮的对手吧。 🔥盘口推荐：沧州雄狮
          +1/1.5，赔率: 1.88👉
        </p>
        <h2 className="shrink-0 truncate text-sm">2022-05-31</h2>
      </div>
    </div>
  );
};

export default MailMessage;
