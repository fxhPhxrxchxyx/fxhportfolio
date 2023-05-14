import React, { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
const App: React.FC = () => {
  const [dark, setDark] = useState(false);
  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
    typography: {
      fontFamily: `"Inter"`,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar setDark={setDark} />

        <Box
          sx={{
            backgroundColor:
              theme.palette.mode === "light" ? "#ffff" : "#4d4d4d",
            minHeight: "100vh",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
