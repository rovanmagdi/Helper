import {
  Alert,
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Rating,
  // Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { theme } from "../theme/index";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { StyledButton } from "../styled/Button";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import { FormDialog, FormDialogError } from "../components/Pop";
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
          <Typography>{children}</Typography>
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
export const ProfileDetails = () => {
  const [value, setValue] = React.useState(2);
  const [alert, setAlert] = useState(false)
  // const [valueTab, setValueTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <Container
      sx={{
        backgroundColor: "rgba(245,245,245,0.5)",
        pt: 10,
        pb: 1,
        position: "relative",
      }}
    >
      <Divider />
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item lg={4} md={4} xs={12}>
          <Box
            component="img"
            src="https://www.b8ak.com/wp-content/uploads/2023/04/images-3.jpg"
            sx={{ width: "80%", mb: 3 }}
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "10px", color: "gray" }}
            >
              Characteristics
            </Typography>
            <Divider sx={{ width: "60%" }} />
          </Box>

          <List>
            <ListItem>
              <Typography>Sincere in his work</Typography>
            </ListItem>
            <ListItem>
              <Typography>Diligent</Typography>
            </ListItem>
            <ListItem>
              <Typography>Committed to deadlines</Typography>
            </ListItem>
          </List>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "10px", color: "gray" }}
            >
              Skills
            </Typography>
            <Divider sx={{ width: "60%" }} />
          </Box>

          <List>
            <ListItem sx={{ p: 0, px: 2 }}>
              <Typography>Sincere in his work</Typography>
            </ListItem>
            <ListItem sx={{ p: 0, px: 2 }}>
              <Typography>Diligent</Typography>
            </ListItem>
            <ListItem sx={{ p: 0, px: 2 }}>
              <Typography>Committed to deadlines</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item lg={8} md={8} xs={12}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography
                variant="h4"
                component="h2"
                sx={{ fontWeight: "bold" }}
              >
                Name
              </Typography>
              <Typography
                sx={{
                  color: `${theme.palette.primary.main}`,
                  fontWeight: "bold",
                }}
              >
                speciality
              </Typography>
            </Box>
            <Box sx={{ m: 4, display: "flex", alignItems: "center" }}>
              <LocationOnIcon sx={{ color: "gray" }} />
              <Typography sx={{ fontWeight: "bold", m: 1 }}>
                Nasr City, Cairo
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{ fontWeight: "bold", fontSize: "15px", mr: 2, color: "gray" }}
          >
            Rate
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
              87
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              sx={{ mx: 1, color: `${theme.palette.primary.main}` }}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          

          {user ? (<>
            <FormDialog title={<StyledButton sx={{ mt: 3 }}>Order Now</StyledButton>} />
          </>) : (<>
            <FormDialogError title={<StyledButton sx={{ mt: 3 }} >Order Now</StyledButton>} />

          </>)}
          <Box sx={{ width: "100%", mt: 2 }}>
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
                    <Box sx={{ textTransform: "capitalize" }}>Feedback</Box>
                  }
                  {...a11yProps(1)}
                  iconPosition="start"
                  icon={<FeedbackOutlinedIcon />}
                />{" "}
                <Tab
                  label={<Box sx={{ textTransform: "capitalize" }}>Works</Box>}
                  {...a11yProps(2)}
                  iconPosition="start"
                  icon={<HomeRepairServiceOutlinedIcon />}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  mr: 2,
                  color: "gray",
                }}
              >
                Personal Information
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1, fontWeight: "bold" }}>
                <Grid item xs={2}>
                  phone
                </Grid>
                <Grid
                  item
                  xs={10}
                  sx={{ color: `${theme.palette.primary.main}` }}
                >
                  01003327852
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mt: 1, fontWeight: "bold" }}>
                <Grid item xs={2}>
                  Address
                </Grid>
                <Grid item xs={10}>
                  Zahraa, Nasr City, Cairo, Egypt
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mt: 1, fontWeight: "bold" }}>
                <Grid item xs={2}>
                  Email
                </Grid>
                <Grid
                  item
                  xs={10}
                  sx={{ color: `${theme.palette.primary.main}` }}
                >
                  admintest@gmail.com
                </Grid>
              </Grid>
              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    color: "gray",
                    pr: 2,
                  }}
                >
                  Persoanl
                </Typography>
                <Divider sx={{ width: "60%" }} />
              </Box>
              <Grid container spacing={2} sx={{ mt: 1, fontWeight: "bold" }}>
                <Grid item xs={2}>
                  Gender
                </Grid>
                <Grid
                  item
                  xs={10}
                  sx={{ color: `${theme.palette.primary.main}` }}
                >
                  Male
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mt: 1, fontWeight: "bold" }}>
                <Grid item xs={2}>
                  Birth Date
                </Grid>
                <Grid
                  item
                  xs={10}
                  sx={{ color: `${theme.palette.primary.main}` }}
                >
                  June 5, 1995
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12} sx={{
                  width: "auto",
                  border: "1px solid gray",
                  p: 2,
                  borderRadius: "10px",
                }}>

                  <Rating
                    name="simple-controlled"
                    value={value}
                    sx={{ color: `${theme.palette.primary.main}` }}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <Typography sx={{ color: "gray", fontSize: "15px" }}>
                    1/2/2020
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", mt: 1, mb: 1 }}>
                    Excellent nargwa foodii.
                  </Typography>
                  <Typography sx={{ fontSize: "13px", color: "gray" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ad repellendus error, sint quae dicta nisi expedita sit
                    iusto officia assumenda culpa corrupti facilis temporibus
                    perferendis, voluptatum, quibusdam maiores beatae.
                    Reiciendis?
                  </Typography>

                </Grid>
                <Grid item lg={6} xs={12} sx={{
                  width: "auto",
                  border: "1px solid gray",
                  p: 2,
                  borderRadius: "10px",
                }}>

                  <Rating
                    name="simple-controlled"
                    value={value}
                    sx={{ color: `${theme.palette.primary.main}` }}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <Typography sx={{ color: "gray", fontSize: "15px" }}>
                    1/2/2020
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", mt: 1, mb: 1 }}>
                    Excellent nargwa foodii.
                  </Typography>
                  <Typography sx={{ fontSize: "13px", color: "gray" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ad repellendus error, sint quae dicta nisi expedita sit
                    iusto officia assumenda culpa corrupti facilis temporibus
                    perferendis, voluptatum, quibusdam maiores beatae.
                    Reiciendis?
                  </Typography>

                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid container spacing={2}>
                <Grid item lg={6}>
                  <Box
                    sx={{
                      width: "auto",
                      border: "1px solid gray",
                      p: 2,
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      component="img"
                      src="https://www.b8ak.com/wp-content/uploads/2023/04/images-3.jpg"
                      sx={{ width: "80%", mb: 3 }}
                    />
                    <Typography sx={{ color: "gray", fontSize: "15px" }}>
                      1/2/2020
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", mt: 1, mb: 1 }}>
                      Excellent nargwa foodii.
                    </Typography>
                    <Typography sx={{ fontSize: "13px", color: "gray" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad repellendus error, sint quae dicta nisi expedita sit
                      iusto officia assumenda culpa corrupti facilis temporibus
                      perferendis, voluptatum, quibusdam maiores beatae.
                      Reiciendis?
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <LocationOnIcon
                        sx={{ color: "gray", fontSize: "15px" }}
                      />
                      <Typography
                        sx={{ fontWeight: "bold", fontSize: "10px", m: 1 }}
                      >
                        Nasr City, Cairo
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={6}>
                  <Box
                    sx={{
                      width: "auto",
                      border: "1px solid gray",
                      p: 2,
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      component="img"
                      src="https://www.b8ak.com/wp-content/uploads/2023/04/images-3.jpg"
                      sx={{ width: "80%", mb: 3 }}
                    />
                    <Typography sx={{ color: "gray", fontSize: "15px" }}>
                      1/2/2020
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", mt: 1, mb: 1 }}>
                      Excellent nargwa foodii.
                    </Typography>
                    <Typography sx={{ fontSize: "13px", color: "gray" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad repellendus error, sint quae dicta nisi expedita sit
                      iusto officia assumenda culpa corrupti facilis temporibus
                      perferendis, voluptatum, quibusdam maiores beatae.
                      Reiciendis?
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <LocationOnIcon
                        sx={{ color: "gray", fontSize: "15px" }}
                      />
                      <Typography
                        sx={{ fontWeight: "bold", fontSize: "10px", m: 1 }}
                      >
                        Nasr City, Cairo
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
