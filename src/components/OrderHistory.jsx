import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const OrderHistory = () => {
  return (
    <Grid container spacing={2}>
    <Grid item lg={6}>
        <Stack
            sx={{
                width: "auto",
                border: "1px solid gray",
                p: 2,
                borderRadius: "10px",
            }}
        >


            <Typography sx={{ fontWeight: "bold", mt: 1, mb: 1 }}>
                Name
            </Typography>

            <Typography sx={{ fontSize: "13px", color: "gray" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ad repellendus error, sint quae dicta nisi expedita sit
                iusto officia assumenda culpa corrupti facilis temporibus
                perferendis, voluptatum, quibusdam maiores beatae.
                Reiciendis?
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography
                    sx={{ fontWeight: "bold", fontSize: "10px", m: 1 }}
                >
                    Address
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LocationOnIcon
                        sx={{ color: "gray", fontSize: "15px" }}
                    />
                    <Typography
                        sx={{ fontWeight: "bold", fontSize: "10px", m: 1 }}
                    >
                        Nasr City, Cairo
                    </Typography>
                </Box>
                <Box sx={{
                    backgroundColor: "#71B57E", borderRadius: "10px",
                    fontWeight: "bold", p: 1, color: "white"
                }}>
                    status
                </Box>

            </Box>
            <Typography sx={{ color: "gray", fontSize: "15px" }}>
                1/2/2020
            </Typography>
        </Stack>
    </Grid>
   
</Grid>
  )
}
