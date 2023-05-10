import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import blogImg from "../assets/blog.png";

import Api from "../Api/Api";
import { Loading } from "../components/Loading";
import Empty from "../assets/empty-cart.svg";

export const Blogs = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Api.get("/blogs")
      .then((response) => {
        setBlog(response.data);
        setLoading(true);
      })
      .catch((e) => {
   
      });
  }, []);
  return (
    <Container
      sx={{
        pt: 10,
        pb: 1,
        backgroundColor: "rgba(245,245,245,0.5)",
      }}
    >
      <Stack sx={{ textAlign: "center", gap: 8 }}>
        <Box
          component="img"
          src={`${blogImg}`}
          sx={{ width: "16%", position: "absolute" }}
        ></Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Blogs
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {" "}
          What is your Comments for Helper ?
        </Typography>
      </Stack>
      <Divider sx={{ pt: 8 }} />
      {loading ? (
        <>
        {blog.length>0?(<>{blog.map((blog) => {
            return (
              <Grid
                key={blog.id}
                container
                spacing={2}
                sx={{
                  mb: 4,
                  mt: 3,
                  alignItems: "center",
                  border: "1px solid lightgray",
                  boxShadow: "5px 5px 4px -1px rgba(230,230,230,0.69)",
                  // p: 2,
                  borderRadius: "10px",
                }}
              >
                <Grid item xs={4}>
                  <Box
                    component="img"
                    src={`https://helpers.amr-eissa.tech/public/${blog.image_path}`}
                    sx={{ width: "100%", height: "auto" }}
                  />
                </Grid>

                <Grid item xs={8}>
                  <Typography sx={{ fontWeight: "bold", padding: "1px" }}>
                    {blog.title}
                  </Typography>
                  <Typography
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                  />
                </Grid>
              </Grid>
            );
          })}
        </>
      ) : (
        <>
          <Box
        component="img"
        src={Empty}
        sx={{ width: "50%", margin: "auto", p: 5 }}
      />
        </>
      )}</>):(<><Loading /> </>)}
          
    </Container>
  );
};
