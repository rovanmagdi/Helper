import {
  Box,
  Checkbox,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import aboutImg from "../assets/services.png";
import ServicesCard, { ImgMediaCard } from "../components/Card";
import { StyledBoxFooter } from "../styled/Box";
import Api from "../Api/Api";

function Services() {
  const [specialities, setSpecialities] = useState([

  ])
  const [services, setServices] = useState([]);
  const [checked,setChecked]=useState("")



 
  

  const [toCheck, setToCheck] = useState({});
  const filterProducts = (value) =>
  setToCheck((prev) => {
    return { ...prev, [value]: !!!prev[value] };
  });




  const token = JSON.parse(localStorage.getItem("user")).token;

  useEffect(() => {
    Api.get(`/specialists_with_speciality`, {
      headers: { Authorization: `Bearer ${token}` },

    })
      .then((response) => {
        console.log(response.data.specialists);

        setServices(response.data.specialists )

      })
      .catch((e) => {
        console.log(e.response.data.message);
      });

    Api.get("/specialities")
      .then((response) => {
        console.log(response.data);
        setSpecialities(response.data);
      })
      .catch((e) => {
        console.log(e.response.data.message);
        // ErrorFun(e.response.data.message);
      });
  }, [token])
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
            position: "sticky",
            zIndex: 2,
            maxHeight: "calc(100vh - 172px)"

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
              // onChange={handleChange}
            />
            <Typography>All</Typography>
          </Box>
          {specialities?.map((lang, id) => {
            return (
              <Box key={id} sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox
                  type="checkbox"
                  name="languages"
                  // value={lang.name}
                  id="flexCheckDefault"
                  onChange={(e) => filterProducts(e.target.value)}
                />
                <Typography>{lang.name}</Typography>
              </Box>
            );
          })}
        </Box>
        <Grid container spacing={2} sx={{ px: 2 }}>
          {services
          .filter((prod) =>
            Object.keys(toCheck).length === 0 ? true : !!toCheck[prod.speciality?.name]
          )?.map((res, id) => {
          //  console.log(filteredProducts);
            return (
              <Grid key={id} item xs={4}>
               
                <ServicesCard 
                
                title={res.name}
                  area={res.areas?.name}
                  city={res.cities?.name}
                  job={res.speciality?.name}
                  imgJob={res.speciality?.image_path} 
                />
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Container>
  );
}

export default Services;
