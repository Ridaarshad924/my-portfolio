import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import header from './Header.module.css'
import { Drawer } from '@mui/material';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); 
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold", color: "goldenrod" }}>
              Portfolio
            </Typography>
            <div className={header.navbar}>
              <NavLink to="/" className={({ isActive }) => { return isActive ? header.active : header.noactive }}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => { return isActive ? header.active : header.noactive }}>About</NavLink>
              <NavLink to="/project" className={({ isActive }) => { return isActive ? header.active : header.noactive }}>Projects</NavLink>
              <NavLink to="/contact" className={({ isActive }) => { return isActive ? header.active : header.noactive }}>Contact</NavLink>
            </div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                ml: 2,
                color: 'goldenrod',
                display: { xs: 'block', sm: 'none' }, 
              }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        <div className={header.drawer}>
          <NavLink to="/" className={({ isActive }) => (isActive ? header.active : header.noactive)} onClick={toggleDrawer}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? header.active : header.noactive)} onClick={toggleDrawer}>About</NavLink>
          <NavLink to="/project" className={({ isActive }) => (isActive ? header.active : header.noactive)} onClick={toggleDrawer}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? header.active : header.noactive)} onClick={toggleDrawer}>Contact</NavLink>
        </div>
      </Drawer>
    </>
  )
}

export default Header