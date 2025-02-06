import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme, keyframes } from "@mui/material/styles";
import { alpha } from '@mui/material/styles';

import SearchBar from "./SearchBar";
import Transactions from "./Transactions";
import Tokenomics from "./Tokenomics";
import Faqs from "./Faqs";

const glow = keyframes`
  0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.3; }
  50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.3; }
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

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

export default function DashBoard() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1a1f2c 0%, #2d364d 100%)',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '140vh',
          height: '140vh',
          background: 'radial-gradient(circle, rgba(100,149,237,0.05) 0%, rgba(100,149,237,0) 70%)',
          animation: `${glow} 10s ease-in-out infinite`,
          zIndex: 0,
        }
      }}
    >
      <Container
        id="DashBoard"
        maxWidth="xl"
        sx={{
          pt: { xs: 8, sm: 12, md: 16 },
          pb: { xs: 8, sm: 12 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 6, md: 8 },
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            mb: 6,
            position: 'relative',
            animation: `${fadeInUp} 1s ease-out`,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -20,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '180px',
              height: '180px',
              background: 'radial-gradient(circle, rgba(100,149,237,0.2) 0%, rgba(100,149,237,0) 70%)',
              borderRadius: '50%',
              zIndex: 0,
            }
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 700,
              background: 'linear-gradient(90deg, #FFFFFF 0%, #B8C6DB 100%)',
              backgroundSize: '200% 100%',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              zIndex: 1,
              mb: 2,
              animation: `${shimmer} 3s infinite linear`,
            }}
          >
            Track Top Memecoin Traders
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 300,
              maxWidth: '800px',
              margin: '0 auto',
              animation: `${fadeInUp} 1s ease-out 0.3s both`,
            }}
          >
            Real-time insights into the most successful traders in the memecoin market
          </Typography>
        </Box>

        {[0, 1, 2].map((index) => (
          <Box
            key={index}
            sx={{
              width: '100%',
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255,255,255,0.03)',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.1)',
              p: { xs: 2, sm: 4 },
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease-in-out',
              animation: `${fadeInUp} 1s ease-out ${0.2 * (index + 1)}s both`,
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: `0 12px 40px ${alpha('#6495ED', 0.2)}`,
                borderColor: alpha('#6495ED', 0.3),
              },
            }}
          >
            {index === 0 && <SearchBar />}
            {index === 1 && (
              <Box
                sx={{
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: 4,
                }}
              >
                <Box sx={{ transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.02)' } }}>
                  <Transactions />
                </Box>
                <Box sx={{ transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.02)' } }}>
                  <Tokenomics />
                </Box>
              </Box>
            )}
            {index === 2 && <Faqs />}
          </Box>
        ))}
      </Container>
    </Box>
  );
}
