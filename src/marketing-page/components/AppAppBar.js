import React, { useState, useContext, useEffect } from "react";
import { styled, keyframes } from "@mui/material/styles";
import { Box, Typography, Button, Avatar, Paper } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal"; // Import Modal
import { CryptoTrans } from "../TransFunc/CryptoTrans";
import { ToastContainer, toast } from "react-toastify";
import SearchBar from "./SearchBar"; // Import SearchBar component
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import "react-toastify/dist/ReactToastify.css";

const shine = keyframes`
  to {
    background-position: 200% center;
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(33,150,243,0.2); }
  50% { box-shadow: 0 0 20px rgba(33,150,243,0.4); }
  100% { box-shadow: 0 0 5px rgba(33,150,243,0.2); }
`;
const rotateGradient = keyframes`
  0% {
    background-position: 0% 50%;
    transform: rotate(0deg) scale(1);
  }
  50% {
    background-position: 100% 50%;
    transform: rotate(3deg) scale(1.05);
  }
  100% {
    background-position: 0% 50%;
    transform: rotate(0deg) scale(1);
  }
`;

const glowPulse = keyframes`
  0% { text-shadow: 0 0 10px rgba(255,59,48,0.2), 0 0 20px rgba(255,59,48,0.1); }
  50% { text-shadow: 0 0 20px rgba(255,59,48,0.4), 0 0 30px rgba(255,59,48,0.2); }
  100% { text-shadow: 0 0 10px rgba(255,59,48,0.2), 0 0 20px rgba(255,59,48,0.1); }
`;

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  backgroundColor: "#faf3e0 !important",
  backdropFilter: "blur(10px)",
  borderBottom: "3px solid rgba(0, 0, 0, 0.8)",
  animation: `${slideDown} 0.5s ease-out`,
}));

const LogoTypography = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontWeight: 800,
  background: `linear-gradient(
    120deg, 
rgb(255, 13, 0), 
    #FF6B6B, 
    #FF3B30, 
    #FF8787, 
    #FF4444,
    #FF3B30
  )`,
  backgroundSize: "300% 300%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: `
    ${rotateGradient} 3s ease-in-out infinite,
    ${glowPulse} 2s ease-in-out infinite
  `,
  cursor: "pointer",
  position: "relative",
  display: "inline-block",
  transformOrigin: "center center",
  transition: "all 0.3s ease",

  "&:hover": {
    transform: "rotate(5deg) scale(1.1)",
    background: `linear-gradient(
      90deg, 
      #FF3B30, 
      #FF6B6B, 
      #FF3B30
    )`,
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: `${shine} 3s linear infinite`,
    textShadow: "0 0 20px rgba(255,59,48,0.3)",

    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-3px",
      left: 0,
      width: "100%",
      height: "2px",
      background: "linear-gradient(90deg, transparent, #FF3B30, transparent)",
      opacity: 0.5,
    },
  },

  "@media (max-width: 600px)": {
    fontSize: "28px",
  },
}));

export default function AppAppBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [solPrice, setSolPrice] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const [bgColor, setBgColor] = useState(false);

  const navigate = useNavigate();

  const { SolConnectWallet, solCurrentAccount } = useContext(CryptoTrans);

useEffect(() => {
    const interval = setInterval(() => {
      setBgColor((prevColor) => !prevColor);
    }, 1000); // Change color every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

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

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Determine if we're scrolled past the threshold
      setScrolled(currentScrollPos > 20);

      // Show/hide based on scroll direction
      setVisible(
        (prevScrollPos > currentScrollPos && currentScrollPos > 0) || // Scrolling up
          currentScrollPos < 10 // At top
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <StyledAppBar elevation={0}>
        <Container maxWidth="xl" sx={{ background: "#faf3e0" }}>
          <Box sx={{ py: 1.5 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Left Section */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                <LogoTypography
                  onClick={() => navigate("/")}
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    "&::selection": {
                      backgroundColor: "transparent",
                      textShadow: "0 0 20px rgba(255,59,48,0.5)",
                    },
                  }}
                >
                  KolScan
                </LogoTypography>

                <Box sx={{ display: "flex", gap: 1 }}>
                  <Box sx={{ wwidth: "30px" }}>
                    <CustomButton
                      // IconComponent={DoneOutlineSharpIcon}
                      link="/"
                      buttonText="Home"
                    />
                  </Box>
                  <Box sx={{ wwidth: "130px" }}>
                    <CustomButton
                      // IconComponent={DoneOutlineSharpIcon}
                      link="/trades"
                      buttonText="Traders & Leaderboard"
                    />
                  </Box>
                </Box>
              </Box>

              {/* Right Section */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Box
                  component="img"
                  src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
                  sx={{ width: 20, height: 20, background: "#faf3e0" }}
                />
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "black",
                  }}
                >
                  ${solPrice}
                </Typography>

                <Link></Link>
                <Button
                  onClick={() => {
                    if (!solCurrentAccount) {
                      SolConnectWallet(); // Calls function when no wallet is connected
                    } else {
                      window.location.href = "/account"; // Navigates if wallet is connected
                    }
                  }}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    fontSize: "1rem",
                    width: "100%",
                    border: "1px solid rgb(0, 0, 0)  !important", // Add a solid black border
                    borderRadius: 0, // No rounded corners
                    transition: "all 0.5s ease-in-out",
                    zIndex: 1, // Button stays above the div
                    backgroundColor: bgColor?'green !important':'orange !important',
                    background: bgColor?'green !important':'orange !important',
                    color: "black",
                    "&:hover": {
                      transform: "translateX(-3px) translateY(3px)", // Moves slightly
                      // backgroundColor: "white !important",
                      border: "1px solid #FF5733",
                      color: "black",
                    },
                  }}
                >
                  {solCurrentAccount
                    ? solCurrentAccount.toString().substring(0, 6)
                    : "Connect Wallet"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </StyledAppBar>

      {/* Spacer */}
      <Box sx={{ height: "72px" }} />

      {/* Search Modal */}
      <Modal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          pt: 10,
          px: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 600,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <SearchBar />
        </Box>
      </Modal>

      <ToastContainer />
    </>
  );
}
