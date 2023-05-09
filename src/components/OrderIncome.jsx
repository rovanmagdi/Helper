import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Api from "../Api/Api";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import complete from "../assets/complete.png";
import reject from "../assets/rejected.png";
import pending from "../assets/pending.png";
import progress from "../assets/progress.png";

export const OrderIncome = () => {
  const token = JSON.parse(localStorage.getItem("user"))?.token;
  const [orders, setOrder] = useState([]);
  useEffect(() => {
    Api.get("/incomming_orders", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log(response.data.incoming_orders);
        setOrder(response.data.incoming_orders);
      })
      .catch((e) => {
        console.log(e.response.data.message);
        // ErrorFun(e.response.data.message);
      });
  }, []);
  const [message, setMessage] = useState("");
  const handleStatus = (id, e) => {
    console.log(e);
   
    Api.post(
      "/change_status",
      { order_id: id, order_status: e },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        console.log(response.data.message);
        setMessage(response.data.message);
        Api.get("/incomming_orders", {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then((response) => {
              console.log(response.data.incoming_orders);
              setOrder(response.data.incoming_orders);
            })
            .catch((e) => {
              console.log(e.response.data.message);
              // ErrorFun(e.response.data.message);
            });
      })
      .catch((e) => {
        console.log(e.response.data.message);
        // ErrorFun(e.response.data.message);
      });
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ fontWeight: "bold" }}>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Address</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Status
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((row) => {
              return (
                <TableRow key={row?.id}>
                  <TableCell>{row?.area?.name}</TableCell>
                  <TableCell>{row?.user_address}</TableCell>
                  <TableCell>{row?.order_description}</TableCell>
                  <TableCell align="right">{row?.order_status}</TableCell>
                  <TableCell align="center">
                    {row?.order_status == "Pending" ? (
                      <Box>
                        <Box
                          component="img"
                          src={progress}
                          width="20%"
                          onClick={() => handleStatus(row.id, "In-Progress")}
                        />
                        <Box
                          component="img"
                          src={reject}
                          width="20%"
                          onClick={() => handleStatus(row.id, "Decline")}
                        />
                      </Box>
                    ) : (
                      <>
                        {row?.order_status == "In-Progress" ? (
                          <>
                            <Box
                              component="img"
                              src={reject}
                              width="20%"
                              onClick={() => handleStatus(row.id, "Decline")}
                            />

                            <Box
                              component="img"
                              src={complete}
                              width="20%"
                              onClick={() => handleStatus(row.id, "Completed")}
                            />
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
