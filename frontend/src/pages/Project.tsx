import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { proj } from "../components/content/Project";

const Project = () => {
  const projectList = proj.map((project, id) => (
    <a
      href={project.link ? project.link : project.web}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Box
        sx={{
          backgroundColor: "#ffff",
          width: "270px",
          minHeight: "200px",
          borderRadius: "5px",
          boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.25)",
          marginBottom: "20px",
          padding: "5px",
          position: "relative",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 3px 10px 0px rgba(10, 50, 80, 0.25)",
            cursor: "pointer",
          },
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ marginLeft: "20px", marginTop: "10px" }}
        >
          {project.name}
        </Typography>
        <Typography variant="body1" sx={{ marginLeft: "20px" }}>
          desc
        </Typography>
        <Box
          sx={{
            backgroundColor: "#F6F4FF",
            width: "50px",
            minHeight: "20px",
            borderRadius: "5px",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
          key={project.id}
        >
          <Typography variant="body1" textAlign="center">
            {project.type}
          </Typography>
        </Box>
        <Typography
          color="#EF5DA8"
          sx={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            textDecoration: "none",
          }}
        >
          {project.link ? "Github" : "Web"}
        </Typography>
      </Box>
    </a>
  ));
  return (
    <Container>
      <Typography
        variant="h3"
        textAlign="center"
        sx={{
          fontSize: { xs: "1.7rem", md: "2.5rem" },
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Project✨
      </Typography>
      <Stack
        sx={{
          flexWrap: { xs: "wrap" },
          display: { xs: "flex" },
          flexDirection: { xs: "row" },
          gap: "30px",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {projectList}
      </Stack>
    </Container>
  );
};

export default Project;
