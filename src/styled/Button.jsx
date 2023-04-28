import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.main}`,
  color: "white",
  textTransform: "capitalize" ,
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#117951",
  },
  // width:"auto"
}));
