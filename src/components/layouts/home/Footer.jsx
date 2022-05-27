import footer_top_logo1 from "@/assets/images/footer/footer_top_logo1.svg";
import footer_top_logo2 from "@/assets/images/footer/footer_top_logo2.svg";
import footer_top_logo3 from "@/assets/images/footer/footer_top_logo3.svg";
import footer_top_logo4 from "@/assets/images/footer/footer_top_logo4.svg";
import footer_top_logo5 from "@/assets/images/footer/footer_top_logo5.svg";
import footer_top_logo6 from "@/assets/images/footer/footer_top_logo6.png";
import footer_top_logo7 from "@/assets/images/footer/footer_top_logo7.png";
import footer_top_logo8 from "@/assets/images/footer/footer_top_logo8.png";
import footer_top_logo9 from "@/assets/images/footer/footer_top_logo9.svg";
import footer_top_logo10 from "@/assets/images/footer/footer_top_logo10.svg";
import footer_top_logo11 from "@/assets/images/footer/footer_top_logo11.svg";
import footer_top_logo12 from "@/assets/images/footer/footer_top_logo12.svg";

import footer_top_logo_tr1 from "@/assets/images/footer/footer_top_logo_tr1.svg";
import footer_top_logo_tr2 from "@/assets/images/footer/footer_top_logo_tr2.svg";
import footer_top_logo_tr3 from "@/assets/images/footer/footer_top_logo_tr3.svg";
import footer_top_logo_tr4 from "@/assets/images/footer/footer_top_logo_tr4.svg";
import footer_top_logo_tr5 from "@/assets/images/footer/footer_top_logo_tr5.svg";
import footer_top_logo_tr6 from "@/assets/images/footer/footer_top_logo_tr6.png";
import footer_top_logo_tr7 from "@/assets/images/footer/footer_top_logo_tr7.png";
import footer_top_logo_tr8 from "@/assets/images/footer/footer_top_logo_tr8.png";
import footer_top_logo_tr9 from "@/assets/images/footer/footer_top_logo_tr9.svg";
import footer_top_logo_tr10 from "@/assets/images/footer/footer_top_logo_tr10.svg";
import footer_top_logo_tr11 from "@/assets/images/footer/footer_top_logo_tr11.svg";
import footer_top_logo_tr12 from "@/assets/images/footer/footer_top_logo_tr12.svg";

import footer_bottom_logo1 from "@/assets/images/footer/footer_bottom_logo1.svg";
import footer_bottom_logo2 from "@/assets/images/footer/footer_bottom_logo2.svg";
import footer_bottom_logo3 from "@/assets/images/footer/footer_bottom_logo3.svg";

import footer_bottom_logo_tr1 from "@/assets/images/footer/footer_bottom_logo_tr1.svg";
import footer_bottom_logo_tr2 from "@/assets/images/footer/footer_bottom_logo_tr2.svg";
import footer_bottom_logo_tr3 from "@/assets/images/footer/footer_bottom_logo_tr3.svg";
import { Link } from "react-router-dom";

import "./Footer.css";

const top_logos = [
  footer_top_logo1,
  footer_top_logo2,
  footer_top_logo3,
  footer_top_logo4,
  footer_top_logo5,
  footer_top_logo6,
  footer_top_logo7,
  footer_top_logo8,
  footer_top_logo9,
  footer_top_logo10,
  footer_top_logo11,
  footer_top_logo12,
];

const top_logos_tr = [
  footer_top_logo_tr1,
  footer_top_logo_tr2,
  footer_top_logo_tr3,
  footer_top_logo_tr4,
  footer_top_logo_tr5,
  footer_top_logo_tr6,
  footer_top_logo_tr7,
  footer_top_logo_tr8,
  footer_top_logo_tr9,
  footer_top_logo_tr10,
  footer_top_logo_tr11,
  footer_top_logo_tr12,
];

const bottom_logos = [
  footer_bottom_logo1,
  footer_bottom_logo2,
  footer_bottom_logo3,
];

const bottom_logos_tr = [
  footer_bottom_logo_tr1,
  footer_bottom_logo_tr2,
  footer_bottom_logo_tr3,
];

const links = ["新手帮助", "竞猜责任", "隐私保护", "规则条款", "联系我们"];

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-dark to-dark-light pt-5 pb-2 text-[#828391]">
      <div className="contain mx-auto">
        <div className="flex items-center justify-center footer-top-logos">
          {top_logos.map((logo, i) => (
            <div className="logo">
              <img key={i} src={logo} className="w-20 mx-2 top-logo " alt="" />
              <img
                key={i}
                src={top_logos_tr[i]}
                className="w-20 mx-2  top-logo-tr"
                alt=""
              />
            </div>
          ))}
        </div>

        <div className="text-center  my-5 text-sm">
          <div>
            球王会 拥有欧洲马耳他（MGA）和菲律宾政府（PAGCOR）颁发的合法执照
          </div>
          <div>
            注册于英属维尔京群岛，是受国际行业协会认可的合法公司。进行注册并娱乐前，请确保您年满18周岁！
          </div>
        </div>

        <div className="flex items-center justify-around w-2/3 mx-auto footer-bottom-logos">
          {bottom_logos.map((logo, i) => (
            <div className="logo">
              <img
                src={logo}
                key={i}
                alt=""
                className="bottom-logo"
                srcset=""
              />
              <img
                src={bottom_logos_tr[i]}
                className="bottom-logo-tr"
                key={i}
                alt=""
                srcset=""
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center my-5 border-light text-sm">
          {links.map((link, i) => (
            <Link
              to="/"
              className={` hover:text-white px-4 ${i == 4 ? "" : "border-r"}`}
            >
              {link}
            </Link>
          ))}
        </div>

        <p className="text-center text-xs ">
          版权所有 ©2021-2022 球王会 保留所有权
        </p>
      </div>
    </div>
  );
};

export default Footer;
