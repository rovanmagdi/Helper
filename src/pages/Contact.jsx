import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import contactImg from '../assets/contactUs.png'
export const Contact = () => {
  return (
   <Container  sx={{
    pt: 10,
    pb: 1,
    backgroundColor: "rgba(245,245,245,0.5)",
  }}>
     <Stack sx={{ textAlign: "center", gap: 8 }}>
        <Box
          component="img"
          src={contactImg}
          sx={{ width: "16%", position: "absolute" }}
        ></Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Contact Us
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {" "}
          How can help you ?
        </Typography>
      </Stack>
      <Divider sx={{ pt: 8 }} />
   </Container>
  )
}
