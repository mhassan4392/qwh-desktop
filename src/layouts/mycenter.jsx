import { Outlet } from "react-router-dom";
import Sidebar from "../components/layouts/mycenter/Sidebar";

const MyCenterLayout = () => {
  return (
    <div className="mt-10 mb-5 flex gap-5 w-[1100px] overflow-hidden mx-auto">
      <div className="col-span-1 bg-white rounded basis-1/5">
        <Sidebar />
      </div>
      <div className="basis-4/5">
        <Outlet />
      </div>
    </div>
  );
};

export default MyCenterLayout;
