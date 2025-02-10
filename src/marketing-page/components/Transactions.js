import React from "react";
import {
  Avatar,
  Box,
  Link,
  Typography,
  Paper,
  Chip,
  Tooltip,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const transactions = [
  {
    id: "BTf4A2exGK9BCVDNzy65b9dUzXgMqB4weVkvTMFQsadd",
    name: "Kev",
    amount: "2.04",
    sol: "51.8m",
    token: "Gwenchana",
    price: "0.0000081",
    image:
      "https://cdn.kolscan.io/profiles/3h65MmPZksoKKyEpEjnWU2Yk2iYT5oZDNitGy5cTaxoE.png",
    time: "1m ago",
    profit: "+12.5%",
    txLink:
      "https://solscan.io/tx/7eNBgymB54NjfHfokFkqAAxyqMYQsFK2vsrUh7x8aXsTmpsgLJSKp1cNDzNT6SqJG3hCCzd8yoNrij1w7jRQtzP",
  },
  {
    id: "ATFRUwvyMh61w2Ab6AZxUyxsAfiiuG1RqL6iv3Vi9q2B",
    name: "Marcell",
    amount: "50.7",
    sol: "557k",
    token: "SSE",
    price: "0.019",
    image:
      "https://cdn.kolscan.io/profiles/3h65MmPZksoKKyEpEjnWU2Yk2iYT5oZDNitGy5cTaxoE.png",
    time: "2m ago",
    profit: "+8.3%",
    txLink:
      "https://solscan.io/tx/4UnTRwH6enGDhfqSzUXBUdyryf3AyUpM5E2Qun8aaooA3wJv1f1RZeW8aFt7wS9TMad15BJZDra4bqdEqqRTMm1U",
  },
  // Add 8 more similar transactions with different values
  {
    id: "CTFRUwvyMh61w2Ab6AZxUyxsAfiiuG1RqL6iv3Vi9q2C",
    name: "Alex",
    amount: "35.2",
    sol: "420k",
    token: "PEPE",
    price: "0.025",
    image:
      "https://cdn.kolscan.io/profiles/3h65MmPZksoKKyEpEjnWU2Yk2iYT5oZDNitGy5cTaxoE.png",
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
    image:
      "https://cdn.kolscan.io/profiles/3h65MmPZksoKKyEpEjnWU2Yk2iYT5oZDNitGy5cTaxoE.png",
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
    image:
      "https://cdn.kolscan.io/profiles/3h65MmPZksoKKyEpEjnWU2Yk2iYT5oZDNitGy5cTaxoE.png",
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
    image:
      "https://cdn.kolscan.io/profiles/GfXQesPe3Zuwg8JhAt6Cg8euJDTVx751enp9EQQmhzPH.png",
    time: "15m ago",
    profit: "+11.4%",
    txLink: "https://solscan.io/tx/sample6",
  },
  {
    id: "FTFRUwvyMh61w2Ab6AZxUyxsAfiiuG1RqL6iv3Vi9q2F",
    name: "Emma",
    amount: "27.3",
    sol: "410k",
    token: "BONK",
    price: "0.015",
    image:
      "https://cdn.kolscan.io/profiles/GfXQesPe3Zuwg8JhAt6Cg8euJDTVx751enp9EQQmhzPH.png",
    time: "15m ago",
    profit: "+11.4%",
    txLink: "https://solscan.io/tx/sample6",
  },
  {
    id: "FTFRUwvyMh61w2Ab6AZxUyxsAfiiuG1RqL6iv3Vi9q2F",
    name: "Emma",
    amount: "27.3",
    sol: "410k",
    token: "BONK",
    price: "0.015",
    image:
      "https://cdn.kolscan.io/profiles/GfXQesPe3Zuwg8JhAt6Cg8euJDTVx751enp9EQQmhzPH.png",
    time: "15m ago",
    profit: "+11.4%",
    txLink: "https://solscan.io/tx/sample6",
  },
  {
    id: "FTFRUwvyMh61w2Ab6AZxUyxsAfiiuG1RqL6iv3Vi9q2F",
    name: "Emma",
    amount: "27.3",
    sol: "410k",
    token: "BONK",
    price: "0.015",
    image:
      "https://cdn.kolscan.io/profiles/GfXQesPe3Zuwg8JhAt6Cg8euJDTVx751enp9EQQmhzPH.png",
    time: "15m ago",
    profit: "+11.4%",
    txLink: "https://solscan.io/tx/sample6",
  },
  {
    id: "FTFRUwvyMh61w2Ab6AZxUyxsAfiiuG1RqL6iv3Vi9q2F",
    name: "Emma",
    amount: "27.3",
    sol: "410k",
    token: "BONK",
    price: "0.015",
    image:
      "https://cdn.kolscan.io/profiles/GfXQesPe3Zuwg8JhAt6Cg8euJDTVx751enp9EQQmhzPH.png",
    time: "15m ago",
    profit: "+11.4%",
    txLink: "https://solscan.io/tx/sample6",
  },
];

const Transactions = () => {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", background: "#faf3e0" }}>
      {transactions.map((tx) => (
        <Paper
          key={tx.id}
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1.5, sm: 2 },
            p: 2,
            borderRadius: 0,
            background: "#faf3e0",
            // borderBottom: "2px solid #000000",
            borderTop: "1px solid #000000",
          }}
        >
          <Link
            href={`${tx.id}.html`}
            sx={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              src={tx.image}
              alt={`${tx.name} pfp`}
              sx={{
                textDecoration: "none",
                width: 40,
                height: 40,
                border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              }}
            />
          </Link>

          <Box sx={{ flexGrow: 1 }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}
            >
              <Link
                href={`${tx.id}.html`}
                sx={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: 600,
                }}
              >
                {tx.name}
              </Link>
              <Chip
                icon={<LocalOfferIcon sx={{ fontSize: 16 }} />}
                label={tx.token}
                size="small"
                sx={{
                  color: "black",
                  fontWeight: 600,
                }}
              />
              <Chip
                label={tx.profit}
                size="small"
                sx={{
                  background: alpha(theme.palette.success.main, 0.1),
                  color: theme.palette.success.main,
                  fontWeight: 600,
                  borderRadius: "8px",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                {tx.amount} SOL
                <Typography
                  component="span"
                  sx={{
                    fontSize: "0.75rem",
                  }}
                >
                  (${tx.sol})
                </Typography>
              </Typography>
              <Typography
                variant="body2"
                sx={{
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
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                fontSize: "0.875rem",
                textDecoration: "none",
                color: "black",
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
