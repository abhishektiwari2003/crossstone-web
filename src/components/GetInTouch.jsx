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
  }, [currentTestimonial]);

  // Function to navigate to the next testimonial
  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  // Function to navigate to the previous testimonial
  const handlePrevious = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Function to go to a specific testimonial when a dot is clicked
  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <Box
      sx={{
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(15),
        textAlign: "center",
        position: "relative", // For positioning arrows
        overflow: "visible", // Ensure arrows are visible
      }}
    >
      {/* Heading Section */}
      <Stack component="section" justifyContent="center" alignItems="center">
        <Typography
          sx={{
            fontSize: isMobile ? 40 : 60,
            fontWeight: "bold",
            textAlign: "center",
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
          width: isMobile ? "100%" : "744px",
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        {/* Testimonial Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            padding: theme.spacing(2),
            boxShadow: 3,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          <Box
            component="img"
            alt={testimonials[currentTestimonial].name}
            src={testimonials[currentTestimonial].image}
            sx={{
              width: isMobile ? "100%" : "40%",
              height: "auto",
              borderRadius: 2,
              marginRight: isMobile ? 0 : theme.spacing(2),
              marginBottom: isMobile ? theme.spacing(2) : 0,
            }}
          />
          <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
            <Typography
              sx={{
                fontSize: isMobile ? 16 : 18,
                fontWeight: "medium",
              }}
            >
              {testimonials[currentTestimonial].feedback}
            </Typography>
            <Typography
              sx={{
                fontSize: isMobile ? 16 : 18,
                fontWeight: "medium",
                color: "#F42A40",
                mt: isMobile ? 2 : 4,
              }}
            >
              - {testimonials[currentTestimonial].name} (
              {testimonials[currentTestimonial].location})
            </Typography>
          </Box>
        </Box>

        {/* Navigation Buttons */}
        <IconButton
          onClick={handlePrevious}
          sx={{
            position: "absolute",
            top: "50%",
            left: "-50px", // Move arrow outside
            transform: "translateY(-50%)",
            color: "#F42A40",
            backgroundColor: "white",
            boxShadow: 3,
            zIndex: 10, // Ensure visibility
            "&:hover": {
              backgroundColor: "lightgray", // Make it more visible on hover
            },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: "-50px", // Move arrow outside
            transform: "translateY(-50%)",
            color: "#F42A40",
            backgroundColor: "white",
            boxShadow: 3,
            zIndex: 10, // Ensure visibility
            "&:hover": {
              backgroundColor: "lightgray", // Make it more visible on hover
            },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* Dots for Carousel */}
      <Stack direction="row" justifyContent="center" spacing={1} mt={2}>
        {testimonials.map((_, index) => (
          <Box
            key={index}
            onClick={() => goToTestimonial(index)}
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
