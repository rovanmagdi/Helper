import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logoImg from "../assets/logo.png";
import { Stack } from "@mui/material";
import { theme } from "../theme";
import ClearIcon from "@mui/icons-material/Clear";
import { StyledButton } from "../styled/Button";
import { useNavigate } from "react-router";
import ImgMan from "../assets/man.png";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

const pages = ["Home", "About_US", "Services", "Blogs", "Contact_Us"];

function Navbar() {
  const [nav, setNav] = React.useState(true);
  const [active, setActive] = React.useState("Home");
  const user = JSON.parse(localStorage.getItem("user"));
  const nagivate = useNavigate();
  const handleClick = (link) => {
    nagivate(`/${link}`);
    setActive(link);
  };

  const handleLogin = () => {
    nagivate("/Log_in");
    console.log("done");
  };

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  const handleLogOut=()=>
  {
    localStorage.clear();
    nagivate('/')
  }

  return (
    <Box
      position="fixed"
      width="100%"
      sx={{ backgroundColor: "rgba(249,249,249,0.9);", zIndex: 100 }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box sx={{ flexGrow: 0 }}>
            <Box
              component="img"
              src={logoImg}
              sx={{
                display: { xs: "none", md: "flex" },
                height: "65px",
                width: "140px",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center " }}>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                color: "black",
              }}
            >
              {pages.map((page) => (
                <Typography
                  key={page}
                  onClick={() => handleClick(page)}
                  sx={{
                    ml: 2,
                    display: "block",
                    fontWeight: "bold",
                    color: `${
                      active === page
                        ? `${theme.palette.primary.main}`
                        : "black"
                    } `,
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  {page.includes("_") ? (
                    <>{page.replace("_", " ")}</>
                  ) : (
                    <>{page}</>
                  )}
                </Typography>
              ))}
            </Box>
            {user ? (
              <>
                <Box
                  component="img"
                  src={ImgMan}
                  sx={{ width: "40px",pl:3}}
                />

                <div>
                  <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? "composition-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        fontSize: "15px",
                        color: `${theme.palette.primary.main}`,
                      }}
                    >
                      {user.user.name}
                    </Typography>
                  </Button>
                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom-start"
                              ? "left top"
                              : "left bottom",
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open}
                              id="composition-menu"
                              aria-labelledby="composition-button"
                              onKeyDown={handleListKeyDown}
                            >
                              <MenuItem onClick={handleClose}>Profile</MenuItem>
                              <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
              </>
            ) : (
              <Button
                onClick={handleLogin}
                sx={{
                  display: { xs: "none", md: "flex" },
                  backgroundColor: `${theme.palette.primary.main}`,
                  color: "white",
                  fontWeight: "bold",
                  marginLeft: "10px",
                  "&:hover": {
                    backgroundColor: "#117951",
                  },
                }}
              >
                Login{" "}
              </Button>
            )}
          </Box>
        </Stack>
        <Stack
          sx={{ display: { xs: "flex", md: "none" } }}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => setNav(!nav)}
            color="inherit"
          >
            {nav ? <MenuIcon /> : <ClearIcon />}
          </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Box
              component="img"
              src={logoImg}
              sx={{ height: "65px", width: "140px" }}
            />
          </Box>
        </Stack>
        {!nav && (
          <Box
            sx={{
              height: "full",
              backgroundColor: "rgba(249,249,249,0.25)",
              textAlign: "center",
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <Typography
                key={page}
                sx={{
                  ml: 2,
                  display: "block",
                  fontWeight: "bold",
                  "&:hover": {
                    cursor: "pointer",
                    color: `${theme.palette.primary.main}`,
                  },
                  margin: "10px",
                  padding: "10px",
                }}
              >
                {page}
              </Typography>
            ))}
            {user ? (
              <>iuh</>
            ) : (
              <StyledButton onClick={handleLogin}>Login</StyledButton>
            )}
          </Box>
        )}
      </Container>
    </Box>
  );
}
export default Navbar;
