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
  background: 'rgba(20, 25, 35, 0.7)',
  backdropFilter: 'blur(12px)',
  borderRadius: '24px',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  position: 'relative',
  overflow: 'visible',
  transition: 'all 0.4s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    '& .trade-glow': {
      opacity: 0.15,
      transform: 'scale(1.1)',
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '-1px',
    borderRadius: '25px',
    padding: '1px',
    background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05), rgba(255,255,255,0))',
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
  padding: '16px',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
  borderRadius: '16px',
  border: '1px solid rgba(255,255,255,0.05)',
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
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        pt: 8,
        pb: 12,
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 20%, rgba(99,180,255,0.05) 0%, transparent 40%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  background: 'linear-gradient(90deg, #FFFFFF 0%, #63B4FF 100%)',
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
                  color: 'rgba(255,255,255,0.6)',
                  maxWidth: 600,
                  lineHeight: 1.6,
                }}
              >
                Monitor live Solana memecoin transactions and market activity with advanced analytics
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <ActionButton>
                <FilterListIcon />
              </ActionButton>
              <ActionButton>
                <TimelineIcon />
              </ActionButton>
              <ActionButton>
                <SwapVertIcon />
              </ActionButton>
            </Box>
          </Box>

          {/* Stats Overview */}
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
                    height: '70%',
                    background: 'rgba(255,255,255,0.1)',
                  }
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    mb: 0.5,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.875rem',
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
                            background: `linear-gradient(45deg, ${trade.type === 'Buy' ? '#4CAF50' : '#f44336'}, #2196F3)`,
                            animation: `${ripple} 2s infinite`,
                            opacity: 0.2,
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
                            border: '2px solid rgba(255,255,255,0.1)',
                            position: 'relative',
                            zIndex: 1,
                          }}
                        />
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'rgba(255,255,255,0.6)',
                            mb: 0.5,
                          }}
                        >
                          Trader
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: 'white',
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
                          ? 'rgba(76,175,80,0.1)'
                          : 'rgba(244,67,54,0.1)',
                        border: `1px solid ${trade.type === 'Buy' 
                          ? 'rgba(76,175,80,0.2)'
                          : 'rgba(244,67,54,0.2)'}`,
                      }}
                    >
                      <Typography
                        sx={{
                          color: trade.type === 'Buy' ? '#4CAF50' : '#f44336',
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
                      background: 'rgba(255,255,255,0.02)',
                      borderRadius: '16px',
                      border: '1px solid rgba(255,255,255,0.03)',
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#63B4FF',
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
                          color: 'rgba(255,255,255,0.4)',
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
                        borderTop: '1px solid rgba(255,255,255,0.05)',
                      }}
                    >
                      <Box
                        sx={{
                          px: 2,
                          py: 1,
                          borderRadius: '8px',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.05)',
                        }}
                      >
                        <Typography
                          sx={{
                            color: 'white',
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
                            color: trade.profit.startsWith('+') ? '#4CAF50' : '#f44336',
                            fontWeight: 600,
                            mb: 0.5,
                          }}
                        >
                          {trade.profit}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'rgba(255,255,255,0.4)',
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
