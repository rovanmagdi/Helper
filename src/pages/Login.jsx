import { Box, Container, Stack } from "@mui/system";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Typography } from "@mui/material";
import { StyledTextField } from "../styled/TextFeild";
import { StyledButton } from "../styled/Button";
import Person3Icon from "@mui/icons-material/Person3";
import { theme } from "../theme";
import Api from "../Api/Api";
import { useNavigate } from "react-router";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default function Login() {


  const [error, setError] = useState("")

  function ErrorFun(e) {
    setError(e)
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {


      Api
        .post(
          "/login", { email: values.email, password: values.password }
        )
        .then((response) => {
          console.log(response.data);

          ErrorFun("")
        })
        .catch((e) => {
          console.log(e.response.data.message);
          ErrorFun(e.response.data.message)
          // console.log(actions.setErrors(values.email,"dfd"));
          // console.log(error);
        });

    },
  });

  const nagivate = useNavigate()
  const handleSign = () => {
    nagivate('/Sign_up')
  }

  return (
    <Container
      sx={{
        backgroundColor: "rgba(245,245,245,0.5)",
        pt: 80,
        pb: 1,
        position: "relative",
      }}
    >
      <Box
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
            Login
          </Typography>
        </Stack>

        <StyledTextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={(formik.touched.email && formik.errors.email) || <div style={{ color: 'red', fontSize: "15px" }}>{error}</div>}
        />
        {/* {error} */}
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
        <Typography sx={{ textAlign: "right", fontSize: "10px" }}>
          Are you have Create account ?{" "}
          <Box
            component="span"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={handleSign}
          >
            Sign Up
          </Box>
        </Typography>

        <Box sx={{ justifyContent: "center", display: "flex" }}>
          <StyledButton variant="contained" type="submit">
            Login
          </StyledButton>
        </Box>
      </Box>
    </Container>
  );
}
