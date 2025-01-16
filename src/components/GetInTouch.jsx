import React from "react";
import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  styled,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import sushmitacustomer from "../assets/sushmitacustomer.jpeg";
import abhishekcustomer from "../assets/abhishekcustomer.jpeg";
import akashcustomer from "../assets/akashcustomer.jpg";

// Styled components for Swiper
const StyledSwiper = styled(Swiper)`
  .swiper-slide {
    opacity: 0 !important;
    transition: opacity 0.3s ease;
  }

  .swiper-slide-active {
    opacity: 1 !important;
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-color: white;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      background-color: #f5f5f5;
      transform: scale(1.1);
    }

    &::after {
      font-size: 24px !important;
      color: #f42a40;
    }
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #f42a40;
    opacity: 0.7;
    transition: all 0.3s ease;

    &-active {
      opacity: 1;
      transform: scale(1.3);
    }
  }
`;

const GetInTouch = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const testimonials = [
    {
      image: sushmitacustomer,
      name: "Somashekar & Sushmitha",
      location: "Hubli",
      feedback:
        "Crossstone Consulting Engineers delivered exceptional construction services. Their professionalism, attention to detail, and timely execution exceeded our expectations. Highly recommended!",
    },
    {
      image: abhishekcustomer,
      name: "Akshata & Abhishek",
      location: "Gadag",
      feedback:
        "Crossstone Consulting Engineers delivered exceptional interior design services, blending creativity with functionality. Their attention to detail and commitment made the entire process seamless.",
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
    <Box
      sx={{
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        textAlign: "center",
        position: "relative",
        maxWidth: "100%",
      }}
    >
      <Stack component="section" justifyContent="center" alignItems="center">
        <Typography sx={{ fontSize: isMobile ? 32 : 48, fontWeight: "bold" }}>
          Our Customers
        </Typography>
        <Divider sx={{ borderColor: "#F42A40", width: "50%", mb: 5 }} />
      </Stack>

      <Box sx={{ width: "90%", margin: "0 auto" }}>
        <StyledSwiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="fade"
          loop
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 4,
                  backgroundColor: "white",
                  borderRadius: 2,
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box
                  component="img"
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{
                    width: "100%",
                    maxWidth: 300,
                    height: "auto",
                    borderRadius: 2,
                    objectFit: "contain",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: 18,
                    mt: 3,
                    fontStyle: "italic",
                    color: "#666",
                  }}
                >
                  {testimonial.feedback}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#F42A40",
                    mt: 2,
                  }}
                >
                  {testimonial.name}
                </Typography>
                <Typography sx={{ fontSize: 16, color: "#666" }}>
                  {testimonial.location}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </Box>
    </Box>
  );
};

export default GetInTouch;
