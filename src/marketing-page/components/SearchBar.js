import React, { useState } from "react";
import { TextField, MenuItem, InputAdornment, IconButton, Paper, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setFilteredOptions(value ? options.filter(option => option.toLowerCase().includes(value.toLowerCase())) : []);
  };

  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", width:"40vw", minWidth: "300px" }}>
      <TextField
        label=""
        value={searchTerm}
        onChange={handleSearchChange}
        variant="outlined"
        placeholder="Enter Wallet Address"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {/* <SearchIcon /> */}
            </InputAdornment>
          ),
        }}
      />
      <IconButton style={{ marginLeft: 8 }}>
        <SearchIcon />
      </IconButton>
      {filteredOptions.length > 0 && (
        <Paper style={{ position: "absolute", top: "100%", left: 0, right: 0, zIndex: 1 }}>
          <List>
            {filteredOptions.map((option, index) => (
              <ListItem key={index} button>
                {option}
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </div>
  );
};

export default SearchBar;
