import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { alpha, useTheme } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import DiamondIcon from '@mui/icons-material/Diamond';

const Tokenomics = () => {
  const theme = useTheme();

  const tiers = [
    {
      title: "Public Access",
      icon: <CheckCircleIcon sx={{ color: '#4CAF50' }} />,
      features: [
        "Realtime Trades",
        "Wallet Holdings",
        "Token PnL",
      ],
      color: '#4CAF50'
    },
    {
      title: "Tier 1",
      icon: <StarIcon sx={{ color: '#2196F3' }} />,
      features: [
        "Realtime Token Tracker",
        "Advanced Analytics",
        "Priority Support",
      ],
      requirement: "100k+ $KOLSCAN",
      color: '#2196F3'
    },
    {
      title: "Tier 2",
      icon: <DiamondIcon sx={{ color: '#9c27b0' }} />,
      features: [
        "AI Trading Signals",
        "Custom Alerts",
        "VIP Community",
      ],
      requirement: "420k+ $KOLSCAN",
      color: '#9c27b0'
    }
  ];

  return (
    <Box>
      <Grid container spacing={2}>
        {tiers.map((tier, index) => (
          <Grid item xs={12} key={index}>
            <Card
              elevation={0}
              sx={{
                background: alpha(theme.palette.background.paper, 0.6),
                backdropFilter: 'blur(10px)',
                border: `1px solid ${alpha(tier.color, 0.2)}`,
                borderRadius: '16px',
                p: 2,
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 4px 20px ${alpha(tier.color, 0.15)}`,
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  {tier.icon}
                </ListItemIcon>
                <Typography variant="h6" fontWeight="700" color={tier.color}>
                  {tier.title}
                </Typography>
              </Box>

              <List dense sx={{ py: 0 }}>
                {tier.features.map((feature, idx) => (
                  <ListItem key={idx} sx={{ py: 0.5 }}>
                    <ListItemText 
                      primary={feature}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: '0.9rem',
                          color: theme.palette.text.secondary,
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>

              {tier.requirement && (
                <Typography 
                  variant="caption" 
                  sx={{ 
                    display: 'block',
                    mt: 1,
                    color: tier.color,
                    fontWeight: 600
                  }}
                >
                  Required: {tier.requirement}
                </Typography>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Tokenomics;
