import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import aboutImg from "../assets/about.png";
import serviceImg from "../assets/service.png";
import { StyledBoxFooter } from "../styled/Box";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { theme } from "../theme";

const About = () => {
  return (
    <Container
      sx={{
        pt: 10,
        backgroundColor: "rgba(245,245,245,0.5)",
      }}
    >
      <Stack sx={{ textAlign: "center", gap: 8 }}>
        <Box
          component="img"
          src={aboutImg}
          sx={{ width: "12%", position: "absolute" }}
        ></Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          who are we?
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {" "}
          What is your Helper ?
        </Typography>

        <Typography sx={{ lineHeight: 2 }}>
          Helper is the best way to complete all your household chores! If you
          are looking for a highly skilled technician, electrician or plumber to
          solve your electrical or plumbing problems, the Baitak application is
          the best! We also provide you with air conditioning maintenance
          services, including cleaning any air conditioner, whether split air
          conditioner or central air conditioner, paints and wallpaper,
          carpentry, installing IKEA furniture, installing paintings, curtains
          (curtains), TV and mirrors, cleaning the house, controlling insects,
          cockroaches and pests, insulation Roofs to prevent water leakage,
          cleaning tanks or even moving furniture and more, the application of
          your home at your convenience!
        </Typography>
      </Stack>
      <Box sx={{ display: "flex", alignItems: "center", pt: 3 }}>
        <PlayArrowIcon sx={{ color: `${theme.palette.primary.main}`, pr: 1 }} />
        <StyledBoxFooter> What is your Helper ?</StyledBoxFooter>
      </Box>

      <Typography sx={{ lineHeight: 2, pt: 2 }}>
        Helper allows you to request maintenance and care services for your home
        from the best service professionals in your area, to choose the most
        suitable one to serve you based on an evaluation system and reviews for
        each service professional, an immediate reservation system, and a
        guarantee on services, at the best prices and offers.
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", pt: 3 }}>
        <PlayArrowIcon sx={{ color: `${theme.palette.primary.main}`, pr: 1 }} />
        <StyledBoxFooter> What distinguishes your Helper?</StyledBoxFooter>
      </Box>

      <Box
        component="img"
        src={serviceImg}
        sx={{ position: "absolute", right: 50, width: "13%" }}
      />
      <Typography sx={{ lineHeight: 2, pb: 3 }}>
        <Box component="ul" sx={{ width: "90%" }}>
          <Box component="li">
            The best service professionals in your city to choose the most
            suitable one to serve you based on an evaluation and review system
            for each service provider.
          </Box>
          <Box component="li">Awesome prices and permanent offers.</Box>
          <Box component="li">
            Warranty up to 30 days (one month) on services.
          </Box>
          <Box component="li">
            Flexible and easy instant booking system. Choose the time that suits
            you and preach what serves you.
          </Box>
        </Box>
      </Typography>
    </Container>
  );
};

export default About;
