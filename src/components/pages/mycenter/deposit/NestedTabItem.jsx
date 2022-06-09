import { TabItem } from "@/components/tabs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import BoxCheckboxes from "../../../checkbox/BoxCheckboxes";
import DepositCard from "./DepositCard";
import SubmitModal from "./SubmitModal";

const NestedTabItem = ({ i, ...rest }) => {
  const [modal, setModal] = useState(false);

  const {
    register,
    setValue,
    watch,
    formState: { isValid },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const amount = watch("amount");

  const onSubmit = (e) => {
    e.preventDefault();
    setModal(true);
  };

  const onSuccess = handleSubmit((data) => {
    console.log(data);
    setModal(false);
  });
  return (
    <TabItem defaultTab={i == 0} tab={i} {...rest}>
      <form onSubmit={onSubmit}>
        <div className="space-y-5">
          <div className="flex items-center space-x-2">
            <p className="text-sm">选择协议</p>
            <BoxCheckboxes values={["TRC20", "ERC20"]} />
            <div>
              <p className="text-xs">协议区别</p>
            </div>
          </div>

          <div className="space-y-1">
            <p>存款人姓名</p>
            <input
              {...register("text", { required: true })}
              type="text"
              placeholder="请输入存款人姓名"
              className="w-96"
            />
            <p className="text-light text-sm">
              为及时到账，请务必输入正确的存款人姓名
            </p>
          </div>

          <div className="space-y-1">
            <p>存款人姓名</p>
            <div className="relative w-96">
              <span className="absolute right-3 top-1.5">元</span>
              <input
                {...register("amount", { required: true })}
                type="number"
                className="w-full pr-10 !text-bold"
                placeholder="请输入100-5000"
              />
            </div>
            <p className="text-light text-sm">
              更快匹配到账，建议金额带尾数 (例如：101、503)
            </p>
          </div>

          <div>
            <BoxCheckboxes
              render={(v) => "¥" + v}
              values={["201", "304", "506", "1000", "1032"]}
              noActiveClass
              boxClass={(v) => `!py-8 ${v == amount ? "icon-select-bg" : ""}`}
              onChange={(v) => setValue("amount", v)}
            />
          </div>

          <div>
            <button
              disabled={!isValid}
              className={`py-3 rounded w-96 text-white ${
                !isValid
                  ? "bg-opacity-50 bg-primary"
                  : "bg-gradient-to-r from-primary-light to-primary"
              }`}
            >
              立即存款
            </button>
          </div>

          <DepositCard />
        </div>
      </form>
      <SubmitModal
        onSuccess={onSuccess}
        open={modal}
        onClose={() => setModal(false)}
      />
    </TabItem>
  );
};

export default NestedTabItem;
