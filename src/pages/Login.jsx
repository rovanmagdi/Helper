import {  FormControl, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import { StyledTextField } from "../styled/TextFeild";
import { StyledButton } from "../styled/Button";
import Person3Icon from "@mui/icons-material/Person3";
import { theme } from "../theme";

export default function Login() {
    return (
        <>
            <Container
                sx={{
                    backgroundColor: "rgba(245,245,245,0.5)",
                    pt: 80,
                    pb: 1,
                    position: "relative",
                }}
            >
                <FormControl
                    sx={{
                        display: "block",
                        my: 4,
                        width: {lg:"30%",sm:"50%"},
                        margin: 0,
                        position: "absolute",
                        top: "50%",
                        left: " 50%",
                        transform: "translate(-50%, -50%) ",
                    }}
                >
                    <Stack sx={{ alignItems: "center", gap: 2 }}><Box
                            sx={{
                                height: "60px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#ffff",
                                borderRadius: "50%",
                                width: "60px",
                                backgroundColor: `${theme.palette.primary.main}`,
                                
                            }}
                        >

                            <Person3Icon sx={{
                              fontSize:"40px"
                            }} />
                        </Box>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2}}>
                            Login
                        </Typography>
                        
                    </Stack>

                    <StyledTextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"  
                        name="Email"
                        // value={userNameOrEmail}
                        // onChange={handleChange}
                        fullWidth
                    />

                    <StyledTextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        name="inputPassword"
                        // value={inputPassword}
                        // onChange={handleChange}
                        fullWidth
                        type="password"
                    />
                    <Box sx={{ justifyContent: "center", display: "flex" }}>
                        <StyledButton variant="contained">Login</StyledButton>
                    </Box>
                </FormControl>
            </Container>
        </>
    );
}
