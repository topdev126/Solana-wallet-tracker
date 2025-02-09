import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Link,
  Typography,
  Paper,
  Chip,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
const items = [
  { left: ["Buy", "3 SOL"], right: ["23.3m BITBOWL", "14m"] },
  { left: ["Sell", "50m BITBOWL"], right: ["7 SOL", "20m"] },
  { left: ["Buy", "5 SOL"], right: ["10m BITBOWL", "8m"] },
  { left: ["Buy", "1 SOL"], right: ["30m BITBOWL", "5m"] },
  { left: ["Buy", "7 SOL"], right: ["50m BITBOWL", "20m"] },
  { left: ["Buy", "7 SOL"], right: ["50m BITBOWL", "20m"] },
  { left: ["Buy", "7 SOL"], right: ["50m BITBOWL", "20m"] },
  { left: ["Sell", "50m BITBOWL"], right: ["7 SOL", "20m"] },
  { left: ["Buy", "7 SOL"], right: ["50m BITBOWL", "20m"] },
  { left: ["Sell", "50m BITBOWL"], right: ["7 SOL", "20m"] },
  { left: ["Buy", "7 SOL"], right: ["50m BITBOWL", "20m"] },
  { left: ["Buy", "7 SOL"], right: ["50m BITBOWL", "20m"] },
  { left: ["Sell", "50m BITBOWL"], right: ["7 SOL", "20m"] },
  { left: ["Buy", "7 SOL"], right: ["50m BITBOWL", "20m"] },
  { left: ["Buy", "7 SOL"], right: ["50m BITBOWL", "20m"] },
];
const RealTimeTraders = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [leader, setLeader] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:3002/api/data/getLeader")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((propertyData) => {
        setLeader(propertyData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        },
        width: "100%",
        p: 2,
        background: "rgb(255, 211, 91)",
        maxHeight: "800px", // Set a fixed height for the container
              overflowY: "auto", // Enable vertical scrolling when content exceeds the height
              "&::-webkit-scrollbar": {
                width: "8px", // Adjust width of the scrollbar
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgb(255, 211, 91)", // Scrollbar thumb color

              },
              "&::-webkit-scrollbar-track": {
                background: "rgb(255, 211, 91)", // Background color of the scrollbar track

              },
      }}
    >
      {leader.map((tx) => (
        <Paper sx={{ border: `1px solid black` }}>
          <Box
            key={tx.id}
            elevation={2}
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              gap: 2,
              pl: 2,
              pr: 2,
              pt: 1,
              borderRadius: 0,
              background: "#faf3e0",
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
                src={tx.avatar}
                alt={`${tx.name} pfp`}
                sx={{
                  textDecoration: "none",
                  width: 40,
                  height: 40,
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
                    fontWeight: 800,
                  }}
                >
                  {tx.username}
                </Link>
                <Link
                  href={`${tx.twitter_link}`}
                  sx={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    src="https://kolscan.io/images/Twitter.webp"
                    alt={`${tx.name} pfp`}
                    sx={{
                      textDecoration: "none",
                      width: 20,
                      height: 20,
                    }}
                  />
                </Link>
              </Box>
            </Box>

            <Tooltip title="View transaction">
              <Link
                href={`${tx.wallet_address}`}
                sx={{
                  color: "black",
                  fontWeight: 800,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {tx.wallet_address.split("/").pop().substring(0, 12)}
              </Link>
            </Tooltip>
          </Box>
          <Box
            sx={{
              maxHeight: "200px", // Set a fixed height for the container
              overflowY: "auto", // Enable vertical scrolling when content exceeds the height
              "&::-webkit-scrollbar": {
                width: "8px", // Adjust width of the scrollbar
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#faf3e0", // Scrollbar thumb color

              },
              "&::-webkit-scrollbar-track": {
                background: "#faf3e0", // Background color of the scrollbar track

              },
            }}
          >
            {items.map((item, index) => (
              <Box
                key={tx.id}
                elevation={2}
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: isMobile ? "flex-start" : "center",
                  gap: 2,
                  pl: 2,
                  pr: 2,
                  borderRadius: 0,
                  background: "#faf3e0",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  {/* Left side */}
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Typography sx={{ color: "black" }}>{item.left[0]}</Typography>
                    <Typography sx={{ color: "black" }}>{item.left[1]}</Typography>
                  </Box>

                  {/* Right side */}
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Typography sx={{ color: "black" }}>
                    {item.right[0]}
                    </Typography>
                    <Typography sx={{ color: "black" }}>{item.right[1]}</Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default RealTimeTraders;
