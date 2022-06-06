import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';


function SobreNos() {
    return (

        <Container>
            <h1>Xepa Commerce</h1>
            <Grid container>
                <Grid md={6}>
                    <Box>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex perferendis eveniet dolorum ipsam repellendus eius iusto, illum aut, amet earum, consequatur facere. Non nobis quibusdam dicta adipisci harum asperiores ex!
                        </Typography>
                    </Box>
                    <Box>
                        <img src="https://i.imgur.com/DRARIhi.gif" alt="" style={{ width: "50%" }} />
                    </Box>
                    <Box>
                        <h2>Visão</h2>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex perferendis eveniet dolorum ipsam repellendus eius iusto, illum aut, amet earum, consequatur facere. Non nobis quibusdam dicta adipisci harum asperiores ex!
                        </Typography>
                    </Box>
                    <Box>
                        <img src="https://i.imgur.com/DRARIhi.gif" alt="" style={{ width: "50%" }} />
                    </Box>
                </Grid>

                <Grid md={6}>
                    <Box>
                        <img src="https://i.imgur.com/DRARIhi.gif" alt="" style={{ width: "50%" }} />
                    </Box>
                    <Box>
                        <h2>Missão</h2>
                        <Typography>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum illo sit quia error dolorem, ad enim dolorum reprehenderit? Explicabo voluptates animi dolores amet obcaecati esse pariatur nostrum sequi at laboriosam!
                        </Typography>
                    </Box>
                    <Box>
                        <img src="https://i.imgur.com/DRARIhi.gif" alt="" style={{ width: "50%" }} />

                    </Box>
                    <Box>
                        <h2>Valores</h2>
                        <Typography>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum illo sit quia error dolorem, ad enim dolorum reprehenderit? Explicabo voluptates animi dolores amet obcaecati esse pariatur nostrum sequi at laboriosam!
                        </Typography>
                    </Box>
                </Grid>
                <hr />


            </Grid>
        </Container>

    );
}

export default SobreNos;