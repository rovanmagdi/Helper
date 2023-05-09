import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import backgroundImg from "../../assets/home-back.svg";
import heroImg from "../../assets/hero.png";
import { theme } from "../../theme";
import { StyledButton } from "../../styled/Button";
import { useNavigate } from "react-router";
import { FormDialogError } from "../Pop";

const Header = () => {
  const token = JSON.parse(localStorage.getItem("user"))?.token;

  const nagivate = useNavigate();
  const handleClick = () => {
    nagivate("/Services");
  };
  return (
    <Stack
      sx={{
        backgroundImage: `url(${backgroundImg})`,
        height: "100vh",
        alignItems: "center",
        ml: 5,
        justifyContent: "space-around",
        // flexWrap:"wrap",
        "@media(max-width: 991px)": {
          flexDirection: "column-reverse",
        },
      }}
      direction="row"
    >
      <Box
        sx={{
          ml: 2,
          "@media(max-width: 900px)": {
            marginLeft: 0,
            maxWidth: "70%",
          },
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{ color: `${theme.palette.primary.main}`, fontWeight: "bold" }}
        >
          Maintenance services
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Rely on us and request maintenance services through qualified and
          reliable maintenance technicians
        </Typography>
        {token ? (
          <StyledButton sx={{ mt: 2 }} onClick={handleClick}>
            Order now{" "}
          </StyledButton>
        ) : (
          <>
            <FormDialogError
              title={<StyledButton sx={{ m: 3 }}>Order now</StyledButton>}
            />
          </>
        )}
      </Box>
      <Box
        component="img"
        src={heroImg}
        // height="50%"
        sx={{
          maxWidth: "60%",

          "@media(max-width: 1091px)": {
            marginLeft: 0,
            maxWidth: "50%",
          },
          "@media(max-width: 991px)": {
            marginLeft: 0,
            maxWidth: "80%",
          },
          "@media(max-width: 600px)": {
            marginLeft: 0,
            maxWidth: "100%",
          },
        }}
      />
    </Stack>
  );
};

export default Header;
