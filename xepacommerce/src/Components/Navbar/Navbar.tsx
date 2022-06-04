import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Navbar2 from '../navbar2/Navbar2';
import Navbar3 from '../navbar3/Navbar3';
import "./Navbar.css";
import { AccountBox } from '@material-ui/icons';
import Login from '../Login/Login';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);


export default function Navbar() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static" className='cor-barra'>
        <Toolbar className='size-barra'>
          <Grid container direction="row">
            <Grid xs={6} >
              <Box alignItems='center' paddingTop={1}>
                <a href="https://www.facebook.com/generationbrasil" target="_blank">
                  <FacebookIcon className='redes' />
                </a>
                <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                  <InstagramIcon className='redes' />
                </a>
                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                  <LinkedInIcon className='redes' />
                </a>
              </Box>
            </Grid>
            <Grid xs={6}>
              <Link to='/logar' className='text-decorator-none'>
                <Box display="flex" justifyContent="flex-end">
                  <Button color="inherit" className='login'>
                    <AccountBox className='login' />
                    <Typography className='login'>
                      Login
                    </Typography>
                  </Button>
                </Box>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Navbar2 />
      <Navbar3 />
    </div>

  );
}
