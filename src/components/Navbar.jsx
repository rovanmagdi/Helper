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

const pages = ["Home", "About_US", "Services", "Blogs", "Contact_Us"];

function Navbar() {
  const [nav, setNav] = React.useState(true);
  const [active, setActive] = React.useState("Home");

  const nagivate=useNavigate()
  const handleClick=(link)=>
  {
    nagivate(`/${link}`)
    setActive(link)
  }

  return (
    <Box
      position="fixed"
      width="100%"
      sx={{ backgroundColor: "rgba(249,249,249,0.9);",zIndex:100 }}
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
                  onClick={()=>handleClick(page)}
                  sx={{
                    ml: 2,
                    display: "block",
                    fontWeight: "bold",
                    color: `${
                      active === page ? `${theme.palette.primary.main}` : "black"
                    } `,
                    "&:hover": {
                      cursor: "pointer",
                    
                    },
                  }}
                >
                  {page.includes("_")?(<>{page.replace("_"," ")}</>):(<>{page}</>)}
                </Typography>
              ))}
            </Box>

            <Button
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

            <StyledButton>Login</StyledButton>
          </Box>
        )}
      </Container>
    </Box>
  );
}
export default Navbar;
