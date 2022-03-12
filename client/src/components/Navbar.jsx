import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "Home", route: "/home" },
  { name: "Videos", route: "/videos" },
  { name: "Health", route: "/health" },
  { name: "Dashboard", route: "/dashboard" }
];
const settings = [
  { name: "Profile", route: "/profile" },
  { name: "Account", route: "/account" },
  { name: "Dashboard", route: "/dashboard" },
];
const navItemStyle = {
  textDecoration: "none",

  my: 1,
  mx: 1.5,
  transitionDelay: "0.1s",
  "&:hover": {
    color: "#9191ff",
  },
};

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
      
          <Box sx={{ mr: 2, display: { xs: "none", md: "flex"}, flexGrow: 1, cursor: "pointer"}} onClick={() => navigate("/")} noWrap>
              <img src="/illustrations/sensai logo.png"  width="125px" />
          </Box>
          <Box sx={{  display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
                
              }}
            >
             
              {pages.map((page) => (
                <Link
                  sx={{ textDecoration: "none" }}
                  href={page.route}
                  key={page.name}
                  color="primary.main"
                >
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography color="primary.main" textAlign="center">
                      {page.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
             
            </Menu>
          </Box>
     
          <Box sx={{ display: { xs: "flex", md: "none" } }} noWrap onClick={() => navigate("/")}>
           
              <img src="/illustrations/sensai logo.png" width="32%" />
            
          </Box>

          <Box sx={{  display: { xs: "none", md: "flex" }, mr: 3}}>
            {pages.map((page) => (
              <Link
                variant="button"
                href={page.route}
                sx={navItemStyle}
                key={page.name}
                onClick={handleCloseNavMenu}
              >
                {page.name}
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link
                  sx={{ textDecoration: "none" }}
                  href={setting.route}
                  key={setting.name}
                >
                  <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" color="primary.main">
                      {setting.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
              <Link sx={{ textDecoration: "none" }} href="/">
                <MenuItem onClick={logOut}>
                  <Typography textAlign="center" color="primary.main">
                    Logout
                  </Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
