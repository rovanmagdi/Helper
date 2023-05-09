import { Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import logoImg from "../assets/logo.png";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { StyledBoxFooter } from "../styled/Box";

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: `#E7F8EE`,
                height: "auto",
                // mt:9
            }}
        >
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} lg={3} md={4}>
                        <Box
                            component="img"
                            src={logoImg}
                            sx={{
                                display: "flex",
                                height: "65px",
                                width: "140px",
                            }}
                        />
                        <Typography sx={{ fontSize: "0.8rem", mx: 2, }}>
                            It provides maintenance services, with high quality, ease of
                            request, and safety in dealing. By qualified and reliable
                            technicians.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={3} md={4}>
                        <StyledBoxFooter>Links</StyledBoxFooter>

                        <Typography
                            sx={{ mt: 4, mb: 2, fontSize: "0.8rem", }}
                        >
                            Terms and conditions for users
                        </Typography>
                        <Typography sx={{ fontSize: "0.8rem", }}>
                            Terms and conditions for the service provider of the "Helper"
                            platform
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={3} md={4}>
                        <StyledBoxFooter>Contact Us</StyledBoxFooter>

                        <Stack
                            direction="row"
                            sx={{
                                mt: 4,
                                mb: 2,
                                fontSize: "0.8rem",
                                alignItems: "center",

                            }}
                        >
                            <LocalPhoneOutlinedIcon sx={{ fontSize: "20px" }} />{" "}
                            <Typography sx={{ px: 1 }}>2589</Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            sx={{
                                mb: 2,

                                alignItems: "center",

                            }}
                        >
                            <PhoneAndroidOutlinedIcon sx={{ fontSize: "20px" }} />{" "}
                            <Typography sx={{ px: 1, fontSize: "0.8rem" }}>00236 665864515</Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            sx={{
                                mb: 2,

                                alignItems: "center",

                            }}
                        >
                            <EmailOutlinedIcon sx={{ fontSize: "20px" }} />{" "}
                            <Typography sx={{ px: 1, fontSize: "0.8rem", }}>info@fanni-sd.com</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} lg={3} md={4}>
                        <StyledBoxFooter>Follow</StyledBoxFooter>
                        <Stack
                            sx={{ mt: 4, mb: 2, fontSize: "0.8rem" }}
                            direction="row"
                        >
                            <FacebookIcon />
                            <TwitterIcon sx={{ px: 3, pr: 3 }} />
                            <WhatsAppIcon />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            <Divider />
            <Typography sx={{ p: 2, textAlign: "center", fontSize: "0.7rem", fontWeight: "bold" }}>
                &copy; Helper, Inc. All Rights Reserved
            </Typography>
        </Box>
    );
};

export default Footer;
