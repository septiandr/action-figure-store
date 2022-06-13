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
import AdbIcon from '@mui/icons-material/Adb';
import './nav.css';

import data from '../data.json'
const pages = ['Profile', 'Portofolio', 'Skill'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null); 
    const [val, setVal] = React.useState(null); 
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = (e) => {
      setAnchorElNav(null);
      setVal(e.target.value)
    };

    switch (val) {
        case 'Profile':
            console.log('Profile');
          break;
        case 'Portofolio':
            console.log('Porto')
          break;
        case 'Skill':
           console.log('skill cok')
          break;
      }
  return (
    <AppBar position="fixed" >
      <Container maxWidth="xl" style={{backgroundColor:'#140f07', boxShadow:'0px 0px 10px #eaeaea'}} >
        <Toolbar disableGutters >
          <AdbIcon  sx={{ display: { xs: 'none', md: 'flex' },fontSize:50, mr: 1 }} />
          <div className='left'>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'poppins',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                {data[0].profil.name}
            </Typography>
            <Typography
                variant="h7"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                fontFamily: 'Roboto',
                display: { xs: 'none', md: 'flex' },
                fontWeight: 500,
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                {data[0].working.job}
            </Typography>
          </div>
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
                <MenuItem >
                  <Button style={{fontWeight:500,color:'black',border:'1px black solid',width:'100%'}} value={page}  onClick={handleCloseNavMenu}  textAlign="center">{page}</Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <div style={{display:'flex', flexDirection:'column'}}>
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexDirection:'column',
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                fontSize:15
                }}
            >
                {data[0].profil.name}
            </Typography>
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 0,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                fontSize:10,
                flexDirection:'column',
                }}
            >
                {data[0].working.job}
            </Typography>
          </div>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },right:80, position:'fixed',justifyContent:'space-between',width:'300px' }}>
                {pages.map((page) => (
                <Button
                    value={page}
                    onClick={handleCloseNavMenu}
                    style={{fontWeight:'bold',color:'#eaeaea'}}
                    className="nav"
                    
                >
                    {page}
                </Button>
                ))}
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;