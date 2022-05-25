import { Routes, Route } from "react-router-dom";
import HomeLayout from "../layouts/home";
import Index from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Index />} />
      </Route>
    </Routes>
  );
};

export default Router;
