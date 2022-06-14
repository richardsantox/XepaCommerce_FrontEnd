import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Grid, Typography } from '@material-ui/core';
import { Box, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { AccountBox } from '@material-ui/icons';
import Navbar2 from '../navbar2/Navbar2';
import Navbar3 from '../navbar3/Navbar3';
import "./Navbar.css";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';


export default function Navbar() {

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
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  function goLogout() {
    if (token != '') {
      setToken('');
      toast.info('Você foi deslogado com sucesso!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      })
      navigate('/');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Você não está logado!',
      });
    }
  }

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
              <Box display="flex" justifyContent="flex-end">

                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className='login'
                    color="inherit"
                  >
                    <AccountBox className='login' />
                    <Typography className='login'>
                      Conta
                    </Typography>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem>
                      <Link to='/logar' className='text-decorator-none'>
                        <Typography className='texto-menu-item'>
                          Login
                        </Typography>
                      </Link>
                    </MenuItem>

                    <MenuItem onClick={goLogout}>
                      <Typography className='texto-menu-item'>
                        Logout
                      </Typography>
                    </MenuItem>
                  </Menu>

                </div>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Navbar2 />
      <Navbar3 />
    </div >

  );
}
