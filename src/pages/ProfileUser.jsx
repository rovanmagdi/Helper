import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { theme } from "../theme/index";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import { OrderHistory } from "../components/OrderHistory";
import { Works } from "../components/Works";
import avatar from "../assets/avatar.png";

import { OrderIncome } from "../components/OrderIncome";
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export const ProfileUser = () => {
  const [value, setValue] = React.useState(0);
  // const [valueTab, setValueTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const user = JSON.parse(localStorage.getItem("user"));
  const [isEdit, setIsEdit] = useState(false);
  const [fullName, setFullName] = useState(user.user.name);
  const [phone, setPhone] = useState(user.user.phone);
  const [email, setEmail] = useState(user.user.email);


  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(
    "https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg"
  );

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        if (loading) {
          setLoading(false);
          // setImage(
          //     "https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg"
          // );
        }
      }, 1000);
    }
  }, [loading, setLoading]);


  return (
    <>

      <Container
        sx={{
          backgroundColor: "rgba(245,245,245,0.5)",
          pt: 10,
          pb: 1,

          position: "relative",
        }}
      >
        <Box
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", fontSize: "3rem", m: 3 }}
        >
          Profile
        </Box>
        <Divider />

        <Stack direction="row" justifyContent="">
          <Box sx={{ width: "40%" }}>
            <Box component="img" src={avatar} sx={{ width: "200px", mb: 3 }} />
         
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  display: isEdit === true ? "none" : "block",
                }}
              >
                {fullName}
              </Typography>
              <Typography
                sx={{
                  color: `${theme.palette.primary.main}`,
                  fontWeight: "bold",
                }}
              >
                {user?.user?.speciality?.name}
              </Typography>
              <TextField
                id="outlined-error"
                label="Name"
                defaultValue={user?.user?.name}
                sx={{ display: isEdit === true ? "block" : "none" }}
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
              />
              {user?.type === "user" || "admin" ? (
                <> </>
              ) : (
                <Typography
                  sx={{
                    color: `${theme.palette.primary.main}`,
                    fontWeight: "bold",
                  }}
                >
                  {user?.user.speciality.name}
                </Typography>
              )}
            </Box>
            <Box sx={{ m: 4, display: "flex", alignItems: "center" }}>
              <LocationOnIcon sx={{ color: "gray" }} />

              <Typography
                sx={{
                  fontWeight: "bold",
                  m: 1,
                  // display: isEdit === true ? "none" : "block",
                }}
              >
                {user?.user?.areas?.name}, {user?.user?.cities?.name}, Egypt
              </Typography>
            </Box>
          </Box>
        </Stack>

        <Box sx={{ width: "100%", mt: 2, mb: 4 }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label={<Box sx={{ textTransform: "capitalize" }}>About</Box>}
                {...a11yProps(0)}
                iconPosition="start"
                icon={<PersonOutlinedIcon />}
              />
              <Tab
                label={
                  <Box sx={{ textTransform: "capitalize" }}>Order History</Box>
                }
                {...a11yProps(1)}
                iconPosition="start"
                icon={<FeedbackOutlinedIcon />}
              />

              {user.user.type === "specialist" && [
                <Tab
                  label={<Box sx={{ textTransform: "capitalize" }}>Works</Box>}
                  {...a11yProps(2)}
                  iconPosition="start"
                  icon={<FeedbackOutlinedIcon />}
                />,
                <Tab
                  label={
                    <Box sx={{ textTransform: "capitalize" }}>
                      Incoming Orders
                    </Box>
                  }
                  {...a11yProps(3)}
                  iconPosition="start"
                  icon={<FeedbackOutlinedIcon />}
                />,
              ]}
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Box

            >
              <Typography sx={{
                fontWeight: "bold",
                fontSize: "40px",
                mr: 2,
                color: `${theme.palette.primary.main}`,
              }}>

                Personal Information

              </Typography>

            </Box>
            <Typography sx={{ fontSize: "0.8rem", color: "gray", width: "90%", mb: 2, mt: 1 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem non impedit aspernatur harum culpa saepe quidem ipsam. Aspernatur, at voluptate neque nulla eveniet natus laudantium aperiam corporis vitae distinctio molestias!
            </Typography>

            <Grid container spacing={2} sx={{ mt: 1, fontWeight: "bold" }}>
              <Grid item xs={2}>
                phone
              </Grid>
              <Grid item xs={10}>
                <Box
                  sx={{
                    color: `${theme.palette.primary.main}`,
                    display: isEdit === true ? "none" : "block",
                  }}
                >
                  {phone}
                </Box>
                <TextField
                  id="outlined-error"
                  label="Phone"
                  defaultValue={user.user.name}
                  sx={{ display: isEdit === true ? "block" : "none" }}
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 1, fontWeight: "bold" }}>
              <Grid item xs={2}>
                Address
              </Grid>

              <Grid item xs={10}>
                <TextField
                  id="outlined-error"
                  label="Address"
                  defaultValue={user.user.name}
                  sx={{ display: isEdit === true ? "block" : "none" }}
                // value=
                />
                <Box sx={{ display: isEdit === true ? "none" : "block" }}>
                  {user?.user?.areas?.name}, {user?.user?.cities?.name}, Egypt
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 1, fontWeight: "bold" }}>
              <Grid item xs={2}>
                Email
              </Grid>
              <Grid item xs={10}>
                <Box
                  sx={{
                    color: `${theme.palette.primary.main}`,
                    display: isEdit === true ? "none" : "block",
                  }}
                >
                  {email}
                </Box>
                <TextField
                  id="outlined-error"
                  label="Email"
                  defaultValue={user.user.email}
                  sx={{ display: isEdit === true ? "block" : "none" }}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
            </Grid>

          </TabPanel>
          <TabPanel value={value} index={1}>
            <OrderHistory />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Works />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <OrderIncome />

          </TabPanel>
        </Box>
      </Container>
    </>
  );
};
