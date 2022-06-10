import { Container, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./Equipe.css";
import React from "react";

function Equipe() {
    return (
        <>
            <Container>
                <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='tituloProduto'>Time do Xepa</Typography>
                <Box className='box-equipe'>
                
                </Box>
            </Container>

        </>
    );
}

export default Equipe;