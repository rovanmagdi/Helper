import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

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
import progress from "../assets/progress.png";
import Empty from "../assets/empty-cart.svg";
import Lock from "../assets/lock.png";
import { Loading } from "./Loading";
import  { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { theme } from "../theme";

export const OrderIncome = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontWeight:"bold",
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const token = JSON.parse(localStorage.getItem("user"))?.token;
  const [orders, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Api.get("/incomming_orders", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        setLoading(false)
        setOrder(response.data.incoming_orders);
        console.log(response.data.incoming_orders);
      })
      .catch((e) => {
        // ErrorFun(e.response.data.message);
      });
  }, []);
  const [message, setMessage] = useState("");
  const handleStatus = (id, e) => {
    Api.post(
      "/change_status",
      { order_id: id, order_status: e },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        setMessage(response.data.message);
        Api.get("/incomming_orders", {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((response) => {
            setOrder(response.data.incoming_orders);
          })
          .catch((e) => {
            // ErrorFun(e.response.data.message);
          });
      })
      .catch((e) => {
        // ErrorFun(e.response.data.message);
      });
  };
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
    {!loading?( <>
      {orders?.length > 0 ? (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ fontWeight: "bold" }}>
                <StyledTableCell sx={{ fontWeight: "bold" }}>#</StyledTableCell>

                  <StyledTableCell sx={{ fontWeight: "bold" }}>Name</StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: "bold" }}>Address</StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: "bold" }}>Description</StyledTableCell>
                  <StyledTableCell align="right" sx={{ fontWeight: "bold" }}>
                    Status
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: "bold" }}>
                    Action
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders?.map((row, index) => {
                  return (
                    <StyledTableRow key={index} sx={{backgroundColor:
                    row?.order_status === "Completed"?"rgba(113,255,141,0.2)":
                    row?.order_status==="Pending" ?"rgba(255,210,93,0.8)":
                    row?.order_status==="In-Progress"? "rgba(114,192,255,0.8)"
                    :"rgba(255,153,158,0.4)"}}>
                      <StyledTableCell>{index+1}</StyledTableCell>

                      <StyledTableCell>{row?.area?.name}</StyledTableCell>
                      <StyledTableCell>{row?.user_address}</StyledTableCell>
                      <StyledTableCell>{row?.order_description}</StyledTableCell>
                      <StyledTableCell align="right">{row?.order_status}</StyledTableCell>
                      <StyledTableCell align="center">
                        {row?.order_status === "Pending" ? (
                          <Box>
                            <Box
                              component="img"
                              src={progress}
                              width="20%"
                              onClick={() =>
                                handleStatus(row.id, "In-Progress")
                              }
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
                            {row?.order_status === "In-Progress" ? (
                              <>
                                <Box
                                  component="img"
                                  src={reject}
                                  width="20%"
                                  onClick={() =>
                                    handleStatus(row.id, "Decline")
                                  }
                                />

                                <Box
                                  component="img"
                                  src={complete}
                                  width="20%"
                                  onClick={() =>
                                    handleStatus(row.id, "Completed")
                                  }
                                />
                              </>
                            ) : (
                              <>
                               <Box
                              component="img"
                              src={Lock}
                              width="20%"
                             
                            /></>
                            )}
                          </>
                        )}
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <Box
          component="img"
          src={Empty}
          sx={{ width: "400px", margin: "auto" }}
        />
      )}
    </>):(<><Loading/></>)}
    </>
   
  );
};
