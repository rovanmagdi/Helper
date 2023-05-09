import React, { useEffect, useState } from "react";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import blogImg from "../assets/blog.png";
import { StyledButton } from "../styled/Button";
import Api from "../Api/Api";
export const Blogs = () => {
  const [blog, setBlog] = useState([])
  useEffect(() => {

    Api
      .get(
        "/blogs"
      )
      .then((response) => {
        setBlog(response.data);
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });
  }, [])
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
          src={`https://helpers.amr-eissa.tech/public/${blogImg}`}
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
      {blog.map((blog) => {
        return (
          <Stack
            direction="row"
            sx={{
              m: 2,
              alignItems: "center",
              border: "1px solid lightgray",
              boxShadow: "5px 5px 4px -1px rgba(230,230,230,0.69)",
              p: 2,
              borderRadius: "10px",
            }}
          >

            <Box sx={{width:"200px"}}>
              <Box
                component="img"
                src={blog.img}
                sx={{ width: "80%" }}
              />
            </Box>


            <Box>
              <Typography component="h2" sx={{ fontWeight: "bold" }}>
                {blog.title}
              </Typography>
              <Typography dangerouslySetInnerHTML={{ __html: blog.description }} />

            </Box>
          </Stack>

        )
      })}
    </Container>
  );
};
