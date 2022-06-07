import React from 'react';
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

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 10,
        boxShadow: '1px 1px 10px 0px rgba(0,0,0,0.75)',
    },

    img: {
        width: '50%',
        height: '50%',
        paddingTop: '10px',
        margin: 'auto',
    }
});

export default function Produtos() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Batata"
                    image={Batata} className={classes.img}
                    title="Produto Batata orgânica"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Batata
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Batatas inglesas produzidas por agricultores locais.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className='cardbtns'>
                <h4>
                    R$ 3,99
                </h4>
                <Button className='btnComprar'>
                    Comprar
                </Button>
            </CardActions>
        </Card>
    );
}
