import React from 'react'
import Carrossel from '../../Components/Carrossel/Carrossel'
import Banner from '../../Components/Banner/Banner'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography, } from '@material-ui/core'
import Batata from '../../assets/img/batata.png';
import { Box, Grid } from '@mui/material'
import './Home.css'
import { Link } from 'react-router-dom'


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
    },
});


function Home() {
    const classes = useStyles();

    return (
        <>
            <Banner />
            <Carrossel />

            <Container>
                <h2 className='tituloproduto'> Promoções do Dia </h2>
                <Box className='cards'>
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
                </Box>

                <Box className='box-mais'>
                    <Link to='/produtos' className='link'>
                        <Button className='btn-mais'>
                            Veja mais
                        </Button>
                    </Link>
                </Box>


            </Container>

            <Box className='box-apoio'>
                <Container>
                    <Box>
                        <Grid className='grid-textos' container>
                            <Grid md={6}>
                                <h2>Apoie o comercio local !!</h2>
                                <Typography>
                                Faça parte dessa inciativa de fortalecimento do comércio local e promoção de aceso à produtos de qualidade e entre na para o time de pessoas comprometidas com um mundo mais sustentável.
                                </Typography>
                            </Grid>

                            <Grid display='flex' justifyContent='flex-end' md={6}>
                                <img className='img-agricultor' src="https://cdn.dribbble.com/users/1271973/screenshots/17703845/media/fa4fafcf0f6b46af264fe11a037767e2.png?compress=1&resize=400x300&vertical=top" alt="Agricultor" />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

        </>
    );
}

export default Home;