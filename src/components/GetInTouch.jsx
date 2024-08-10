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
import testimonial from "../assets/testimonial.svg";

const GetInTouch = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const RootStyle = styled("div")(({ theme }) => ({
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    textAlign: isMobile ? "center" : "left", // Center content on mobile
    overflowX: "hidden",
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
            fontSize: isMobile ? 40 : 60, // Responsive font size
            fontWeight: "bold",
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
        {[...Array(2)].map((_, index) => (
          <Grid
            container
            spacing={isMobile ? 1 : 2} // Adjust spacing for mobile
            alignItems="center"
            justifyContent="center"
            key={index}
            direction={isMobile ? "column" : "row"} // Stack items on mobile
          >
            <Grid item>
              <Box
                component="img"
                alt="testimonial"
                src={testimonial}
                sx={{
                  width: isMobile ? "80%" : "auto", // Responsive image size
                  marginBottom: isMobile ? 2 : 0, // Space between image and text on mobile
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  fontSize: isMobile ? 16 : 18, // Responsive font size
                  fontWeight: "medium",
                  textAlign: isMobile ? "center" : "left", // Center text on mobile
                }}
              >
                Our experience with Crossstone was pleasurable <br /> because of
                the project managers. The work got done <br /> before 45 days
                just the way we wanted it to be.
              </Typography>
              <Typography
                sx={{
                  fontSize: isMobile ? 16 : 18, // Responsive font size
                  fontWeight: "medium",
                  color: "#F42A40",
                  mt: isMobile ? 2 : 4, // Adjust margin-top for mobile
                  textAlign: isMobile ? "center" : "left", // Center text on mobile
                }}
              >
                -Swati and Gaurav
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Stack>
    </RootStyle>
  );
};

export default GetInTouch;
