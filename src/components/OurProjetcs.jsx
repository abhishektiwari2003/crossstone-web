import React from "react";
import {
  ImageList,
  ImageListItem,
  Divider,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import Project1 from "../assets/Project 1.jpeg";
import Project2 from "../assets/Project 2.jpeg";
import Project3 from "../assets/Project 3.jpeg";
import Project4 from "../assets/Project 4.jpeg";
import Project5 from "../assets/Project 5.jpeg";
import Project6 from "../assets/Project 6.jpeg";
import Project7 from "../assets/Project 7.jpeg";
import Project8 from "../assets/Project 8.jpeg";
import Project9 from "../assets/Project 9.jpeg";
import Project10 from "../assets/Project 10.jpeg";
import Project11 from "../assets/Project 11.jpeg";

const OurProjects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const RootStyle = styled("div")(({ theme }) => ({
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    textAlign: "center",
  }));

  const projectImages = [
    {
      img: Project1,
      customer: "Mr. Vishwanath",
      location: "Hospet",
      title: "Project 1",
    },
    {
      img: Project2,
      customer: "Mr. Surya",
      location: "Bangalore",
      title: "Project 2",
    },
    {
      img: Project3,
      customer: "Mr. Akash Patil",
      location: "Gadag",
      title: "Project 3",
    },
    {
      img: Project4,
      customer: "Sansera Murali",
      location: "Bangalore",
      title: "Project 4",
    },
    {
      img: Project5,
      customer: "Abhishek Patil",
      location: "Gadag",
      title: "Project 5",
    },
    {
      img: Project6,
      customer: "Mr. Tatanagouda",
      location: "Bangalore",
      title: "Project 6",
    },
    {
      img: Project7,
      customer: "Harish Tallai",
      location: "Gadag",
      title: "Project 7",
    },
    {
      img: Project8,
      customer: "Mr & Mrs Vadavadagi",
      location: "Kottur",
      title: "Project 8",
    },
    {
      img: Project9,
      customer: "Shivakumar Haveri",
      location: "Gadag",
      title: "Project 9",
    },
    {
      img: Project10,
      customer: "Sayed Koppal",
      location: "Gadag",
      title: "Project 10",
    },
    {
      img: Project11,
      customer: "Mr. Ashok",
      location: "Bangalore",
      title: "Project 11",
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
        <Typography sx={{ fontSize: isMobile ? 40 : 60, fontWeight: "bold" }}>
          Our Projects
        </Typography>
        <Divider
          sx={{
            borderColor: "#F42A40",
            width: isMobile ? "60%" : "35%",
            marginBottom: theme.spacing(5),
          }}
        />
      </Stack>

      <ImageList
        variant="masonry"
        cols={isMobile ? 2 : 3}
        gap={16}
        sx={{ padding: theme.spacing(0, 2) }}
      >
        {projectImages.map((project, index) => (
          <ImageListItem key={index} sx={{ position: "relative" }}>
            <img
              src={project.img}
              alt={project.title}
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
              loading="lazy"
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                bgcolor: "rgba(0, 0, 0, 0.6)",
                color: "white",
                padding: theme.spacing(1),
                textAlign: "center",
              }}
            >
              <Typography variant="body2" fontWeight="bold">
                {project.customer} - {project.location}
              </Typography>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </RootStyle>
  );
};

export default OurProjects;
