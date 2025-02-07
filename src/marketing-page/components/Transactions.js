import React from "react";
import { Avatar, Box, Link, Typography, Paper, Chip, Tooltip } from "@mui/material";
import { alpha, useTheme } from '@mui/material/styles';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const transactions = [
  {
    id: "BTf4A2exGK9BCVDNzy65b9dUzXgMqB4weVkvTMFQsadd",
    name: "Kev",
    amount: "2.04",
    sol: "51.8m",
    token: "Gwenchana",
    price: "0.0000081",
    image: "images/1886609338434732033-Dm2a3WiD_400x400.jpg",
    time: "1m ago",
    profit: "+12.5%",
    txLink: "https://solscan.io/tx/7eNBgymB54NjfHfokFkqAAxyqMYQsFK2vsrUh7x8aXsTmpsgLJSKp1cNDzNT6SqJG3hCCzd8yoNrij1w7jRQtzP",
  },
  {
    id: "ATFRUwvyMh61w2Ab6AZxUyxsAfiiuG1RqL6iv3Vi9q2B",
    name: "Marcell",
    amount: "50.7",
    sol: "557k",
    token: "SSE",
    price: "0.019",
    image: "images/1794823926272466944-vL-xxtqP_400x400.jpg",
    time: "2m ago",
    profit: "+8.3%",
    txLink: "https://solscan.io/tx/4UnTRwH6enGDhfqSzUXBUdyryf3AyUpM5E2Qun8aaooA3wJv1f1RZeW8aFt7wS9TMad15BJZDra4bqdEqqRTMm1U",
  },
  // Add 8 more similar transactions with different values
  {
    id: "CTFRUwvyMh61w2Ab6AZxUyxsAfiiuG1RqL6iv3Vi9q2C",
    name: "Alex",
    amount: "35.2",
    sol: "420k",
    token: "PEPE",
    price: "0.025",
    image: "images/user3.jpg",
    time: "5m ago",
    profit: "+15.7%",
    txLink: "https://solscan.io/tx/sample3",
  },
  {
    id: "DTFRUwvyMh61w2Ab6AZxUyxsAfiiuG1RqL6iv3Vi9q2D",
    name: "Sarah",
    amount: "18.9",
    sol: "283k",
    token: "DOGE",
    price: "0.012",
    image: "images/user4.jpg",
    time: "8m ago",
    profit: "+5.2%",
    txLink: "https://solscan.io/tx/sample4",
  },
  {
    id: "ETFRUwvyMh61w2Ab6AZxUyxsAfiiuG1RqL6iv3Vi9q2E",
    name: "Mike",
    amount: "42.6",
    sol: "639k",
    token: "SHIB",
    price: "0.008",
    image: "images/user5.jpg",
    time: "12m ago",
    profit: "+19.8%",
    txLink: "https://solscan.io/tx/sample5",
  },
  {
    id: "FTFRUwvyMh61w2Ab6AZxUyxsAfiiuG1RqL6iv3Vi9q2F",
    name: "Emma",
    amount: "27.3",
    sol: "410k",
    token: "BONK",
    price: "0.015",
    image: "images/user6.jpg",
    time: "15m ago",
    profit: "+11.4%",
    txLink: "https://solscan.io/tx/sample6",
  },
];

const Transactions = () => {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%' }}>
      {transactions.map((tx) => (
        <Paper
          key={tx.id}
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 1.5, sm: 2 },
            p: 2,
            mb: 1.5,
            borderRadius: '16px',
            background: alpha(theme.palette.background.paper, 0.4),
            backdropFilter: 'blur(8px)',
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            transition: 'all 0.3s ease',
            '&:hover': {
              background: alpha(theme.palette.background.paper, 0.6),
              transform: 'translateY(-2px)',
            },
          }}
        >
          <Link 
            href={`${tx.id}.html`} 
            sx={{ 
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Avatar 
              src={tx.image} 
              alt={`${tx.name} pfp`} 
              sx={{ 
                width: 40, 
                height: 40,
                border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              }} 
            />
          </Link>

          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
              <Link 
                href={`${tx.id}.html`}
                sx={{ 
                  textDecoration: 'none',
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  '&:hover': {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {tx.name}
              </Link>
              <Chip
                icon={<LocalOfferIcon sx={{ fontSize: 16 }} />}
                label={tx.token}
                size="small"
                sx={{
                  background: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  borderRadius: '8px',
                }}
              />
              <Chip
                label={tx.profit}
                size="small"
                sx={{
                  background: alpha(theme.palette.success.main, 0.1),
                  color: theme.palette.success.main,
                  fontWeight: 600,
                  borderRadius: '8px',
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: theme.palette.text.secondary,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                {tx.amount} SOL
                <Typography 
                  component="span" 
                  sx={{ 
                    color: theme.palette.text.disabled,
                    fontSize: '0.75rem',
                  }}
                >
                  (${tx.sol})
                </Typography>
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: theme.palette.warning.main,
                  fontWeight: 500,
                }}
              >
                ${tx.price}
              </Typography>
            </Box>
          </Box>

          <Tooltip title="View transaction">
            <Link
              href={tx.txLink}
              target="_blank"
              sx={{
                color: theme.palette.text.secondary,
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                fontSize: '0.875rem',
                textDecoration: 'none',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {tx.time}
              <OpenInNewIcon sx={{ fontSize: 16 }} />
            </Link>
          </Tooltip>
        </Paper>
      ))}
    </Box>
  );
};

export default Transactions;
