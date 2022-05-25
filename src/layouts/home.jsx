import { Outlet } from "react-router-dom";
import HomeNavbar from "@/components/layouts/home/Navbar";
import bg from "@/assets/images/bg.webp";
import Footer from "@/components/layouts/home/Footer";

const HomeLayout = () => {
  return (
    <div
      className="overflow-hidden bg-common-bg"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <HomeNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
