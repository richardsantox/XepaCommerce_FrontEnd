
import { Button, Grid, TextField } from '@material-ui/core';
import { Box, Container } from '@mui/material';
import "./Contato.css";

function Contato() {
    return (
        <>
            <Container >
                <h1 className='titulo'>Entre em contato</h1>
                <hr className='linha'/>

                <Grid container alignItems='center'>
                    <Grid md={6}>
                        <form className='' >
                            <TextField label="Nome" variant="outlined" fullWidth className='caixa' />
                            <TextField label="Email" variant="outlined" fullWidth className='caixa' />
                            <TextField label="Assunto" variant="outlined" fullWidth className='caixa' />
                            <TextField label="Menssagem" className='caixa'
                                fullWidth
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                            <Button type='submit' variant='contained' className='btnEnviar' fullWidth>
                                Enviar
                            </Button>
                        </form>
                    </Grid>
                    <Grid md={6}>
                        <Box paddingLeft={8}>
                            <img src="https://i.imgur.com/fWAnFfN.gif" alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Contato;