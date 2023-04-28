import { React } from "react";
import { Stack, Box, TextField } from "@mui/material";
// import WebFont from 'webfontloader';
import { theme } from "../../theme/index";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { StyledTypographyTitle } from "../../styled/Typography";
import { StyledButton } from "../../styled/Button";

const Contact = () => {
  return (
    <Stack
      id="Contact"
      theme={theme}
      sx={{
        color: "secondary.main",
        alignItems: "center",
        width: "100%",
        mt: 10,
        boxSizing: "border-box",
        p: 5,
        backgroundColor: "rgba(245,245,245,0.5)",
        fontSize: "12px",
        fontWeight: "500",
      }}
    >
      <Stack
        sx={{
          border: "1px solid rgba(25,174,117,0.2)",
          borderRadius: "10px",
          boxShadow: "5px 5px 10px -3px  rgba(25,174,117,0.1)",
          p: 5,
        }}
      >
        <StyledTypographyTitle variant="h5">Contact Us</StyledTypographyTitle>
        <Box
          component="div"
          theme={theme}
          sx={{
            mb: 5,
            fontSize: "12px",
            fontWeight: "500",
            color: "primary.main",
          }}
        >
          WHAT CUSTOMERS SAY
        </Box>

        <Box component="div" sx={{ mb: 5 }}>
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            sx={{ width: "500px" }}
          />
        </Box>

        <Box component="div" sx={{ mb: 5 }}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: "500px" }}
          />
        </Box>

        <Box component="div" sx={{ mb: 5 }}>
          <TextField
            id="outlined-basic"
            label="Message"
            variant="outlined"
            sx={{
              width: "500px",
              "& .MuiInputBase-root": {
                height: 150,
              },
            }}
          />
        </Box>
        <StyledButton
          endIcon={<ChevronRightIcon />}
          sx={{ width: "200px", p: 1 }}
        >
          {" "}
          Send Message
        </StyledButton>
      </Stack>
    </Stack>
  );
};

export default Contact;
