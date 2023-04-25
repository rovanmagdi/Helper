import React, { useEffect } from "react";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import blogImg from "../assets/blog.png";
import { StyledButton } from "../styled/Button";
export const Blogs = () => {
  useEffect(()=>
  {
    sessionStorage.setItem("key", "value");
  },[])
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
          src={blogImg}
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
        <Box>
          <Box
            component="img"
            src="https://www.b8ak.com/wp-content/uploads/2023/04/images-3.jpg"
            sx={{ width: "80%" }}
          />
        </Box>
        <Box>
          <Typography component="h2" sx={{ fontWeight: "bold" }}>
            Techincal Support
          </Typography>
          <Typography sx={{ pt: 3, pb: 3 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            consectetur magnam labore architecto a velit dolores alias ut
            corrupti repudiandae odio, nam itaque laudantium? Placeat veniam
            tempora culpa eligendi reiciendis.
          </Typography>
          <StyledButton>Read more</StyledButton>
        </Box>
      </Stack>  <Stack
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
        <Box>
          <Box
            component="img"
            src="https://www.b8ak.com/wp-content/uploads/2023/04/images-3.jpg"
            sx={{ width: "80%" }}
          />
        </Box>
        <Box>
          <Typography component="h2" sx={{ fontWeight: "bold" }}>
            Techincal Support
          </Typography>
          <Typography sx={{ pt: 3, pb: 3 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            consectetur magnam labore architecto a velit dolores alias ut
            corrupti repudiandae odio, nam itaque laudantium? Placeat veniam
            tempora culpa eligendi reiciendis.
          </Typography>
          <StyledButton>Read more</StyledButton>
        </Box>
      </Stack>

    
    </Container>
  );
};
