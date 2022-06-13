import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./Equipe.css";
import React from "react";

function Equipe() {
    return (
        <>
            <Container>
                <Typography variant='h3' component='h3' className='titulo-equipe'>Time do Xepa</Typography>
                <Box className='box-equipe'>

                    <Card className='card-equipe'>
                        <CardActionArea>
                            <CardMedia
                                className=''
                                component="img"
                                alt="Ana Paula"
                                image="https://i.imgur.com/vH6c8OR.jpg"
                                title="Imagens dos integrantes do time do Xepa"
                            />
                            <CardActions className="card-icones">
                                <Box className='redes-equipe'>
                                    <a href="https://github.com/paulabrufato" target="_blank">
                                        <GitHubIcon className='icone-redes' />
                                    </a>
                                    <a href="https://www.instagram.com/paulabrufato/" target="_blank">
                                        <InstagramIcon className='icone-redes' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/anapaulariverabrufato/" target="_blank">
                                        <LinkedInIcon className='icone-redes' />
                                    </a>
                                </Box>
                            </CardActions>
                            <CardContent >
                                <Typography className="nome-equipe" gutterBottom variant="h5" component="h2">
                                    Ana Paula Brufato
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className='card-equipe'>
                        <CardActionArea>
                            <CardMedia
                                className=''
                                component="img"
                                alt="Richard"
                                image="https://i.imgur.com/nEPf9lM.jpg"
                                title="Imagens dos integrantes do time do Xepa"
                            />
                            <CardActions className="card-icones">
                                <Box className='redes-equipe'>
                                    <a href="https://github.com/richardsantox" target="_blank">
                                        <GitHubIcon className='icone-redes' />
                                    </a>
                                    <a href="https://www.instagram.com/rsantox_/" target="_blank">
                                        <InstagramIcon className='icone-redes' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/richardsantox/" target="_blank">
                                        <LinkedInIcon className='icone-redes' />
                                    </a>
                                </Box>
                            </CardActions>
                            <CardContent >
                                <Typography className="nome-equipe" gutterBottom variant="h5" component="h2">
                                    Richard Santos
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className='card-equipe'>
                        <CardActionArea>
                            <CardMedia
                                className=''
                                component="img"
                                alt="Thamires"
                                image="https://i.imgur.com/0DtkF13.jpg"
                                title="Imagens dos integrantes do time do Xepa"
                            />
                            <CardActions className="card-icones">
                                <Box className='redes-equipe'>
                                    <a href="https://github.com/TheMires" target="_blank">
                                        <GitHubIcon className='icone-redes' />
                                    </a>
                                    <a href="https://www.instagram.com/sweethami_/" target="_blank">
                                        <InstagramIcon className='icone-redes' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/thamifreitas" target="_blank">
                                        <LinkedInIcon className='icone-redes' />
                                    </a>
                                </Box>
                            </CardActions>
                            <CardContent >
                                <Typography className="nome-equipe" gutterBottom variant="h5" component="h2">
                                    Thamires Aparecida
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className='card-equipe'>
                        <CardActionArea>
                            <CardMedia
                                className=''
                                component="img"
                                alt="Dannyela"
                                image="https://i.imgur.com/WK9kTvT.jpg"
                                title="Imagens dos integrantes do time do Xepa"
                            />
                            <CardActions className="card-icones">
                                <Box className='redes-equipe'>
                                    <a href="https://github.com/Danny-for" target="_blank">
                                        <GitHubIcon className='icone-redes' />
                                    </a>
                                    <a href="https://www.instagram.com/danny0_for/" target="_blank">
                                        <InstagramIcon className='icone-redes' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/dannyela-geovanna-69944b201/" target="_blank">
                                        <LinkedInIcon className='icone-redes' />
                                    </a>
                                </Box>
                            </CardActions>
                            <CardContent >
                                <Typography className="nome-equipe" gutterBottom variant="h5" component="h2">
                                    Dannyela Geovanna
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className='card-equipe'>
                        <CardActionArea>
                            <CardMedia
                                className=''
                                component="img"
                                alt="Lucas"
                                image="https://i.imgur.com/mKZPDHC.jpg"
                                title="Imagens dos integrantes do time do Xepa"
                            />
                            <CardActions className="card-icones">
                                <Box className='redes-equipe'>
                                    <a href="https://github.com/Lucas-Reluz" target="_blank">
                                        <GitHubIcon className='icone-redes' />
                                    </a>
                                    <a href="https://www.instagram.com/lucas_reluz223/" target="_blank">
                                        <InstagramIcon className='icone-redes' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/lucas-reluz" target="_blank">
                                        <LinkedInIcon className='icone-redes' />
                                    </a>
                                </Box>
                            </CardActions>
                            <CardContent >
                                <Typography className="nome-equipe" gutterBottom variant="h5" component="h2">
                                    Lucas Reluz
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className='card-equipe'>
                        <CardActionArea>
                            <CardMedia
                                className=''
                                component="img"
                                alt="Matheus"
                                image="https://i.imgur.com/dsk2sDq.jpg"
                                title="Imagens dos integrantes do time do Xepa"
                            />
                            <CardActions className="card-icones">
                                <Box className='redes-equipe'>
                                    <a href="https://github.com/matheuscms95" target="_blank">
                                        <GitHubIcon className='icone-redes' />
                                    </a>
                                    <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                        <InstagramIcon className='icone-redes' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/matheuscorreia95" target="_blank">
                                        <LinkedInIcon className='icone-redes' />
                                    </a>
                                </Box>
                            </CardActions>
                            <CardContent >
                                <Typography className="nome-equipe" gutterBottom variant="h5" component="h2">
                                    Matheus Correia
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card className='card-equipe'>
                        <CardActionArea>
                            <CardMedia
                                className=''
                                component="img"
                                alt="Richard"
                                image="https://i.imgur.com/Mbbeg6Q.jpg"
                                title="Imagens dos integrantes do time do Xepa"
                            />
                            <CardActions className="card-icones">
                                <Box className='redes-equipe'>
                                    <a href="https://github.com/vntsmatos" target="_blank">
                                        <GitHubIcon className='icone-redes' />
                                    </a>
                                    <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                        <InstagramIcon className='icone-redes' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/vntsmatos/" target="_blank">
                                        <LinkedInIcon className='icone-redes' />
                                    </a>
                                </Box>
                            </CardActions>
                            <CardContent >
                                <Typography className="nome-equipe" gutterBottom variant="h5" component="h2">
                                    Vinicius Santos
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Box>
            </Container>

        </>
    );
}

export default Equipe;