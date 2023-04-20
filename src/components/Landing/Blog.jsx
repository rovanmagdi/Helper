import React from 'react'
import ImgMediaCard from './Card'
import { Container, Grid } from '@mui/material'
import { StyledTypographyTitle } from "../../styled/Typography";

const BlogLanding = () => {
  return (
    <Container>
      <StyledTypographyTitle variant="h5" sx={{ m: 5 }}>
        Blogs
      </StyledTypographyTitle>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={4}>
      <ImgMediaCard />

        </Grid>
        <Grid item xs={12} md={12} lg={4}>
        <ImgMediaCard />

        </Grid>
        <Grid item xs={12} md={12} lg={4}>
        <ImgMediaCard />

        </Grid>
      </Grid>
    </Container>
  )
}

export default BlogLanding