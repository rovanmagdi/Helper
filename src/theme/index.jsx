import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#198754",
      light: "#eefbf3",
      dark: "rgba(48,146,85,0.25)",
    },
    secondary: {
      main: "#1d2733",
      light: "#ffff",
      dark: "#00000",
    },
   
  },
  typography: {
    fontFamily:['Comfortaa', "cursive"].join(',')
    
  },
  button:{
    fontFamily:['Comfortaa', "cursive"].join(',')

  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },}
});
export { theme };
