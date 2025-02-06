import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppAppBar from "./components/AppAppBar";
import AccountDashboard from "./components/AccountDashboard"
import Borrows from "./components/Tokens";
import WithDraw from "./components/Leaderboard";
import Trade from "./components/Trades";
import DashBoard from "./components/DashBoard";
import AppTheme from "../shared-theme/AppTheme";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function MarketingPage(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <div>
        <BrowserRouter>
          <AppAppBar />
          <Routes>
            <Route exact path="/" element={<DashBoard />} />
            <Route path="/tokens" element={<Borrows />} />
            <Route path="/leaderboard" element={<WithDraw />} />
            <Route path="/trades" element={<Trade />} />
            <Route path="/account" element={<AccountDashboard />} />
          </Routes>
        </BrowserRouter>
        <Divider />
        <Footer /> 
      </div>
    </AppTheme>
  );
}
