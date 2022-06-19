import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import './Banner.css'
import { Link } from 'react-router-dom';


function Banner() {
    return (
        <>
            <Box className='imgBanner'>
                <Container>
                    <Box className='card'>

                        <Typography className='cardNome'>&nbsp;&nbsp;&nbsp;Xepa Commerce, levando até você, o melhor da agricultura local! Saiba quem somos e o que nos inspira.</Typography>

                            <Link to='/sobrenos' className='link'>
                                <Button className='btn-banner'>Saiba Mais</Button>
                            </Link>

                    </Box>

                </Container>

            </Box>



        </>
    );
}

export default Banner;