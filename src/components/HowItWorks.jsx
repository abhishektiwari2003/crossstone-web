import React from "react";
import {
  Box,
  Divider,
  Stack,
  Step,
  StepLabel,
  Stepper,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import phone_mockup from "../assets/phone_mockup.svg";

const HowItWorks = () => {
  const theme = useTheme();

  const RootStyle = styled("div")(({ theme }) => ({
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
  }));

  const steps = [
    "Raise a Request",
    "Meet our Expert",
    "Book with Us",
    "Track and Transact",
    "Settle In",
  ];

  const StepIcon = styled("div")(({ active }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: "50%",
    backgroundColor: active ? "#FFFFFF" : "#FFFFFF",
    border: `2px solid ${active ? "#F42A40" : "#000000"}`,
    color: active ? "#F42A40" : "#000000",
    fontSize: 40,
    fontWeight: "bold",
  }));

  return (
    <RootStyle>
      <Stack
        component="section"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography sx={{ fontSize: 60, fontWeight: "bold" }}>
          How It Works
        </Typography>
        <Divider sx={{ borderColor: "#F42A40", width: "45%" }} />
        <Typography
          sx={{ fontSize: 16, fontWeight: "medium", color: "#000000", mt: 4 }}
        >
          Our house construction steps are simple and easy to understand
        </Typography>
        <Typography
          sx={{ color: "#F42A40", fontSize: 18, fontWeight: "bold", mb: 8 }}
        >
          Plan - Build - Track - Settle in
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={0} alternativeLabel>
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
      <Stack
        direction="row"
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        <img src={phone_mockup} alt="Phone Mockup" style={{ width: "100%" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 3,
            borderRadius: 2,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            width: "100%",
          }}
        >
          <Typography
            sx={{ color: "#F42A40", fontSize: 16, fontWeight: "bold", mb: 1 }}
          >
            01 Raise a Request
          </Typography>
          <Typography sx={{ fontSize: 14, color: "#000000", mb: 2 }}>
            Raise a house construction service request or call us at +91 7505
            205 205. Our team will get in touch with you to understand your
            requirements in more detail.
          </Typography>
          <Typography
            sx={{ color: "#F42A40", fontSize: 16, fontWeight: "bold" }}
          >
            Let’s Build!
          </Typography>
        </Box>
      </Stack>
    </RootStyle>
  );
};

export default HowItWorks;
