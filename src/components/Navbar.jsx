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
import { Link, useNavigate } from "react-router-dom";
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
  { text: "About", to: "services" }, // 'About' triggers scroll to 'services'
  { text: "Contact", to: "contact" }, // 'Contact' will open the phone link
  { text: "Calculate", to: "/calculate" },
];

const Navbar = ({ onNavigate }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate(); // To handle route navigation

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleClick = (item) => {
    if (item.to === "services") {
      onNavigate("services"); // Scroll to Services Section
    } else if (item.to === "contact") {
      window.location.href = "tel:+917619236463"; // Open phone dialer for Contact
    } else if (item.to === "/calculate" || item.to === "/") {
      navigate(item.to); // Navigate to routes like Calculate or Home
    }
    setDrawerOpen(false); // Close drawer after navigation
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
        {/* Menu Icon for mobile - aligned to the right */}
        <Box sx={{ display: { xs: "block", sm: "none" }, order: 2 }}>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ color: "#F42A40" }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Logo - aligned to the left on mobile */}
        <Box component={Link} to="/" sx={{ order: { xs: 1, sm: "unset" } }}>
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
                  onClick={() => handleClick(item)} // Use handleClick function
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
                onClick={() => handleClick(item)}
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
