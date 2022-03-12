import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DoneAllIcon from '@mui/icons-material/DoneAll';
// import { verifySignupOtp } from '../data/api';
import { useContext, useState } from 'react';

import { Navigate, useNavigate } from "react-router-dom";



const theme = createTheme();

export default function OtpSignup() {
 
  const navigate = useNavigate();
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    // eslint-disable-next-line no-console
    // const response = await verifySignupOtp({
    //   checkEmailOTP: data.get('emailOtp'),
    //   checkPhoneOTP: data.get('phoneOtp'),
    //   userid: user.userID
    // }, token);
    // setIsLoggedIn(true);
    // localStorage.setItem("user", JSON.stringify(response.data.user));
   
    // setCurrentUser(response.data.token, response.data.user);
    navigate("/userdetails", {replace: true});
   
  };

  return (
      <Container component="main" maxWidth="xs" sx={{marginBottom: 3, minHeight: "50vh"}}>
        <CssBaseline />
        <Box
          sx={{
            my: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <DoneAllIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Verify Email
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="emailOtp"
              label="OTP sent to Email"
              name="emailOtp"
              autoFocus
            />
    
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 3 }}
            >
              Verify
            </Button>
          </Box>
        
        </Box>
        
      </Container>
   
  );
}