import { TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useState, ChangeEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Autenticacao from '../../Modelos/AutenticacaoDTO';
import { login } from '../../Services/Service';
import './Login.css'

function Login(props:any) {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [autenticacao, setAutenticacao] = useState<Autenticacao>(
        {
            email: "",
            senha: "",
        }
    );

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setAutenticacao({
            ...autenticacao,
            [e.target.name]: e.target.value
        })
    }


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {

        e.preventDefault();

        try {

            await login(`/api/Usuarios/logar`, autenticacao, setToken);

            alert('Usuário logado com sucesso!');
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
    }

    useEffect(() => {

        if (token !== '') {
            navigate('/home');
        }

    }, [token, navigate]);

    return (
        <>
{props.aberto &&
            <div className="background" onClick={props.fecharModal}>
                <section className="modal" > 
                    <div className='dv1'>
                        <form className='forms'>
                            <Typography variant='h6' align='center'>Entrar</Typography>
                            <TextField id='email' label='email' variant='outlined' name='email' margin='normal' />
                            <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' />
                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'>
                                    Não tem uma conta?
                                </Typography>
                            </Box>
                            <Link to='/cadastrousuario'>
                                <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>
                                    Cadastre-se
                                </Typography>
                            </Link>
                        </Box>
                    </div>
                </section>
            </div>
}
        </>
    );
}

export default Login;