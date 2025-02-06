import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <Typography
      variant="body2"
      sx={{
        color: "text.secondary",
        mt: 1,
        textAlign: "center", // Centering the text
      }}
    >
      {"©"}
      &nbsp;{new Date().getFullYear()}
      <Link color="text.secondary" href="https://mui.com/">
        Kolscan. All rights reserved.
      </Link>
      
    </Typography>
  );
}

export default Footer;
