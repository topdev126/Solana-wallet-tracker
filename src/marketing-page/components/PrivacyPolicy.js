import React from "react";
import { Container, Typography, Paper, Box, Divider } from "@mui/material";
import { alpha, useTheme } from '@mui/material/styles';
import SecurityIcon from '@mui/icons-material/Security';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import StorageIcon from '@mui/icons-material/Storage';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const PrivacyPolicy = () => {
  const theme = useTheme();

  const sections = [
    {
      icon: <DataUsageIcon sx={{ fontSize: 32 }} />,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number)",
        "Trading data and wallet information",
        "Usage data and analytics",
        "Device and browser information"
      ]
    },
    {
      icon: <StorageIcon sx={{ fontSize: 32 }} />,
      title: "How We Use Your Information",
      content: [
        "Provide and maintain our services",
        "Personalize your trading experience",
        "Improve our platform and user experience",
        "Send important updates and notifications"
      ]
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 32 }} />,
      title: "Data Protection",
      content: [
        "Industry-standard encryption protocols",
        "Regular security audits and updates",
        "Secure data storage and transmission",
        "Limited access to personal information"
      ]
    },
    {
      icon: <ContactMailIcon sx={{ fontSize: 32 }} />,
      title: "Contact Us",
      content: [
        "Email: support@kolscan.com",
        "Response time: Within 24 hours",
        "Office hours: 24/7 support",
        "Location: Global operations"
      ]
    }
  ];

  return (
    <Box
      sx={{
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0A1929 0%, #111827 50%, #1E1E1E 100%)'
          : 'linear-gradient(135deg, #F5F9FF 0%, #F0F6FF 50%, #EBF3FF 100%)',
        minHeight: '100vh',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        {/* Header Section */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 4,
            borderRadius: 4,
            background: theme.palette.mode === 'dark'
              ? alpha(theme.palette.background.paper, 0.8)
              : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            border: `1px solid ${theme.palette.mode === 'dark'
              ? alpha(theme.palette.primary.main, 0.15)
              : alpha('#E3ECFF', 0.8)}`,
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 800,
              textAlign: 'center',
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #60A5FA 30%, #93C5FD 90%)'
                : 'linear-gradient(45deg, #2563EB 30%, #3B82F6 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3,
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: 'center',
              color: theme.palette.mode === 'dark'
                ? alpha(theme.palette.common.white, 0.7)
                : alpha(theme.palette.common.black, 0.7),
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            At KolScan, we prioritize the protection of your privacy and personal information. 
            This policy outlines our practices for collecting, using, and safeguarding your data.
          </Typography>
        </Paper>

        {/* Policy Sections */}
        {sections.map((section, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: 4,
              mb: 3,
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
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: 2,
                  background: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.main,
                  mr: 2,
                }}
              >
                {section.icon}
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.mode === 'dark'
                    ? alpha(theme.palette.common.white, 0.9)
                    : alpha(theme.palette.common.black, 0.9),
                }}
              >
                {section.title}
              </Typography>
            </Box>
            
            <Box sx={{ pl: 7 }}>
              {section.content.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    position: 'relative',
                    mb: 2,
                    '&:last-child': { mb: 0 },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: -20,
                      top: '50%',
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: theme.palette.primary.main,
                      transform: 'translateY(-50%)',
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.mode === 'dark'
                        ? alpha(theme.palette.common.white, 0.7)
                        : alpha(theme.palette.common.black, 0.7),
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        ))}

        {/* Last Updated Section */}
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            mt: 4,
            color: theme.palette.mode === 'dark'
              ? alpha(theme.palette.common.white, 0.5)
              : alpha(theme.palette.common.black, 0.5),
          }}
        >
          Last updated: {new Date().toLocaleDateString()}
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
