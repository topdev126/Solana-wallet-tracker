import React from "react";
import { Container, Grid, Box, Typography, List, ListItem } from "@mui/material";

const Tokenomics = () => {
  return (
    <Container maxWidth="md" sx={{ width: "95vw", textAlign: "center" }}>
      <Typography variant="h5" sx={{ textAlign: "left", marginBottom: 5 }}>
        Tokenomics
      </Typography>
      <Grid container spacing={3} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: 2 }}>
        <Box sx={{ p: 2, backgroundColor: "rgba(0, 120, 255, 0.1)", borderRadius: "10px" }}>
          <Typography variant="h6" fontWeight="bold">
            Public
          </Typography>
          <List>
            <ListItem>Realtime Trades</ListItem>
            <ListItem>Wallet holdings & Token PnL</ListItem>
            <ListItem>Realized PnL Leaderboard</ListItem>
          </List>
        </Box>
        <Box sx={{ p: 2, backgroundColor: "rgba(0, 120, 255, 0.1)", borderRadius: "10px" }}>
          <Typography variant="h6" fontWeight="bold">
            Tier 1 - 100k+
          </Typography>
          <List>
            <ListItem>Realtime Token Tracker</ListItem>
          </List>
        </Box>
        <Box sx={{ p: 2, backgroundColor: "rgba(0, 120, 255, 0.1)", borderRadius: "10px" }}>
          <Typography variant="h6" fontWeight="bold">
            Tier 2 - 420k+
          </Typography>
          <List>
            <ListItem>👀 Coming Soon...</ListItem>
          </List>
        </Box>
      </Grid>
    </Container>
  );
};

export default Tokenomics;
