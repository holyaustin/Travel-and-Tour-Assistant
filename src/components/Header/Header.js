import React from 'react';
import { NavLink } from 'react-router-dom';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Box } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles.js';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <IconButton aria-label="app" color="inherit">
          <Menu />
        </IconButton>
        <img src="logo.png" alt="logo" className={classes.logo} />
        <Typography variant="h5" className={classes.title2}>
          Travel and Tour Assistant
        </Typography>

        <Typography variant="h6" className={classes.title2}>
          <NavLink
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? '#000' : '#fff',
              background: isActive ? 'white' : '#rrggbbaa',
            })}
            to="/"
          >
            Home
          </NavLink>
        </Typography>

        <Typography variant="h6" className={classes.title2}>
          <NavLink
            className="nav-link"
            to="/Hire"
            style={({ isActive }) => ({
              color: isActive ? '#000' : '#fff',
              background: isActive ? 'white' : '#rrggbbaa',
            })}
          >
            Hire a Tour Guide
          </NavLink>
        </Typography>

        <Typography variant="h6" className={classes.title2}>
          <NavLink
            className="nav-link"
            to="/Become"
            style={({ isActive }) => ({
              color: isActive ? '#000' : '#fff',
              background: isActive ? 'white' : '#rrggbbaa',
            })}
          >
            Become a Tour Guide
          </NavLink>
        </Typography>

        <Typography variant="h6" className={classes.title2}>
          <NavLink
            className="nav-link"
            to="/Community"
            style={({ isActive }) => ({
              color: isActive ? '#000' : '#fff',
              background: isActive ? 'white' : '#rrggbbaa',
            })}
          >
            Join Community
          </NavLink>
        </Typography>

        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            <NavLink
              className="nav-link"
              to="/Explore"
              style={({ isActive }) => ({
                color: isActive ? '#000' : '#fff',
                background: isActive ? 'white' : '#rrggbbaa',
              })}
            >
              Explore new places
            </NavLink>
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
