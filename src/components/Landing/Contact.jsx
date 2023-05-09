import { React, useState } from "react";
import { Stack, Box, TextField, Typography, Alert } from "@mui/material";
// import WebFont from 'webfontloader';
import { theme } from "../../theme/index";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { StyledTypographyTitle } from "../../styled/Typography";
import { StyledButton } from "../../styled/Button";
import Api from "../../Api/Api";

const Contact = () => {
  const token = JSON.parse(localStorage.getItem("user"))?.token;
  const id = JSON.parse(localStorage.getItem("user"))?.id;

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  const [alertSuccess, setSucces] = useState(false);
  const handleClick = () => {
    Api.post(
      "/store_contact_message",
      { user_id: id, title: title, description: description },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        console.log(response.data.message);
        setError('')
        setSucces(true)
        setTimeout(() => {
        setSucces(false)
          
        }, 4000);
      })
      .catch((e) => {
        console.log(e.response.data.message);
        setError(e.response.data.message);
      });
  }
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

        <Typography sx={{ color: "red" }}>{error}</Typography>
        {alertSuccess && (
        <Alert
          variant="filled"
          severity="success"
          sx={{ position: "fixed", top: 90, right: 0, zIndex: 100 }}
        >
          Message sended Successful ..
        </Alert>
      )}
        <Box component="div" sx={{ mb: 5 }}>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            onChange={(e) => setTitle(e.target.value)}

            sx={{ width: "500px" }}
          />
        </Box>



        <Box component="div" sx={{ mb: 5 }}>
          <TextField
            id="outlined-basic"
            label="Message"
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
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
          onClick={handleClick}
        >
          {" "}
          Send Message
        </StyledButton>
      </Stack>
    </Stack>
  );
};

export default Contact;
