import { Routes, Route } from "react-router-dom";
import AuthLayout from "@/layouts/auth";
import HomeLayout from "@/layouts/home";
import MyCenterLayout from "@/layouts/mycenter";

import Index from "@/pages";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import BetRecord from "@/pages/mycenter/betrecord";
import CardManage from "@/pages/mycenter/cardmanage";
import Mail from "@/pages/mycenter/mail";
import MyVip from "@/pages/mycenter/myvip";
import TransRecord from "@/pages/mycenter/transrecord";
import UserInfo from "@/pages/mycenter/userinfo";
import Wallet from "@/pages/mycenter/wallet";
import WelfareCenter from "@/pages/mycenter/welfarecenter";
import Deposit from "@/pages/mycenter/deposit";
import Transfer from "@/pages/mycenter/transfer";
import Withdrawals from "@/pages/mycenter/withdrawals";
import VipDetail from "@/pages/mycenter/vipdetail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Index />} />

        <Route path="/mycenter" element={<MyCenterLayout />}>
          <Route path="/mycenter/wallet" element={<Wallet />} />
          <Route path="/mycenter/userinfo" element={<UserInfo />} />
          <Route path="/mycenter/myvip" element={<MyVip />} />
          <Route path="/mycenter/myvip/vipdetail" element={<VipDetail />} />
          <Route path="/mycenter/welfarecenter" element={<WelfareCenter />} />
          <Route path="/mycenter/cardmanage" element={<CardManage />} />
          <Route path="/mycenter/transrecord" element={<TransRecord />} />
          <Route path="/mycenter/betrecord" element={<BetRecord />} />
          <Route path="/mycenter/mail" element={<Mail />} />
          <Route path="/mycenter/deposit" element={<Deposit />} />
          <Route path="/mycenter/transfer" element={<Transfer />} />
          <Route path="/mycenter/withdrawals" element={<Withdrawals />} />
        </Route>
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default Router;
