import { Container, Box, Typography } from '@mui/material';
import React from 'react'
import CardProduto from '../../Components/CardProduto/CardProduto';
import './Produtos.css';


function Produtos() {
    return (
        <>
            <Container>
                <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='tituloProduto'>Produtos</Typography>
                <Box className='prdStyle'>
                    <CardProduto />
                </Box>
            </Container>

        </>
    );
}

export default Produtos;