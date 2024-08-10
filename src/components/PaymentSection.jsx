import React from "react";
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
} from "@mui/material";

const packages = [
  {
    title: "Budget Package",
    price: "Rs 2150 / SFT",
    features: [
      "Architectural Drawings",
      "Structure",
      "Kitchen",
      "Doors & Windows",
      "Flooring",
      "Electrical",
      "Miscellaneous",
    ],
  },
  {
    title: "Classic Package",
    price: "Rs 2426 / SFT",
    features: [
      "Architectural Drawings",
      "Structure",
      "Kitchen",
      "Doors & Windows",
      "Flooring",
      "Electrical",
      "Miscellaneous",
    ],
  },
  {
    title: "Premium Package",
    price: "Rs 2770 / SFT",
    features: [
      "Architectural Drawings",
      "Structure",
      "Kitchen",
      "Doors & Windows",
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
        <Box>
          <Typography
            sx={{ fontSize: 19, fontWeight: "bold" }}
            component="span"
          >
            Showing the packages for{" "}
          </Typography>
          <Typography
            sx={{ fontSize: 19, fontWeight: "bold", color: "#F42A40" }}
            component="span"
          >
            BENGALURU
          </Typography>
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
                      <Typography>Details about {feature}...</Typography>
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
