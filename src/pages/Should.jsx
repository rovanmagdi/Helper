import { Box, Container } from "@mui/material";
import React from "react";
import ShouldImg from "../assets/Should.png";
import { StyledButton } from "../styled/Button";
import { useNavigate } from "react-router";

export const Should = () => {

    const nagivate=useNavigate()
    
    const handleClick=()=>
    {
        nagivate('/Log_in')
    }
  return (
    <Container
      sx={{
        pt: 10,
        pb: 1,
        backgroundColor: "rgba(245,245,245,0.5)",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box component="img" src={ShouldImg} sx={{ width: "500px" }} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" ,m:2}}>
        <StyledButton onClick={handleClick}>Login</StyledButton>
      </Box>
    </Container>
  );
};
