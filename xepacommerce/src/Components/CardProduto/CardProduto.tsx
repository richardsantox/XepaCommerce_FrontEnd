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

const useStyles = makeStyles({
    img: {
        width: '50%',
        height: '50%',
        paddingTop: '10px',
        margin: 'auto',
    }
});

export default function Produtos() {
    const classes = useStyles();

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
                produtos.map(produto => (

                    <Card className='root'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt={produto.nomeProduto}
                                image={produto.foto} className={classes.img}
                                title={produto.nomeProduto}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {produto.nomeProduto}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {produto.descricao}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Quantidade disponível: {produto.estoque}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className='cardbtns'>
                            <h4>
                               R$ {produto.preco}
                            </h4>
                            <Button className='btnComprar'>
                                Comprar
                            </Button>
                        </CardActions>
                    </Card>
                ))
            }
        </>
    );
}
