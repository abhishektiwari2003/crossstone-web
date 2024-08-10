import React from "react";
import { Divider, Stack, styled, Typography, Grid } from "@mui/material";
import Project1 from "../assets/Project1.svg";
import Project2 from "../assets/Project2.svg";
import Project3 from "../assets/Project3.svg";

const OurProjects = () => {
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
          Our Projects
        </Typography>
        <Divider sx={{ borderColor: "#F42A40", width: "35%" }} />
      </Stack>
      <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 5 }}>
        <Grid item xs={12} sm={8} md={4}>
          <img src={Project1} alt="Project 1" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <img src={Project2} alt="Project 2" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <img src={Project3} alt="Project 3" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </RootStyle>
  );
};

export default OurProjects;
