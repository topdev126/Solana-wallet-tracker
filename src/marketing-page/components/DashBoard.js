import * as React from "react";


import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";


import SearchBar from "./SearchBar";
import Transactions from "./Transactions";
import Tokenomics from "./Tokenomics";
import Faqs from "./Faqs";

export default function DashBoard() {


  return (
    <Container
      id="DashBoard"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 1, sm: 2 },
      }}
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          color: "text.primary",
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        Track the Top Memecoin <br/>Traders in <span style={{color:"cornflowerblue"}}>Realtime</span>
      </Typography>

      <SearchBar />
      <Transactions />
      <Tokenomics />
      <Faqs />

    </Container>
  );
}
