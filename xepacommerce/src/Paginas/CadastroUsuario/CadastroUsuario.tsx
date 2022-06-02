import React, { ChangeEvent, useEffect, useState }  from "react";
import { Link, useNavigate } from 'react-router-dom';
import { cadastroUsuario } from  "../../Services/Service";
import Usuario from "../../Modelos/UsuarioDTO";
import { Grid, Typography, Button, TextField, FormControl, InputLabel, Select } from '@material-ui/core';
import { Box } from "@mui/material";
import './CadastroUsuario.css';

function CadastroUsuario () {

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
            endereco:"",
            tipo: ""
        }
    );

    useEffect(() => {

        if(usuarioResultado.email === '@'){
            navigate('/login');
        }

    }, [usuarioResultado, navigate]);

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>){

        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){

        e.preventDefault();
        
        if(confirmarSenha === usuario.senha){
            try {
                await cadastroUsuario(`/api/Usuarios/cadastrar`, usuario, setUsuarioResultado)
                alert('Usuario cadastrado com sucesso')
            } catch (error) {
                alert('Usuario já cadastrado, tente outro email!')
            }

        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
       <></>
    );
}

export default CadastroUsuario;