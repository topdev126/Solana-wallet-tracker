import React, { useState, useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import Modal from "@mui/material/Modal"; // Import Modal
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchIcon from "@mui/icons-material/Search";
import Sitemark from "./SitemarkIcon";
import ColorModeIconDropdown from "../../shared-theme/ColorModeIconDropdown";
import { Link } from "react-router-dom";
import { shortenAddress } from "../Utils/shortenAddress";
import { CryptoTrans } from "../TransFunc/CryptoTrans";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import SearchBar from "./SearchBar"; // Import SearchBar component

import "react-toastify/dist/ReactToastify.css";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

export default function AppAppBar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // State for search modal

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleSearchOpen = () => {
    setSearchOpen(true);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  const {
    ethConnectWallet,
    ethCurrentAccount,
    SolConnectWallet,
    solCurrentAccount,
  } = useContext(CryptoTrans);

  const triggerAlarm = () => {
    toast.info("Copied!", {
      autoClose: 3000, // Close after 3 seconds
    });
  };

  return (
    <>
      <AppBar
        position="fixed"
        enableColorOnDark
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: "calc(var(--template-frame-height, 0px) + 28px)",
        }}
      >
        <Container maxWidth="lg">
          <StyledToolbar variant="dense" disableGutters>
            <Box
              sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
            >
              <Link to="/">
                <Sitemark />
              </Link>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Link to="/Liquidity">
                  <Button variant="text" color="info" size="small">
                    Trades
                  </Button>
                </Link>
                <Link to="/Borrows">
                  <Button variant="text" color="info" size="small">
                    Tokens
                  </Button>
                </Link>
                <Link to="/WithDraw">
                  <Button variant="text" color="info" size="small">
                    Leaderboard
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                alignItems: "center",
              }}
            >
              <IconButton style={{ marginLeft: 8 }} onClick={handleSearchOpen}>
                <SearchIcon />
              </IconButton>

              {!solCurrentAccount ? (
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  onClick={SolConnectWallet}
                >
                  Connect Wallet
                </Button>
              ) : (
                <CopyToClipboard
                  text={
                    "Sol : " +
                    solCurrentAccount +
                    "   Eth : " +
                    ethCurrentAccount
                  }
                >
                  <div style={{ cursor: "grab" }} onClick={triggerAlarm}>
                    Sol : {shortenAddress(solCurrentAccount.toString())}
                    &nbsp;&nbsp;&nbsp;&nbsp; Eth :
                    {shortenAddress(ethCurrentAccount.toString())}
                  </div>
                </CopyToClipboard>
              )}

              <ColorModeIconDropdown />
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
              <ColorModeIconDropdown size="medium" />
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="top"
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: {
                    top: "var(--template-frame-height, 0px)",
                  },
                }}
              >
                <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <IconButton onClick={toggleDrawer(false)}>
                      <CloseRoundedIcon />
                    </IconButton>
                  </Box>

                  <MenuItem>DashBoard</MenuItem>
                  <MenuItem>Liquidity</MenuItem>
                  <MenuItem>Borrow/Rent</MenuItem>
                  <MenuItem>WithDraw</MenuItem>
                  <MenuItem>DashBoard</MenuItem>
                  <Divider sx={{ my: 3 }} />
                </Box>
              </Drawer>
            </Box>
          </StyledToolbar>
        </Container>
      </AppBar>

      {/* Search Modal */}
      <Modal
        open={searchOpen}
        onClose={handleSearchClose}
        aria-labelledby="search-modal"
        aria-describedby="search-bar-modal"
        sx={{
          backdropFilter: "blur(10px)", // Blurred background effect
          bgcolor: "rgba(0, 0, 0, 0.3)", // Semi-transparent dark background
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            minWidth: 300,
            opacity: 0.95, // Adjusted opacity for the modal content
          }}
        >
          <SearchBar />
        </Box>
      </Modal>

      <ToastContainer />
    </>
  );
}
