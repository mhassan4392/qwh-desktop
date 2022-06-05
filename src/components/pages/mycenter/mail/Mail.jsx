import { useState } from "react";
import { BsChevronLeft, BsChevronRight, BsTrash } from "react-icons/bs";
import DeleteModal from "./DeleteModal";

const SingleMail = ({ setMessage }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="py-4 px-8">
      <DeleteModal
        open={modal}
        onClose={() => setModal(false)}
        onSuccess={() => setMessage(false)}
      />
      <div
        className="flex items-center space-x-2 text-opacity-50 cursor-pointer hover:text-light"
        onClick={() => setMessage(false)}
      >
        <BsChevronLeft className="text-xl" />
        <h2 className="text-lg">通知详情</h2>
      </div>

      <div className="flex items-center justify-between pb-5 mt-8 border-b">
        <div className="space-y-3">
          <div>【6月5日 足球盘口推荐⚽️⚽️⚽️】</div>
          <div className="text-xs text-gray-500">2022-06-04 14:56:01</div>
        </div>

        <div className="flex items-center space-x-3">
          <BsTrash
            className="text-lg cursor-pointer hover:text-secondary"
            onClick={() => setModal(true)}
          />
          <BsChevronLeft className="cursor-pointer hover:text-light text-lg" />
          <BsChevronRight className="cursor-pointer hover:text-light text-lg" />
        </div>
      </div>

      <div className="my-4 text-sm">
        6月5日 足球盘口推荐⚽️⚽️⚽️
        <br />
        <br />
        标题：02:45 欧足联国家联赛
        <br />
        内容：⚽️意大利 VS 德国⚽️
        <br />
        ☝️意大利能否阻挡德国战车的推进呢？ <br />
        🔥盘口推荐：德国 -0/0.5，赔率: 2.06👉
        <br />
        <br />
        标题：02:45 欧足联国家联赛
        <br />
        内容：⚽️黑山 VS 罗马尼亚⚽️
        <br />
        ☝️或许，黑山还没有拦下罗马尼亚全身而退的实力。 <br />
        🔥盘口推荐：罗马尼亚 -0/0.5，赔率: 2.12👉
        <br />
        <br />
        标题：23:59 欧洲预选
        <br />
        内容：⚽️威尔士 VS 乌克兰⚽️
        <br />
        ☝️对于表现平平的威尔士，乌克兰走访似乎具备赢面。 <br />
        🔥盘口推荐：乌克兰 +0/0.5，赔率: 1.69👉
        <br />
        <br />
        标题：03:00 西班牙乙级联赛-附加赛
        <br />
        内容：⚽️拉斯帕尔马斯 VS 特内里费⚽️
        <br />
        ☝️面对特内里费的侵袭，拉斯帕尔马斯也许会让他们铩羽而归吧。 <br />
        🔥盘口推荐：拉斯帕尔马斯 -0.5，赔率: 1.95👉
        <br />
        <br />
        标题：19:00 中国超级联赛
        <br />
        内容：⚽️北京国安 VS 沧州雄狮⚽️
        <br />
        ☝️状态欠佳的北京国安似乎不是沧州雄狮的对手吧。 <br />
        🔥盘口推荐：沧州雄狮 +1/1.5，赔率: 1.88👉
      </div>
    </div>
  );
};

export default SingleMail;
