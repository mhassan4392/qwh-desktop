import { useState, useRef, useEffect } from "react";
import { BiUserCircle } from "react-icons/bi";
import {
  AiOutlineUnlock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CodeModal from "./codeModal";

import { useForm } from "react-hook-form";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [getCode, setGetCode] = useState(false);

  const [modal, setModal] = useState(false);

  const codeRef = useRef();

  const [time, setTime] = useState(0);

  let interval = useRef(null);

  const setTimer = () => {
    clearInterval(interval.current);
    setTime(60);
  };

  useEffect(() => {
    if (time == 60) {
      interval.current = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time == 0) {
      clearInterval(interval.current);
    }
  }, [time]);

  useEffect(() => {
    return () => clearInterval(interval.current);
  }, []);

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const { username } = watch();

  const onSubmit = handleSubmit((data) => {
    if (!getCode) {
      setGetCode(true);
    } else {
      console.log(data);
    }
  });

  return (
    <>
      <div>
        <div className="flex text-white mx-4">
          <div className="grow py-6 px-4 flex flex-col justify-between">
            <div>
              <form onSubmit={onSubmit}>
                {/* code field */}
                {getCode && (
                  <div>
                    <div className="text-center my-5 text-xs">
                      因本次登录不是常用IP，故需要安全验证
                    </div>
                    <div className="my-5">
                      <div ref={codeRef} className="input-control">
                        <IoLanguage className="left-element" />
                        <input
                          type="text"
                          placeholder="用户名"
                          {...register("code", {
                            required: "Code is required",
                          })}
                        />
                        <button
                          onClick={() => {
                            const input =
                              codeRef.current.querySelector("input");

                            setModal(true);
                            input.blur();
                          }}
                          type="button"
                          className={`text-[10px] absolute right-1 h-10 bg-primary rounded-full w-28 bg-opacity-80 ${
                            time ? "text-lg" : ""
                          }`}
                        >
                          {time ? time + "s" : "获取验证码"}
                        </button>
                      </div>
                      {errors.code && (
                        <div className="error-element">
                          {errors.code.message}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {!getCode && (
                  <div>
                    {/* username field */}
                    <div className="my-5">
                      <div className="input-control">
                        <BiUserCircle className="left-element" />
                        <input
                          type="text"
                          placeholder="用户名"
                          {...register("username", {
                            required: "Username is required",
                          })}
                        />
                        {username && (
                          <MdOutlineCancel
                            onClick={() => setValue("username", "")}
                            className="absolute right-0 mr-3 text-light text-xl"
                          />
                        )}
                      </div>
                      {errors.username && (
                        <div className="error-element">
                          {errors.username.message}
                        </div>
                      )}
                    </div>

                    {/* password field */}
                    <div className="my-5">
                      <div className="input-control">
                        <AiOutlineUnlock className="left-element" />
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="密码"
                          {...register("password", {
                            required: "Password is required",
                          })}
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
                        <div className="error-element">
                          {errors.password.message}
                        </div>
                      )}
                    </div>

                    <div className="my-5 text-xs flex items-center justify-between">
                      <div>
                        <input
                          type="checkbox"
                          name="remember"
                          {...register("remember")}
                          id="remember"
                          className="mr-2 rounded-full text-gray-500 focus:ring-0 placeholder:text-white"
                        />
                        <label htmlFor="remember">记住密码</label>
                      </div>
                      <div className="text-right">忘记密码?</div>
                    </div>
                  </div>
                )}

                <div className="my-5">
                  <button
                    disabled={!isValid}
                    className={`bg-primary w-full py-3 rounded-full ${
                      !isValid ? "bg-opacity-60" : ""
                    }`}
                  >
                    登录
                  </button>
                </div>

                <div
                  to="/auth/register"
                  className="flex items-center justify-between text-sm my-5"
                >
                  <Link to="/auth/register">
                    <span className="text-secondary">注册新账号</span>
                  </Link>

                  <span>先去逛逛</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <CodeModal
        open={modal}
        onClose={() => setModal(false)}
        setTimer={setTimer}
      />
    </>
  );
};

export default Login;
