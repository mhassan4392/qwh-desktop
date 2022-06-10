import { useState, useEffect } from "react";
import { zonedTimeToUtc, utcToZonedTime, format } from "date-fns-tz";
import "./Navbar.scss";

import { AiOutlineDownCircle } from "react-icons/ai";

import nav_logo from "@/assets/images/nav_logo.webp";
import navbar_navlink_before from "@/assets/images/navbar_navlink_before.webp";
import nav_profile from "@/assets/images/nav_profile.webp";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import NavMenuTwo from "./menus/NavMenuTwo";
import NavMenuThree from "./menus/NavMenuThree";
import UserNavMenu from "./navbar/UserNavMenu";

const HomeNavbar = () => {
  const [date, setDate] = useState(
    format(zonedTimeToUtc(new Date(), "Asia/Hong_Kong"), "yyyy-MM-dd HH:mm:ss")
  );
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [nav, setNav] = useState(0);
  const links = [
    { title: "首页", to: "/", noNavMenu: true },
    { title: "体育", to: "/login" },
    { title: "真人", to: "/login" },
    { title: "棋牌", to: "/login" },
    { title: "电竞", to: "/login" },
    { title: "彩票", to: "/login" },
    { title: "电子", to: "/login" },
    { title: "优惠", to: "/login" },
    { title: "赞助", to: "/login" },
    { title: "合营", to: "/login" },
    { title: "APP下载", to: "/login" },
    { title: "资讯", to: "/login", noNavMenu: true },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(
        format(
          zonedTimeToUtc(new Date(), "Asia/Hong_Kong"),
          "yyyy-MM-dd HH:mm:ss"
        )
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="fixed flex flex-col h-28 left-0 top-0 right-0 shadow-lg z-30">
        <div>
          <div className="bg-gray-800 text-light text-sm h-8">
            <div className="contain flex items-center justify-end h-full mx-auto">
              <div>GMT+8 {date}</div>
            </div>
          </div>
        </div>

        <div className="bg-white relative">
          <div className="contain h-20 mx-auto">
            <div className="flex items-center justify-between h-full">
              <div className="flex items-center space-x-4 h-full">
                <Link to="/">
                  <img src={nav_logo} className="w-36" alt="" />
                </Link>
                {/* links */}
                <div className="flex items-center nav-links h-full">
                  {/* link */}
                  {links.map((link, i) => (
                    <NavLink
                      onMouseEnter={() => {
                        if (!link.noNavMenu) {
                          setNav(i);
                          setShowNavMenu(true);
                        }
                      }}
                      onMouseLeave={() => {
                        if (!link.noNavMenu) {
                          setShowNavMenu(false);
                        }
                      }}
                      className={({ isActive }) =>
                        `flex items-center justify-center hover:text-primary transition-all duration-300 relative h-full px-4 nav-link ${
                          isActive ? "nav-link-active" : ""
                        }`
                      }
                      key={i}
                      to={link.to}
                    >
                      <span>{link.title}</span>
                      {!link.noNavMenu && (
                        <AiOutlineDownCircle className="nav-link-icon text-xs absolute right-0 text-light" />
                      )}
                    </NavLink>
                  ))}
                </div>

                {/* link menu */}
              </div>

              <div>
                <UserNavMenu />
                {/* <div to="/auth/login" className="flex items-center space-x-2">
                  <img src={nav_profile} className="w-10" alt="" />
                  <span className="text-sm">
                    <Link
                      className="hover:text-primary transition-all duration-300"
                      to="/auth/login"
                    >
                      登录
                    </Link>
                    &nbsp; / &nbsp;
                    <Link
                      className="hover:text-primary transition-all duration-300"
                      to="/auth/register"
                    >
                      注册
                    </Link>
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[112px]"></div>
      <AnimatePresence exitBeforeEnter>
        {showNavMenu && (
          <motion.div
            onMouseEnter={() => setShowNavMenu(true)}
            onMouseLeave={() => setShowNavMenu(false)}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            className="fixed left-0 right-0 z-10 bg-common-bg h-[300px] overflow-hidden"
          >
            {nav % 2 != 0 && <NavMenuTwo />}
            {nav % 2 == 0 && <NavMenuThree />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeNavbar;
