import React, { useEffect, useState } from "react";
import Api from "../Api/Api";
import { Box, Button, Fab, Grid, IconButton, Stack, Typography } from "@mui/material";
import Empty from '../assets/empty-cart.svg'
import CircularProgress from '@mui/material/CircularProgress';
import { theme } from "../theme";
export const Works = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [imageList, setImageList] = useState([]);
    const [newImageURLs, setnewImageURLs] = useState([]);
    const token = JSON.parse(localStorage.getItem("user")).token;
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("");

    const uploadPhoto = (e) => {
        setImage(e.target.files[0]);

        console.log(e.target.files[0]);


    };

    useEffect(() => {
        setLoading(true)

    }, [image])
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
            })
            .catch((e) => {
                console.log(e.response.data.message);
            });
    }





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
            <Stack direction="row" alignItems="center" justifyContent="space-between"><Box>
                <Typography
                    sx={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        mr: 2,
                        color: "gray",
                    }}
                >
                    Works
                </Typography>
            </Box>
                <Box>
                    <input accept="image/*" type="file"
                        onChange={(event) => uploadPhoto(event)}

                    />
                    <Button onClick={handleImg} sx={{ m: 0, border: `1px solid ${theme.palette.primary.main}` }}>
                        Upload
                    </Button>
                </Box>

            </Stack>
            {imageList !== [] ? 
            
            (<Grid container >
                {imageList?.map((image) => {
                    console.log(image);
                    return (
                        <>
                            <Grid item lg={6} md={12} sx={{ border: `3px solid ${theme.palette.primary.main}` }}>
                                <Box component="img"
                                    src={`https://amr-eissa.tech/helpers/public/${image.image_path}`} alt="img" sx={{ width: "100%", margin: "10px" }} />

                            </Grid>
                        </>
                    );
                })}
            </Grid>) : (<Box sx={{ display: "flex" ,justifyContent:"center"}}>

                <Box component="img" src={Empty} sx={{width:"400px"}}/> </Box>)}






        </>
    );
};
