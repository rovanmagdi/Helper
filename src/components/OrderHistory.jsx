import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Api from "../Api/Api";
import Empty from "../assets/empty-cart.svg";
import { Loading } from "./Loading";
import { theme } from "../theme";

export const OrderHistory = () => {
  const token = JSON.parse(localStorage.getItem("user")).token;
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Api.get(`/order_history`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        setOrder(response.data.orders);
        console.log(response.data.orders);
        setLoading(true);
      })
      .catch((e) => {
        // ErrorFun(e.response.data.message);
      });
  }, []);
  return (
    <>
    <Box

>
    <Typography sx={{
        fontWeight: "bold",
        fontSize: "40px",
        mr: 2,
        color: `${theme.palette.primary.main}`,
    }}>

        Order History
    </Typography>
    <Typography sx={{ fontSize: "0.8rem", color: "gray", width: "90%", mx: 1 ,mb:2}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem non impedit aspernatur harum culpa saepe quidem ipsam. Aspernatur, at voluptate neque nulla eveniet natus laudantium aperiam corporis vitae distinctio molestias!
            </Typography>

</Box>
    <Grid container spacing={2}>


      {loading ? (
        <>
          {order.length >= 1 ? (
            <>
              {order.map((a,index) => {
                return (
                  <Grid item lg={6} key={index}>
                    <Stack
                      sx={{
                        width: "auto",
                        border: "1px solid gray",
                        p: 2,
                        borderRadius: "10px",
                      }}
                    >
                      <>
                        <Typography sx={{ fontWeight: "bold", mt: 1, mb: 1 }}>
                          {a?.area?.name}
                        </Typography>

                        <Typography sx={{ fontSize: "13px", color: "gray" }}>
                          {a?.order_description}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            sx={{ fontWeight: "bold", fontSize: "10px", m: 1 }}
                          >
                            {a?.user_address}
                          </Typography>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <LocationOnIcon
                              sx={{ color: "gray", fontSize: "15px" }}
                            />
                            <Typography
                              sx={{
                                fontWeight: "bold",
                                fontSize: "10px",
                                m: 1,
                              }}
                            >
                              {a?.user_address}, Cairo
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              backgroundColor:
                                a?.order_status === "Pending"
                                  ? "rgba(255,210,93,0.8)"
                                  : a?.order_status === "In-Progress"
                                  ? "rgba(114,192,255,0.8)"
                                  : a?.order_status === "Decline"
                                  ? "rgba(255,153,158,0.8)"
                                  : "rgba(113,255,141,0.8)",
                              borderRadius: "10px",
                              fontWeight: "bold",
                              p: 1,
                              color: "white",
                            }}
                          >
                            {a?.order_status}
                          </Box>
                        </Box>
                        <Typography sx={{ color: "gray", fontSize: "15px" }}>
                          {new Date(a?.updated_at).toLocaleDateString()}
                        </Typography>
                      </>
                    </Stack>
                  </Grid>
                );
              })}
            </>
          ) : (
            <>
              <Box
                component="img"
                src={Empty}
                sx={{ width: "30%", margin: "auto", p: 5 }}
              />
            </>
          )}
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </Grid>
    </>
  );
};
