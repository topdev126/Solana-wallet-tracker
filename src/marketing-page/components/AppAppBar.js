import React, { useState, useContext, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import { Box, Typography, Button, Avatar, Paper } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
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
import { shortenAddress } from "../Utils/shortenAddress";
import { CryptoTrans } from "../TransFunc/CryptoTrans";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import SearchBar from "./SearchBar"; // Import SearchBar component
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";

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

const LogoTypography = styled(Typography)(({ theme }) => ({
  // ... existing LogoTypography styles ...
}));

const StyledButton = styled(Button)(({ theme }) => ({
  // ... existing StyledButton styles ...
}));

const PriceCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 16px',
  borderRadius: '12px',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(0, 0, 0, 0.02)',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.05)'}`,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.04)',
    transform: 'translateY(-2px)',
  },
}));

const WalletButton = styled(Button)(({ theme }) => ({
  // ... existing WalletButton styles ...
}));

export default function AppAppBar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // State for search modal
  const [solPrice, setSolPrice] = useState(null);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleSearchOpen = () => {
    setSearchOpen(true);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  const { SolConnectWallet, solCurrentAccount } = useContext(CryptoTrans);

  const triggerAlarm = () => {
    toast.info("Copied!", {
      autoClose: 3000, // Close after 3 seconds
    });
  };

  useEffect(() => {
    const fetchSolPrice = async () => {
      try {
        const response = await fetch(
          "https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT"
        );
        const data = await response.json();
        setSolPrice(parseFloat(data.price).toFixed(2)); // Format to 2 decimal places
      } catch (error) {
        console.error("Error fetching SOL price:", error);
      }
    };

    fetchSolPrice();
    const interval = setInterval(fetchSolPrice, 10000); // Refresh price every 10 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <AppBar
        // position="fixed"
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
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                }}
              >
                <Paper>
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                  >
                    Kolscan
                  </Typography>
                </Paper>

                <Paper
                  elevation={1}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    ml: 2,
                    border: "0.5px solid var(--border-color)",
                    borderRadius: 1,
                    p: "2px 10px",
                    fontSize: 16,
                    fontWeight: 550,
                    cursor: "pointer",
                    height: 41,
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.tradingview.com/chart/?symbol=BINANCE%3ASOLUSDT.P",
                      "_blank"
                    )
                  }
                >
                  <Avatar
                    src="/images/Solana.webp"
                    alt="Solana"
                    sx={{ width: 20, height: 20 }}
                  />
                  <Typography variant="h6">
                    {solPrice ? `$${solPrice}` : ""}
                  </Typography>
                </Paper>

                <Link to="/trades" style={{ textDecoration: "none" }}>
                  <Button variant="text" color="info" size="large">
                    Trades
                  </Button>
                </Link>
                <Link to="/tokens" style={{ textDecoration: "none" }}>
                  <Button variant="text" color="info" size="large">
                    Tokens
                  </Button>
                </Link>
                <Link to="/leaderboard" style={{ textDecoration: "none" }}>
                  <Button variant="text" color="info" size="large">
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
              <Paper>
                {!solCurrentAccount ? (
                  <Button
                    color="primary"
                    variant="outlined"
                    size="small"
                    sx={{
                      background: "#b3daff", // Set background to light blue
                      color: "black", // Set text color to white
                      "&.MuiButton-root:hover": {
                        backgroundColor: "#66b5ff", // Set background color to blue on hover
                      },
                      borderColor: "#4da9ff",
                    }}
                    onClick={SolConnectWallet}
                  >
                    Connect Wallet
                  </Button>
                ) : (
                  <CopyToClipboard text={"Sol : " + solCurrentAccount}>
                    <div
                      style={{
                        minWidth:"90px",
                        cursor: "pointer",
                        padding: "5px 10px", // Optional padding for better visual spacing
                        border: "1px solid #4da9ff", // Border color
                        borderRadius: "5px", // Rounded corners
                        background: "#b3daff", // Light blue background
                        display: "flex", // Flexbox to align items horizontally
                        alignItems: "center", // Align items (text and icon) vertically centered
                      }}
                      onClick={() => navigate("/account")}
                    >
                      {/* Sol Account */}
                      <span style={{ flex: 1 }}>
                        {solCurrentAccount.toString().substring(0, 6)}
                      </span>
                  
                      {/* Close Icon */}
                      <Tooltip title="Disconnect" arrow>
                        <CloseIcon
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent the tooltip from triggering the `div` click event
                            // Your close logic here
                          }}
                          sx={{
                            cursor: "pointer",
                            fontSize: "12px", // Smaller close icon size
                            "&:hover": {
                              color: "#f44336", // Change to red when hovered
                            },
                          }}
                        />
                      </Tooltip>
                    </div>
                  </CopyToClipboard>
                  
                )}
              </Paper>

              <ColorModeIconDropdown />
            </Box>
            {/* <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
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
                  <MenuItem>Trade</MenuItem>
                  <MenuItem>Borrow/Rent</MenuItem>
                  <MenuItem>WithDraw</MenuItem>
                  <MenuItem>DashBoard</MenuItem>
                  <Divider sx={{ my: 3 }} />
                </Box>
              </Drawer>
            </Box> */}
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
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            // p: 4,
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
