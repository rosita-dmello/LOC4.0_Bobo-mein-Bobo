import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import {loginPost} from "../data/api";
import { useContext, useState } from 'react';
import AnimatedPage from '../../components/AnimatedPage';
import { Navigate, useNavigate } from "react-router-dom";





export default function Login() {
  const navigate = useNavigate();
  const [navUser, setNavUser] = useState({});
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    
      console.log("Log in");
    
      // const response = await loginPost({
      //   email: data.get('email'),
      //   password: data.get('password'),
      // });
     
      // localStorage.setItem("user", JSON.stringify(response.data.user));
      // localStorage.setItem("token", response.data.token);
      navigate("/dashboard", {replace: true});
      
      // console.log(response.data.user);
      
  
   
    
     };
     
  return (<AnimatedPage>
  <Box>
  <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
       
        <Grid item sm={12} md={5} component={Paper} elevation={0} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
           
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/forgotpassword" variant="body2" color="secondary">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2" color="secondary">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>

            </Box>
          </Box>
        </Grid>
        <Grid
          item
          sm={false}
          md={7}
          sx={{
            backgroundImage: 'url(/illustrations/sign_in.svg)',
            backgroundRepeat: 'no-repeat',
            // backgroundSize: 'auto',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
      
      </Box>
      </AnimatedPage>
  );
}