import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/auth";
import HomeLayout from "../layouts/home";
import Index from "../pages";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Index />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default Router;
