import * as React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useColorScheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Select from "@mui/material/Select";
import MenuItemSelect from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

export default function SettingsDropdown(props) {
  const { mode, setMode } = useColorScheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [platform, setPlatform] = React.useState("Pump");
  const [isSoundOn, setSoundOn] = React.useState(true);

  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handlePlatformChange = (event) => setPlatform(event.target.value);

  // Set theme toggle state based on current mode
  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const toggleSound = () => setSoundOn((prev) => !prev);

  return (
    <React.Fragment>
      <IconButton
        data-screenshot="settings-menu"
        onClick={handleClick}
        disableRipple
        size="small"
        aria-controls={open ? "settings-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        {...props}
      >
        <SettingsIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="settings-menu"
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            variant: "outlined",
            elevation: 0,
            sx: {
              my: "4px",
              width: 220, // Increased menu width
              padding: "8px",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          Theme
          <Switch checked={mode === "dark"} onChange={toggleTheme} />
        </MenuItem>
        <MenuItem>
          Sounds
          <Switch checked={isSoundOn} onChange={toggleSound} />
        </MenuItem>
        <MenuItem>
          Platform
          <Box >
            <FormControl fullWidth>
              <Select value={platform} onChange={handlePlatformChange}>
                <MenuItemSelect value="Pump">Pump/Dexscreener</MenuItemSelect>
                <MenuItemSelect value="Photon">Photon</MenuItemSelect>
                <MenuItemSelect value="BullX">BullX</MenuItemSelect>
                <MenuItemSelect value="Nova">Nova</MenuItemSelect>
              </Select>
            </FormControl>
          </Box>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
