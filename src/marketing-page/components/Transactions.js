import React from "react";
import { Avatar, Box, Link, Typography, Paper } from "@mui/material";

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
    image: "images/1794823926272466944-vL-xxtqP_400x400.jpg",
    time: "2m ago",
    txLink:
      "https://solscan.io/tx/4UnTRwH6enGDhfqSzUXBUdyryf3AyUpM5E2Qun8aaooA3wJv1f1RZeW8aFt7wS9TMad15BJZDra4bqdEqqRTMm1U",
  },
];

const Transactions = () => {
  return (
    <Paper
      sx={{
        border: "0.5px solid",
        borderColor: "divider",
        borderRadius: "5px",
        p: 2,
        mx: 2,
        width: "95vw",
        maxWidth: 700,
      }}
    >
      {transactions.map((tx) => (
        <Box
          key={tx.id}
          display="flex"
          alignItems="center"
          gap={2}
          py={1}
        >
          <Link href={`${tx.id}.html`} underline="none">
            <Avatar src={tx.image} alt={`${tx.name} pfp`} sx={{ width: 30, height: 30 }} />
          </Link>
          <Typography>
            <Link href={`${tx.id}.html`} fontWeight={600} underline="none">
              {tx.name}
            </Link>{" "}
            bought
            <Typography component="span" color="success.main" fontWeight={500}>
              {` ${tx.amount} SOL (${tx.sol}) `}
            </Typography>
            of <strong>{tx.token}</strong> at
            <Typography component="span" color="warning.main" fontWeight={500}>
              {` $${tx.price}`}
            </Typography>
          </Typography>
          <Link
            href={tx.txLink}
            target="_blank"
            sx={{ ml: "auto", display: "flex", gap: 0.5, textAlign: "right" }}
          >
            {tx.time}
          </Link>
        </Box>
      ))}
    </Paper>
  );
};

export default Transactions;
