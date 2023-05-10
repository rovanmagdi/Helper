import {
  Alert,
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Rating,
  Stack,
  // Box,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { theme } from "../theme/index";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { StyledButton } from "../styled/Button";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import {
  FormDialog,
  FormDialogError,
  FormDialogErrorUser,
  FormDialogFeedback,
} from "../components/Pop";
import { useNavigate, useParams } from "react-router";
import Empty from "../assets/empty-cart.svg";
import avatar from "../assets/avatar.png";

import Api from "../Api/Api";
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
export const ProfileDetails = () => {
  const [value, setValue] = React.useState(0);
  const [alert, setAlert] = useState(false);
  const [valueRate, setValueRate] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeRate = (event, newValue) => {
    setValueRate(newValue);
    Api.post(`/store_stars`, {specialist_id:details.id,num_of_stars:newValue},{
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log(response.data);
       
      })
      .catch((e) => {
        console.log(e.response.data.message);
        // ErrorFun(e.response.data.message);
      });
    console.log(newValue);
  };
  const user = JSON.parse(localStorage.getItem("user")).user;

  const token = JSON.parse(localStorage.getItem("user")).token;
  const param = useParams();
  const [details, setDetails] = useState({});
  const [detailsSpeciality, setSpeciality] = useState({});
  const [detailsImage, setSpecialityImage] = useState([]);
  const [rateSpeciality, setRateSpecailty] = useState([]);
  const nagivate = useNavigate();
  useEffect(() => {
    // console.log(param.id);
    Api.get(`/specialist_info?specialist_id=${param.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log(response.data);
        setDetails(response.data.specialist.specialist_data);
        setSpecialityImage(response.data.specialist.specialist_work_images);
        setSpeciality(response.data.specialist.specialist_data.speciality);
        setRateSpecailty(
          response.data.specialist.specialist_data.specialist_rates
        );
      })
      .catch((e) => {
        console.log(e.response.data.message);
        // ErrorFun(e.response.data.message);
      });
  }, []);
 
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
          {details?.img == null ? (
            <>
              <Box component="img" src={avatar} sx={{ width: "80%", mb: 3 }} />
            </>
          ) : (
            <>
              <Box
                component="img"
                src={`https://helpers.amr-eissa.tech/public/${details?.img}`}
                sx={{ width: "80%", mb: 3 }}
              />
            </>
          )}

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
              Phone
            </Grid>
            <Grid item xs={10} sx={{ color: `${theme.palette.primary.main}` }}>
              {details?.phone}
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 1, fontWeight: "bold" }}>
            <Grid item xs={2}>
              Email
            </Grid>
            <Grid item xs={10} sx={{ color: `${theme.palette.primary.main}` }}>
              {details?.email}
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
              Jobs Information
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ mt: 1, fontWeight: "bold" }}>
            <Grid item xs={2}>
              Price/h
            </Grid>
            <Grid item xs={10} sx={{ color: `${theme.palette.primary.main}` }}>
              {details?.price_per_hour} EGY
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={8} md={8} xs={12}>
          <>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ fontWeight: "bold" }}
                >
                  {details?.name}
                </Typography>
                <Typography
                  sx={{
                    color: `${theme.palette.primary.main}`,
                    fontWeight: "bold",
                  }}
                >
                  {detailsSpeciality?.name}
                </Typography>
              </Box>
              <Box sx={{ m: 4, display: "flex", alignItems: "center" }}>
                <LocationOnIcon sx={{ color: "gray" }} />
                <Typography sx={{ fontWeight: "bold", m: 1 }}>
                  {details?.areas?.name}, {details?.cities?.name}
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "15px",
                mr: 2,
                color: "gray",
              }}
            >
              Rate
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{ fontWeight: "bold" }}
              >
                {rateSpeciality.length < 0 ? (
                  <>
                    <>
                      {Math.max(...rateSpeciality) -
                        Math.min(...rateSpeciality)}
                    </>
                  </>
                ) : (
                  <>0</>
                )}
              </Typography>
              {user.type == "user" ? (
                
                <Rating
                  name="simple-controlled"
                  value={valueRate}
                  sx={{ mx: 1, color: `${theme.palette.primary.main}` }}
                  onChange={handleChangeRate}
                />
              ) : (
                <> <Rating
                name="simple-controlled"
                value={   Math.max(...rateSpeciality) -
                  Math.min(...rateSpeciality)}
                sx={{ mx: 1, color: `${theme.palette.primary.main}` }}
                // onChange={handleChangeRate}
              /></>
              )}
            </Box>
          </>

          {user.type==="user" ? (
            <>
            
              <FormDialog
                title={<StyledButton sx={{ mt: 3 }}>Order Now</StyledButton>}
              />
            </>
          ) : (
            <>
              <FormDialogErrorUser
                title={<StyledButton sx={{ mt: 3 }}>Order Now</StyledButton>}
              />
            </>
          )}
          <Box sx={{ width: "100%", mt: 2 }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  label={
                    <Box sx={{ textTransform: "capitalize" }}>Feedback</Box>
                  }
                  {...a11yProps(0)}
                  iconPosition="start"
                  icon={<FeedbackOutlinedIcon />}
                />{" "}
                <Tab
                  label={<Box sx={{ textTransform: "capitalize" }}>Works</Box>}
                  {...a11yProps(1)}
                  iconPosition="start"
                  icon={<HomeRepairServiceOutlinedIcon />}
                />
              </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
              <Grid container spacing={2}>
                {details?.specialist_feedbacks?.length >= 1 ? (
                  <>
                    {details?.specialist_feedbacks.map((a) => {
                      return (
                        <Grid
                          item
                          lg={5}
                          xs={12}
                          sx={{
                            width: "auto",
                            border: "1px solid #BCBCBC",
                            p: 2,
                            m: 3,
                            borderRadius: "10px",
                          }}
                        >
                          <Typography
                            sx={{ fontSize: "18px", fontWeight: "bold" }}
                          >
                            {a.comment}
                          </Typography>
                          <Typography
                            sx={{ color: "gray", fontSize: "15px", mt: 2 }}
                          >
                            {new Date(a.updated_at).toLocaleDateString()}
                          </Typography>
                        </Grid>
                      );
                    })}
                      {user.type == "user" ?(<> <FormDialogFeedback
                      title={
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            p:5
                          }}
                        >
                          <StyledButton>Add Comment</StyledButton>
                        </Box>
                      }
                    /></>):(<></>)}
                   
                  </>
                ) : (
                  <>
                    <Box
                      component="img"
                      src={Empty}
                      sx={{ width: "400px", margin: "auto" }}
                    />{" "}
                    <FormDialogFeedback
                      title={
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                          }}
                        >
                          <StyledButton>Add Comment</StyledButton>
                        </Box>
                      }
                    />
                  </>
                )}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container spacing={2}>
                {detailsImage.length < 1 ? (
                  <>
                    <Box
                      component="img"
                      src={Empty}
                      sx={{ width: "400px", margin: "auto" }}
                    />{" "}
                  </>
                ) : (
                  <>
                    {detailsImage?.map((a) => {
                      return (
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
                              src={`https://amr-eissa.tech/helpers/public/${a.image_path}`}
                              sx={{ width: "100%", mb: 3 }}
                            />
                            <Typography
                              sx={{ color: "gray", fontSize: "15px" }}
                            >
                              {new Date(a.updated_at).toLocaleDateString()}
                            </Typography>
                          </Box>
                        </Grid>
                      );
                    })}
                  </>
                )}
              </Grid>
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
