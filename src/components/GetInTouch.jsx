import React from "react";
import { Box, Divider, Grid, Stack, styled, Typography } from "@mui/material";
import testimonial from "../assets/testimonial.svg";

const GetInTouch = () => {
  const RootStyle = styled("div")(({ theme }) => ({
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
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
          Our Customers
        </Typography>
        <Divider sx={{ borderColor: "#F42A40", width: "35%" }} />
      </Stack>
      <Stack
        spacing={5}
        direction="column"
        justifyContent="center"
        alignItems="center"
        mt={5}
      >
        {[...Array(2)].map((_, index) => (
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            key={index}
          >
            <Grid item>
              <Box component="img" alt="testimonial" src={testimonial} />
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: 18, fontWeight: "medium" }}>
                Our experience with Crossstone was pleasurable <br /> because of
                the project managers. The work got done <br /> before 45 days
                just the way we wanted it to be.
              </Typography>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: "medium",
                  color: "#F42A40",
                  mt: 4,
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
