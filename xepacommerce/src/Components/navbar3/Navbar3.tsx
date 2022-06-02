import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import "./Navbar3.css";


function Navbar3() {

    return (
        <> 
            <AppBar position="static" style={{ backgroundColor: "#F8F8FF", display: "flex", justifyContent: "center",  color: "#363636" }}>
                <Toolbar variant="dense">
                    <Grid xs={12} >
                        <Box display="flex" justifyContent='center' className='cor-barra3'>

                            <Box mx={1} className='cursor' paddingX={3}>
                                <Typography variant="h6" color="inherit">
                                    Home 
                                </Typography>
                            </Box>

                            <Box mx={1} className='cursor' paddingX={3}>
                                <Typography variant="h6" color="inherit">
                                    Produtos
                                </Typography>
                            </Box>

                            <Box mx={1} className='cursor' paddingX={3}>
                                <Typography variant="h6" color="inherit">
                                    Contato
                                </Typography>
                            </Box>

                            <Box mx={1} className='cursor' paddingX={3}>
                                <Typography variant="h6" color="inherit">
                                    Sobre nós 
                                </Typography>
                            </Box>

                        </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar3;