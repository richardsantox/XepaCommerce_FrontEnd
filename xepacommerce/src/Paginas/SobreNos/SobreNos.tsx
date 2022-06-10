import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import './SobreNos.css';
import Equipe from '../../Components/Equipe/Equipe';


function SobreNos() {
    return (


        <Container className='container-sobre'>
            <h1 className='titulos'>Xepa Commerce</h1>
            <Box className='box-sobre'>
                <Grid md={6} className='sobreNos'>
                    <Typography >
                        O Xepa Commerce não é um E-commerce qualquer. Nossa meta é unir o melhor de dois mundos. No intuito de contibuir com pequenos agricultores locais, atrelado ao baixo custo que todo brasileiro adora, o Xepa quer garantir acesso àqueles em situação de vulnerabilidade, alimentos saudáveis e produtos de qualidade. Dessa forma, poupamos disperdícios, mitigando os impactos da insegurança alimentar na mesa dos brasileiros.
                    </Typography>
                </Grid>
                <Grid md={6}>
                    <img src="https://i.imgur.com/Bt6CvxI.png" alt="" className='primeira-img' />
                </Grid>
            </Box>
            <hr className='linha' />
            <Box className='box-sobre'>
                <Grid md={6}>
                    <img src="https://i.imgur.com/TWV0VpK.png" alt="" className='imgs-sobre' />
                </Grid>

                <Grid md={6} className='sobreNos'>
                    <h1 className='titulos'>Missão</h1>
                    <Typography >
                        Fortalecimento econômico de pequenos e médios agricultores utilizando a tecnologia para conectar o campo com os centros urbanos e pessoas em situação de vulnerabilidade.
                    </Typography>
                </Grid>
            </Box>


            <Box className='box-sobre'>
                <Grid md={6} className='sobreNos'>
                    <h1 className='titulos'>Visão</h1>
                    <Typography >
                        Visando a redução do desperdício de produtos perecíveis, com ciclos de consumo reduzidos, de modo a cooperar com as metas de desenvolvimento sustentáveis.
                    </Typography>
                </Grid>
                <Grid md={6}>
                    <img src="https://i.imgur.com/b0mWXhV.png" alt="" className='imgs-sobre' />
                </Grid>
            </Box>

            <Box className='box-sobre'>
                <Grid md={6}>
                    <img src="https://i.imgur.com/rGZSQ6P.png" alt="" className='imgs-sobre' />
                </Grid>

                <Grid md={6} className='sobreNos'>
                    <h1 className='titulos'>Valores</h1>
                    <Typography >
                        Proporcionar acessibilidade a produtos de qualidade e saúde. Com isso, geramos fortalecimento econômico de pequenos comerciantes e estimulamos uma produção consciente dos alimentos.
                    </Typography>
                </Grid>
            </Box>
            <hr className='linha'/>

            <Equipe />

        </Container>

    );
}

export default SobreNos;