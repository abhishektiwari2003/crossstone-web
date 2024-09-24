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
    { img: Project1, title: "Project 1" },
    { img: Project2, title: "Project 2" },
    { img: Project3, title: "Project 3" },
    { img: Project4, title: "Project 4" },
    { img: Project5, title: "Project 5" },
    { img: Project6, title: "Project 6" },
    { img: Project7, title: "Project 7" },
    { img: Project8, title: "Project 8" },
    { img: Project9, title: "Project 9" },
    { img: Project10, title: "Project 10" },
    { img: Project11, title: "Project 11" },
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
          <ImageListItem key={index}>
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
            {/* <Typography
              variant="body2"
              sx={{ mt: 1, textAlign: "center", fontWeight: "medium" }}
            >
              {project.title}
            </Typography> */}
          </ImageListItem>
        ))}
      </ImageList>
    </RootStyle>
  );
};

export default OurProjects;
