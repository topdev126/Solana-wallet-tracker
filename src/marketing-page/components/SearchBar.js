import React, { useState } from "react";
import {
  TextField,
  IconButton,
  Paper,
  List,
  ListItem,
  Box,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setFilteredOptions(
      value
        ? options.filter((option) =>
            option.toLowerCase().includes(value.toLowerCase())
          )
        : []
    );
  };

  return (
    <Box sx={{ width: "100%", background: "#faf3e0 !important" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          p: 2,
          gap: 1,
          backgroundColor: "#faf3e0 !important",
          borderRadius: 0,
        }}
      >
        <TextField
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Enter Wallet Address"
          fullWidth
          sx={{
            borderRadius: 0,
            backgroundColor: "#faf3e0 !important",
            "& .MuiInputBase-root": {
              backgroundColor: "#faf3e0 !important",
            },
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#faf3e0 !important",
            },
            "& .MuiInputBase-input": {
              backgroundColor: "#faf3e0 !important",
              color: "black !important", // Ensures input text is black
            },
            "& .MuiInputLabel-root": {
              color: "black !important", // Ensures label (placeholder) is black
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "black !important", // Ensures border color is black
            },
          }}
        />
        <IconButton
          sx={{
            borderRadius: 0,
            width: "40px",
            height: "40px",
            background: "white  !important",
            color:'black',
            backgroundColor: "#faf3e0  !important",
          }}
        >
          <SearchIcon />
        </IconButton>
      </Box>

      {filteredOptions.length > 0 && (
        <Paper
          elevation={0}
          sx={{
            position: "absolute",
            mt: 1,
            width: "calc(100% - 32px)", // Adjust based on parent padding

            backdropFilter: "blur(10px)",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          <List sx={{ py: 1 }}>
            {filteredOptions.map((option, index) => (
              <ListItem
                key={index}
                button
                sx={{
                  py: 1,
                  px: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    fontWeight: 500,
                  }}
                >
                  {option}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default SearchBar;
