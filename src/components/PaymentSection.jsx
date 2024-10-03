import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  styled,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  IconButton,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// Subpoints data for features
const subpoints = {
  ArchitecturalDrawings: [
    "Site Analysis",
    "Architectural Plan",
    "3D Elevation",
    "Structural Drawings",
  ],
  Structure: [
    "Steel - JSW, TATA",
    "Coarse Aggregates - River sand",
    "Masonry - Standard Red bricks",
    "Cement - Ultratech, JK super strong",
    "RCC Design Mix - As per the structural drawings",
    "Footing excavation Depth will be 5 feet",
    "Plinth Top level will be 3' from Ground",
    "Ceiling Height - 11 feet FFL to FFL",
  ],
  Kitchen: [
    "Ceramic wall Tiles (2 feet above counter slab) - Upto Rs 45 / SFT",
    "Main Sink Faucet - Jaquar",
    "Any other faucet & Accessories - Jaquar",
    "Kitchen Sink - Stainless steel double sink - Jaquar",
  ],
  DoorsAndWindows: [
    "Windows - UPVC windows with glass & mesh shutter",
    "Main Door - Teak Door with shutter & frame of 6 inch by 4 inch including fixtures worth Rs 60,499/-",
    "Pooja Room - Teak door with shutter & frame of 5 inch by 3 inch",
    "Internal Door - Laminates or flush doors inclusive of fittings worth RS 1000",
  ],
  Flooring: [
    "Living, Dining, Kitchen - Premium vitrified Tiles upto Rs 55 / SFT",
    "Bedroom - Vitrified Tiles upto Rs 45 / SFT",
    "Balcony - Anti-skid tiles upto Rs 40 / SFT",
    "Bathroom - Anti-skid tiles upto Rs 40 / SFT",
  ],
  Electrical: [
    "Wires - Anchor/Polycab/Havells",
    "Switches - Anchor Roma/GM",
    "Distribution - Concealed ISI copper wiring",
    "Power Backup - Provision for inverter",
  ],
  Miscellaneous: [
    "Bathroom - CP Fittings upto Rs 20,000",
    "Bathroom Wall Tiles upto Rs 40 / SFT",
    "External Painting - Weatherproof paint upto Rs 30 / SFT",
    "Internal Painting - Plastic emulsion paint upto Rs 25 / SFT",
  ],
};

const packages = [
  {
    title: "Budget Package",
    price: "Rs 2250 / SFT",
    features: [
      "Architectural Drawings",
      "Structure",
      "Kitchen",
      "Doors And Windows",
      "Flooring",
      "Electrical",
      "Miscellaneous",
    ],
  },
  {
    title: "Classic Package",
    price: "Rs 2420 / SFT",
    features: [
      "Architectural Drawings",
      "Structure",
      "Kitchen",
      "Doors And Windows",
      "Flooring",
      "Electrical",
      "Miscellaneous",
    ],
  },
  {
    title: "Premium Package",
    price: "Rs 2740 / SFT",
    features: [
      "Architectural Drawings",
      "Structure",
      "Kitchen",
      "Doors And Windows",
      "Flooring",
      "Electrical",
      "Miscellaneous",
    ],
  },
];

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
}));

const PaymentSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  // State for menu
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("BENGALURU");
  const isMenuOpen = Boolean(anchorEl);

  // Handle menu open and close
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (location) => {
    setAnchorEl(null);
    if (location) {
      setSelectedLocation(location);
    }
  };

  return (
    <RootStyle>
      <Stack
        component="section"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography sx={{ fontSize: 60, fontWeight: "bold" }}>
          Packages
        </Typography>
        <Divider sx={{ borderColor: "#F42A40", width: "35%" }} />
        <Typography
          sx={{ fontSize: 16, fontWeight: "medium", color: "#000000", mt: 4 }}
        >
          Find the best home construction packages
        </Typography>
        <Box mt={2} alignItems={"center"} display={"flex"}>
          <Typography
            sx={{ fontSize: 19, fontWeight: "bold" }}
            component="span"
          >
            Showing the packages for{" "}
          </Typography>
          <IconButton
            onClick={handleMenuClick}
            sx={{ fontSize: 19, fontWeight: "bold", color: "#F42A40" }}
          >
            {selectedLocation} <ArrowDropDownIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={() => handleMenuClose(null)}
          >
            <MenuItem onClick={() => handleMenuClose("BENGALURU")}>
              Bengaluru
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose("GADAG")}>Gadag</MenuItem>
            <MenuItem onClick={() => handleMenuClose("HUBLI")}>Hubli</MenuItem>
            <MenuItem onClick={() => handleMenuClose("VIJAYAPURA")}>
              Vijayapura
            </MenuItem>
          </Menu>
        </Box>
        <Stack direction={isMobile ? "column" : "row"} spacing={2} mt={5}>
          {packages.map((pkg, index) => (
            <Card
              key={index}
              sx={{ minWidth: 275, maxWidth: 300, width: "100%" }}
            >
              <CardContent sx={{ padding: 0 }}>
                <Typography
                  variant="h6"
                  sx={{
                    backgroundColor: "#F42A40",
                    color: "#fff",
                    padding: 1,
                    fontSize: 18,
                  }}
                >
                  {pkg.title} : {pkg.price}
                </Typography>
                {pkg.features.map((feature, idx) => (
                  <Accordion key={idx}>
                    <AccordionSummary expandIcon={"+"}>
                      <Typography>{feature}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {subpoints[feature.replace(/ /g, "")] ? (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {subpoints[feature.replace(/ /g, "")].map(
                            (point, pointIdx) => (
                              <Chip
                                key={pointIdx}
                                label={point}
                                variant="outlined"
                              />
                            )
                          )}
                        </Box>
                      ) : (
                        <Typography>Details about {feature}...</Typography>
                      )}
                    </AccordionDetails>
                  </Accordion>
                ))}
                <Box mt={2} textAlign="center">
                  <Typography sx={{ marginBottom: 2 }}>
                    Get in touch with us!
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#F42A40", color: "#fff" }}
                    onClick={() => navigate("/calculate")}
                  >
                    Let's Build →
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Stack>
    </RootStyle>
  );
};

export default PaymentSection;
