import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import {
  AiOutlineUnlock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    watch,
    formState: { errors, isValid },
    setValue,
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const { username, code } = watch();

  const submitForm = handleSubmit((data) => {
    console.log(errors);
    console.log(data);
    console.log(isValid);
  });

  return (
    <div>
      <div className="flex text-white mx-4">
        <div className="grow px-4 flex flex-col justify-between">
          <form onSubmit={submitForm}>
            {/* username field */}
            <div className="my-5">
              <div className="input-control">
                <BiUserCircle className="left-element" />
                <input
                  type="text"
                  placeholder="用户名"
                  className="!bg-white !bg-opacity-30"
                  {...register("username", {
                    required: "username is Required",
                  })}
                />
                {username && (
                  <MdOutlineCancel
                    onClick={() => setValue("username", "")}
                    className="right-element"
                  />
                )}
              </div>
              {errors.username && (
                <div className="error-element">{errors.username.message}</div>
              )}
            </div>

            {/* password field */}
            <div className="my-5">
              <div className="input-control">
                <AiOutlineUnlock className="left-element" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="密码"
                  className="!bg-white !bg-opacity-30"
                  {...register("password", { required: "Password is Requred" })}
                />
                {!showPassword && (
                  <AiOutlineEyeInvisible
                    onClick={() => setShowPassword(true)}
                    className="right-element"
                  />
                )}
                {showPassword && (
                  <AiOutlineEye
                    onClick={() => setShowPassword(false)}
                    className="right-element"
                  />
                )}
              </div>
              {errors.password && (
                <div className="error-element">{errors.password.message}</div>
              )}
            </div>

            {/* confirm password field */}
            <div className="my-5">
              <div className="input-control">
                <AiOutlineUnlock className="left-element" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="确认密码"
                  className="!bg-white !bg-opacity-30"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                  })}
                />
                {!showConfirmPassword && (
                  <AiOutlineEyeInvisible
                    onClick={() => setShowConfirmPassword(true)}
                    className="right-element"
                  />
                )}
                {showConfirmPassword && (
                  <AiOutlineEye
                    onClick={() => setShowConfirmPassword(false)}
                    className="right-element"
                  />
                )}
              </div>
              {errors.confirmPassword && (
                <div className="error-element">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>

            {/* code field */}
            <div>
              <div className="input-control">
                <IoLanguage className="left-element" />
                <input
                  type="text"
                  placeholder="验证码"
                  className="!bg-white !bg-opacity-30"
                  {...register("code", { required: "Code is required" })}
                />
                {code && (
                  <MdOutlineCancel
                    onClick={() => setValue("code", "")}
                    className="right-element"
                  />
                )}
              </div>
              {errors.code && (
                <div className="error-element">{errors.code.message}</div>
              )}
            </div>

            <div className="my-5">
              <button
                disabled={!isValid}
                className={`bg-primary w-full py-3 rounded-full ${
                  !isValid ? "bg-opacity-60" : ""
                }`}
              >
                注册
              </button>
            </div>

            <div className="flex items-center justify-between text-sm my-5">
              <Link to="/auth/login">
                <span>已有账号？</span>
                <span className="text-secondary">请登录</span>
              </Link>

              <span>先去逛逛</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
