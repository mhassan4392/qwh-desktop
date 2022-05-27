import { Outlet, Link } from "react-router-dom";
import auth_bg from "@/assets/images/auth/auth_bg.webp";
import logo from "@/assets/images/auth/logo.png";
import logo1 from "@/assets/images/auth/logo2.png";
import login_icon_service_while from "@/assets/images/auth/login_icon_service_while.webp";

const AuthLayout = () => {
  return (
    <div
      style={{ backgroundImage: `url(${auth_bg})` }}
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden bg-center bg-cover"
    >
      {/* <img src={auth_bg} alt="" /> */}
      <div className="w-[400px] mx-auto">
        <div className="pt-14 pb-2">
          <Link to="/">
            <img src={logo} className="mb-10" alt="" />
          </Link>
          <img src={logo1} alt="" />
        </div>
        <div>
          <Outlet />
        </div>

        <div className="flex items-center justify-center space-x-2 relative text-white py-10">
          <img src={login_icon_service_while} className="w-6" alt="" />
          <span>联系客服</span>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
