import { Box, Container, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Grid, Select, TextField, Typography } from "@mui/material";
import { StyledTextField } from "../styled/TextFeild";
import { StyledButton } from "../styled/Button";
import Person3Icon from "@mui/icons-material/Person3";
import { theme } from "../theme";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Api from "../Api/Api";
import { FormHelperText } from "@mui/joy";
import { useNavigate } from "react-router";
// import loginApi from "../Api/Login";

const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  phone: yup.string("Enter your phone").length(11).required(),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  city: yup.string("Enter your Speciality").required("Speciality is required"),

  area: yup.string("Enter your Speciality").required("Speciality is required"),
  // type: yup.string("Enter your type").required("type is required"),

  price: yup
  .string("Enter your Speciality"),
  // .required("Speciality is required"),

  speciality: yup
    .string("Enter your Speciality"),
    
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirm_password: yup
    .string("Enter your confirm_password")
    .min(8, "Password should be of minimum 8 characters length")
    .oneOf([yup.ref("password"), null], "Passwords must match"),

  // select: yup.string().required(),
});

export default function Login() {
  const [error, setError] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [specialities, setSpecialities] = useState([]);
  const [cities, setCities] = React.useState([]);
  const [areas, setAreas] = React.useState([]);
 
  const [selectedtype, setSelectedType] = React.useState("");
  const nagivate = useNavigate();
  useEffect(() => {
    Api.get("/cities")
      .then((response) => {
        // console.log(response.data);
        setCities(response.data);
      })
      .catch((e) => {
        // console.log(e.response.data.message);
        // ErrorFun(e.response.data.message);
      });

    Api.get("/specialities")
      .then((response) => {
        // console.log(response.data);
        setSpecialities(response.data);
      })
      .catch((e) => {
        console.log(e.response.data.message);
        // ErrorFun(e.response.data.message);
      });
  }, []);

  const handleChange = (event) => {
    // console.log(event.target);
    setSelectedCity(event.target.value);
    Api.get("/areas")
      .then((response) => {
        // console.log(response.data);
        setAreas(response.data);
      })
      .catch((e) => {
        console.log(e.response.data.message);
        // ErrorFun(e.response.data.message);
      });
  };

  function ErrorFun(e) {
    setError(e);
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      area: "",
      price:"",
      speciality: "",
      type: "",
      confirm_password: "",
      password: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      console.log(values);

      Api.post("/register", {
        name: values.name,
        phone: values.phone,
        email: values.email,
        password: values.password,
        city_id: selectedCity,
        area_id: selectedArea,
        price_per_hour: values.price,
        type: selectedtype,
        speciality_id: selectedSpeciality,
      })
        .then((response) => {
          console.log(response.data);

          console.log(response.data.user);
          localStorage.setItem("user",JSON.stringify(response.data));

          nagivate("/Log_in");
        })
        .catch((e) => {
          ErrorFun(e.response.data.message);
        });
    },
  });

  const handleLogin = () => {
    nagivate("/Log_in");
  };
 

  return (
    <Container
      sx={{
        backgroundColor: "rgba(245,245,245,0.5)",
        pt: 110,
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
            Sign Up
          </Typography>
        </Stack>

        {
          <div
            style={{
              color: "red",
              fontSize: "15px",
              margin: 10,
              textTransform: "capitalize",
            }}
          >
            {error}
          </div>
        }
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
          </Grid>
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
            <FormControl fullWidth sx={{ mb: 4, backgroundColor: "#f0f0f0" }}>
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedCity}
                label="City"
                onChange={(event) => {
                  handleChange(event);
                  formik.handleChange(event);
                }}
                name="city"
                error={formik.touched.city && Boolean(formik.errors.city)}
                // helperText={formik.touched.city && formik.errors.city}
              >
                {cities.map((a) => {
                  return (
                    <MenuItem value={a.id} key={a.id}>
                      {a.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth sx={{ mb: 4, backgroundColor: "#f0f0f0" }}>
              <InputLabel id="demo-simple-select-label">Area</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formik.values.area}
                label="Area"
                name="area"
                error={formik.touched.area && Boolean(formik.errors.area)}
                // helperText={
                //   formik.touched.area &&
                //   formik.errors.area
                // }
                onChange={(event) => {
                  formik.handleChange(event);
                  setSelectedArea(event.target.value);
                  console.log(event);
                }}
              >
                {areas.map((a, id) => {
                  return (
                    <MenuItem value={a.id} key={a.id}>
                      {a.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <FormControl fullWidth sx={{ mb: 4, backgroundColor: "#f0f0f0" }}>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedtype}
            label="Type"
            name="type"
            onChange={(event) => {
              formik.handleChange(event);
              setSelectedType(event.target.value);
              console.log(event);
            }}
            error={formik.touched.type && Boolean(formik.errors.type)}
          >
            {/* {types.map((a) => {
              return ( */}
                <MenuItem value="user">
                 user
                </MenuItem>
                <MenuItem value="specialist">
                specialist
                </MenuItem>
              {/* );
            })} */}
          </Select>
        </FormControl>
        {selectedtype === "specialist" ? (
          <>
            <FormControl fullWidth sx={{ mb: 4, backgroundColor: "#f0f0f0" }}>
              <InputLabel id="demo-simple-select-label">Speciality</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedSpeciality}
                label="speciality"
                name="speciality"
                onChange={(event) => {
                  formik.handleChange(event);
                  setSelectedSpeciality(event.target.value);
                  console.log(event);
                }}
                error={
                  formik.touched.speciality && Boolean(formik.errors.speciality)
                }
              >
                {specialities.map((a) => {
                  return (
                    <MenuItem value={a.id} key={a.id}>
                      {a.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <StyledTextField
              fullWidth
              id="price"
              name="price"
              type="number"
              label="Price"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
            />
          </>
        ) : (
          <></>
        )}

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
          error={
            formik.touched.confirm_password &&
            Boolean(formik.errors.confirm_password)
          }
          helperText={
            formik.touched.confirm_password && formik.errors.confirm_password
          }
        />
        <Typography sx={{ textAlign: "right", fontSize: "10px", mb: 3 }}>
          Are you have Aready account ?{" "}
          <Box
            component="span"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={handleLogin}
          >
            LogIn
          </Box>
        </Typography>

        <Box sx={{ justifyContent: "center", display: "flex" }}>
          <StyledButton variant="contained" type="submit">
            Sign Up
          </StyledButton>
        </Box>
      </Box>
    </Container>
  );
}
