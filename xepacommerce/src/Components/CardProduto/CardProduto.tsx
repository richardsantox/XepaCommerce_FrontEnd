import React, { useEffect, useState } from 'react';
import { Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import Batata from '../../assets/img/batata.png';
import { Box } from '@mui/material';
import './CardProduto.css';
import { useNavigate } from 'react-router-dom';
import Produto from '../../Modelos/ProdutoDTO';
import { busca } from '../../Services/Service';

export default function Produtos() {

    const [produtos, setProdutos] = useState<Produto[]>([]);
    let navigate = useNavigate();

    async function getProduto() {
        await busca("/api/Produtos", setProdutos, {
        })
    }

    useEffect(() => {

        getProduto()

    }, [produtos.length])

    return (
        <>
            {
                produtos.map(produto => {
                    return (

                        <Card className='root'>
                            <CardActionArea>
                                <CardMedia
                                    className='imgCard'
                                    component="img"
                                    alt={produto.nomeProduto}
                                    image={produto.foto}
                                    title={produto.nomeProduto} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" color="textPrimary" component="h4">
                                        {produto.nomeProduto}
                                    </Typography>
                                    <Typography variant="body2" color="textPrimary" component="p">
                                        {produto.descricao}
                                    </Typography>
                                    <Typography variant="body2" color="textPrimary" component="p">
                                        Quantidade disponível: {produto.estoque}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className='cardbtns'>
                                <h3>
                                    R$ {produto.preco}
                                </h3>
                                <Button className='btnComprar'>
                                    Comprar
                                </Button>
                            </CardActions>
                        </Card>
                    );
                })
            }
        </>
    );
}
