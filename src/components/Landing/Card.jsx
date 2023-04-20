import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: "100%",transition: "transform .5s", 
    "&:hover":{
      transform: "scale(1.03)",
      cursor: "pointer"
    } }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:"bold"}}>
        Maintain your home regularly
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{color:"lightgray"}}>
        <CalendarMonthIcon/>
        <Typography sx={{px:1}}>01/12/2023</Typography>
      </CardActions>
    </Card>
  );
}