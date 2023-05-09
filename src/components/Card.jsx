import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box, Button, Rating, Stack } from "@mui/material";
import img from "../assets/worker.png";
import { StyledButton } from "../styled/Button";
import { theme } from "../theme/index";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
export function ImgMediaCard({ title ,image,description,date}) {
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
        image={`https://helpers.amr-eissa.tech/public/${image}`}
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
       
      </CardContent>
      <CardActions sx={{ color: "lightgray" }}>
        <CalendarMonthIcon />
        <Typography sx={{ px: 1 }}>{date}</Typography>
      </CardActions>
    </Card>
  );
}

export default function ServicesCard({ title, area, city, job, imgJob,rate,click }) {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={click}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`https://helpers.amr-eissa.tech/public/${imgJob}`}
      />
      <CardContent>
        <Box sx={{ display: "flex" ,alignItems:"center"}}>
          <Box
            component="img"
            src={img}
            sx={{ width: "10%", height: "10%", borderRadius: "50%" }}
          />
          <Typography 
            variant="p"
            >

            {title}
          </Typography>
            </Box>
          <Typography
            gutterBottom
            component="p"
            sx={{ fontWeight: "bold", pt: 1, px: 1 }}
          >
            <Typography >
              {job}
            </Typography>
            <Typography sx={{ pt: 1, pb: 1, display: "flex", alignItems: "center" }}>
              
              <LocationOnOutlinedIcon
                sx={{ color: `${theme.palette.primary.main}` }}
              />
             
              <Typography
                component={"p"}
                variant={"body2"}
                sx={{ fontSize: "0.8rem", fontWeight: "bold", color: "gray" }}
              >
                {area} , {city}
              </Typography>
            </Typography>
            
            <Rating name="half-rating" defaultValue={rate} precision={0.5} />
          </Typography>
      </CardContent>
    
    </Card>
  );
}
