import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import DoneAllIcon from '@mui/icons-material/DoneAll';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


export default function ForgotPassword() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     emailOtp: data.get('emailOtp'),
  //     passwordOtp: data.get('phoneOtp'),
  //   });
  // };
  const[selected, setSelected] = React.useState(false);
  const[choice, setChoice] = React.useState("");
  const sendToPhone = (event) => {
    setSelected(true);
    setChoice("Phone");
    //send OTP to phone
    
  }
  const sendToEmail = (event) => {
    setSelected(true);
    setChoice("Email");
    //send OTP to email
    
  }
  const verifyOtp = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    //send otp
    console.log({
      otp: data.get('otp'),
    });
  }
 
  return ( <Container component="main" maxWidth="xs" sx={{marginBottom: 3}}>
        <CssBaseline />
        {selected ? 
          <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <DoneAllIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {`OTP sent to ${choice}`}
          </Typography>
          <Box component="form" onSubmit={verifyOtp} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="otp"
              label="Enter OTP"
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
        :
          <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <QuestionMarkIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Send OTP for verification to:
          </Typography>
          <Box sx={{ mt: 1 }}>
          <Button
              onClick={sendToPhone}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 3 }}
            > Phone </Button>
            <Button
              onClick={sendToEmail}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 3 }}
            >
              Email
            </Button>
          </Box>
        </Box>
        }
        
      </Container>
    
  );
}