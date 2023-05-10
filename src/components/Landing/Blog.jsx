import React, { useState,useEffect } from "react";
import { ImgMediaCard } from "../Card";
import { Container, Grid } from "@mui/material";
import { StyledTypographyTitle } from "../../styled/Typography";
import Api from "../../Api/Api";
import { Loading } from "../Loading";

const BlogLanding = () => {

  const [blog, setBlog] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {

    Api
      .get(
        "/blogs"
      )
      .then((response) => {
        setBlog(response.data);
        setLoading(false)
      })
      .catch((e) => {
        
      });
  }, [])
  return (
    <Container>
      <StyledTypographyTitle variant="h5" sx={{ m: 5 }}>
        Blogs
      </StyledTypographyTitle>
      {!loading?(<>
      <Grid container spacing={3}>
        {blog.slice(0,2)?.map((e)=>{
          return(
        <Grid item xs={12} md={12} lg={4}>
          <ImgMediaCard title={e.title} description={e.description}image={e.image_path} date={new Date(e.updated_at).toLocaleDateString()}/>
        </Grid>

          )
        })}
      </Grid>
      </>):(<><Loading/></>)}
      
    </Container>
  );
};

export default BlogLanding;
