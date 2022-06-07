import React from 'react';
import { Container, Box, Link, Typography, Button } from '@mui/material';
import './Banner.css'


function Banner() {
    return (
        <>
            <Box className='imgBanner'>
                <Container>
                    <Box className='card'>

                        <Typography className='cardNome'>&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam cumque autem repellat quisquam nesciunt amet optio?</Typography>

                            <Link className='link'>
                                <Button className='btn-banner'>Saiba Mais</Button>
                            </Link>

                    </Box>

                </Container>

            </Box>



        </>
    );
}

export default Banner;