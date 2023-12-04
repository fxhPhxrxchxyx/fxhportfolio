import React from "react";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { experience, activity } from "../components/content/Experience";
import Bio from "../components/home/Bio";

const About = () => {
  const experienceList = experience.map((experience, id) => (
    <Box sx={{ marginBottom: "30px" }} key={experience.id}>
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" }, fontWeight: "bold" }}
      >
        {experience.project}
      </Typography>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" }, gap: "10px" }}>
        <Typography variant="h6" sx={{ color: "#EF5DA8" }}>
          {experience.position}
        </Typography>
        <Typography variant="h6" sx={{ color: "#BEDCFF" }}>
          {experience.time}
        </Typography>
      </Stack>
      <Typography variant="h6">{experience.description}</Typography>
    </Box>
  ));

  const activityList = activity.map((activity, id) => (
    <Box sx={{ marginBottom: "30px" }} key={activity.id}>
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" }, fontWeight: "bold" }}
      >
        {activity.project}
      </Typography>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" }, gap: "10px" }}>
        <Typography variant="h6" sx={{ color: "#EF5DA8" }}>
          {activity.position}
        </Typography>
        <Typography variant="h6" sx={{ color: "#BEDCFF" }}>
          {activity.time}
        </Typography>
      </Stack>
      <Typography variant="h6">{activity.description}</Typography>
    </Box>
  ));

  return (
    <Container>
      <Bio position={true} />
      <Divider sx={{ margin: "10px 0" }} />
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "2.5rem", md: "3rem" },
          fontWeight: "bold",
          marginBottom: "20px",
          marginTop: "30px",
        }}
      >
        Experience 💻
      </Typography>
      {experienceList}
      <Divider sx={{ margin: "40px 0" }} />
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "2.5rem", md: "3rem" },
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Activity 🎞️
      </Typography>
      {activityList}
    </Container>
  );
};

export default About;
