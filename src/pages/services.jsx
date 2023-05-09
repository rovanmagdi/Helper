import {
  Box,
  Checkbox,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import aboutImg from "../assets/services.png";
import ServicesCard, { ImgMediaCard } from "../components/Card";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Empty from "../assets/empty-cart.svg";
import Api from "../Api/Api";
import { useNavigate } from "react-router";
import { Loading } from "../components/Loading";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Stack>{children}</Stack>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Services() {
  const token = JSON.parse(localStorage.getItem("user")).token;
  const [specialities, setSpecialities] = useState([]);
  const [services, setServices] = useState([]);
  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  useEffect(() => {
    Api.get(`/specialists_with_speciality`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log(response.data.specialists);
        setLoading(false)
        setServices(response.data.specialists);
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
  }, [token]);

  const [serviceTab, setServiceTab] = useState([]);

  const handleClick = (e) => {
    let serviceType = services.filter((a) => a.speciality.name == e);


    setServiceTab(serviceType);

    // console.log(serviceType);
  };
  const nagivate = useNavigate();
  const handleRoute = (id) => {
    // console.log(id);

    nagivate(`/Profile_details/${id}`);
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
        <Grid container spacing={2} sx={{ px: 2 }}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="All" {...a11yProps(0)} />
                {specialities.map((a, index) => {
                  return (
                    <Tab
                      key={index}
                      label={a.name}
                      {...a11yProps(a.id)}
                      onClick={() => handleClick(a.name)}
                    />
                  );
                })}
              </Tabs>
            </Box>

            <Grid container spacing={2}>
            {!loading?(<>
                 
                  {services?.map((res, index) => {
                    return (
                      <Grid item xs={4} key={index}>
                        <TabPanel value={value} index={0}>
                          <ServicesCard
                            click={() => handleRoute(res.id)}
                            title={res.name}
                            area={res.areas?.name}
                            city={res.cities?.name}
                            job={res.speciality?.name}
                            imgJob={res.speciality?.image_path}
                            rate={res.specialist_rates.length}
                          />
                        </TabPanel>
                      </Grid>
                    );
                  })}
                </>):(<><Loading/></>)}
                
             
            </Grid>
            <Stack direction="row">
              {/* { serviceTab.length<=1 && services.length>=1 ? ( */}
                 <> 
                  {console.log("3=>", services.length)}
                  {console.log("4=>", serviceTab.length)}
                  {console.log(services.length >= 1 && serviceTab.length >= 1)
                  }

                  {serviceTab?.map((res, index) => {
                    return (
                      <TabPanel value={value} index={value} key={index}>
                        <ServicesCard
                          click={() => handleRoute(res.id)}
                          title={res.name}
                          area={res.areas?.name}
                          city={res.cities?.name}
                          job={res.speciality?.name}
                          imgJob={res.speciality?.image_path}
                        />
                      </TabPanel>
                    );
                  })}</>
                {/* ):(<><Box component="img" src={Empty}/></>)} */
                }
              
            </Stack>
          </Box>
        </Grid>
      </Stack>
    </Container>
  );
}

export default Services;
