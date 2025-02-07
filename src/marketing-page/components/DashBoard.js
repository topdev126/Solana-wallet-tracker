import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme, keyframes } from "@mui/material/styles";
import { alpha } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';

import SearchBar from "./SearchBar";
import Transactions from "./Transactions";
import Tokenomics from "./Tokenomics";
import Faqs from "./Faqs";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const fadeInUp = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(20px);
  }
  100% { 
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export default function DashBoard() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0A1929 0%, #1E1E1E 100%)'
          : 'linear-gradient(135deg, #F8FAFF 0%, #EDF4FF 50%, #E6F0FF 100%)',
        minHeight: '100vh',
        width: '100%',
        pt: { xs: 2, sm: 4, md: 6 },
        pb: { xs: 4, sm: 6, md: 8 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'dark'
            ? 'none'
            : 'radial-gradient(circle at 50% 0%, rgba(147,197,253,0.08) 0%, rgba(147,197,253,0) 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="xl">
        {/* Hero Section */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 3, sm: 4 },
          mx: 'auto',
          maxWidth: '1200px'
        }}>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              background: 'linear-gradient(90deg, #2065D1 0%, #32C5FF 100%)',
              backgroundSize: '200% auto',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: `${gradientMove} 4s linear infinite`,
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Track Top Memecoin Traders
          </Typography>
          <Typography
            sx={{
              color: theme.palette.mode === 'dark' ? 'grey.300' : 'grey.700',
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Real-time insights into the most successful traders in the memecoin market
          </Typography>
        </Box>

        {/* Main Grid Section */}
        <Grid 
          container 
          spacing={3}
          sx={{ 
            maxWidth: '1800px',
            mx: 'auto',
            mb: { xs: 4, sm: 6 }  // Added margin bottom for FAQs
          }}
        >
          {/* Left Column - Search, Social Buttons, and Transactions */}
          <Grid item xs={12} lg={8}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 3,
              width: '100%',
            }}>
              {/* Search Bar */}
              <Paper
                elevation={0}
                sx={{
                  background: alpha(theme.palette.background.paper, 0.8),
                  backdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  p: { xs: 2, sm: 2.5 },
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  width: '100%',
                }}
              >
                <SearchBar />
              </Paper>

              {/* Social and Action Buttons */}
              <Paper
                elevation={0}
                sx={{
                  background: alpha(theme.palette.background.paper, 0.8),
                  backdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  p: { xs: 2, sm: 2.5 },
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  width: '100%',
                }}
              >
                <Box sx={{ 
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                  gap: 2,
                  width: '100%',
                }}>
                  {/* Twitter Button */}
                  <Button
                    variant="contained"
                    startIcon={<TwitterIcon />}
                    onClick={() => window.open('https://twitter.com/kolscan', '_blank')}
                    sx={{
                      borderRadius: '12px',
                      py: 1.5,
                      background: 'linear-gradient(45deg, #1DA1F2 30%, #1a91da 90%)',
                      boxShadow: '0 3px 15px rgba(29, 161, 242, 0.3)',
                      transition: 'all 0.3s ease',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      width: '100%',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 5px 20px rgba(29, 161, 242, 0.4)',
                      }
                    }}
                  >
                    Follow on Twitter
                  </Button>

                  {/* Telegram Button */}
                  <Button
                    variant="contained"
                    startIcon={<TelegramIcon />}
                    onClick={() => window.open('https://t.me/kolscan', '_blank')}
                    sx={{
                      borderRadius: '12px',
                      py: 1.5,
                      background: 'linear-gradient(45deg, #0088cc 30%, #0077b5 90%)',
                      boxShadow: '0 3px 15px rgba(0, 136, 204, 0.3)',
                      transition: 'all 0.3s ease',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      width: '100%',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 5px 20px rgba(0, 136, 204, 0.4)',
                      }
                    }}
                  >
                    Join Our Telegram
                  </Button>

                  {/* Buy Button */}
                  <Button
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    onClick={() => window.open('https://raydium.io/swap/', '_blank')}
                    sx={{
                      borderRadius: '12px',
                      py: 1.5,
                      background: 'linear-gradient(45deg, #2065D1 30%, #32C5FF 90%)',
                      boxShadow: '0 3px 15px rgba(32, 101, 209, 0.3)',
                      transition: 'all 0.3s ease',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      width: '100%',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 5px 20px rgba(32, 101, 209, 0.4)',
                      }
                    }}
                  >
                    Buy $KOLSCAN
                  </Button>
                </Box>
              </Paper>

              {/* Live Transactions */}
              <Paper
                elevation={0}
                sx={{
                  background: alpha(theme.palette.background.paper, 0.8),
                  backdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  p: { xs: 2, sm: 2.5 },
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  width: '100%',
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 2,
                    fontWeight: 700,
                    background: 'linear-gradient(90deg, #2065D1 0%, #32C5FF 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Live Transactions
                </Typography>
                <Transactions />
              </Paper>
            </Box>
          </Grid>

          {/* Right Column - Tokenomics */}
          <Grid item xs={12} lg={4}>
            <Paper
              elevation={0}
              sx={{
                background: alpha(theme.palette.background.paper, 0.8),
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                p: { xs: 2, sm: 2.5 },
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 2,
                  fontWeight: 700,
                  background: 'linear-gradient(90deg, #2065D1 0%, #32C5FF 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Tokenomics Overview
              </Typography>
              <Tokenomics />
            </Paper>
          </Grid>
        </Grid>

        {/* FAQs Section at Bottom */}
        <Paper
          elevation={0}
          sx={{
            background: alpha(theme.palette.background.paper, 0.8),
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            p: { xs: 2, sm: 3 },
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            maxWidth: '1200px',
            mx: 'auto',
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 3,
              fontWeight: 700,
              background: 'linear-gradient(90deg, #2065D1 0%, #32C5FF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center',
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Faqs />
        </Paper>
      </Container>
    </Box>
  );
}
