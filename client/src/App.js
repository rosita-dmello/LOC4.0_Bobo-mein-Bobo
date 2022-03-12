import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/user/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import MyProfile from "./pages/user/MyProfile";
import OtpSignup from './pages/auth/OtpSignup';
import UserDetails from './pages/auth/UserDetails';
import {Box} from "@mui/material"


const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#ad1457",
    },
    secondary: {
      main: "#ffea00",
    },
  },
  typography: {
    fontFamily: "DM Sans, sans-serif",
    fontWeightRegular: 400,
    fontWeightBold: 700,
    // h1: {
    //   fontFamily: "Fredoka, sans-serif"
    // }
   
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
     
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/otpverification" element={<OtpSignup />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/userdetails" element={<UserDetails />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
 
  </ThemeProvider>
  );
}

export default App;
