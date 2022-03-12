import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

export default function NavbarLoggedOut() {
    const navigate = useNavigate();
  return (
    <Box >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
         
         <img src="/illustrations/sensai logo.png" width="100px"/>

          </Box>
          <Button variant="contained" onClick={() => navigate("/login")}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}