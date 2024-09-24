import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  styled,
  ListItemButton,
  Typography,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import crossstone2 from "../assets/crossstone2.svg";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const itemList = [
  { text: "Home", to: "/" },
  { text: "About", to: "services" },
  { text: "Contact", to: "contact" },
  { text: "Calculate", to: "/calculate" },
];

const Navbar = ({ onNavigate }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        backgroundColor: "white",
        paddingLeft: { sm: 2, md: 16 },
        paddingRight: { md: 16, sm: "none" },
      }}
      elevation={0}
    >
      <StyledToolbar>
        {/* Menu Icon for mobile - now aligned to the right */}
        <Box sx={{ display: { xs: "block", sm: "none" }, order: 2 }}>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ color: "#F42A40" }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Logo - now aligned to the left on mobile */}
        <Box
          component={Link} // Use the Link component for navigation
          to="/" // Navigate to homepage
          sx={{ order: { xs: 1, sm: "unset" } }}
        >
          <Box
            component="img"
            src={crossstone2}
            alt="Crossstone Logo"
            width={75}
            height={45}
          />
        </Box>

        {/* Drawer for mobile */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <List>
            {itemList.map((item) => (
              <ListItem key={item.text}>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  onClick={() => {
                    onNavigate(item.to);
                    setDrawerOpen(false);
                  }}
                  sx={{
                    color: "black",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "black",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#F42A40",
                      fontWeight: "bold",
                      fontSize: 18,
                    }}
                  >
                    {item.text}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Regular Menu for larger screens */}
        <ListMenu>
          {itemList.map((item) => (
            <ListItem key={item.text}>
              <ListItemButton
                component={Link}
                to={item.to}
                onClick={() => onNavigate(item.to)}
                sx={{
                  color: "black",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "black",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#F42A40",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  {item.text}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
