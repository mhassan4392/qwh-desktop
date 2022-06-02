import nav_moneysave_hover from "@/assets/images/layouts/home/nav_moneysave_hover.webp";
import nav_moneytransfer_hover from "@/assets/images/layouts/home/nav_moneytransfer_hover.webp";
import nav_moneydraw_hover from "@/assets/images/layouts/home/nav_moneydraw_hover.webp";
import nav_vip_hover from "@/assets/images/layouts/home/nav_vip_hover.webp";

import nav_moneysave from "@/assets/images/layouts/home/nav_moneysave.webp";
import nav_moneytransfer from "@/assets/images/layouts/home/nav_moneytransfer.webp";
import nav_moneydraw from "@/assets/images/layouts/home/nav_moneydraw.webp";
import nav_vip from "@/assets/images/layouts/home/nav_vip.webp";

import profile from "@/assets/images/layouts/home/profile.png";
import vip_vip0 from "@/assets/images/layouts/home/vip_vip0.webp";

import sidebar_icon_personaldata from "@/assets/images/layouts/mycenter/sidebar_icon_personaldata.webp";
import sidebar_icon_vip from "@/assets/images/layouts/mycenter/sidebar_icon_vip.webp";
import sidebar_icon_transactionhistory from "@/assets/images/layouts/mycenter/sidebar_icon_transactionhistory.webp";
import sidebar_icon_bethistory from "@/assets/images/layouts/mycenter/sidebar_icon_bethistory.webp";
import sidebar_icon_notice from "@/assets/images/layouts/mycenter/sidebar_icon_notice.webp";

import { Link, NavLink } from "react-router-dom";
import { IoChevronDownCircleOutline } from "react-icons/io5";

import "./UserNavMenu.css";

import { Dropdown } from "@/components/dropdown";
import { useState } from "react";

const UserNavMenu = () => {
  const [links, setLinks] = useState([
    {
      title: "存款",
      image: nav_moneysave,
      hoverImage: nav_moneysave_hover,
      to: "/mycenter/deposit",
      hover: false,
    },
    {
      title: "转账",
      image: nav_moneytransfer,
      hoverImage: nav_moneytransfer_hover,
      to: "/mycenter/transfer",
      hover: false,
    },
    {
      title: "取款",
      image: nav_moneydraw,
      hoverImage: nav_moneydraw_hover,
      to: "/mycenter/withdrawals",
      hover: false,
    },
    {
      title: "客服",
      image: nav_vip,
      hoverImage: nav_vip_hover,
      to: "/cs",
      hover: false,
    },
  ]);

  const menuLinks = [
    {
      title: "个人资料",
      image: sidebar_icon_personaldata,
      to: "/mycenter/userinfo",
    },
    { title: "VIP特权", image: sidebar_icon_vip, to: "/mycenter/myvip" },
    {
      title: "交易记录",
      image: sidebar_icon_transactionhistory,
      to: "/mycenter/transrecord",
    },
    {
      title: "投注记录",
      image: sidebar_icon_bethistory,
      to: "/mycenter/betrecord",
    },
    {
      title: "消息中心",
      image: sidebar_icon_notice,
      to: "/mycenter/mail",
      no: 120,
    },
  ];
  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center text-xs">
        {links.map((link, i) => (
          <Link
            key={i}
            to={link.to}
            className={`flex flex-col px-2.5 space-y-1 transition-colors duration-300 hover:text-primary ${
              i < 3 ? "border-r" : ""
            }`}
            onMouseEnter={() => {
              let newLinks = [...links];
              newLinks[i].hover = true;
              setLinks(newLinks);
            }}
            onMouseLeave={() => {
              let newLinks = [...links];
              newLinks[i].hover = false;
              setLinks(newLinks);
            }}
          >
            <img
              src={link.hover ? link.hoverImage : link.image}
              className="w-6"
              alt=""
            />
            <span className="text-xs">{link.title}</span>
          </Link>
        ))}
      </div>

      <Dropdown hover>
        <Dropdown.Button>
          <NavLink
            to="/mycenter/wallet"
            className="flex items-center space-x-2 text-xs user-nav-menu hover:text-primary transition-all duration-300"
          >
            <div>
              <img src={profile} className="w-10" alt="" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span>aaron1990</span>
                <img src={vip_vip0} className="w-10" alt="" />
              </div>
              <div className="flex items-center space-x-2">
                <span>¥ 0.0</span>
                <IoChevronDownCircleOutline className="text-xs arrow-down transition-all duration-300" />
              </div>
            </div>
          </NavLink>
        </Dropdown.Button>
        <Dropdown.Menu className="!z-50 !w-60 py-5 px-5" right>
          {menuLinks.map((link, i) => (
            <Dropdown.MenuItem key={i} className="shadow-none">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                <div className="flex items-center space-x-3">
                  <img src={link.image} className="w-6" alt="" />
                  <p>{link.title}</p>
                </div>
                {link.no && (
                  <div className="text-xs px-1 rounded-full bg-primary text-white flex items-center justify-center">
                    <span>{link.no > 99 ? "99+" : link.no}</span>
                  </div>
                )}
              </NavLink>
            </Dropdown.MenuItem>
          ))}

          <Dropdown.MenuItem className="shadow-none">
            <button className="w-full py-2 rounded border border-light text-light hover:border-primary hover:text-primary">
              Lorem, ipsum.
            </button>
          </Dropdown.MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default UserNavMenu;
