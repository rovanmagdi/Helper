import styled from "@emotion/styled";
import {  TextField } from "@mui/material";

export const StyledButton = styled(TextField)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.main}`,
  color: "white",
  textTransform: "capitalize" ,
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#117951",
  },
}));
