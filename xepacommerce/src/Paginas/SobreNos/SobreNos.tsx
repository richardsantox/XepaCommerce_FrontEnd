import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';


function SobreNos() {
    return (

        <Container>
            <h1>Xepa Commerce</h1>
            <Box display="flex" flexDirection="row">
                <Grid md={6}>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit blanditiis eveniet, labore doloremque laudantium odio placeat maiores commodi. Quia quas repudiandae laboriosam quae assumenda odio alias voluptates iusto mollitia eligendi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius in cupiditate exercitationem harum esse nam odit doloribus optio architecto, necessitatibus unde sequi voluptatibus velit ipsum officiis voluptatum hic? Error, alias.
                    </Typography>
                </Grid>
                <Grid md={6}>
                <img src="https://i.imgur.com/DRARIhi.gif" alt="" style={{ width: "50%" }} />
                </Grid>
            </Box>

            <Box display="flex" flexDirection="row">
            <Grid md={6}>
                <img src="https://i.imgur.com/DRARIhi.gif" alt="" style={{ width: "50%" }} />
                </Grid>

                <Grid md={6}>
                    <h2>Missão</h2>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit blanditiis eveniet, labore doloremque laudantium odio placeat maiores commodi. Quia quas repudiandae laboriosam quae assumenda odio alias voluptates iusto mollitia eligendi?
                    </Typography>
                </Grid>
            </Box>

            <Box display="flex" flexDirection="row">
                <Grid md={6}>
                    <h2>Visão</h2>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit blanditiis eveniet, labore doloremque laudantium odio placeat maiores commodi. Quia quas repudiandae laboriosam quae assumenda odio alias voluptates iusto mollitia eligendi?
                    </Typography>
                </Grid>
                <Grid md={6}>
                <img src="https://i.imgur.com/DRARIhi.gif" alt="" style={{ width: "50%" }} />
                </Grid>
            </Box>

            <Box display="flex" flexDirection="row">
            <Grid md={6}>
                <img src="https://i.imgur.com/DRARIhi.gif" alt="" style={{ width: "50%" }} />
                </Grid>

                <Grid md={6}>
                    <h2>Valores</h2>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit blanditiis eveniet, labore doloremque laudantium odio placeat maiores commodi. Quia quas repudiandae laboriosam quae assumenda odio alias voluptates iusto mollitia eligendi?
                    </Typography>
                </Grid>
                
            </Box>

        </Container>

    );
}

export default SobreNos;