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
    fetch("http://24.199.120.137:3002/api/data/getLeader")
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
          sm: "repeat(auto-fit, minmax(250px, 1fr))",
          md: "repeat(3, 1fr)",
        },
        width: "100%",
        p: 1,
        background: "rgb(255, 211, 91)",
        maxHeight: "800px",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgb(200, 160, 60)", // Adjusted for contrast
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-track": {
          background: "rgb(255, 211, 91)",
        },
      }}
    >
      {leader.map((tx) => (
        <Paper
          key={tx.id}
          sx={{
            border: "1px solid black",
            minWidth: "250px", // Prevent items from shrinking too much
            borderRadius:0,
          }}
        >
          <Box
            elevation={2}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: { xs: 1, sm: 2 }, // Reduce gap for smaller screens
              p:1,
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
                  width: { xs: 30, sm: 40 }, // Reduce avatar size for small screens
                  height: { xs: 30, sm: 40 },
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
                      width: { xs: 15, sm: 20 }, // Reduce Twitter avatar size for small screens
                      height: { xs: 15, sm: 20 },
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
                {tx.wallet_address.split("/").pop().substring(0, 6)}
              </Link>
            </Tooltip>
          </Box>

          {/* Transactions List */}
          <Box
            sx={{
              maxHeight: "200px",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#faf3e0",
              },
              "&::-webkit-scrollbar-track": {
                background: "#faf3e0",
              },
            }}
          >
            {items.map((item, index) => (
              <Box
                key={index}
                elevation={2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: { xs: 1, sm: 2 }, // Reduce gap on small screens
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
                  <Box sx={{ display: "flex", gap: { xs: 1, sm: 2 } }}>
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: { xs: "12px", sm: "14px" },
                      }}
                    >
                      {item.left[0]}
                    </Typography>
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: { xs: "12px", sm: "14px" },
                      }}
                    >
                      {item.left[1]}
                    </Typography>
                  </Box>

                  {/* Right side */}
                  <Box sx={{ display: "flex", gap: { xs: 1, sm: 2 } }}>
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: { xs: "12px", sm: "14px" },
                      }}
                    >
                      {item.right[0]}
                    </Typography>
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: { xs: "12px", sm: "14px" },
                      }}
                    >
                      {item.right[1]}
                    </Typography>
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
