import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/system";
import Button from "@mui/material/Button";
import sol_c from "./images/sol_c.png";
import sol_t from "./images/sol_t.png";
import eth_c from "./images/eth_c.png";
import eth_t from "./images/eth_t.png";
import base_c from "./images/base_c.png";
import base_t from "./images/base_t.png";

const userLiquidity = [
  {
    image1: eth_t,
    name: "Etherum-USDT",
    tvl: "TVL  :  $2000",
    apr: "APR  :  3.4%",
  },
  {
    image1: eth_c,
    name: "Etherum-USDC",
    tvl: "TVL  :  $62358951.52",
    apr: "APR  :  7.8%",
  },
  {
    image1: sol_t,
    name: "Sol-USDT",
    tvl: "TVL  :  $695478.56",
    apr: "APR  :  5.4%",
  },
  {
    image1: sol_c,
    name: "Sol-USDC",
    tvl: "TVL:$504862.25",
    apr: "APR  :  13.4%",
  },
  {
    image1: base_t,
    name: "Base-USDT",
    tvl: "TVL  :  $948.52",
    apr: "APR  :  2.14%",
  },
  {
    image1: base_c,
    name: "Base-USDC",
    tvl: "TVL  :  $635.25",
    apr: "APR  :  3.78%",
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Liquidity() {
  const theme = useTheme();

  return (
    <Container
      id="Trades"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "left" },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: "text.primary" }}
        >
          Realtime Trades
        </Typography>
      </Box>
      <Box p={1}>
        <Button
          color="primary"
          size="small"
          sx={{
            border: "2px solid", // Add a border
            borderColor: "primary.main", // Set the color of the border (primary color in this case)
            borderRadius: "4px", // Optional: rounded corners (you can adjust this)
          }}
        >
          Connect Wallet
        </Button>
      </Box>

      <Grid
        container
        spacing={3}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", // 1 column on extra-small screens
            sm: "repeat(2, 1fr)", // 2 columns on small screens
            md: "repeat(3, 1fr)",
          },
          gap: 2,
        }}
      >
        {userLiquidity.map((Liquidity, index) => (
          <Box
            p={1}
            sx={{
              border: "1px solid gray",
              borderRadius: "8px",
            }} // Just for visibility
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <img
                  src="https://kolscan.io/images/Solana.webp"
                  alt="Twitter"
                  style={{ width: 40, height: 40, marginRight: 8 }}
                />
                <Typography variant="body1">Zinc</Typography>
              </Box>
              <Typography variant="body1">7N4bAy</Typography>
            </Box>
            <Box p={1} style={{ height: "200px", overflow: "auto" }}>
              <Typography variant="body2">
                This is the second div (below)
                <br />
                .This is the second div (below)
                <br />
                .This is the second div (below)
                <br />
                .This is the second div (below)
                <br />
                .This is the second div (below)aaaaaaaaaaaaaaaaaa
                <br />
                .This is the second div (below)
                <br />
                .This is the second div (below)
                <br />
                .This is the second div (below)
                <br />
                .This is the second div (below)
                <br />
                .This is the second div (below)
                <br />
                .This is the second div (below)
                <br />
                .This is the second div (below)
                <br />.
              </Typography>
            </Box>
          </Box>
        ))}
      </Grid>
    </Container>
  );
}
