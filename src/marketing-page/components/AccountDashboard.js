import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Select,
  MenuItem,
  useMediaQuery,
  Skeleton,
  Container,
  Avatar,
  Stack,
  IconButton,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const AccountDashboard = () => {
  const isSmallScreen = useMediaQuery("(max-width:700px)");

  return (
    <Container
      id="DashBoard"
      sx={{
        pt: { xs: 6, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 1, sm: 2 },
      }}
    >
      <Box sx={{ pb: "10vh", display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: { xs: "95vw", md: "65vw" }, fontSize: 18 }}>
          {/* User Info & Action Buttons */}
          <Box
            sx={{
              my: 3,
              height: 50,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
              backgroundColor: "background.paper",
              boxShadow: 1,
            }}
          >
            {/* Left: User Avatar & Name */}
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar
                src="/images/user-avatar.png" // Change to your user image source
                alt="User Avatar"
                sx={{ width: 40, height: 40 }}
              />
              <Typography variant="h6" fontWeight="bold">
                John Doe
              </Typography>
            </Stack>

            {/* Right: Action Buttons */}
            <Stack direction="row" spacing={1}>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  background: "#b3daff", // Set background to light blue
                  color: "white", // Set text color to white
                  "&.MuiButton-root:hover": {
                    backgroundColor: "#66b5ff", // Set background color to blue on hover
                  },
                  borderColor: "#4da9ff",
                }}
              >
                Copy Trade
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  "&.MuiButton-root:hover": {
                    backgroundColor: "#66b5ff", // Set background color to blue on hover
                    borderColor: "#4da9ff",
                  },
                }}
              >
                Load More
              </Button>
              <IconButton color="primary">
                <RefreshIcon />
              </IconButton>
            </Stack>
          </Box>

          {/* Dashboard Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: isSmallScreen ? "1fr" : "42fr 58fr",
              gap: 2,
            }}
          >
            {/* Top Holdings */}
            <Paper sx={{ p: 2, borderRadius: 2, minHeight: 250 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography variant="h6">Top Holdings</Typography>
                <Typography sx={{ ml: "auto", fontSize: 20 }}>$0.0</Typography>
              </Box>
              <Skeleton variant="rectangular" height={32} />
            </Paper>

            {/* Defi Trades */}
            <Paper sx={{ p: 2, borderRadius: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                {/* Left: Defi Trades */}
                <Typography variant="h6" sx={{ minWidth: 100 }}>
                  Defi Trades
                </Typography>

                {/* Right: Search Field & Button */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <TextField
                    size="small"
                    placeholder="Search tokens"
                    sx={{ mr: 1 }}
                  />
                  <Button variant="outlined">Search</Button>
                </Box>
              </Box>

              <Skeleton variant="rectangular" height={24} sx={{ mb: 1 }} />
              <Skeleton variant="rectangular" height={24} />
            </Paper>

            {/* Token PnL */}
            <Paper
              sx={{
                p: 2,
                borderRadius: 2,
                gridColumn: "1 / span 2",
                minHeight: 500,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography variant="h6">Token PnL</Typography>
                <Select size="small" defaultValue="most recent" sx={{ ml: 2 }}>
                  <MenuItem value="most recent">Most Recent</MenuItem>
                  <MenuItem value="profit">Profit</MenuItem>
                  <MenuItem value="loss">Loss</MenuItem>
                </Select>
                <Typography sx={{ ml: "auto", color: "green" }}>
                  +0.00 SOL ($0.0)
                </Typography>
              </Box>
              <Skeleton variant="rectangular" height={40} />
            </Paper>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AccountDashboard;
