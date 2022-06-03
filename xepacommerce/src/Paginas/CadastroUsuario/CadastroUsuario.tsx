import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { cadastroUsuario } from "../../Services/Service";
import Usuario from "../../Modelos/UsuarioDTO";
import { Grid, Typography, Button, TextField, FormControl, InputLabel, Select } from '@material-ui/core';
import { Box } from "@mui/material";
import './CadastroUsuario.css';

function CadastroUsuario() {

    let navigate = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [usuario, setUsuario] = useState<Usuario>(
        {
            nome: "",
            email: "",
            senha: "",
            endereco: "",
            tipo: ""
        }
    );

    const [usuarioResultado, setUsuarioResultado] = useState<Usuario>(
        {
            nome: "",
            email: "",
            senha: "",
            endereco: "",
            tipo: ""
        }
    );

    useEffect(() => {

        if (usuarioResultado.email === '@') {
            navigate('/login');
        }

    }, [usuarioResultado, navigate]);

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {

        e.preventDefault();

        if (confirmarSenha === usuario.senha) {
            try {
                await cadastroUsuario(`/api/Usuarios/cadastrar`, usuario, setUsuarioResultado)
                alert('Usuario cadastrado com sucesso')
            } catch (error) {
                alert('Usuario já cadastrado, tente outro email!')
            }

        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={3} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastre-se</Typography>

                        <TextField
                            value={usuario.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />

                        <TextField
                            value={usuario.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='email' label='E-mail' variant='outlined' name='email' margin='normal' type='email' fullWidth />

                        <TextField
                            value={usuario.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />


                        <TextField
                            value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id='confirmarSenha' label='Confirme a sua Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

                        <TextField
                            value={usuario.endereco}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='endereco' label='Endereço' variant='outlined' name='endereco' margin='normal' fullWidth />

                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Box marginY={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='outlined' className='btnCancelar'>
                                        Cancelar
                                    </Button>
                                </Link>
                            </Box>
                            <Box marginY={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary' className='btnCadastrar'>
                                    Cadastrar
                                </Button>
                            </Box>
                        </Grid>
                    </form>
                </Box>
            </Grid>
            <Grid item xs={3} className='imagem3'></Grid>
        </Grid>
    );
}

export default CadastroUsuario;