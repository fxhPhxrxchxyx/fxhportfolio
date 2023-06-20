import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Bio from "../components/home/Bio";

const Home = () => {
  return (
    <Box>
      <Bio />
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "1.5rem", md: "2.5rem" },
          margin: "30px 0",
        }}
      >
        Skills
      </Typography>
    </Box>
  );
};

export default Home;
