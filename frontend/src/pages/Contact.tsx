import { Box, Container, Typography } from "@mui/material";
import React from "react";
import {
  faGithub,
  faLinkedin,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface MyContact {
  icon: IconDefinition;
  label: string;
  link: string;
}
const contact: MyContact[] = [
  {
    icon: faEnvelope,
    label: "phurichayakhem1@gmail.com",
    link: "mailto: phurichayakhem1@gmail.com",
  },
  {
    icon: faGithub,
    label: "@fxhPhxrxchxyx",
    link: "https://github.com/fxhPhxrxchxyx",
  },
  {
    icon: faLinkedin,
    label: "Phurichaya Khemvaraporn",
    link: "https://www.linkedin.com/in/fxhphu/",
  },
];
const Contact = () => {
  const contactList = contact.map((contact) => {
    return (
      <a href={contact.link} target="_blank">
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            lineHeight: 1,
            transition: "color 0.2s ease-in-out",
            "&:hover": {
              opacity: 1,
              color: "#EF5DA8",
            },
          }}
        >
          <Box
            sx={{
              width: { xs: "270px", md: "330px" },
              display: "flex",
              alignItems: "center",
              border: "1px solid black",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <FontAwesomeIcon icon={contact.icon} size="2x"></FontAwesomeIcon>
            <Typography
              sx={{ fontSize: { xs: "15px", md: "20px" }, marginLeft: "10px" }}
            >
              {contact.label}
            </Typography>
          </Box>
        </Typography>
      </a>
    );
  });
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "70vh",
      }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        sx={{
          fontSize: { xs: "1.7rem", md: "2.5rem" },
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Contact me via
      </Typography>

      <Box
        sx={{
          alignItems: "center",
          gap: "15px",
          borderRadius: "50%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {contactList}
      </Box>
    </Container>
  );
};

export default Contact;
