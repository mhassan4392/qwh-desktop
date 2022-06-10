import { Outlet } from "react-router-dom";
import Sidebar from "../components/layouts/mycenter/Sidebar";

const MyCenterLayout = () => {
  return (
    <div className="mt-10 mb-5 flex gap-5 w-[1200px] overflow-hidden mx-auto">
      <div className="bg-white rounded basis-1/5 shrink-0">
        <Sidebar />
      </div>
      <div className="basis-4/5 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default MyCenterLayout;
