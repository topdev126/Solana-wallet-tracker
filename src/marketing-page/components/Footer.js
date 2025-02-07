import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import { alpha, useTheme } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';

const SocialButton = styled(IconButton)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? alpha(theme.palette.common.white, 0.05)
    : alpha(theme.palette.primary.main, 0.05),
  borderRadius: '12px',
  padding: '12px',
  color: theme.palette.mode === 'dark'
    ? alpha(theme.palette.common.white, 0.7)
    : theme.palette.primary.main,
  transition: 'all 0.3s ease',
  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? alpha(theme.palette.common.white, 0.1)
      : alpha(theme.palette.primary.main, 0.1),
    transform: 'translateY(-3px)',
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.mode === 'dark'
    ? alpha(theme.palette.common.white, 0.7)
    : alpha(theme.palette.common.black, 0.7),
  textDecoration: 'none',
  transition: 'all 0.2s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateX(3px)',
    display: 'inline-block',
  },
}));

function Footer() {
  const theme = useTheme();
  
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "Blog", href: "/blog" },
        { name: "Newsletter", href: "/newsletter" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact Us", href: "/contact" },
        { name: "Status", href: "/status" },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #0A1929 0%, #111827 100%)'
          : 'linear-gradient(180deg, #F8FAFF 0%, #EDF4FF 100%)',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Box>
              <Typography
                variant="h5"
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
                Kolscan
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.mode === 'dark'
                    ? alpha(theme.palette.common.white, 0.7)
                    : alpha(theme.palette.common.black, 0.7),
                  mb: 3,
                  maxWidth: 300,
                }}
              >
                The most advanced analytics platform for Solana tokens and DeFi trading.
              </Typography>
              <Stack direction="row" spacing={1}>
                <SocialButton>
                  <TwitterIcon />
                </SocialButton>
                <SocialButton>
                  <TelegramIcon />
                </SocialButton>
              </Stack>
            </Box>
          </Grid>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <Grid item xs={6} sm={3} md={2} key={section.title}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: theme.palette.mode === 'dark'
                    ? alpha(theme.palette.common.white, 0.9)
                    : alpha(theme.palette.common.black, 0.9),
                }}
              >
                {section.title}
              </Typography>
              <Stack spacing={1.5}>
                {section.links.map((link) => (
                  <FooterLink
                    key={link.name}
                    href={link.href}
                    variant="body2"
                  >
                    {link.name}
                  </FooterLink>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderColor: alpha(theme.palette.divider, 0.1) }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.mode === 'dark'
                ? alpha(theme.palette.common.white, 0.6)
                : alpha(theme.palette.common.black, 0.6),
            }}
          >
            © {new Date().getFullYear()} Kolscan. All rights reserved.
          </Typography>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              color: theme.palette.mode === 'dark'
                ? alpha(theme.palette.common.white, 0.6)
                : alpha(theme.palette.common.black, 0.6),
            }}
          >
            <FooterLink href="/privacy" variant="body2">Privacy</FooterLink>
            <FooterLink href="/terms" variant="body2">Terms</FooterLink>
            <FooterLink href="/cookies" variant="body2">Cookies</FooterLink>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
