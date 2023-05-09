import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Container } from "@mui/material";
import plumberImg from "../../assets/Plumber.png";
import light from "../../assets/light-bulb.png";
import air from "../../assets/air-conditioner.png";
import electronics from "../../assets/electronics.png";
import { StyledTypographyCarsoual } from "../../styled/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousal extends Component {
  render() {
    const imgs = [plumberImg, light, air, electronics,electronics];
    const settings = {
      dots: false,
      infinite: false,
      speed: 2000,
      autoplaySpeed: 2000,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      width: 150,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <Container>
        <Slider {...settings}>
          {imgs.map((img, id) => {
            return (
              <Box sx={{  margin: "auto" }} key={id}>
                <Box
                  sx={{
                    border: "1px solid rgba(25,174,117,0.2)",
                    boxShadow: "5px 5px 10px -3px  rgba(25,174,117,0.2)",
                    padding: "10px",
                    margin: "10px",
                    borderRadius: "10px",
                    transition: "transform .5s", 
                    "&:hover":{
                      transform: "scale(1.1)",
                      cursor: "pointer"
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={img}
                    sx={{
                      height: "20%",
                      width: "20%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />




                  
                  {img === plumberImg && (
                    <StyledTypographyCarsoual>plumber</StyledTypographyCarsoual>
                  )}
                  {img === light && (
                    <StyledTypographyCarsoual>electrical</StyledTypographyCarsoual>
                  )}
                  {img === air && (
                    <StyledTypographyCarsoual>
                    Air conditioning 
                    </StyledTypographyCarsoual>
                  )}
                  {img === electronics && (
                    <StyledTypographyCarsoual>
                      Appliances
                    </StyledTypographyCarsoual>
                  )}
                </Box>
              </Box>
            );
          })}
        </Slider>
      </Container>
    );
  }
}
