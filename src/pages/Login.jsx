import { Button, FormControl } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'


export default function Login() {
  return (
    <Container sx={{  backgroundColor: "rgba(245,245,245,0.5)"}}>
       
       <FormControl sx={{ display: "block", my: 4 }}>
          <StyledFormInput
            id="outlined-basic"
            label="Username or Email"
            variant="outlined"
            name="userNameOrEmail"
            // value={userNameOrEmail}
            // onChange={handleChange}
            fullWidth
          />
          <StyledFormInput
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="inputPassword"
            // value={inputPassword}
            // onChange={handleChange}
            fullWidth
            type="password"
          />
         
          <Button
            variant="contained"
            fullWidth
          
          >
            Login
          </Button>
        
          {/* <StyledBlackTxt>Don't have an account?</StyledBlackTxt>{" "} */}
          <Button >
            sign in
            {/* <StyledGreenTxt>Sign up</StyledGreenTxt> */}
          </Button>
        </FormControl>
    </Container>
  )
}