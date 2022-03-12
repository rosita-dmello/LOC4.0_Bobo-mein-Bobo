import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
// import {loginPost} from "../data/api";
import { useContext, useState } from "react";

import { Navigate, useNavigate } from "react-router-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from '@mui/lab/DatePicker';

export default function UserDetails() {
  const navigate = useNavigate();
  const [date, setDate] = useState("");

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

  return (
    <Box>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid item sm={12} md={5} component={Paper} elevation={2} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <HealthAndSafetyOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Complete your Profile
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                label="Weight"
                id="weight"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">kg</InputAdornment>
                  ),
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Height"
                id="height"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">cms</InputAdornment>
                  ),
                }}
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date of Birth"
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField fullWidth
                    {...params}
                    sx={{my: 2}}
                    />}
                />
              </LocalizationProvider>
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
                Submit
              </Button>
              
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          sm={false}
          md={7}
          sx={{
            backgroundImage: "url(/illustrations/signin.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </Box>
  );
}
