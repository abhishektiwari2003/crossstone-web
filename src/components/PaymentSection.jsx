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
  DesignAndDrawings: [
    "Architectural Drawing",
    "Structural Drawings",
    "3D Elevation",
  ],
  Structure: {
    Budget: [
      "Steel: MTC, BMM & RUNGTA",
      "Coarse Aggregates: 20mm & 40mm",
      "Fine Aggregate - River sand",
      'Masonry: Standard Red bricks (9" & 4")',
      "Cement: Maha, Jyothi Gold or Equivalent",
      "RCC Design Mix: As per structural drawings",
      "Plastering: External & Internal",
      "Footing Excavation: 5 feet from ground",
      "Plinth Top Level: 2'6\" from ground",
      "Ceiling Height: 10 feet (FFL to FFL)",
    ],
    Classic: [
      "Steel: Jindal, Kamadhenu",
      "Coarse Aggregates: 20mm & 40mm",
      "Fine Aggregate - River sand",
      'Masonry: Standard Red bricks (9" & 4")',
      "Cement: Dalmia, JSW, JK or Equivalent",
      "RCC Design Mix: As per structural drawings",
      "Plastering: External & Internal",
      "Footing Excavation: 5 feet from ground",
      "Plinth Top Level: 2'6\" from ground",
      "Ceiling Height: 10 feet (FFL to FFL)",
    ],
    Royale: [
      "Steel: JSW, TATA",
      "Coarse Aggregates: 20mm & 40mm",
      "Fine Aggregate - River sand",
      'Masonry: Standard Red bricks (9" & 4")',
      "Cement: Ultratech, JK Super Strong",
      "RCC Design Mix: As per structural drawings",
      "Plastering: External & Internal",
      "Footing Excavation: 5 feet from ground",
      "Plinth Top Level: 3 feet from ground",
      "Ceiling Height: 11 feet (FFL to FFL)",
    ],
  },
  Kitchen: {
    Budget: [
      "Wall Tiles: ₹25/SFT (2ft above counter)",
      "Main Sink Faucet: JAAL",
      "Other Faucets: JAAL",
      "Single Sink: JAAL (Stainless steel)",
    ],
    Classic: [
      "Wall Tiles: ₹35/SFT (2ft above counter)",
      "Main Sink Faucet: JAAL",
      "Other Faucets: JAAL",
      "Single Sink: JAAL (Stainless steel)",
    ],
    Royale: [
      "Wall Tiles: ₹45/SFT (2ft above counter)",
      "Main Sink Faucet: Jaquar",
      "Other Faucets: Jaquar",
      "Double Sink: Jaquar (Stainless steel)",
    ],
  },
  Bathroom: {
    Budget: [
      "Wall Tiles: ₹30/SFT (7ft height)",
      "Sanitary & CP: ₹30,000 per 1200 SFT",
      "CPVC: Sumolex/Paras",
      "WPC Door: ₹2,100 (with fittings)",
    ],
    Classic: [
      "Wall Tiles: ₹38/SFT (7ft height)",
      "Sanitary & CP: ₹42,000 per 1200 SFT",
      "CPVC: Astral",
      "WPC Door: ₹3,500 (with fittings)",
    ],
    Royale: [
      "Wall Tiles: ₹50/SFT (7ft height)",
      "Sanitary & CP: ₹54,000 per 1200 SFT",
      "CPVC: Ashirvad",
      "WPC Door: ₹4,500 (with fittings)",
    ],
  },
  Painting: {
    Budget: [
      "Interior: Nippon Putty + Atom 2 in 1",
      "Exterior: Nippon Primer + Ace Emulsion",
    ],
    Classic: [
      "Interior: Nippon Putty + Apoclite Premium",
      "Exterior: Nippon Primer + Apex Emulsion",
    ],
    Royale: [
      "Interior: Asian Putty + Asian Royal",
      "Exterior: Asian Primer + Apex Emulsion",
    ],
  },
  Electrical: {
    Budget: ["Wires: Finolex Fireproof", "Switches: GM/Anchor Roma"],
    Classic: ["Wires: Finolex Fireproof", "Switches: GM/Anchor Roma Premium"],
    Royale: ["Wires: Finolex Fireproof", "Switches: Lisha/Anchor Roma Premium"],
  },
  DoorsAndWindows: {
    Budget: [
      "Windows: Aluminium (3-track with mesh)",
      'Main Door: Teak (5"x3") - ₹40,499',
      'Pooja Door: Teak (4"x3") - ₹19,599',
      "Internal: Laminates/flush - ₹1,000",
    ],
    Classic: [
      "Windows: UPVC (2.5-track with mesh)",
      'Main Door: Teak (5"x3") - ₹50,499',
      'Pooja Door: Teak (4"x3") - ₹28,599',
      "Internal: Laminates/flush - ₹1,000",
    ],
    Royale: [
      "Windows: UPVC/Wood (3-track with mesh)",
      'Main Door: Teak (6"x4") - ₹60,499',
      'Pooja Door: Teak (5"x3") - ₹38,599',
      "Internal: Laminates/flush - ₹1,000",
    ],
  },
  Flooring: {
    Budget: [
      "Living/Dining: Vitrified (₹42/SFT)",
      "Rooms/Kitchen: Vitrified (₹42/SFT)",
      "Balcony: Anti-skid (₹30/SFT)",
      "Staircase: Concrete with red oxide",
    ],
    Classic: [
      "Living/Dining: Vitrified (₹58/SFT)",
      "Rooms/Kitchen: Vitrified (₹58/SFT)",
      "Balcony: Anti-skid (₹40/SFT)",
      "Staircase: Granite (₹70/SFT)",
    ],
    Royale: [
      "Living/Dining: Tiles/Granite (₹70/SFT)",
      "Rooms/Kitchen: Tiles (₹70/SFT)",
      "Balcony: Anti-skid (₹45/SFT)",
      "Staircase: Granite (₹90/SFT)",
    ],
  },
  Miscellaneous: {
    Budget: [
      "Overhead Tank: 1000L Sintex",
      "Underground Sump: 4000L",
      "Staircase: Concrete Parda",
    ],
    Classic: [
      "Overhead Tank: 1000L Sintex",
      "Underground Sump: 5500L",
      "Staircase: MS Railing",
    ],
    Royale: [
      "Overhead Tank: 1000L Sintex",
      "Underground Sump: 6500L",
      "Staircase: SS Railing with Glass",
    ],
  },
};

