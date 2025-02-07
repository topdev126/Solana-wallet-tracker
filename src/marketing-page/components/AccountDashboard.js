import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Select,
  MenuItem,
  useMediaQuery,
  Container,
  Avatar,
  Stack,
  IconButton,
  Chip,
  Tooltip,
  Grid,
  Divider,
} from "@mui/material";
import { alpha, useTheme } from '@mui/material/styles';
import RefreshIcon from "@mui/icons-material/Refresh";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SearchIcon from "@mui/icons-material/Search";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import TimelineIcon from '@mui/icons-material/Timeline';

const AccountDashboard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  const mockStats = [
    { title: "Total Balance", value: "$12,458.90", change: "+24.5%", icon: <AccountBalanceWalletIcon /> },
    { title: "24h Trading Volume", value: "$3,847.25", change: "+12.3%", icon: <SwapHorizIcon /> },
    { title: "Portfolio Growth", value: "$1,294.35", change: "+8.7%", icon: <TimelineIcon /> },
  ];

  const mockTopHoldings = [
    { token: "BONK", amount: "2,450,000", value: "$1,225", change: "+12.5%", icon: "🐕" },
    { token: "WIF", amount: "15,000", value: "$750", change: "-3.2%", icon: "🐶" },
    { token: "MYRO", amount: "85,000", value: "$425", change: "+8.7%", icon: "🚀" },
  ];

  const mockDefiTrades = [
    { time: "2 mins ago", token: "BONK/SOL", type: "Buy", amount: "+450K BONK", price: "0.000001", icon: "🐕" },
    { time: "5 mins ago", token: "WIF/SOL", type: "Sell", amount: "-1.2K WIF", price: "0.05", icon: "🐶" },
    { time: "15 mins ago", token: "MYRO/SOL", type: "Buy", amount: "+25K MYRO", price: "0.005", icon: "🚀" },
  ];

  const GlassCard = ({ children, ...props }) => (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        background: theme.palette.mode === 'dark'
          ? alpha(theme.palette.background.paper, 0.8)
          : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        border: `1px solid ${theme.palette.mode === 'dark'
          ? alpha(theme.palette.primary.main, 0.15)
          : alpha('#E3ECFF', 0.8)}`,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
        },
        ...props.sx
      }}
    >
      {children}
    </Paper>
  );

  return (
    <Box
      sx={{
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0A1929 0%, #111827 50%, #1E1E1E 100%)'
          : 'linear-gradient(135deg, #F5F9FF 0%, #F0F6FF 50%, #EBF3FF 100%)',
        minHeight: '100vh',
        pt: 4,
        pb: 8,
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={8}>
            <GlassCard>
              <Stack direction="row" alignItems="center" spacing={3}>
                <Avatar
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                  sx={{
                    width: 80,
                    height: 80,
                    border: `3px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  }}
                />
                <Box flex={1}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Typography variant="h4" fontWeight="800">
                      Crypto Whale
                    </Typography>
                    <Chip
                      label="Pro Trader"
                      sx={{
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(45deg, #60A5FA 30%, #93C5FD 90%)'
                          : 'linear-gradient(45deg, #3B82F6 30%, #60A5FA 90%)',
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                  </Stack>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: theme.palette.mode === 'dark'
                        ? alpha(theme.palette.common.white, 0.7)
                        : alpha(theme.palette.common.black, 0.7),
                      mt: 1,
                    }}
                  >
                    Top 1% Trader • 245 Successful Trades • Member since 2023
                  </Typography>
                </Box>
                <Stack direction="row" spacing={1}>
                  <Tooltip title="Copy Address">
                    <IconButton
                      sx={{
                        background: alpha(theme.palette.primary.main, 0.1),
                        '&:hover': {
                          background: alpha(theme.palette.primary.main, 0.2),
                        },
                      }}
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Refresh Data">
                    <IconButton
                      sx={{
                        background: alpha(theme.palette.primary.main, 0.1),
                        '&:hover': {
                          background: alpha(theme.palette.primary.main, 0.2),
                        },
                      }}
                    >
                      <RefreshIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Stack>
            </GlassCard>
          </Grid>

          {/* Stats Cards */}
          {mockStats.map((stat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <GlassCard>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      background: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Box flex={1}>
                    <Typography variant="body2" color="text.secondary">
                      {stat.title}
                    </Typography>
                    <Typography variant="h6" fontWeight="700">
                      {stat.value}
                    </Typography>
                  </Box>
                  <Chip
                    label={stat.change}
                    size="small"
                    sx={{
                      background: stat.change.startsWith('+')
                        ? alpha(theme.palette.success.main, 0.1)
                        : alpha(theme.palette.error.main, 0.1),
                      color: stat.change.startsWith('+')
                        ? theme.palette.success.main
                        : theme.palette.error.main,
                      fontWeight: 600,
                    }}
                  />
                </Stack>
              </GlassCard>
            </Grid>
          ))}
        </Grid>

        {/* Main Content Grid */}
        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              {/* Top Holdings */}
              <GlassCard>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
                  <Typography variant="h6" fontWeight="700">
                    Top Holdings
                  </Typography>
                  <IconButton size="small">
                    <MoreVertIcon />
                  </IconButton>
                </Stack>
                <Stack spacing={2}>
                  {mockTopHoldings.map((holding, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 2,
                        borderRadius: 2,
                        background: alpha(theme.palette.background.paper, 0.4),
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: alpha(theme.palette.primary.main, 0.1),
                          mr: 2,
                          fontSize: '1.5rem',
                        }}
                      >
                        {holding.icon}
                      </Box>
                      <Box flex={1}>
                        <Typography variant="subtitle1" fontWeight="600">
                          {holding.token}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {holding.amount} tokens
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: "right" }}>
                        <Typography variant="subtitle1" fontWeight="600">
                          {holding.value}
                        </Typography>
                        <Typography
                          variant="body2"
                          color={holding.change.startsWith("+") ? "success.main" : "error.main"}
                          fontWeight="600"
                        >
                          {holding.change}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </GlassCard>

              {/* Token PnL */}
              <GlassCard>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
                  <Typography variant="h6" fontWeight="700">
                    Token PnL
                  </Typography>
                  <Select
                    size="small"
                    defaultValue="recent"
                    sx={{
                      minWidth: 120,
                      background: alpha(theme.palette.background.paper, 0.4),
                    }}
                  >
                    <MenuItem value="recent">Most Recent</MenuItem>
                    <MenuItem value="profit">Highest Profit</MenuItem>
                    <MenuItem value="loss">Highest Loss</MenuItem>
                  </Select>
                </Stack>
                <Box sx={{ textAlign: "center", py: 3 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      background: 'linear-gradient(45deg, #4CAF50 30%, #81C784 90%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 800,
                    }}
                  >
                    +125.45 SOL
                  </Typography>
                  <Typography
                    variant="h6"
                    color="success.main"
                    fontWeight="600"
                    sx={{ mt: 1 }}
                  >
                    $8,781.50
                  </Typography>
                </Box>
              </GlassCard>
            </Stack>
          </Grid>

          {/* Right Column - Recent Trades */}
          <Grid item xs={12} md={8}>
            <GlassCard sx={{ height: '100%' }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
                <Typography variant="h6" fontWeight="700">
                  Recent Trades
                </Typography>
                <TextField
                  size="small"
                  placeholder="Search trades..."
                  InputProps={{
                    startAdornment: <SearchIcon sx={{ mr: 1, color: "text.secondary" }} />,
                  }}
                  sx={{
                    width: 200,
                    '& .MuiOutlinedInput-root': {
                      background: alpha(theme.palette.background.paper, 0.4),
                    },
                  }}
                />
              </Stack>
              <Stack spacing={2}>
                {mockDefiTrades.map((trade, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 2.5,
                      borderRadius: 2,
                      background: alpha(theme.palette.background.paper, 0.4),
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: alpha(theme.palette.primary.main, 0.1),
                        mr: 2,
                        fontSize: '2rem',
                      }}
                    >
                      {trade.icon}
                    </Box>
                    <Box flex={1}>
                      <Typography variant="subtitle1" fontWeight="600">
                        {trade.token}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {trade.time}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography
                        variant="subtitle1"
                        fontWeight="600"
                        color={trade.type === "Buy" ? "success.main" : "error.main"}
                      >
                        {trade.amount}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        @ {trade.price} SOL
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </GlassCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AccountDashboard;
