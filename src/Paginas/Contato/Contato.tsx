
import { Button, Grid, TextField } from '@material-ui/core';
import { Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import "./Contato.css";

function Contato() {

    function handleClick() {
        Swal.fire({
            title: 'Mensagem enviada com sucesso!',
            icon: 'success',
        });
    }
    /*toast.info('Mensagem enviada com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        type: "success",
        theme: "colored",
})}; */
    return (
        <>
            <Container >
                <h1 className='titulo'>Olá, como podemos ajudar você?</h1>
                <h2 className='subtitulo'>Você tem alguma pergunta ou está interessado em disponibilizar os seus produtos? Preencha o formulário e entre em contato conosco:</h2>
                <hr className='linha' />

                <Grid container alignItems='center'>
                    <Grid md={6}>
                        <form className='' >
                            <TextField label="Nome" variant="outlined" fullWidth className='caixa' />
                            <TextField label="Email" variant="outlined" fullWidth className='caixa' />
                            <TextField label="Assunto" variant="outlined" fullWidth className='caixa' />
                            <TextField label="Mensagem" className='caixa'
                                fullWidth
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                             <Link to='/home' className='link'>
                            <Button onClick={handleClick} variant='contained' className='btnEnviar' fullWidth>
                                Enviar
                            </Button>
                            </Link>
                        </form>
                    </Grid>
                    <Grid md={6}>
                        <Box>
                            <img className='img-contato' src="https://i.imgur.com/I7B4Jqg.jpg" alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Contato;