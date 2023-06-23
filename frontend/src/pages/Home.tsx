import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Bio from "../components/home/Bio";
import {
  language,
  frontD,
  back,
  mobile,
  database,
  infra,
  other,
} from "../components/content/Skill";

const Home = () => {
  const languageList = language.map((language, id) => (
    <Box
      sx={{
        backgroundColor: "#F7FFEC",
        width: "142px",
        minHeight: "41px",
        borderRadius: "5px",
        boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.25)",
        marginBottom: "20px",
        padding: "5px",
      }}
      key={language.id}
    >
      <Typography textAlign="center" sx={{ marginTop: "5px" }}>
        {language.name}
      </Typography>
    </Box>
  ));
  const frontDList = frontD.map((frontD, id) => (
    <Box
      sx={{
        backgroundColor: "#E8F2FF",
        width: "142px",
        minHeight: "41px",
        borderRadius: "5px",
        boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.25)",
        marginBottom: "20px",
        padding: "5px",
      }}
      key={frontD.id}
    >
      <Typography textAlign="center" sx={{ marginTop: "5px" }}>
        {frontD.name}
      </Typography>
    </Box>
  ));
  const backList = back.map((back, id) => (
    <Box
      sx={{
        backgroundColor: "#FFEDED",
        width: "142px",
        minHeight: "41px",
        borderRadius: "5px",
        boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.25)",
        marginBottom: "20px",
        padding: "5px",
      }}
      key={back.id}
    >
      <Typography textAlign="center" sx={{ marginTop: "5px" }}>
        {back.name}
      </Typography>
    </Box>
  ));
  const mobileList = mobile.map((mobile, id) => (
    <Box
      sx={{
        backgroundColor: "#F6F4FF",
        width: "142px",
        minHeight: "41px",
        borderRadius: "5px",
        boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.25)",
        marginBottom: "20px",
        padding: "5px",
      }}
      key={mobile.id}
    >
      <Typography textAlign="center" sx={{ marginTop: "5px" }}>
        {mobile.name}
      </Typography>
    </Box>
  ));
  const databaseList = database.map((database, id) => (
    <Box
      sx={{
        backgroundColor: "#FCDDEC",
        width: "142px",
        minHeight: "41px",
        borderRadius: "5px",
        boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.25)",
        marginBottom: "20px",
        padding: "5px",
      }}
      key={database.id}
    >
      <Typography textAlign="center" sx={{ marginTop: "5px" }}>
        {database.name}
      </Typography>
    </Box>
  ));
  const infraList = infra.map((infra, id) => (
    <Box
      sx={{
        backgroundColor: "#EFFF",
        width: "142px",
        minHeight: "41px",
        borderRadius: "5px",
        boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.25)",
        marginBottom: "20px",
      }}
      key={infra.id}
    >
      <Typography textAlign="center" sx={{ marginTop: "5px" }}>
        {infra.name}
      </Typography>
    </Box>
  ));
  const othersList = other.map((other, id) => (
    <Box
      sx={{
        backgroundColor: "#FFF",
        width: "142px",
        minHeight: "41px",
        borderRadius: "5px",
        boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.25)",
        marginBottom: "20px",
        padding: "5px",
      }}
      key={other.id}
    >
      <Typography textAlign="center" sx={{ marginTop: "5px" }}>
        {other.name}
      </Typography>
    </Box>
  ));
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
        Skills🌟
      </Typography>
      <Stack
        sx={{
          flexWrap: { xs: "wrap" },
          display: { xs: "flex", md: "grid" },
          flexDirection: { xs: "row" },
          gap: { xs: "20px" },
          gridTemplateColumns: "25% 25% 25% 25%",
        }}
      >
        <Stack>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.2rem", md: "2rem" },
              marginBottom: "10px",
            }}
          >
            Language
          </Typography>
          {languageList}
        </Stack>
        <Stack>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.2rem", md: "2rem" },
              marginBottom: "10px",
            }}
          >
            Front-end
          </Typography>
          {frontDList}
        </Stack>
        <Stack>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.2rem", md: "2rem" },
              marginBottom: "10px",
            }}
          >
            Back-end
          </Typography>
          {backList}
        </Stack>
        <Stack>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.2rem", md: "2rem" },
              marginBottom: "10px",
            }}
          >
            Mobile
          </Typography>
          {mobileList}
        </Stack>
        <Stack>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.2rem", md: "2rem" },
              marginBottom: "10px",
            }}
          >
            Databese
          </Typography>
          {databaseList}
        </Stack>
        <Stack>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.2rem", md: "2rem" },
              marginBottom: "10px",
            }}
          >
            Infra
          </Typography>
          {infraList}
        </Stack>
        <Stack>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.2rem", md: "2rem" },
              marginBottom: "10px",
            }}
          >
            Others
          </Typography>
          {othersList}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Home;
