import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export const Loading = () => {
  return (
    <Box sx={{margin:"auto",maxWidth:"10%",p:5}}>
        <Box>
        <CircularProgress/>
        </Box>
        </Box>
  )
}
