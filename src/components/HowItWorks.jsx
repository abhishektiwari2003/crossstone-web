import React from "react";
import {
  Box,
  Divider,
  Grid,
  Stack,
  Step,
  StepLabel,
  Stepper,
  styled,
  Typography,
  useTheme,
  StepConnector,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const HowItWorks = () => {
  const theme = useTheme();

  const RootStyle = styled("div")(({ theme }) => ({
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  }));

  const steps = [
    "Raise a Request",
    "Meet our Expert",
    "Book with Us",
    "Track and Transact",
    "Settle In",
  ];

  const slideContents = [
    {
      title: "01 Raise a Request",
      description:
        "Raise a house construction service request or call us at +91 7505 205 205. Our team will get in touch with you to understand your requirements in more detail.",
      footer: "Let’s Build!",
    },
    // Add more objects for other slides if needed.
  ];

  const StepIcon = styled("div")(({ active }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRadius: "50%",
    backgroundColor: active ? "#FFFFFF" : "#FFFFFF",
    border: "2px solid #F5F5F5",
    color: active ? "#F42A40" : "#000000",
    fontSize: 24,
    fontWeight: "bold",
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
      width: 40,
      height: 40,
      fontSize: 20,
    },
  }));

  const CustomConnector = styled(StepConnector)(({ theme }) => ({
    "& .MuiStepConnector-line": {
      marginTop: "16px",
    },
  }));

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
            fontSize: 48,
            fontWeight: "bold",
            textAlign: "center",
            [theme.breakpoints.down("sm")]: {
              fontSize: 32,
            },
          }}
        >
          How It Works
        </Typography>
        <Divider
          sx={{
            borderColor: "#F42A40",
            width: "45%",
            [theme.breakpoints.down("sm")]: {
              width: "70%",
            },
          }}
        />
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: "medium",
            color: "#000000",
            mt: 4,
            textAlign: "center",
          }}
        >
          Our house construction steps are simple and easy to understand
        </Typography>
        <Typography
          sx={{
            color: "#F42A40",
            fontSize: 18,
            fontWeight: "bold",
            mb: 8,
            textAlign: "center",
          }}
        >
          Plan - Build - Track - Settle in
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Stepper
            activeStep={0}
            alternativeLabel
            connector={<CustomConnector />}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  StepIconComponent={() => (
                    <StepIcon active={index === 0}>{index + 1}</StepIcon>
                  )}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Stack>
      <Box sx={{ mt: 4, width: "100%" }}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          style={{ paddingBottom: "50px" }}
        >
          {slideContents.map((content, index) => (
            <SwiperSlide key={index}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item xs={12} sm={10} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 3,
                      borderRadius: 2,
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                      boxSizing: "border-box",
                      height: "314px",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#F42A40",
                        fontSize: 16,
                        fontWeight: "bold",
                        mb: 1,
                      }}
                    >
                      {content.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 14,
                        color: "#000000",
                        mb: 2,
                        fontWeight: "bold",
                        lineHeight: 1.5,
                      }}
                    >
                      {content.description}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#F42A40",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      {content.footer}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </RootStyle>
  );
};

export default HowItWorks;
