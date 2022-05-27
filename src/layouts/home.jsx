import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import HomeNavbar from "@/components/layouts/home/Navbar";
import bg from "@/assets/images/bg.webp";
import Footer from "@/components/layouts/home/Footer";

import { AnimatePresence, motion } from "framer-motion";
import FloatingButtons from "../components/layouts/home/FloatingButtons";

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
      className="overflow-hidden overflow-y-auto relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <AnimatePresence>
        {showFloatingIcons && <FloatingButtons />}
      </AnimatePresence>
      <HomeNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
