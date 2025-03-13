import { useState } from 'react';
import { useLocation, Link as RouterLink, Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../pics/logo.png';

const pages = [
  { title: 'Home', href: '/' },
  { title: 'Route', href: '/route' },
  { title: 'FAQ', href: '/faq' },
  { title: 'About', href: '/about' },
  { title: 'Connect', href: '/connect' }
];

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [anchorElNav, setAnchorElNav] = useState(null);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: isHomePage && !trigger ? 'transparent' : 'rgba(27, 75, 102, 0.95)',
        boxShadow: isHomePage && !trigger ? 'none' : 1,
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link 
            href="/"
            sx={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <img 
              src={logo}
              alt="Seattle Super Saunter Logo"
              style={{
                height: '100px',
                paddingTop: '10px',
                width: 'auto'
              }}
            />
          </Link>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
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
                <MenuItem 
                  key={page.title} 
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.href}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo/Brand - Mobile */}
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            SUPER SAUNTER
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={RouterLink}
                to={page.href}
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2, 
                  color: 'white', 
                  display: 'block',
                  mx: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 