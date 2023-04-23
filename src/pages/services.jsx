import {
  Box,
  Checkbox,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import aboutImg from "../assets/services.png";
import ServicesCard, { ImgMediaCard } from "../components/Card";
import { StyledBoxFooter } from "../styled/Box";

function Services() {
  const languagesList = ["Javascript", "php", "python", "electron"];
  const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }

    // Case 2 : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }
  };

  return (
    <Container
      sx={{
        pt: 10,
        pb: 1,
        backgroundColor: "rgba(245,245,245,0.5)",
      }}
    >
      <Stack sx={{ textAlign: "center", gap: 8 }}>
        <Box
          component="img"
          src={aboutImg}
          sx={{ width: "16%", position: "absolute" }}
        ></Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Technician services
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {" "}
          What is your Services for Helper ?
        </Typography>
      </Stack>
      <Divider sx={{ pt: 8 }} />
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", mt: 3, mb: 3 }}
      >
       
          <Box
            sx={{
              border: "1px solid lightgray",
              width: "30%",

              borderRadius: "5px"
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(230,230,230,0.8)",
                p: 1,
                px: 2,
                mb: 1,
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                Filter
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                type="checkbox"
                name="languages"
                value="All"
                id="flexCheckDefault"
                onChange={handleChange}
              />
              <Typography>All</Typography>
            </Box>
            {languagesList.map((lang, id) => {
              return (
                <Box key={id} sx={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    type="checkbox"
                    name="languages"
                    value={lang}
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <Typography>{lang}</Typography>
                </Box>
              );
            })}
          </Box>
    
        <Grid container spacing={2} sx={{ px: 2 }}>
          {userinfo.response.map((res, id) => {
            return (
              <Grid key={id} item xs={4}>
                <ServicesCard onChange={handleChange} title={res} />
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Container>
  );
}

export default Services;
