import * as React from "react";
import { styled, keyframes } from "@mui/material/styles";
import { alpha } from '@mui/material/styles';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from '@mui/icons-material/FilterList';
import TimelineIcon from '@mui/icons-material/Timeline';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { useTheme } from "@mui/system";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const ripple = keyframes`
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
`;

const TradeCard = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === 'dark' 
    ? alpha(theme.palette.background.paper, 0.8)
    : 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(12px)',
  borderRadius: '24px',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? alpha(theme.palette.primary.main, 0.15)
    : alpha('#E3ECFF', 0.8)}`,
  position: 'relative',
  overflow: 'visible',
  transition: 'all 0.4s ease-in-out',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 4px 24px rgba(0, 0, 0, 0.2)'
    : '0 4px 24px rgba(147, 197, 253, 0.06)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 8px 32px rgba(0, 0, 0, 0.3)'
      : '0 8px 32px rgba(147, 197, 253, 0.12)',
    '& .trade-glow': {
      opacity: theme.palette.mode === 'dark' ? 0.1 : 0.15,
      transform: 'scale(1.1)',
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '-1px',
    borderRadius: '25px',
    padding: '1px',
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(45deg, rgba(66,153,225,0.2), rgba(99,179,237,0.1), rgba(255,255,255,0.05))'
      : 'linear-gradient(45deg, rgba(147,197,253,0.3), rgba(206,225,255,0.2), rgba(255,255,255,0.1))',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  }
}));

const GlowEffect = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '120%',
  height: '120%',
  background: 'radial-gradient(circle, rgba(99,180,255,0.2) 0%, rgba(99,180,255,0) 70%)',
  opacity: 0,
  transition: 'all 0.4s ease-in-out',
  zIndex: -1,
});

const StatsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '12px',
  padding: '24px',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.7) 0%, rgba(30, 41, 59, 0.6) 100%)'
    : 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  border: `1px solid ${theme.palette.mode === 'dark'
    ? alpha(theme.palette.primary.main, 0.15)
    : alpha(theme.palette.primary.main, 0.08)}`,
  boxShadow: theme.palette.mode === 'dark'
    ? '0 4px 20px rgba(0, 0, 0, 0.25)'
    : '0 4px 20px rgba(147, 197, 253, 0.08)',
}));

const ActionButton = styled(IconButton)(({ theme }) => ({
  background: 'rgba(255,255,255,0.03)',
  borderRadius: '12px',
  padding: '12px',
  color: 'white',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255,255,255,0.1)',
    transform: 'translateY(-2px)',
  }
}));

export default function Trade() {
  const theme = useTheme();

  const trades = [
    {
      chain: "Solana",
      trader: "zinc4b...Ay89",
      avatar: "https://kolscan.io/images/Solana.webp",
      amount: "12,458 SOL",
      type: "Buy",
      token: "BONK",
      time: "2 mins ago",
      profit: "+18.5%",
      usdValue: "$1,245,800"
    },
    {
      chain: "Solana",
      trader: "whale7...x4d2",
      avatar: "https://kolscan.io/images/Solana.webp",
      amount: "45,000 SOL",
      type: "Sell",
      token: "WIF",
      time: "5 mins ago",
      profit: "-8.2%",
      usdValue: "$4,500,000"
    },
    {
      chain: "Solana",
      trader: "degen9...f7h3",
      avatar: "https://kolscan.io/images/Solana.webp",
      amount: "8,900 SOL",
      type: "Buy",
      token: "MYRO",
      time: "8 mins ago",
      profit: "+25.7%",
      usdValue: "$890,000"
    },
    {
      chain: "Solana",
      trader: "alpha2...j9k5",
      avatar: "https://kolscan.io/images/Solana.webp",
      amount: "23,670 SOL",
      type: "Buy",
      token: "POPCAT",
      time: "12 mins ago",
      profit: "+12.3%",
      usdValue: "$2,367,000"
    },
    {
      chain: "Solana",
      trader: "smart8...h5g7",
      avatar: "https://kolscan.io/images/Solana.webp",
      amount: "15,780 SOL",
      type: "Sell",
      token: "BOME",
      time: "15 mins ago",
      profit: "+45.8%",
      usdValue: "$1,578,000"
    },
    {
      chain: "Solana",
      trader: "pro5x...d3f4",
      avatar: "https://kolscan.io/images/Solana.webp",
      amount: "67,890 SOL",
      type: "Buy",
      token: "DOGWIFHAT",
      time: "18 mins ago",
      profit: "+31.2%",
      usdValue: "$6,789,000"
    }
  ];

  return (
    <Box
      sx={{
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0A1929 0%, #111827 50%, #1E1E1E 100%)'
          : 'linear-gradient(135deg, #F5F9FF 0%, #F0F6FF 50%, #EBF3FF 100%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        pt: 8,
        pb: 12,
      }}
    >
      {/* Updated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle at 20% 20%, rgba(66,153,225,0.05) 0%, transparent 40%)'
            : 'radial-gradient(circle at 20% 20%, rgba(147,197,253,0.08) 0%, transparent 40%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Updated Header Section typography colors */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  background: 'linear-gradient(90deg, #2065D1 0%, #32C5FF 100%)',
                  backgroundSize: '200% auto',
                  animation: `${gradientMove} 3s ease infinite`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                Real-time Trades
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: alpha(theme.palette.text.primary, 0.7),
                  maxWidth: 600,
                  lineHeight: 1.6,
                }}
              >
                Monitor live Solana memecoin transactions and market activity with advanced analytics
              </Typography>
            </Box>
            
            {/* Updated Action Buttons */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <ActionButton sx={{ 
                background: alpha(theme.palette.primary.main, 0.05),
                color: theme.palette.primary.main,
                '&:hover': {
                  background: alpha(theme.palette.primary.main, 0.1),
                }
              }}>
                <FilterListIcon />
              </ActionButton>
              <ActionButton sx={{ 
                background: alpha(theme.palette.primary.main, 0.05),
                color: theme.palette.primary.main,
                '&:hover': {
                  background: alpha(theme.palette.primary.main, 0.1),
                }
              }}>
                <TimelineIcon />
              </ActionButton>
              <ActionButton sx={{ 
                background: alpha(theme.palette.primary.main, 0.05),
                color: theme.palette.primary.main,
                '&:hover': {
                  background: alpha(theme.palette.primary.main, 0.1),
                }
              }}>
                <SwapVertIcon />
              </ActionButton>
            </Box>
          </Box>

          {/* Updated Stats Container */}
          <StatsContainer>
            {[
              { label: '24h Volume', value: '$245.8M' },
              { label: 'Active Traders', value: '2,847' },
              { label: 'Avg. Trade Size', value: '1,280 SOL' },
              { label: 'Total Trades', value: '12,458' },
            ].map((stat, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  textAlign: 'center',
                  position: 'relative',
                  '&::after': {
                    content: index === 3 ? 'none' : '""',
                    position: 'absolute',
                    right: -6,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '1px',
                    height: '60%',
                    background: theme.palette.mode === 'dark'
                      ? alpha(theme.palette.primary.main, 0.15)
                      : alpha(theme.palette.primary.main, 0.08),
                  }
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 0.5,
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(90deg, #60A5FA 0%, #93C5FD 100%)'
                      : 'linear-gradient(90deg, #2563EB 0%, #3B82F6 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.mode === 'dark'
                      ? alpha(theme.palette.common.white, 0.6)
                      : alpha(theme.palette.common.black, 0.6),
                    fontSize: '0.875rem',
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </StatsContainer>
        </Box>

        {/* Trades Grid */}
        <Grid container spacing={3}>
          {trades.map((trade, index) => (
            <Grid xs={12} md={6} lg={4} key={index}>
              <TradeCard>
                <GlowEffect className="trade-glow" />
                <Box sx={{ p: 3 }}>
                  {/* Trade Header */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            inset: -2,
                            borderRadius: '50%',
                            background: trade.type === 'Buy' 
                              ? 'linear-gradient(45deg, rgba(52,211,153,0.2), rgba(16,185,129,0.1))'
                              : 'linear-gradient(45deg, rgba(248,113,113,0.2), rgba(239,68,68,0.1))',
                            animation: `${ripple} 2s infinite`,
                            opacity: 0.3,
                          }
                        }}
                      >
                        <img
                          src={trade.avatar}
                          alt={trade.chain}
                          style={{
                            width: 52,
                            height: 52,
                            borderRadius: '50%',
                            border: '2px solid rgba(147,197,253,0.2)',
                            position: 'relative',
                            zIndex: 1,
                          }}
                        />
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            color: alpha(theme.palette.text.primary, 0.6),
                            mb: 0.5,
                          }}
                        >
                          Trader
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: theme.palette.text.primary,
                            fontFamily: 'monospace',
                            letterSpacing: '0.5px',
                          }}
                        >
                          {trade.trader}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        px: 2,
                        py: 1,
                        borderRadius: '12px',
                        background: trade.type === 'Buy' 
                          ? 'rgba(16,185,129,0.1)'
                          : 'rgba(239,68,68,0.1)',
                        border: `1px solid ${trade.type === 'Buy' 
                          ? 'rgba(16,185,129,0.2)'
                          : 'rgba(239,68,68,0.2)'}`,
                      }}
                    >
                      <Typography
                        sx={{
                          color: trade.type === 'Buy' ? '#10B981' : '#EF4444',
                          fontWeight: 600,
                          fontSize: '0.875rem',
                        }}
                      >
                        {trade.type}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Trade Details */}
                  <Box
                    sx={{
                      p: 2.5,
                      background: theme.palette.mode === 'dark'
                        ? alpha(theme.palette.background.paper, 0.4)
                        : alpha('#F8FAFF', 0.5),
                      borderRadius: '16px',
                      border: `1px solid ${theme.palette.mode === 'dark'
                        ? alpha(theme.palette.primary.main, 0.15)
                        : alpha('#E3ECFF', 0.8)}`,
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#3B82F6',
                          fontWeight: 700,
                          mb: 0.5,
                          fontFamily: 'monospace',
                        }}
                      >
                        {trade.amount}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: alpha(theme.palette.text.primary, 0.5),
                          fontFamily: 'monospace',
                        }}
                      >
                        ≈ {trade.usdValue}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        pt: 2,
                        borderTop: `1px solid ${alpha('#E3ECFF', 0.8)}`,
                      }}
                    >
                      <Box
                        sx={{
                          px: 2,
                          py: 1,
                          borderRadius: '8px',
                          background: alpha('#F8FAFF', 0.7),
                          border: `1px solid ${alpha('#E3ECFF', 0.8)}`,
                        }}
                      >
                        <Typography
                          sx={{
                            color: theme.palette.text.primary,
                            fontSize: '0.875rem',
                            fontWeight: 500,
                          }}
                        >
                          ${trade.token}
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography
                          sx={{
                            color: trade.profit.startsWith('+') ? '#10B981' : '#EF4444',
                            fontWeight: 600,
                            mb: 0.5,
                          }}
                        >
                          {trade.profit}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: alpha(theme.palette.text.primary, 0.5),
                          }}
                        >
                          {trade.time}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </TradeCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
