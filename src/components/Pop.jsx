import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Alert, Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import WarningIcon from "@mui/icons-material/Warning";
import { StyledButton } from "../styled/Button";
import Api from "../Api/Api";
import Switch from "@mui/material/Switch";
import { useFormik } from "formik";
import { StyledTextField } from "../styled/TextFeild";

const label = { inputProps: { "aria-label": "Switch demo" } };
export function FormDialog({ title }) {
  const token = JSON.parse(localStorage.getItem("user")).token;
  const param = useParams();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [details, setDetails] = React.useState({});
  const [alertSuccess, setSucces] = React.useState(false);

  React.useEffect(() => {
    Api.get(`/specialist_info?specialist_id=${param.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        setDetails(response.data.specialist.specialist_data);
        console.log(response.data.specialist.specialist_data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [error, setError] = React.useState("");

  function ErrorFun(e) {
    setError(e);
  }

  const formik = useFormik({
    initialValues: {
      address: "",
      description: null,
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      console.log(details);
      Api.post(
        `/store_order`,
        {
          specialist_id: param.id,
          city_id: details?.city_id,
          area_id: details?.area_id,
          user_address: values.address,
          order_description: values.description,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
        .then((response) => {
        
          console.log(response.data);
          setOpen(false);
          ErrorFun("");
          setSucces(true);

          setTimeout(() => {
            setSucces(false);
          }, 5000);
        })
        .catch((e) => {
          console.log(e.response.data.message);
          ErrorFun(e.response.data.message);
          //   setOpen(false);
        });
    },
  });

  return (
    <div>
      {alertSuccess && (
        <Alert
          variant="filled"
          severity="success"
          sx={{ position: "fixed", top: 90, right: 0, zIndex: 100 }}
        >
          Order sended Successful ..
        </Alert>
      )}
      <Typography variant="outlined" onClick={handleClickOpen}>
        {title}
      </Typography>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Order Now</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <Box sx={{ color: "red" }}>{error}</Box>
          <Box component="form" onSubmit={formik.handleSubmit}>
            <StyledTextField
              fullWidth
              id="email"
              name="address"
              label="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              //   error={formik.touched.email && Boolean(formik.errors.email)}
              //   helperText={(formik.touched.email && formik.errors.email) || <div style={{ color: 'red', fontSize: "15px" }}>{error}</div>}
            />
            {/* {error} */}

            <StyledTextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              type="string"
              value={formik.values.description}
              onChange={formik.handleChange}
              //   error={formik.touched.password && Boolean(formik.errors.password)}
              //   helperText={formik.touched.password && formik.errors.password}
            />

            <Box sx={{ justifyContent: "center", display: "flex" }}>
              <StyledButton variant="contained" type="submit">
                Send Order
              </StyledButton>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function FormDialogError({ title }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const nagivate = useNavigate();
  const handleClose = () => {
    setOpen(false);
    nagivate("/log_in");
  };

  return (
    <div>
      <Typography variant="outlined" onClick={handleClickOpen}>
        {title}
      </Typography>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{ width: "100%", textAlign: "center" }}
      >
        <DialogContent>
          <DialogContentText>
            <WarningIcon sx={{ m: 8, fontSize: "7rem", color: "#FE445B" }} />
            <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              You must login first!
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <StyledButton onClick={handleClose}>Login</StyledButton>
          <Button
            onClick={() => setOpen(false)}
            sx={{ color: "red", border: "1px solid red", m: 3 }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export function FormDialogFeedback({ title }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [changeSwitch, setChangeSwitch] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const token = JSON.parse(localStorage.getItem("user")).token;
  const param = useParams();
  const [done, setDone] = React.useState();

  const [alertSuccess, setSucces] = React.useState(false);
  const [alertError, setError] = React.useState(true);

  const handleCommenet = () => {
    Api.post(
      `/store_feedback`,
      { specialist_id: param.id, show_info: changeSwitch, comment: value },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        setDone(response.data);
        setSucces(true);

        setTimeout(() => {
          setSucces(false);
        }, 5000);
      })
      .catch((e) => {
        console.log(e.response.data.message);
        setError(false);
        setTimeout(() => {
          setError(true);
        }, 5000);
      });
  };

  return (
    <div>
      {alertSuccess && (
        <Alert
          variant="filled"
          severity="success"
          sx={{ position: "fixed", top: 90, right: 0, zIndex: 100 }}
        >
          Comment sended Successful ..
        </Alert>
      )}

      {!alertError && (
        <Alert
          variant="filled"
          severity="error"
          sx={{ position: "fixed", top: 90, right: 0, zIndex: 100 }}
        >
          Comment couldn't send Failed ..
        </Alert>
      )}

      <Typography variant="outlined" onClick={handleClickOpen}>
        {title}
      </Typography>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Comment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To comment to this Worker, please enter your Message here. We will
            send updates occasionally.
          </DialogContentText>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography>How need all specialisties show Comment :</Typography>
            <Box>
              <Switch
                {...label}
                defaultChecked
                value={changeSwitch}
                onChange={(event) => {
                  setChangeSwitch(event.target.checked);
                  console.log(changeSwitch);
                }}
              />
            </Box>
          </Box>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Comment"
            type="string"
            fullWidth
            variant="standard"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleClose();
              handleCommenet();
            }}
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
