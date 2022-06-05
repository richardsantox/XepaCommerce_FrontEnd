import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import "./Navbar3.css";


function Navbar3() {

    return (
        <> 
            <AppBar position="static" style={{ backgroundColor: "#F8F8FF", display: "flex", justifyContent: "center",  color: "#363636" }}>
                <Toolbar variant="dense">
                    <Grid xs={12} >
                        <Box display="flex" justifyContent='center' className='cor-barra3'>
                            
                            <Link to='/home' className='link-paginas'>
                                <Box mx={1} paddingX={3}>
                                    <Typography >
                                        Home 
                                    </Typography>
                                </Box>
                            </Link>
                            
                            <Link to='produtos' className='link-paginas'>
                                <Box mx={1} paddingX={3}>
                                    <Typography >
                                        Produtos
                                    </Typography>
                                </Box>
                            </Link>
                                                        
                            <Link to='sobrenos' className='link-paginas'>
                                <Box mx={1} paddingX={3}>
                                    <Typography >
                                        Sobre nós 
                                    </Typography>
                                </Box>
                            </Link>
                            
                            <Link to='contato' className='link-paginas'>
                                <Box mx={1} paddingX={3}>
                                    <Typography >
                                        Contato
                                    </Typography>
                                </Box>
                            </Link>
                            
                        </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar3;