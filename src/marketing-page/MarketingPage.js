import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppAppBar from "./components/AppAppBar";
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
            <Route path="/trades" element={<Trade />} />
          </Routes>
        </BrowserRouter>
        <Divider />
        <Footer /> 
      </div>
    </AppTheme>
  );
}
