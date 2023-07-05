import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Box, Container } from "@mui/material";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import BackToTop from "./components/footer/BackToTop";
const App: React.FC = () => {
  // const [dark, setDark] = useState(false);
  // const theme = createTheme({
  //   palette: {
  //     mode: dark ? "dark" : "light",
  //   },
  //   typography: {
  //     fontFamily: `"Inter"`,
  //   },
  // });
  return (
    // <ThemeProvider theme={theme}>
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Container maxWidth="lg">
          <Box
            sx={{
              padding: "20px",
              display: "grid",
              gridTemplateRows: "auto 1fr auto",
            }}
          >
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <BackToTop/>
          </Box>
        </Container>
        <Footer />
      </div>
    </BrowserRouter>

    // </ThemeProvider>
  );
};
export default App;
