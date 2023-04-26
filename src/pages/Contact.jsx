import {
    Box,
    Container,
    Divider,
    Grid,
    Stack,
    TextField,
    TextareaAutosize,
    Typography,
} from "@mui/material";
import React from "react";
import contactImg from "../assets/contactUs.png";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { theme } from "../theme";
import { StyledButton } from "../styled/Button";
// import Textarea from '@mui/joy/Textarea';

export const Contact = () => {
    return (
        <Container
            sx={{
                pt: 10,
                pb: 1,
                backgroundColor: "rgba(245,245,245,0.5)",
            }}
        >
            <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center" }}>
                Contact Us
            </Typography>
            <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
                <Box component="img" src={contactImg} sx={{ width: "20%" }} />
                <Stack sx={{ gap: 1 }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                        {" "}
                        How can help you ?
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        <LocalPhoneOutlinedIcon
                            sx={{ fontSize: "20px", color: `${theme.palette.primary.main}` }}
                        />{" "}
                        <Typography sx={{ px: 1 }}>2589</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <EmailOutlinedIcon
                            sx={{ fontSize: "20px", color: `${theme.palette.primary.main}` }}
                        />{" "}
                        <Typography sx={{ px: 1 }}>info@fanni-sd.com</Typography>
                    </Box>
                </Stack>
            </Stack>
            <Divider sx={{ pt: 8 }} />
            <Typography
                sx={{
                    width: "28%",
                    fontWeight: "bold",
                    lineHeight: "2rem",
                    pb: 3,
                    pt: 3,
                }}
            >
                Do you have a question? suggestion? Do not hesitate to contact us
            </Typography>
            <iframe
                title="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.37523161046!2d39.153378114417194!3d21.61029727304785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d0a0c12ad8d7%3A0xa68c132ddc1a3fcf!2sSalama%20Tower!5e0!3m2!1sen!2seg!4v1583212873732!5m2!1sen!2seg"
                width="100%"
                height="400"
                frameborder="0"
                allowfullscreen=""
            ></iframe>
            <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xs={6} >
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        sx={{
                            width: "100%",
                            pb: 2,
                            "& .MuiInputBase-root": {
                                backgroundColor: "#f0f0f0",
                            },
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        sx={{
                            width: "100%",
                            pb: 2,
                            "& label.Mui-focused": {
                                borderColor: "white",
                            },
                            "& .MuiInputBase-root": {
                                backgroundColor: "#f0f0f0",
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                  
                {/* <Textarea minRows={2} /> */}
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder={`${<h1>df,n</h1>}`}
                        style={{ width: "100%" ,
                            height: 130,
                            backgroundColor: "#f0f0f0",
                            borderRadius:"5px",
                            borderColor:"#B8B8B8",padding:2
                        }}
                    />
                </Grid>
            </Grid>
            <Box sx={{ width: "20%", mb: 5, margin: "auto" }}>
                <StyledButton sx={{ width: "100%" }}>Send</StyledButton>
            </Box>
        </Container>
    );
};
