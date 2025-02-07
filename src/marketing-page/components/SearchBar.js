import React, { useState } from "react";
import { 
  TextField, 
  InputAdornment, 
  IconButton, 
  Paper, 
  List, 
  ListItem,
  Box,
  Typography 
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { alpha, useTheme } from '@mui/material/styles';

const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const theme = useTheme();

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setFilteredOptions(
      value ? options.filter(option => 
        option.toLowerCase().includes(value.toLowerCase())
      ) : []
    );
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          gap: 1,
        }}
      >
        <TextField
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Enter Wallet Address"
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              height: '48px',
              background: alpha(theme.palette.background.paper, 0.6),
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              '&:hover': {
                background: alpha(theme.palette.background.paper, 0.8),
                borderColor: theme.palette.primary.main,
              },
              '&.Mui-focused': {
                background: alpha(theme.palette.background.paper, 1),
                borderColor: theme.palette.primary.main,
                boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
              },
              '& fieldset': {
                border: 'none',
              },
            },
            '& .MuiInputBase-input': {
              fontSize: '1rem',
              fontWeight: 500,
              color: theme.palette.text.primary,
              '&::placeholder': {
                color: theme.palette.text.secondary,
                opacity: 0.8,
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon 
                  sx={{ 
                    color: theme.palette.text.secondary,
                    ml: 1 
                  }} 
                />
              </InputAdornment>
            ),
          }}
        />
        <IconButton
          sx={{
            width: '48px',
            height: '48px',
            background: theme.palette.primary.main,
            borderRadius: '12px',
            color: 'white',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: theme.palette.primary.dark,
              transform: 'translateY(-2px)',
            },
          }}
        >
          <SearchIcon />
        </IconButton>
      </Box>

      {filteredOptions.length > 0 && (
        <Paper
          elevation={0}
          sx={{
            position: 'absolute',
            mt: 1,
            width: 'calc(100% - 32px)', // Adjust based on parent padding
            background: alpha(theme.palette.background.paper, 0.95),
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            overflow: 'hidden',
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
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    background: alpha(theme.palette.primary.main, 0.1),
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: theme.palette.text.primary,
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
