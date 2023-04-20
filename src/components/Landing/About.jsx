import { Box,Grid, Stack, Typography } from "@mui/material";
import React from "react";
import backgroundImg from "../../assets/row-bg-two.jpg";
import { theme } from "../../theme";
import aboutImg from '../../assets/aboutSection.png'
import workerImg from '../../assets/worker.png'
 import serviceImg from '../../assets/service.png'
 import WarrantyImg from '../../assets/Warranty.png'
 import priceImg from '../../assets/price.png'

const AboutLanding = () => {
  return (
    <Stack
      sx={{
        backgroundImage: `url(${backgroundImg})`,
        height: "auto",
        alignItems: "center",
        ml: 3,

        justifyContent: "space-around",

        "@media(max-width: 991px)": {
          flexDirection: "column",

        },
      }}
      direction="row"
    ><Box
        component="img"
        src={aboutImg}
        
        sx={{
          width: "50%",
          "@media(max-width: 991px)": {
            marginLeft: 0,
            maxWidth: "90%",
          },
          "@media(max-width: 600px)": {
            marginLeft: 0,
            maxWidth: "100%",
          },
        }}
      />
      <Box
        sx={{
          "@media(max-width: 991px)": {
            marginLeft: 0,
            maxWidth: "80%",

          },
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{ color: `${theme.palette.primary.main}`, fontWeight: "bold" }}
        >
          Why choose Technician?
        </Typography>
        <Typography sx={{ mt: 2, width: { lg: '70%', md: "100%" } }}>
          Technician provides you with distinguished service at transparent prices and seeks your peace of mind. Request all maintenance services from one place
        </Typography>
        <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
          <Grid item lg={4} md={6}  sx={{display:"flex"}}>
            <Box component="img" src={workerImg} sx={{height:"40px",width:"40px"}}/>
            <Typography sx={{mx:1,fontWeight:"bold"}}>
              Qualified and reliable technicians
            </Typography>
          </Grid>
          <Grid item lg={4} md={6}  sx={{display:"flex"}}>
            <Box component="img" src={serviceImg} sx={{height:"40px",width:"40px"}}/>
            <Typography sx={{mx:1,fontWeight:"bold"}}>
            Reliable service
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={4} md={6}  sx={{display:"flex"}}>
            <Box component="img" src={WarrantyImg} sx={{height:"40px",width:"40px"}}/>
            <Typography sx={{mx:1,fontWeight:"bold"}}>
            Warranty on all maintenance work
            </Typography>
          </Grid>
          
          <Grid item lg={4} md={6}  sx={{display:"flex"}}>
            <Box component="img" src={priceImg} sx={{height:"40px",width:"40px"}}/>
            <Typography sx={{mx:1,fontWeight:"bold"}}>
            Clear prices for all services
            </Typography>
          </Grid>
        </Grid>

      </Box>

    </Stack>
  );
};

export default AboutLanding;
