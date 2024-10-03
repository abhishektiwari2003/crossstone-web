import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import referral_mockup from "../assets/referral_mockup.svg";
import { Phone, WhatsApp } from "@mui/icons-material";

// const trustedPartners = [
//   { name: "Siemens", logo: siemens },
//   { name: "Asian Paints", logo: asianpaints },
//   { name: "Bosch", logo: bosch },
//   { name: "Century Ply", logo: centuryply },
//   { name: "Philips", logo: phillips },
// ];

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(15),
}));

const Referral = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <RootStyle>
      {isMobile ? (
        <>
          {/* Mobile Layout */}
          <Grid container justifyContent="center">
            <Grid item xs={12} textAlign="center">
              <Typography sx={{ fontSize: 32, fontWeight: "bold" }}>
                Referral Program
                <Divider sx={{ borderColor: "#F42A40", width: "100%" }} />
              </Typography>
              <Typography sx={{ fontSize: 12, fontWeight: "medium", mt: 4 }}>
                Refer your friends & family looking for house construction and
                earn cashbacks/discounts* up to 25,000 INR today
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#F42A40",
                  color: "white",
                  mt: 4,
                  width: "140px",
                }}
                size="medium"
              >
                Learn More →
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" mt={8}>
            <Grid item xs={12} textAlign="center">
              <Typography sx={{ fontSize: 32, fontWeight: "bold" }}>
                Connect with Us
                <Divider sx={{ borderColor: "#F42A40", width: "100" }} />
              </Typography>
              <Typography sx={{ fontSize: 14, fontWeight: "medium", mt: 4 }}>
                Reach out on WhatsApp or give us a call for the best home design
                experience.
              </Typography>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                mt={4}
              >
                <Button
                  sx={{
                    backgroundColor: "#F42A40",
                    color: "white",
                    width: "140px",
                  }}
                  size="medium"
                  href="tel:+917619236463"
                  target="_blank"
                >
                  <Phone /> Call Now
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#F42A40",
                    color: "white",
                    width: "140px",
                  }}
                  size="medium"
                  href="https://wa.me/917619236463?text=I%20am%20interested%20in%20house%20construction%20cost"
                  target="_blank"
                >
                  <WhatsApp /> WhatsApp
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          {/* Desktop Layout */}
          <Grid container>
            <Grid item md={2}>
              {""}
            </Grid>
            <Grid item md={8} display={"flex"}>
              <Stack direction={"column"}>
                <Typography sx={{ fontSize: 60, fontWeight: "bold" }}>
                  Referral Program
                  <Divider sx={{ borderColor: "#F42A40", width: "100%" }} />
                </Typography>
                <Typography sx={{ fontSize: 16, fontWeight: "medium", mt: 4 }}>
                  Refer your friends & family looking for house construction
                  <br />
                  and earn cashbacks/discounts* up to 25,000 INR today
                </Typography>
                <Button
                  sx={{
                    backgroundColor: "#F42A40",
                    color: "white",
                    mt: 6,
                    width: "160px",
                  }}
                  size="medium"
                >
                  Learn More →
                </Button>
                {/* <Typography sx={{ fontSize: 60, fontWeight: "bold", mt: 12 }}>
                  Our Trusted Partners
                  <Divider sx={{ borderColor: "#F42A40", width: "100%" }} />
                </Typography>
                <Typography sx={{ fontSize: 16, fontWeight: "medium", mt: 4 }}>
                  Partners we have collaborated with ...
                </Typography> */}
                <Grid item md={1}>
                  {""}
                </Grid>
              </Stack>
              <Box
                component="img"
                sx={{
                  height: 500,
                  width: 500,
                }}
                alt="referral_mockup"
                src={referral_mockup}
              />
            </Grid>
            <Grid item md={2}>
              {""}
            </Grid>
          </Grid>
          {/* <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            mt={4}
          >
            {trustedPartners.map((partner, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Box
                  component="img"
                  sx={{
                    maxHeight: 80,
                    maxWidth: 150,
                    margin: "auto",
                  }}
                  alt={partner.name}
                  src={partner.logo}
                />
              </Grid>
            ))}
          </Grid> */}
          <Grid md={2}>{""}</Grid>
          <Grid container>
            <Grid md={2}>{""}</Grid>
            <Grid md={6} id="contact">
              <Typography sx={{ fontSize: 60, fontWeight: "bold", mt: 12 }}>
                Connect with Us
                <Divider sx={{ borderColor: "#F42A40", width: "60%" }} />
              </Typography>
              <Typography sx={{ fontSize: 18, fontWeight: "medium", mt: 4 }}>
                Reach out on WhatsApp or give us a call for the best home design
                experience.
              </Typography>
              <Stack direction={"row"}>
                <Button
                  sx={{
                    backgroundColor: "#F42A40",
                    color: "white",
                    mt: 6,
                    width: "160px",
                    mr: 2,
                    alignItems: "center",
                    textTransform: "none",
                  }}
                  href="tel:+917619236463"
                  target="_blank"
                  size="medium"
                >
                  <Phone /> Call Now
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#F42A40",
                    color: "white",
                    mt: 6,
                    width: "160px",
                    alignItems: "center",
                    textTransform: "none",
                  }}
                  size="medium"
                  href="https://wa.me/917619236463?text=I%20am%20interested%20in%20house%20construction%20cost"
                  target="_blank"
                >
                  <WhatsApp /> WhatsApp
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </>
      )}
    </RootStyle>
  );
};

export default Referral;
