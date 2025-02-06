import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";

const Tokenomics = () => {
  return (
    <Container maxWidth="md" sx={{ width: "95vw", textAlign: "center" }}>
      <Container
        id="Trade"
        sx={{
          pt: { xs: 2, sm: 4 },
          pb: { xs: 2, sm: 4 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: 2,
          }}
        >
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              textAlign: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              flexGrow: 1,
            }}
          >
            <Typography variant="h5">
              Monitor Trades
              <br />
              from Top Wallets
            </Typography>
          </Card>
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              textAlign: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              flexGrow: 1,
            }}
          >
            <Typography variant="h5">
              Discover New and
              <br />
              Trending Tokens
            </Typography>
          </Card>
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              textAlign: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              flexGrow: 1,
            }}
          >
            <Typography variant="h5">
              Analyze the Most
              <br />
              Profitable Wallets
            </Typography>
          </Card>
        </Grid>
      </Container>
      <Typography variant="h4" sx={{ textAlign: "left" }}>
        Tokenomics
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr",              // 1 column on extra-small screens
            sm: "repeat(2, 1fr)",   // 2 columns on small screens
            md: "repeat(3, 1fr)", },
          gap: 2,
        }}
      >
        <Box
          sx={{
            p: 2,
            backgroundColor: "rgba(0, 120, 255, 0.1)",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Public
          </Typography>
          <List>
            <ListItem>Realtime Trades</ListItem>
            <ListItem>Wallet holdings & Token PnL</ListItem>
            <ListItem>Realized PnL Leaderboard</ListItem>
          </List>
        </Box>
        <Box
          sx={{
            p: 2,
            backgroundColor: "rgba(0, 120, 255, 0.1)",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Tier 1 - 100k+
          </Typography>
          <List>
            <ListItem>Realtime Token Tracker</ListItem>
          </List>
        </Box>
        <Box
          sx={{
            p: 2,
            backgroundColor: "rgba(0, 120, 255, 0.1)",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Tier 2 - 420k+
          </Typography>
          <List>
            <ListItem>👀 Coming Soon...</ListItem>
          </List>
        </Box>
      </Grid>
      <Container
        id="Trade"
        sx={{
          pt: { xs: 2, sm: 4 },
          pb: { xs: 2, sm: 4 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr",              // 1 column on extra-small screens
              sm: "repeat(2, 1fr)",   // 2 columns on small screens
              md: "repeat(3, 1fr)", },
            gap: 2,
          }}
        >
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              textAlign: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              flexGrow: 1,
              padding:"10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginLeft: "5px",
                border: ".5px solid var(--border-color)",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  position: "relative",
                  minWidth: "20px",
                  width: "20px",
                  minHeight: "20px",
                  height: "20px",
                  overflow: "hidden",
                  display: "inline-block",
                  borderRadius: "1000px",
                  cursor: "pointer",
                }}
              >
                <img
                  alt="twitter"
                  loading="lazy"
                  decoding="async"
                  src="https://kolscan.io/images/Twitter.webp"
                  style={{
                    position: "absolute",
                    height: "20px",
                    width: "20px",
                    inset: "0px",
                    objectFit: "cover",
                    color: "transparent",
                  }}
                />
              </div>

              <Typography variant="h6">Follow us on Twitter</Typography>
            </div>
          </Card>
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              textAlign: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              flexGrow: 1,
              padding:"10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginLeft: "5px",
                border: ".5px solid var(--border-color)",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  position: "relative",
                  minWidth: "20px",
                  width: "20px",
                  minHeight: "20px",
                  height: "20px",
                  overflow: "hidden",
                  display: "inline-block",
                  borderRadius: "1000px",
                  cursor: "pointer",
                }}
              >
                <img
                  alt="twitter"
                  loading="lazy"
                  decoding="async"
                  src="https://kolscan.io/images/Telegram.webp"
                  style={{
                    position: "absolute",
                    height: "20px",
                    width: "20px",
                    inset: "0px",
                    objectFit: "cover",
                    color: "transparent",
                  }}
                />
              </div>

              <Typography variant="h6">Join our Telegram</Typography>
            </div>
          </Card>
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              textAlign: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              flexGrow: 1,
              padding:"10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginLeft: "5px",
                border: ".5px solid var(--border-color)",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  position: "relative",
                  minWidth: "20px",
                  width: "20px",
                  minHeight: "20px",
                  height: "20px",
                  overflow: "hidden",
                  display: "inline-block",
                  borderRadius: "1000px",
                  cursor: "pointer",
                }}
              >
                <img
                  alt="twitter"
                  loading="lazy"
                  decoding="async"
                  src="https://kolscan.io/images/Dexscreener.webp"
                  style={{
                    position: "absolute",
                    height: "20px",
                    width: "20px",
                    inset: "0px",
                    objectFit: "cover",
                    color: "transparent",
                  }}
                />
              </div>
              <Typography variant="h6">Buy $Kolscan</Typography>
            </div>
          </Card>
        </Grid>
      </Container>
    </Container>
  );
};

export default Tokenomics;
