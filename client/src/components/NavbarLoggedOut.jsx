import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import { MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


const navItemStyle = {
    textDecoration: "none",
  
    my: 1,
    mx: 1.5,
    transitionDelay: "0.1s",
    "&:hover": {
      color: "#c7c7ff",
    },
  };
  
export default function NavbarLoggedOut() {
    const navigate = useNavigate();
  return (
    <Box >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
        <Box sx={{ flexGrow: 1, display: { md: 'flex' }, mt: 3, cursor: "pointer" }}>
         
         <img src="/illustrations/sensai logo.png" width="125px"/>

          </Box>
          
        <Box sx={{...navItemStyle, mr:3, cursor: "pointer"}} onClick={() => navigate("/login")}>
           Login
        </Box>
        
        

          <Button variant="contained" onClick={() => navigate("/signup")} sx={{mr: 3}}>Sign up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}