const packages = [
  {
    title: "Budget Package",
    price: "Rs 2250 / SFT",
    features: [
      "Design And Drawings",
      "Structure",
      "Kitchen",
      "Bathroom",
      "Painting",
      "Electrical",
      "Doors And Windows",
      "Flooring",
      "Miscellaneous",
    ],
    type: "Budget",
  },
  {
    title: "Classic Package",
    price: "Rs 2420 / SFT",
    features: [
      "Design And Drawings",
      "Structure",
      "Kitchen",
      "Bathroom",
      "Painting",
      "Electrical",
      "Doors And Windows",
      "Flooring",
      "Miscellaneous",
    ],
    type: "Classic",
  },
  {
    title: "Royale Package",
    price: "Rs 2740 / SFT",
    features: [
      "Design And Drawings",
      "Structure",
      "Kitchen",
      "Bathroom",
      "Painting",
      "Electrical",
      "Doors And Windows",
      "Flooring",
      "Miscellaneous",
    ],
    type: "Royale",
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
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 1,
                            "& .MuiChip-root": {
                              margin: "4px",
                              maxWidth: "100%",
                              height: "auto",
                              "& .MuiChip-label": {
                                whiteSpace: "normal",
                                display: "block",
                                padding: "8px",
                              },
                            },
                          }}
                        >
                          {typeof subpoints[feature.replace(/ /g, "")] ===
                            "object" &&
                          !Array.isArray(subpoints[feature.replace(/ /g, "")])
                            ? subpoints[feature.replace(/ /g, "")][
                                pkg.type
                              ].map((point, pointIdx) => (
                                <Chip
                                  key={pointIdx}
                                  label={point}
                                  variant="outlined"
                                  sx={{
                                    borderColor: "#F42A40",
                                    color: "#000000",
                                    fontSize: "14px",
                                    lineHeight: "1.2",
                                  }}
                                />
                              ))
                            : subpoints[feature.replace(/ /g, "")].map(
                                (point, pointIdx) => (
                                  <Chip
                                    key={pointIdx}
                                    label={point}
                                    variant="outlined"
                                    sx={{
                                      borderColor: "#F42A40",
                                      color: "#000000",
                                      fontSize: "14px",
                                      lineHeight: "1.2",
                                    }}
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
