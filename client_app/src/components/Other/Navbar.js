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
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FlightIcon from '@mui/icons-material/Flight';
import PublicIcon from '@mui/icons-material/Public';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext'; // Import UserContext

const pages = ['Deals', 'Discover'];
const settings = ['Profile', 'My Flights'];

function Navbar() {
  const { user } = useContext(UserContext); // Access user context
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    if (user) {
      // Open user settings if user is logged in
      setAnchorElUser(event.currentTarget);
    } else {
      // Redirect to signin page if user is not logged in
      navigate('/signin');
    }
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
 

  const handleNavigation = (path) => {
    navigate(path);
    handleCloseUserMenu();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className='bg-gray-200 text-gray-800'>
        <Toolbar disableGutters>
          {/* Desktop Devices Navbar */}
          <FlightIcon
            className='rounded-full'
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, transform: 'rotate(90deg)', color: 'white', backgroundColor: "#4b1c7d" }}
          />
          <Typography
            className='cursor-pointer'
            variant="h6"
            noWrap
            component="p"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PLANE SCAPE
          </Typography>

          {/* Hamburger Menu (Navbar for mobile devices) */}
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => navigate('/' + page.toLowerCase())}>
                  <Typography className='text-gray-800' sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <FlightIcon
            className='rounded-full'
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, transform: 'rotate(90deg)', color: 'white', backgroundColor: "#4b1c7d" }}
          />
          <Typography
            variant="h5"
            noWrap
            component="p"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PLANE SCAPE
          </Typography>

          {/* Deals and Discover for Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 1, mr: 2 }}>
            <div className='flex justify-center items-center gap-1'>
              <LocalOfferIcon sx={{ fontSize: 'medium', color: '#4b1c7d' }} />
              <p>{pages[0]}</p>
            </div>
            <div className='flex justify-center items-center gap-1 ml-4'>
              <PublicIcon sx={{ fontSize: 'medium', color: '#4b1c7d' }} />
              <p>{pages[1]}</p>
            </div>
          </Box>

          {/* User Avatar / Sign In */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={user ? "Open settings" : "Sign In"}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user ? (
                  <>
                    <Avatar alt={user.firstName} src={`http://localhost:5001/${user.photo}`} />
                    <Typography sx={{ ml: 1, color: 'gray' }}>{user.firstName}</Typography>
                  </>
                ) : (
                  <Avatar alt="Guest" src="/static/images/avatar/2.jpg" />
                )}
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
                <MenuItem key={setting} onClick={() => handleNavigation(setting === 'Profile' ? '/profile' : setting === 'My Flights' ? '/myflights' : '')}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
