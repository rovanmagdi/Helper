import styled from "@emotion/styled";
import {  TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
    width: "100%",
    pb: 2,
    "& label.Mui-focused": {
        borderColor: "white",
    },
    "& .MuiInputBase-root": {
        backgroundColor: "#f0f0f0",
    },
    marginBottom:"30px"
}));
