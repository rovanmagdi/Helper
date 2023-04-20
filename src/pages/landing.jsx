import React from "react";
import Header from "../components/Landing/Header";
import { Box } from "@mui/material";
import Carousal from "../components/Landing/Carousel";
import { StyledTypographyTitle } from "../styled/Typography";
import AboutLanding from "../components/Landing/About";
import BlogLanding from "../components/Landing/Blog";
import Footer from "../components/Footer";
import Contact from "../components/Landing/Contact";
const Landing = () => {
  return (
    <>
      <Header />
      <Box sx={{ marginBottom: "50px" }}>
        <StyledTypographyTitle variant="h5" sx={{m:5}}>
          Choose Service Now{" "}
        </StyledTypographyTitle>
        <Carousal />
      </Box>
      <AboutLanding/>
      <BlogLanding/>
      <Contact/>
    <Footer/>
    </>
  );
};

export default Landing;
