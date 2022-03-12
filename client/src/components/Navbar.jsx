import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from "@mui/material/Link";

const pages = [
    {name: "Home", route: "/home"},
    {name: "Videos", route: "/videos"},
    {name: "Health", route: "/health"}
];
const settings = [
    {name: "Profile", route: "/profile"},
    {name: "Account", route: "/account"},
    {name: "Dashboard", route: "/dashboard"}
];
const navItemStyle = {
    textDecoration: "none",
    my: 1,
    mx: 1.5,
    transitionDelay: "0.1s",
    "&:hover": {
      color: "#f4f4f4",
    },
    color: "#fff"
  };

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
      localStorage.setItem("token", "")
  }

  return (
    <AppBar
    position="static"
    elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Link sx={{textDecoration: "none", color: "#fff"}} href="/">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Bobo Mein Bobo
          </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link sx={{textDecoration: "none"}} href={page.route} key={page.name} >
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography style={{color:'#8080FF'}} textAlign="center">{page.name}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
           Bobo Mein Bobo
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                 <Link sx={{textDecoration: "none"}} href={setting.route} key={setting.name}>
                 <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                   <Typography textAlign="center">{setting.name}</Typography>
                 </MenuItem>
                 </Link>
                 
              ))}
              <Link sx={{textDecoration: "none"}} href="/">
                 <MenuItem onClick={logOut}>
                   <Typography textAlign="center">Logout</Typography>
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