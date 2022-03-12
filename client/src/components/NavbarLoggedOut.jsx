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
        
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { md: 'flex'}, flexGrow: 1 }}
            color="primary.main"
          >
            Bobo Mein Bobo
          </Typography>
          
          <Button variant="contained" onClick={() => navigate("/login")}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}