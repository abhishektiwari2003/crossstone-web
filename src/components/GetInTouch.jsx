import React from "react";
import {
  Box,
  Divider,
  Grid,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import sushmitacustomer from "../assets/sushmitacustomer.jpeg";
import abhishekcustomer from "../assets/abhishekcustomer.jpeg";
import akashcustomer from "../assets/akashcustomer.jpg";

const GetInTouch = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const RootStyle = styled("div")(({ theme }) => ({
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    textAlign: "left",
    overflowX: "hidden",
  }));

  const testimonials = [
    {
      image: sushmitacustomer,
      name: "Somashekar & Sushmitha",
      location: "Hubli",
      feedback:
        "Crossstone Consulting Engineers delivered exceptional construction services. Their professionalism, attention to detail, and timely execution exceeded our expectations. Highly recommended for any construction project!",
    },
    {
      image: abhishekcustomer,
      name: "Akshata & Abhishek",
      location: "Gadag",
      feedback:
        "Crossstone Consulting Engineers delivered exceptional interior design services, blending creativity with functionality. Their attention to detail and commitment to client satisfaction made the entire process seamless.",
    },
    {
      image: akashcustomer,
      name: "Akash & Preeti",
      location: "Gadag",
      feedback:
        "Crossstone Consulting Engineers provided top-notch construction services, delivering quality results on time and within budget.",
    },
  ];

  return (
    <RootStyle>
      <Stack
        component="section"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          sx={{
            fontSize: isMobile ? 40 : 60, // Responsive font size
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Our Customers
        </Typography>
        <Divider
          sx={{
            borderColor: "#F42A40",
            width: isMobile ? "60%" : "35%", // Responsive divider width
          }}
        />
      </Stack>

      <Stack
        spacing={isMobile ? 3 : 5}
        direction="column"
        justifyContent="center"
        alignItems="center"
        mt={5}
      >
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            sx={{
              width: isMobile ? "100%" : "744px",
              height: isMobile ? "auto" : "548px",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "center",
              alignItems: "center",
              padding: theme.spacing(2),
              boxShadow: 3,
              mb: isMobile ? 3 : 5, // Add spacing between boxes
            }}
          >
            <Box
              component="img"
              alt={testimonial.name}
              src={testimonial.image}
              sx={{
                width: isMobile ? "100%" : "40%",
                height: "auto",
                borderRadius: 2,
                marginRight: isMobile ? 0 : theme.spacing(2),
                marginBottom: isMobile ? theme.spacing(2) : 0, // Spacing for mobile
              }}
            />
            <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
              <Typography
                sx={{
                  fontSize: isMobile ? 16 : 18,
                  fontWeight: "medium",
                }}
              >
                {testimonial.feedback}
              </Typography>
              <Typography
                sx={{
                  fontSize: isMobile ? 16 : 18,
                  fontWeight: "medium",
                  color: "#F42A40",
                  mt: isMobile ? 2 : 4,
                }}
              >
                - {testimonial.name} ({testimonial.location})
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </RootStyle>
  );
};

export default GetInTouch;
