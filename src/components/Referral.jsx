import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import referral_mockup from "../assets/referral_mockup.svg";
import siemens from "../assets/siemens.svg";
import asianpaints from "../assets/asianpaints.svg";
import bosch from "../assets/bosch.svg";
import centuryply from "../assets/centuryply.svg";
import phillips from "../assets/phillips.svg";
import { Phone, WhatsApp } from "@mui/icons-material";

const trustedPartners = [
  { name: "Siemens", logo: siemens },
  { name: "Asian Paints", logo: asianpaints },
  { name: "Bosch", logo: bosch },
  { name: "Century Ply", logo: centuryply },
  { name: "Philips", logo: phillips },
];

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(15),
}));

const Referral = () => {
  return (
    <RootStyle>
      <Grid container>
        <Grid item md={2}>
          {""}
        </Grid>
        <Grid item md={8} display={"flex"}>
          <Stack direction={"column"}>
            <Typography sx={{ fontSize: 60, fontWeight: "bold" }}>
              Referral Program{" "}
              <Divider sx={{ borderColor: "#F42A40", width: "100%" }} />
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: "medium", mt: 4 }}>
              Refer your friends & family looking for house construction <br />
              and earn cashbacks/discounts* upto 25,000 INR today
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
            <Typography sx={{ fontSize: 60, fontWeight: "bold", mt: 12 }}>
              Our Trusted Partners{" "}
              <Divider sx={{ borderColor: "#F42A40", width: "100%" }} />
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: "medium", mt: 4 }}>
              Refer your friends & family looking for house construction <br />
              and earn cashbacks/discounts* upto 25,000 INR today
            </Typography>
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
      <Grid
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
      </Grid>
      <Grid md={2}>{""}</Grid>
      <Grid container>
        <Grid md={2}>{""}</Grid>
        <Grid md={6}>
          <Typography sx={{ fontSize: 60, fontWeight: "bold", mt: 12 }}>
            Connect with Us <br />
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
            >
              <WhatsApp /> Whatsapp
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </RootStyle>
  );
};

export default Referral;
