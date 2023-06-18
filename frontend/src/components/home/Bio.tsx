import { Avatar, Box, Typography } from "@mui/material";
import "./bio.css";
import pic from "../../pic/fxh.jpg";
import React from "react";
const Bio = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
      }}
    >
      <Box sx={{ marginRight: "20px" }}>
        <Avatar
          alt="profile pic"
          src={pic}
          sx={{
            width: { xs: 200, md: 300 },
            height: { xs: 200, md: 300 },
            margin: "0 20px",
          }}
          className="bio"
        />
      </Box>

      <Box>
        <Typography
          variant="h3"
          sx={{
            marginBottom: "20px",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          Phurichaya Khemvaraporn (Fah)
        </Typography>
        <Typography variant="h6">
          “Currently I am a Sophomore of Computer Science student at SIT KMUTT.”
        </Typography>
      </Box>
    </Box>
  );
};

export default Bio;
