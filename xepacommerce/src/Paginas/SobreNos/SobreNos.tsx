import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import './SobreNos.css';


function SobreNos() {
    return (

        <Container>
            <h1 className='titulos'>Xepa Commerce</h1>
            <Box display="flex" flexDirection="row">
                <Grid md={6}>
                    <Typography className='sobreNos'>
                        O Xepa Commerce não é um E-commerce qualquer. Nossa meta é unir o melhor de dois mundos. No intuito de contibuir com pequenos agricultores locais, atrelado ao baixo custo que todo brasileiro adora, o Xepa quer garantir acesso àqueles em situação de vulnerabilidade, alimentos saudáveis e produtos de qualidade. Dessa forma, poupamos disperdícios, mitigando os impactos da insegurança alimentar na mesa dos brasileiros.
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
                    <h2 className='titulos'>Missão</h2>
                    <Typography className='sobreNos'>
                    Fortalecimento econômico de pequenos e médios agricultores utilizando a tecnologia para conectar o campo com os centros urbanos e pessoas em situação de vulnerabilidade.
                    </Typography>
                </Grid>
            </Box>

            <Box display="flex" flexDirection="row">
                <Grid md={6}>
                    <h2 className='titulos'>Visão</h2>
                    <Typography className='sobreNos'>
                    Visando a redução do desperdício de produtos perecíveis, com ciclos de consumo reduzidos, de modo a cooperar com as metas de desenvolvimento sustentáveis.
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
                    <h2 className='titulos'>Valores</h2>
                    <Typography className='sobreNos'>
                    Proporcionar acessibilidade a produtos de qualidade e saúde. Com isso, geramos fortalecimento econômico de pequenos comerciantes e estimulamos uma produção consciente dos alimentos.
                    </Typography>
                </Grid>
                
            </Box>

        </Container>

    );
}

export default SobreNos;