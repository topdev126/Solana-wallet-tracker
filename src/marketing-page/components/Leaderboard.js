import React from "react";
import { styled, keyframes, useTheme } from "@mui/material/styles";
import { alpha } from '@mui/material/styles';
import {
  Avatar,
  Button,
  Container,
  Grid,
  Typography,
  IconButton,
  Box,
  Card,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const LeaderList = [
  {
    number: 1,
    avatar: "avatar_url_1",
    name: "Name1",
    twitter_link: "https://twitter.com/name1",
    telegram_link: "https://t.me/name1",
    username: "username1",
    number_of_buy: 134,
    number_of_sell: 4,
    profit_of_solana: 319.8,
    profit_of_usd: 47129.1,
  },
  {
    number: 2,
    avatar: "avatar_url_2",
    name: "Name2",
    twitter_link: "https://twitter.com/name2",
    telegram_link: "https://t.me/name2",
    username: "username2",
    number_of_buy: 135,
    number_of_sell: 5,
    profit_of_solana: 320.8,
    profit_of_usd: 47229.1,
  },
  {
    number: 3,
    avatar: "avatar_url_3",
    name: "Name3",
    twitter_link: "https://twitter.com/name3",
    telegram_link: "https://t.me/name3",
    username: "username3",
    number_of_buy: 136,
    number_of_sell: 6,
    profit_of_solana: 321.8,
    profit_of_usd: 47329.1,
  },
  {
    number: 4,
    avatar: "avatar_url_4",
    name: "Name4",
    twitter_link: "https://twitter.com/name4",
    telegram_link: "https://t.me/name4",
    username: "username4",
    number_of_buy: 137,
    number_of_sell: 7,
    profit_of_solana: 322.8,
    profit_of_usd: 47429.1,
  },
  {
    number: 5,
    avatar: "avatar_url_5",
    name: "Name5",
    twitter_link: "https://twitter.com/name5",
    telegram_link: "https://t.me/name5",
    username: "username5",
    number_of_buy: 138,
    number_of_sell: 8,
    profit_of_solana: 323.8,
    profit_of_usd: 47529.1,
  },
  {
    number: 6,
    avatar: "avatar_url_6",
    name: "Name6",
    twitter_link: "https://twitter.com/name6",
    telegram_link: "https://t.me/name6",
    username: "username6",
    number_of_buy: 139,
    number_of_sell: 9,
    profit_of_solana: 324.8,
    profit_of_usd: 47629.1,
  },
  {
    number: 7,
    avatar: "avatar_url_7",
    name: "Name7",
    twitter_link: "https://twitter.com/name7",
    telegram_link: "https://t.me/name7",
    username: "username7",
    number_of_buy: 140,
    number_of_sell: 10,
    profit_of_solana: 325.8,
    profit_of_usd: 47729.1,
  },
  {
    number: 8,
    avatar: "avatar_url_8",
    name: "Name8",
    twitter_link: "https://twitter.com/name8",
    telegram_link: "https://t.me/name8",
    username: "username8",
    number_of_buy: 141,
    number_of_sell: 11,
    profit_of_solana: 326.8,
    profit_of_usd: 47829.1,
  },
  {
    number: 9,
    avatar: "avatar_url_9",
    name: "Name9",
    twitter_link: "https://twitter.com/name9",
    telegram_link: "https://t.me/name9",
    username: "username9",
    number_of_buy: 142,
    number_of_sell: 12,
    profit_of_solana: 327.8,
    profit_of_usd: 47929.1,
  },
  {
    number: 10,
    avatar: "avatar_url_10",
    name: "Name10",
    twitter_link: "https://twitter.com/name10",
    telegram_link: "https://t.me/name10",
    username: "username10",
    number_of_buy: 143,
    number_of_sell: 13,
    profit_of_solana: 328.8,
    profit_of_usd: 48029.1,
  },
  {
    number: 11,
    avatar: "avatar_url_11",
    name: "Name11",
    twitter_link: "https://twitter.com/name11",
    telegram_link: "https://t.me/name11",
    username: "username11",
    number_of_buy: 144,
    number_of_sell: 14,
    profit_of_solana: 329.8,
    profit_of_usd: 48129.1,
  },
  {
    number: 12,
    avatar: "avatar_url_12",
    name: "Name12",
    twitter_link: "https://twitter.com/name12",
    telegram_link: "https://t.me/name12",
    username: "username12",
    number_of_buy: 145,
    number_of_sell: 15,
    profit_of_solana: 330.8,
    profit_of_usd: 48229.1,
  },
  {
    number: 13,
    avatar: "avatar_url_13",
    name: "Name13",
    twitter_link: "https://twitter.com/name13",
    telegram_link: "https://t.me/name13",
    username: "username13",
    number_of_buy: 146,
    number_of_sell: 16,
    profit_of_solana: 331.8,
    profit_of_usd: 48329.1,
  },
  {
    number: 14,
    avatar: "avatar_url_14",
    name: "Name14",
    twitter_link: "https://twitter.com/name14",
    telegram_link: "https://t.me/name14",
    username: "username14",
    number_of_buy: 147,
    number_of_sell: 17,
    profit_of_solana: 332.8,
    profit_of_usd: 48429.1,
  },
  {
    number: 15,
    avatar: "avatar_url_15",
    name: "Name15",
    twitter_link: "https://twitter.com/name15",
    telegram_link: "https://t.me/name15",
    username: "username15",
    number_of_buy: 148,
    number_of_sell: 18,
    profit_of_solana: 333.8,
    profit_of_usd: 48529.1,
  },
  {
    number: 16,
    avatar: "avatar_url_16",
    name: "Name16",
    twitter_link: "https://twitter.com/name16",
    telegram_link: "https://t.me/name16",
    username: "username16",
    number_of_buy: 149,
    number_of_sell: 19,
    profit_of_solana: 334.8,
    profit_of_usd: 48629.1,
  },
  {
    number: 17,
    avatar: "avatar_url_17",
    name: "Name17",
    twitter_link: "https://twitter.com/name17",
    telegram_link: "https://t.me/name17",
    username: "username17",
    number_of_buy: 150,
    number_of_sell: 20,
    profit_of_solana: 335.8,
    profit_of_usd: 48729.1,
  },
  {
    number: 18,
    avatar: "avatar_url_18",
    name: "Name18",
    twitter_link: "https://twitter.com/name18",
    telegram_link: "https://t.me/name18",
    username: "username18",
    number_of_buy: 151,
    number_of_sell: 21,
    profit_of_solana: 336.8,
    profit_of_usd: 48829.1,
  },
  {
    number: 19,
    avatar: "avatar_url_19",
    name: "Name19",
    twitter_link: "https://twitter.com/name19",
    telegram_link: "https://t.me/name19",
    username: "username19",
    number_of_buy: 152,
    number_of_sell: 22,
    profit_of_solana: 337.8,
    profit_of_usd: 48929.1,
  },
  {
    number: 20,
    avatar: "avatar_url_20",
    name: "Name20",
    twitter_link: "https://twitter.com/name20",
    telegram_link: "https://t.me/name20",
    username: "username20",
    number_of_buy: 153,
    number_of_sell: 23,
    profit_of_solana: 338.8,
    profit_of_usd: 49029.1,
  },
];

const Leaderboard = () => {
  const theme = useTheme();

  const StyledCard = styled(Card)(({ theme, rank }) => ({
    background: theme.palette.mode === 'dark'
      ? alpha(theme.palette.background.paper, 0.8)
      : 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(12px)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '24px',
    transition: 'all 0.3s ease-in-out',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
      border: rank <= 3 ? `1px solid ${getRankColor(rank, theme, 0.3)}` : '1px solid rgba(255, 255, 255, 0.1)',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '2px',
      background: rank <= 3 ? getRankColor(rank, theme) : 'transparent',
    },
  }));

  const TimeButton = styled(Button)(({ theme, active }) => ({
    background: active 
      ? theme.palette.mode === 'dark'
        ? 'linear-gradient(45deg, #60A5FA 30%, #93C5FD 90%)'
        : 'linear-gradient(45deg, #3B82F6 30%, #60A5FA 90%)'
      : theme.palette.mode === 'dark'
        ? alpha(theme.palette.common.white, 0.05)
        : alpha(theme.palette.primary.main, 0.08),
    borderRadius: '20px',
    padding: '8px 20px',
    color: active 
      ? '#FFFFFF'
      : theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, 0.85)'
        : alpha(theme.palette.primary.main, 0.85),
    border: 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: active
        ? theme.palette.mode === 'dark'
          ? 'linear-gradient(45deg, #60A5FA 30%, #93C5FD 90%)'
          : 'linear-gradient(45deg, #3B82F6 30%, #60A5FA 90%)'
        : theme.palette.mode === 'dark'
          ? alpha(theme.palette.common.white, 0.1)
          : alpha(theme.palette.primary.main, 0.15),
      transform: 'translateY(-2px)',
    },
  }));

  const SocialButton = styled(IconButton)(({ theme }) => ({
    background: theme.palette.mode === 'dark'
      ? alpha(theme.palette.common.white, 0.1)
      : alpha(theme.palette.primary.main, 0.08),
    borderRadius: '12px',
    padding: '8px',
    color: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.85)'
      : theme.palette.primary.main,
    transition: 'all 0.3s ease',
    '&:hover': {
      background: theme.palette.mode === 'dark'
        ? alpha(theme.palette.common.white, 0.2)
        : alpha(theme.palette.primary.main, 0.15),
      transform: 'translateY(-2px)',
    },
  }));

  const getRankColor = (rank, theme, alpha = 1) => {
    const colors = {
      1: theme.palette.mode === 'dark'
        ? `rgba(255, 215, 0, ${alpha})`  // Brighter Gold
        : `rgba(251, 191, 36, ${alpha})`, // Amber
      2: theme.palette.mode === 'dark'
        ? `rgba(226, 232, 240, ${alpha})` // Brighter Silver
        : `rgba(100, 116, 139, ${alpha})`, // Slate
      3: theme.palette.mode === 'dark'
        ? `rgba(234, 179, 8, ${alpha})`   // Brighter Bronze
        : `rgba(180, 83, 9, ${alpha})`,    // Darker Bronze
    };
    return colors[rank] || (theme.palette.mode === 'dark'
      ? `rgba(255, 255, 255, ${alpha})`
      : `rgba(71, 85, 105, ${alpha})`); // Default color
  };

  const getRankIcon = (rank) => {
    const iconProps = {
      sx: {
        fontSize: 28,
        mb: 1,
        color: rank === 1 
          ? '#FFD700' // Gold
          : rank === 2 
            ? '#C0C0C0' // Silver
            : rank === 3 
              ? '#CD7F32' // Bronze
              : 'inherit',
      }
    };

    if (rank === 1) return <WorkspacePremiumIcon {...iconProps} />;
    if (rank === 2) return <EmojiEventsIcon {...iconProps} />;
    if (rank === 3) return <LocalFireDepartmentIcon {...iconProps} />;
    return null;
  };

  const [timeFrame, setTimeFrame] = React.useState('daily');

  return (
    <Box
      sx={{
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0A1929 0%, #111827 50%, #1E1E1E 100%)'
          : 'linear-gradient(135deg, #F5F9FF 0%, #F0F6FF 50%, #EBF3FF 100%)',
        minHeight: '100vh',
        pt: 8,
        pb: 12,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #60A5FA 30%, #93C5FD 90%)'
                : 'linear-gradient(45deg, #2563EB 30%, #3B82F6 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            Top Traders Leaderboard
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.mode === 'dark' 
                ? 'rgba(255,255,255,0.7)'
                : 'rgba(0,0,0,0.7)',
              maxWidth: 600,
              mx: 'auto',
              mb: 4,
            }}
          >
            Track the most successful traders in the Solana ecosystem
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 6 }}>
            {['daily', 'weekly', 'monthly'].map((period) => (
              <TimeButton
                key={period}
                active={timeFrame === period}
                onClick={() => setTimeFrame(period)}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </TimeButton>
            ))}
          </Box>
        </Box>

        <Grid container spacing={3}>
          {LeaderList.map((leader) => (
            <Grid item xs={12} key={leader.number}>
              <StyledCard rank={leader.number}>
                <Grid container alignItems="center" spacing={3}>
                  <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 40,
                        textAlign: 'center',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {getRankIcon(leader.number)}
                      <Typography
                        sx={{
                          color: getRankColor(leader.number, theme),
                          fontWeight: 700,
                          fontSize: '1.2rem',
                          textShadow: theme.palette.mode === 'dark'
                            ? '0 0 8px rgba(0,0,0,0.3)'
                            : 'none',
                        }}
                      >
                        #{leader.number}
                      </Typography>
                    </Box>
                    
                    <Avatar
                      src={leader.avatar}
                      sx={{
                        width: 56,
                        height: 56,
                        border: `2px solid ${getRankColor(leader.number, theme, 0.5)}`,
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 0 12px rgba(255,255,255,0.1)'
                          : '0 0 12px rgba(0,0,0,0.1)',
                      }}
                    />
                    
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: theme.palette.mode === 'dark' 
                            ? 'rgba(255,255,255,0.95)' 
                            : 'rgba(0,0,0,0.87)',
                          fontWeight: 600,
                          textShadow: theme.palette.mode === 'dark'
                            ? '0 0 8px rgba(0,0,0,0.3)'
                            : 'none',
                        }}
                      >
                        {leader.name}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                        <SocialButton size="small" href={leader.twitter_link} target="_blank">
                          <TwitterIcon sx={{ fontSize: 18 }} />
                        </SocialButton>
                        <SocialButton size="small" href={leader.telegram_link} target="_blank">
                          <TelegramIcon sx={{ fontSize: 18 }} />
                        </SocialButton>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 4 }}>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: theme.palette.mode === 'dark' 
                              ? 'rgba(255,255,255,0.7)' 
                              : 'rgba(0,0,0,0.7)',
                            mb: 0.5,
                            fontWeight: 500,
                          }}
                        >
                          Trades (Buy/Sell)
                        </Typography>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: theme.palette.mode === 'dark' 
                              ? 'rgba(255,255,255,0.95)' 
                              : 'rgba(0,0,0,0.87)',
                            fontWeight: 600,
                          }}
                        >
                          {leader.number_of_buy}/{leader.number_of_sell}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: theme.palette.mode === 'dark' 
                              ? 'rgba(255,255,255,0.7)' 
                              : 'rgba(0,0,0,0.7)',
                            mb: 0.5,
                            fontWeight: 500,
                          }}
                        >
                          Profit
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: theme.palette.mode === 'dark'
                              ? '#6EE7B7'  // Lighter green for dark mode
                              : '#059669',  // Darker green for light mode
                            fontWeight: 700,
                            fontFamily: 'monospace',
                          }}
                        >
                          +{leader.profit_of_solana} SOL
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.mode === 'dark' 
                              ? 'rgba(255,255,255,0.7)' 
                              : 'rgba(0,0,0,0.7)',
                            fontFamily: 'monospace',
                            fontWeight: 500,
                          }}
                        >
                          (${leader.profit_of_usd.toLocaleString()})
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Leaderboard;
