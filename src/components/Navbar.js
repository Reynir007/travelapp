import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/Virgin_America-Logo.wine.svg'
import { Divider } from '@mui/material';

const pages = ['Book', 'Check in', 'Manage'];
const options = ['Deals', 'Flying with us', 'Where we fly', 'Shop', 'Faq' ]
const options1 = ['Sign In', 'Sign Up']
const combined = [...pages, ...options, ...options1]

function ResponsiveAppBar() {
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

  return (
    <AppBar position="static" style={{background: "linear-gradient(90deg, hsla(279, 40%, 43%, 1) 0%, hsla(358, 75%, 50%, 1) 100%)"}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
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
                display: { xs:'block', sm: 'none' }
              }}
            >
              {combined.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          
          <Box sx={{ flexGrow: {xs:1, sm:0}, display: { xs: 'flex', md: 'flex' }, mr: 0 }} style={{marginTop:"10px", marginLeft:"-35px", position:"relative", top:"-12px"}}>
            <img height={65}  width={200} src={logo} alt ='logo'/>
          </Box>
          <Divider sx={{display: {xs: 'none', sm:'flex'}}} style={{borderWidth:"revert"}} variant="fullWidth"  orientation='vertical' flexItem/>    
          <Box sx={{ order: { xs:-1,sm:4}, flexGrow: {xs:1, sm:0}, display: { xs:'flex', sm: 'flex', md: 'none' } }} style={{marginTop:"10px"}}>
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
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', lg:'contents' } }} justifyContent="space-evenly">
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                
                sx={{ my: 0, color: 'white', display: 'block' , fontSize:"16px"}}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Divider sx={{display: {xs: 'none', md:'flex'}}} orientation='vertical' flexItem/>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
            {options.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 0, color: 'white', display: 'block', fontSize:"12px" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Divider sx={{display: {xs: 'none', sm:'flex'}}} orientation='vertical' flexItem/>
          <Box sx={{display: { xs: 'none', sm: 'flex' } }}>
          <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 0, color: 'white', display: { xs: 'none', md: 'none', lg: 'block' }, fontWeight:"light" }}
              >
                Elevate
              </Button>
            {options1.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 0, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
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
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs:'none', sm: 'block', md: 'none' }
              }}
            >
              {options.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;