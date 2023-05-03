import { Box, Container, Stack } from "@mui/system";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Grid, Select, Typography } from "@mui/material";
import { StyledTextField } from "../styled/TextFeild";
import { StyledButton } from "../styled/Button";
import Person3Icon from "@mui/icons-material/Person3";
import { theme } from "../theme";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import loginApi from "../Api/Login";

const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required("Name is required"),
  phone: yup
    .string("Enter your phone")
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required("Phone is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirm_password: yup
    .string("Enter your confirm_password")
    .min(8, "Password should be of minimum 8 characters length")
    .oneOf([yup.ref('password'), null], 'Passwords must match')

});

export default function Login() {
  const [error, useError] = useState("");
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      confirm_password: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // loginApi
      //   .post("/login", { email: values.email, password: values.password })
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((e) => {
      //     console.log(e.response.data.message);
      //   });
    },
  });

  return (
    <Container
      sx={{
        backgroundColor: "rgba(245,245,245,0.5)",
        pt: 110,
        pb: 1,
        position: "relative",
      }}
    >
      <Stack
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "block",
          my: 4,
          width: { lg: "30%", sm: "50%" },
          margin: 0,
          position: "absolute",
          top: "50%",
          left: " 50%",
          transform: "translate(-50%, -50%) ",
        }}
      >
        <Stack sx={{ alignItems: "center", gap: 2 }}>
          <Box
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
            <Person3Icon
              sx={{
                fontSize: "40px",
              }}
            />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Sign Up
          </Typography>
        </Stack>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <StyledTextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid >
          <Grid item xs={6}>
            <StyledTextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
        </Grid>



        <StyledTextField
          fullWidth
          id="Phone"
          name="phone"
          label="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />

<Grid container spacing={2}>
          <Grid item xs={6}>
             <FormControl fullWidth sx={{ mb: 4, backgroundColor: "#f0f0f0", }}>
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
            </Grid>
            <Grid  item xs={6}>
   <FormControl fullWidth sx={{ mb: 4, backgroundColor: "#f0f0f0", }}>
          <InputLabel id="demo-simple-select-label">Area</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
            </Grid>
            </Grid>
       

     

        <FormControl fullWidth sx={{ mb: 4, backgroundColor: "#f0f0f0", }}>
          <InputLabel id="demo-simple-select-label">Speciality</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <StyledTextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <StyledTextField
          fullWidth
          id="confirm_password"
          name="confirm_password"
          label="Confirm Password"
          type="password"
          value={formik.values.confirm_password}
          onChange={formik.handleChange}
          error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
          helperText={formik.touched.confirm_password && formik.errors.confirm_password}
        />
        <Typography sx={{ textAlign: "right", fontSize: "10px" }}>
          Are you have Aready account ?
        </Typography>

        <Box sx={{ justifyContent: "center", display: "flex" }}>
          <StyledButton variant="contained" type="submit">
            Sign Up
          </StyledButton>
        </Box>
      </Stack>
    </Container>
  );
}
