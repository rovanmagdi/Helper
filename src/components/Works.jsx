import React, { useEffect, useState } from "react";
import Api from "../Api/Api";
import { Alert, Box, Button, Container, Fab, Grid, IconButton, Stack, Typography } from "@mui/material";
import { theme } from "../theme";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddIcon from '@mui/icons-material/Add';
import { Loading } from "./Loading";


export const Works = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [imageList, setImageList] = useState([]);
    const [file, setFile] = useState('')
  

    const token = JSON.parse(localStorage.getItem("user")).token;
    const [alert, setAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("");

    const uploadPhoto = (e) => {
        setImage(e.target.files[0]);

        console.log(e.target.files[0]);

        setFile(e.target.files[0].name)
    };

    useEffect(() => {
        setLoading(true)
    }, [imageList])
    const handleImg = () => {
        const file = image
        const formData = new FormData();
        formData.append("image", file);

        Api.post(`/store_specialist_work_images`,
            formData, {
            headers: { Authorization: `Bearer ${token}` },

        })
            .then((response) => {
                console.log(response.data);
                setImageList(response.data.images);
                setAlert(true)
                setTimeout(() => {
                    setAlert(false)
                }, 4000);

            })
            .catch((e) => {
                console.log(e.response.data.message);
            });
    }


    // const imgs = [plumberImg, light, air, electronics,electronics];
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 4,
        initialSlide: 0,
        width: 150,
        swipeToSlide: true,
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


    useEffect(() => {
        Api.get(`/get_specialist_work?user_id=${user.user.id}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => {
                console.log(response.data);
                setImageList(response.data.images);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [user.user.id, token]);
    return (
        <>
            {alert && <><Alert
                variant="filled"
                severity="success"
                sx={{ position: "fixed", top: 90, right: 0, zIndex: 100 }}
            >
                Image uploaded Successful ..
            </Alert></>}
            <Stack direction="row" alignItems="center" justifyContent="space-between"><Box>
                <Box

                >
                    <Typography sx={{
                        fontWeight: "bold",
                        fontSize: "40px",
                        mr: 2,
                        color: `${theme.palette.primary.main}`,
                    }}>

                        Works
                    </Typography>

                </Box>
            </Box>
                <Box>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file"
                            onChange={(event) => uploadPhoto(event)}

                        />
                        <AddIcon sx={{ backgroundColor: `${theme.palette.primary.main}`, color: "white", p: 1, borderRadius: "50%" }} />
                    </IconButton>
                    {file}

                    <Button onClick={handleImg} sx={{ m: 0, border: `1px solid ${theme.palette.primary.main}` }}>
                        Upload
                    </Button>
                </Box>

            </Stack>
            <Typography sx={{ fontSize: "0.8rem", color: "gray", width: "90%", mx: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem non impedit aspernatur harum culpa saepe quidem ipsam. Aspernatur, at voluptate neque nulla eveniet natus laudantium aperiam corporis vitae distinctio molestias!
            </Typography>



            {loading ? 
            (<><Container>
                <Slider {...settings}>
                    {imageList?.map((img, index) => {
                        return (
                            <Box sx={{ margin: "auto" }} key={index}>
                                <Box
                                    sx={{
                                        // border: "1px solid rgba(25,174,117,0.2)",
                                        // boxShadow: "5px 5px 10px -3px  rgba(25,174,117,0.2)",
                                        padding: "10px",
                                        margin: "10px",
                                        borderRadius: "10px",
                                        transition: "transform .5s",
                                        "&:hover": {
                                            transform: "scale(1.1)",
                                            cursor: "pointer"
                                        }
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={`https://amr-eissa.tech/helpers/public/${img.image_path}`}
                                        sx={{
                                            height: "300px",
                                            width: "500px",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                        }}
                                    />


                                </Box>
                            </Box>
                        );
                    })}
                </Slider>
            </Container></>) : (<><Loading /></>)}













        </>
    );
};
