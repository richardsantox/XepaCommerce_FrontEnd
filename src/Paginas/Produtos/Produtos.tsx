import { Container, Box, Typography, Grid } from '@mui/material';
import React from 'react'
import CardProduto from '../../Components/CardProduto/CardProduto';
import './Produtos.css';


function Produtos() {
    return (
        <>
            <Container>
                <h1 className='tituloPrd'>Produtos</h1>
                
               <Grid>
                <Box className='prdStyle'>
                    <CardProduto />
                </Box>
                </Grid>
            </Container>

        </>
    );
}

export default Produtos;