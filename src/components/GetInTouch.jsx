/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import sushmitacustomer from "../assets/sushmitacustomer.jpeg";
import abhishekcustomer from "../assets/abhishekcustomer.jpeg";
import akashcustomer from "../assets/akashcustomer.jpg";

const GetInTouch = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Automatically move to the next testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
    // eslint-disable-next-line no-use-before-define
  }, [currentTestimonial, handleNext]);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <Box
      sx={{
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        textAlign: "center",
        position: "relative",
        maxWidth: "100%", // Keep it within the width limits
      }}
    >
      {/* Heading Section */}
      <Stack component="section" justifyContent="center" alignItems="center">
        <Typography
          sx={{
            fontSize: isMobile ? 32 : 48,
            fontWeight: "bold",
          }}
        >
          Our Customers
        </Typography>
        <Divider
          sx={{
            borderColor: "#F42A40",
            width: isMobile ? "60%" : "35%",
          }}
        />
      </Stack>

      {/* Carousel Section */}
      <Box
        sx={{
          position: "relative",
          width: isMobile ? "100%" : "80%", // Adjust width based on device
          margin: "0 auto",
          overflow: "hidden", // Hide overflow for sliding effect
          paddingTop: theme.spacing(4),
        }}
      >
        {/* Testimonial Content */}
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentTestimonial * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                minWidth: "100%",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                alt={testimonial.name}
                src={testimonial.image}
                sx={{
                  width: isMobile ? "100%" : "35%",
                  borderRadius: 2,
                  marginRight: isMobile ? 0 : theme.spacing(4),
                  marginBottom: isMobile ? theme.spacing(2) : 0,
                }}
              />
              <Box
                sx={{
                  textAlign: isMobile ? "center" : "left",
                  maxWidth: "65%",
                }}
              >
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
        </Box>

        {/* Navigation Buttons */}
        <IconButton
          onClick={handlePrevious}
          sx={{
            position: "absolute",
            top: "50%",
            left: "-40px", // Positioned slightly outside the container
            transform: "translateY(-50%)",
            color: "#F42A40",
            backgroundColor: "white",
            boxShadow: 3,
            "&:hover": { backgroundColor: "lightgray" },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: "-40px",
            transform: "translateY(-50%)",
            color: "#F42A40",
            backgroundColor: "white",
            boxShadow: 3,
            "&:hover": { backgroundColor: "lightgray" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* Dots */}
      <Stack direction="row" justifyContent="center" spacing={1} mt={2}>
        {testimonials.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor:
                currentTestimonial === index ? "#F42A40" : "#C4C4C4",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default GetInTouch;
