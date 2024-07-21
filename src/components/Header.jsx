import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  styled,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import emailjs from "emailjs-com";
// img
import crossstoneBg from "../assets/crossstoneBg.svg";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    fullName: String,
    mobileNumber: String,
    location: String,
  });

  const RootStyle = styled(Box)(({ theme }) => ({
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(10),
    backgroundColor: "white",
    backgroundImage: `url(${crossstoneBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    "::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
      zIndex: 1,
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      paddingTop: theme.spacing(5),
    },
  }));

  const ContentStyle = styled(Container)(({ theme }) => ({
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: isMobile ? "center" : "flex-start",
    color: "#FFFFFF",
    marginTop: "-64px",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: "center",
      padding: theme.spacing(2),
    },
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_325dxdr", // Replace with your EmailJS service ID
        "template_fdndj8c", // Replace with your EmailJS template ID
        formData,
        "7wXDG87-JI82cyDDQ" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your consultation request has been sent!");
        },
        (error) => {
          console.log(error.text);
          alert("There was an error sending your request. Please try again.");
        }
      );
  };

  return (
    <RootStyle component="header" sx={{ mb: 12 }}>
      <ContentStyle>
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={isMobile ? 2 : 8}
        >
          <Grid
            container
            direction="column"
            alignItems={isMobile ? "center" : "flex-start"}
          >
            <Typography
              sx={{
                fontSize: { xs: 40, md: 60 },
                fontWeight: "bold",
                color: "#FFFFFF",
                mb: 0,
              }}
            >
              Construct Your <br />
              <Typography
                component="span"
                sx={{
                  fontSize: { xs: 50, md: 85 },
                  fontWeight: "bold",
                  color: "#F42A40",
                  mt: 0,
                }}
              >
                Dream Home
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 18, md: 23 },
                fontWeight: "600",
                color: "#FFFFFF",
                mt: 1,
              }}
            >
              Building Your Vision, Crafting Your Dreams.
              <br />
              Reliable Construction for a Stronger Future.
            </Typography>
          </Grid>
          <Box
            sx={{
              height: { xs: 401, md: 401 },
              width: { xs: "100%", md: 750 },
              backgroundColor: "white",
              marginTop: isMobile ? 2 : 0,
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 2,
            }}
          >
            <Stack
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              component="form"
              onSubmit={handleSubmit}
              spacing={2}
              sx={{ width: "100%" }}
            >
              <Typography
                sx={{ fontSize: 24, fontWeight: "bold", color: "black" }}
              >
                Book{" "}
                <Typography
                  component="span"
                  sx={{ color: "#F42A40", fontWeight: "bold", fontSize: 24 }}
                >
                  Free
                </Typography>{" "}
                Appointment
              </Typography>
              <Typography
                sx={{ fontSize: 16, fontWeight: "bold", color: "black" }}
              >
                For Best Quality Construction at Affordable Rates
              </Typography>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                variant="outlined"
                InputProps={{
                  style: {
                    backgroundColor: "#D9D9D9",
                    color: "#202020",
                    fontWeight: "bold",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                variant="outlined"
                InputProps={{
                  style: {
                    backgroundColor: "#D9D9D9",
                    color: "#202020",
                    fontWeight: "bold",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Location of Your Plot"
                name="location"
                value={formData.location}
                onChange={handleChange}
                variant="outlined"
                InputProps={{
                  style: {
                    backgroundColor: "#D9D9D9",
                    color: "#202020",
                    fontWeight: "bold",
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#F42A40",
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                Start Your Consultation
              </Button>
            </Stack>
          </Box>
        </Stack>
      </ContentStyle>
    </RootStyle>
  );
};

export default Header;
