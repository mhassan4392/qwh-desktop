import { Outlet } from "react-router-dom";
import HomeNavbar from "../components/layouts/home/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <HomeNavbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
