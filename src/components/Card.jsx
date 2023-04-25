import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box, Button, Rating } from "@mui/material";
import img from "../assets/worker.png";
import { StyledButton } from "../styled/Button";
import { theme } from "../theme/index";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
export function ImgMediaCard({ title }) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        transition: "transform .5s",
        "&:hover": {
          transform: "scale(1.03)",
          cursor: "pointer",
        },
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{ color: "lightgray" }}>
        <CalendarMonthIcon />
        <Typography sx={{ px: 1 }}>01/12/2023</Typography>
      </CardActions>
    </Card>
  );
}

export default function ServicesCard({title}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Box sx={{ display: "flex" }}>
          <Box
            component="img"
            src={img}
            sx={{ width: "10%", height: "10%", borderRadius: "50%" }}
          />
          <Typography
            gutterBottom
            component="div"
            sx={{ fontWeight: "bold", pt: 1, px: 1 }}
          >
            {title}
            <Typography >Plumber</Typography>
            <Box sx={{pt:1,pb:1,display:"flex",alignItems:"center"}}>
              <LocationOnOutlinedIcon sx={{color:`${theme.palette.primary.main}`}}/>
              <Typography sx={{fontSize:"0.8rem",fontWeight:"bold",color:"gray",}}>Nasr City , Cairo
                </Typography> 
            </Box>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </Typography>
        <StyledButton sx={{height:'10%'}}>Order</StyledButton>
        </Box>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
