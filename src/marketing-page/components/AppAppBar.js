import React, { useState, useContext, useEffect } from "react";
import { styled, keyframes } from "@mui/material/styles";
import { alpha } from '@mui/material/styles';
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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glowKeyframes = keyframes`
  0% { text-shadow: 0 0 10px rgba(99,180,255,0.5); }
  50% { text-shadow: 0 0 20px rgba(99,180,255,0.8), 0 0 30px rgba(99,180,255,0.3); }
  100% { text-shadow: 0 0 10px rgba(99,180,255,0.5); }
`;

const pulseKeyframes = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(99,180,255, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(99,180,255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(99,180,255, 0); }
`;

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

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  background: 'rgba(255, 255, 255, 0.98)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(231, 235, 240, 0.8)',
  animation: `${slideDown} 0.5s ease-out`,
}));

const StyledToolbar = styled(Toolbar)(({ theme, scrolled }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  backdropFilter: "blur(20px)",
  background: scrolled ? 'rgba(20, 25, 35, 0.95)' : 'rgba(20, 25, 35, 0.8)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  padding: scrolled ? "8px 24px" : "12px 24px",
  transition: 'all 0.3s ease-in-out',
}));

const LogoTypography = styled(Typography)({
  fontSize: '32px',
  fontWeight: 800,
  background: 'linear-gradient(to right, #2196F3, #64B5F6, #2196F3, #64B5F6)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: `${shine} 3s linear infinite`,
  cursor: 'pointer',
  letterSpacing: '-0.5px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    animation: `${shine} 1.5s linear infinite`,
  }
});

const PriceDisplay = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 16px',
  borderRadius: '8px',
  backgroundColor: 'rgba(33, 150, 243, 0.08)',
  border: '1px solid rgba(33, 150, 243, 0.1)',
  animation: `${fadeIn} 0.5s ease-out`,
  '&:hover': {
    animation: `${glow} 2s infinite`,
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
});

const SearchIconButton = styled(IconButton)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.03)',
  borderRadius: '12px',
  padding: '8px',
  color: 'white',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-2px)',
  }
}));

const ActionIconButton = styled(IconButton)(({ theme }) => ({
  background: 'linear-gradient(135deg, #E3F2FD, #BBDEFB)',
  borderRadius: '16px',
  padding: '12px',
  width: '46px',
  height: '46px',
  boxShadow: '0 4px 15px rgba(33,150,243,0.1)',
  border: '2px solid rgba(255,255,255,0.8)',
  color: '#1976D2',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: '0 8px 25px rgba(33,150,243,0.2)',
    background: 'linear-gradient(135deg, #E3F2FD, #90CAF9)',
  },
  '& svg': {
    fontSize: '1.3rem',
    transition: 'transform 0.3s ease',
  },
  '&:hover svg': {
    transform: 'scale(1.1)',
  }
}));

const WalletButton = styled(Button)(({ connected }) => ({
  backgroundColor: connected ? 'white' : '#2196F3',
  color: connected ? '#1976D2' : 'white',
  padding: '8px 20px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: 600,
  textTransform: 'none',
  border: connected ? '1px solid #E7EBF0' : 'none',
  boxShadow: connected ? 'none' : '0 4px 12px rgba(33, 150, 243, 0.2)',
  animation: `${fadeIn} 0.5s ease-out`,
  '&:hover': {
    backgroundColor: connected ? 'white' : '#1976D2',
    boxShadow: '0 4px 12px rgba(33, 150, 243, 0.2)',
    transform: 'translateY(-2px)',
    animation: `${glow} 2s infinite`,
  },
  transition: 'all 0.3s ease',
}));

const NavButton = styled(Button)(({ active }) => ({
  color: active ? '#1976D2' : '#64748B',
  padding: '6px 16px',
  fontSize: '15px',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '8px',
  backgroundColor: active ? 'rgba(33, 150, 243, 0.08)' : 'transparent',
  animation: active ? `${fadeIn} 0.3s ease-out` : 'none',
  '&:hover': {
    backgroundColor: 'rgba(33, 150, 243, 0.08)',
    transform: 'translateY(-2px)',
    animation: `${pulse} 0.3s ease-in-out`,
  },
  transition: 'all 0.2s ease',
}));

const ActionButton = styled(IconButton)({
  color: '#64748B',
  padding: '8px',
  borderRadius: '8px',
  overflow: 'hidden',
  position: 'relative',
  '&:hover': {
    backgroundColor: 'rgba(33, 150, 243, 0.08)',
    color: '#1976D2',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      background: 'radial-gradient(circle, rgba(33,150,243,0.2) 0%, transparent 70%)',
      animation: `${pulse} 1s ease-out`,
    }
  },
  transition: 'all 0.2s ease',
});

export default function AppAppBar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [solPrice, setSolPrice] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('trade');

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <StyledAppBar elevation={0}>
        <Container maxWidth="xl">
          <Box sx={{ py: 1.5 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {/* Left Section */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <LogoTypography onClick={() => navigate("/")}>
                  KolScan
                </LogoTypography>
                
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {['trades', 'tokens', 'leaderboard'].map((item) => (
                    <NavButton
                      key={item}
                      active={activeNav === item}
                      onClick={() => {
                        setActiveNav(item);
                        navigate(`/${item}`);
                      }}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </NavButton>
                  ))}
                </Box>
              </Box>

              {/* Right Section */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <PriceDisplay>
                  <Box
                    component="img"
                    src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
                    sx={{ width: 20, height: 20 }}
                  />
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#1976D2',
                    }}
                  >
                    ${solPrice}
                  </Typography>
                </PriceDisplay>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <ActionButton onClick={() => setSearchOpen(true)}>
                    <SearchIcon />
                  </ActionButton>
                  <ColorModeIconDropdown />
                </Box>

                <WalletButton
                  connected={!!solCurrentAccount}
                  onClick={solCurrentAccount ? () => navigate("/account") : SolConnectWallet}
                >
                  {solCurrentAccount 
                    ? solCurrentAccount.toString().substring(0, 6)
                    : 'Connect Wallet'
                  }
                </WalletButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </StyledAppBar>

      {/* Spacer */}
      <Box sx={{ height: '72px' }} />

      {/* Search Modal */}
      <Modal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          pt: 10,
          px: 2,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 600,
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <SearchBar />
        </Box>
      </Modal>

      <ToastContainer />
    </>
  );
}
