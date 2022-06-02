import { useState } from "react";

import profile from "@/assets/images/layouts/mycenter/profile.png";
import vip_vip0 from "@/assets/images/layouts/mycenter/vip_vip0.webp";

import sidebar_icon_moneysave from "@/assets/images/layouts/mycenter/sidebar_icon_moneysave.webp";
import sidebar_icon_moneytransfer from "@/assets/images/layouts/mycenter/sidebar_icon_moneytransfer.webp";
import sidebar_icon_moneydraw from "@/assets/images/layouts/mycenter/sidebar_icon_moneydraw.webp";

import sidebar_icon_moneysave_select from "@/assets/images/layouts/mycenter/sidebar_icon_moneysave_select.webp";
import sidebar_icon_moneytransfer_select from "@/assets/images/layouts/mycenter/sidebar_icon_moneytransfer_select.webp";
import sidebar_icon_moneydraw_select from "@/assets/images/layouts/mycenter/sidebar_icon_moneydraw_select.webp";

import sidebar_icon_personaldata from "@/assets/images/layouts/mycenter/sidebar_icon_personaldata.webp";
import sidebar_icon_vip from "@/assets/images/layouts/mycenter/sidebar_icon_vip.webp";
import sidebar_icon_welfare from "@/assets/images/layouts/mycenter/sidebar_icon_welfare.webp";
import sidebar_icon_mywallet from "@/assets/images/layouts/mycenter/sidebar_icon_mywallet.webp";
import sidebar_icon_withdraw_card from "@/assets/images/layouts/mycenter/sidebar_icon_withdraw_card.webp";
import sidebar_icon_transactionhistory from "@/assets/images/layouts/mycenter/sidebar_icon_transactionhistory.webp";
import sidebar_icon_bethistory from "@/assets/images/layouts/mycenter/sidebar_icon_bethistory.webp";
import sidebar_icon_redemptionhistory from "@/assets/images/layouts/mycenter/sidebar_icon_redemptionhistory.webp";
import sidebar_icon_notice from "@/assets/images/layouts/mycenter/sidebar_icon_notice.webp";
import sidebar_icon_fedback from "@/assets/images/layouts/mycenter/sidebar_icon_bethistory.webp";
import { Link, NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [links, setLinks] = useState([
    {
      title: "存款",
      image: sidebar_icon_moneysave,
      selectImage: sidebar_icon_moneysave_select,
      to: "/mycenter/deposit",
      selected: false,
    },
    {
      title: "转账",
      image: sidebar_icon_moneytransfer,
      selectImage: sidebar_icon_moneytransfer_select,
      to: "/mycenter/transfer",
      selected: false,
    },
    {
      title: "取款",
      image: sidebar_icon_moneydraw,
      selectImage: sidebar_icon_moneydraw_select,
      to: "/mycenter/withdrawals",
      selected: false,
    },
    // { title: "客服", image: nav_vip, to: "/" },
  ]);

  const menuLinks = [
    {
      title: "个人资料",
      image: sidebar_icon_personaldata,
      to: "/mycenter/userinfo",
    },
    { title: "VIP特权", image: sidebar_icon_vip, to: "/mycenter/myvip" },
    {
      title: "福利中心",
      image: sidebar_icon_welfare,
      to: "/mycenter/welfarecenter",
    },
    { divider: true },
    { title: "我的钱包", image: sidebar_icon_mywallet, to: "/mycenter/wallet" },
    {
      title: "取款卡",
      image: sidebar_icon_withdraw_card,
      to: "/mycenter/cardmanage",
    },
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
    { divider: true },
    {
      title: "兑奖记录",
      image: sidebar_icon_redemptionhistory,
      to: "/mycenter/giftrecord",
    },
    {
      title: "消息中心",
      image: sidebar_icon_notice,
      to: "/mycenter/mail",
      no: 120,
    },
    {
      title: "意见反馈",
      image: sidebar_icon_fedback,
      to: "/mycenter/suggestion",
    },
  ];

  const location = useLocation();

  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-2 px-3 pt-6 pb-4">
        <img src={profile} className="w-20" alt="" />
        <p className="flex items-center justify-center text-xs space-x-2">
          <span>aaron1990</span>
          <img src={vip_vip0} className="w-10" alt="" />
        </p>
        <div className="text-xs">加入球王会第256天</div>
      </div>

      <div className="flex items-center justify-between px-6 py-5">
        {links.map((link, i) => (
          <Link
            onMouseEnter={() => {
              let newLinks = [...links];
              newLinks[i].selected = true;
              setLinks(newLinks);
            }}
            onMouseLeave={() => {
              let newLinks = [...links];
              newLinks[i].selected = false;
              setLinks(newLinks);
            }}
            key={i}
            to={link.to}
            className="flex flex-col items-center space-y-1 hover:text-primary transition-all duration-300"
          >
            <img
              src={
                link.selected || location.pathname == link.to
                  ? link.selectImage
                  : link.image
              }
              className="w-8"
              alt=""
            />
            <p className="text-xs">{link.title}</p>
          </Link>
        ))}
      </div>

      <div className="pt-8 pb-20">
        {menuLinks.map((link, i) => (
          <div key={i}>
            {!link.divider && (
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 hover:text-primary transition-all duration-300 px-4 ${
                    isActive
                      ? "bg-primary bg-opacity-10 border-l-4 border-primary box-border"
                      : ""
                  }`
                }
              >
                <div className="flex items-center space-x-3">
                  <img src={link.image} className="w-6" alt="" />
                  <p>{link.title}</p>
                </div>
                {link.no && (
                  <p className="text-white bg-primary px-1 rounded-full text-xs">
                    {link.no > 99 ? "99+" : link.no}
                  </p>
                )}
              </NavLink>
            )}
            {link.divider && <hr className="my-5" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
