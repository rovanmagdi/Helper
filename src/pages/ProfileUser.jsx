import {
    Box,
    Container,
    Divider,
    Fab,
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
import { StyledButton } from "../styled/Button";
import { Input } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { OrderHistory } from "../components/OrderHistory";
import { Works } from "../components/Works";
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
    //   const [address, setAddress] = useState(user.user.name);

    const handleEdit = () => {
        setIsEdit(true);
    };
    const handleSave = () => {
        setIsEdit(false);
    };

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

    // const uploadPhoto = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     console.log(file);
    //     reader.onloadend = () => {
    //         // setImage(reader.result);
    //         console.log(reader.result);
    //     };
    //     reader.readAsDataURL(file);
    // };
    return (
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

                    <Box component="img" src={image} sx={{ width: "300px", mb: 3 }} />
                    <label htmlFor="upload-photo">
                        <input
                            style={{ display: "none" }}
                            id="upload-photo"
                            name="upload-photo"
                            type="file"
                        // onChange={(event) => uploadPhoto(event)}
                        />

                        <Fab color="primary" size="small" component="span" aria-label="add">
                            <CameraAltIcon />
                        </Fab>
                    </label>
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
                        <Typography sx={{color:`${theme.palette.primary.main}`,fontWeight:"bold"}}>

                        {user?.user?.speciality?.name }
                        </Typography>
                        <TextField
                            id="outlined-error"
                            label="Name"
                            defaultValue={user?.user?.name}
                            sx={{ display: isEdit === true ? "block" : "none" }}
                            value={fullName}
                            onChange={(event) => setFullName(event.target.value)}
                        />
                        {user?.type === "user"||"admin" ? (
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
                                <Box sx={{ textTransform: "capitalize" }}>
                                    Order History
                                </Box>
                            }
                            {...a11yProps(1)}
                            iconPosition="start"
                            icon={<FeedbackOutlinedIcon />}
                        />

                        {user.user.type === "specialist" &&
                            [

                                <Tab

                                    label={
                                        <Box sx={{ textTransform: "capitalize" }}>
                                            Works
                                        </Box>
                                    }
                                    {...a11yProps(2)}
                                    iconPosition="start"
                                    icon={<FeedbackOutlinedIcon />}
                                />
                                ,
                                <Tab
                                    label={
                                        <Box sx={{ textTransform: "capitalize" }}>
                                            Incoming Orders
                                        </Box>
                                    }
                                    {...a11yProps(3)}
                                    iconPosition="start"
                                    icon={<FeedbackOutlinedIcon />}
                                />
                            ]


                        }
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
                    {/* <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
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
                    </Box> */}
                   
                    {/* <Grid container spacing={2} sx={{ mt: 1, fontWeight: "bold" }}>
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

                        {isEdit ? (
                            <StyledButton sx={{ m: 3 }} onClick={handleSave}>
                                Save{" "}
                            </StyledButton>
                        ) : (
                            <StyledButton sx={{ m: 3 }} onClick={handleEdit}>
                                Edit
                            </StyledButton>
                        )}
                    </Grid> */}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <OrderHistory />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Works />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <OrderIncome/>
                    {/* <Works /> */}
                </TabPanel>
            </Box>

        </Container>
    );
};
