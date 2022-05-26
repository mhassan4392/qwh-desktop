import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import HomeNavbar from "@/components/layouts/home/Navbar";
import bg from "@/assets/images/bg.webp";
import Footer from "@/components/layouts/home/Footer";

import suspension_help from "@/assets/images/suspension_help.webp";
import suspension_service from "@/assets/images/suspension_service.webp";
import suspension_download from "@/assets/images/suspension_download.webp";
import suspension_top from "@/assets/images/suspension_top.webp";
import { AnimatePresence, motion } from "framer-motion";

const HomeLayout = () => {
  const [showFloatingIcons, setShowFloatingIcons] = useState(false);

  const onscroll = (e) => {
    if (window.scrollY > 300) {
      setShowFloatingIcons(true);
    } else {
      setShowFloatingIcons(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onscroll);

    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);
  return (
    <div
      className="overflow-hidden overflow-y-auto bg-common-bg relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <AnimatePresence>
        {showFloatingIcons && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="fixed right-2 top-[45%] z-20">
              <div className="space-y-3">
                <img
                  src={suspension_help}
                  className="w-12 cursor-pointer"
                  alt=""
                />
                <img
                  src={suspension_service}
                  className="w-12 cursor-pointer"
                  alt=""
                />
                <img
                  src={suspension_download}
                  className="w-12 cursor-pointer"
                  alt=""
                />
              </div>
            </div>

            <div className="fixed right-2 top-[80%] z-20">
              <div className="space-y-3">
                <img
                  src={suspension_top}
                  className="w-12 cursor-pointer"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  alt=""
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <HomeNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
