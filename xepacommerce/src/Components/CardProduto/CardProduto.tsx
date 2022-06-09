import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Batata from '../../assets/img/batata.png';
import { Box } from '@mui/material';
import './CardProduto.css';
import { useNavigate } from 'react-router-dom';
import Produto from '../../Modelos/ProdutoDTO';
import { TokenState } from '../../Store/Tokens/TokensReducer';
import { useSelector } from 'react-redux';
import { busca } from '../../Services/Service';
import useLocalStorage from 'react-use-localstorage';

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
