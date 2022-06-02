import { TextField, Typography } from '@material-ui/core';
import React from 'react';

function Login() {
    return (
        <>
            <section className='modal'>
                <div className='login'>
                    <form>
                        <Typography>Entrar</Typography>
                        <TextField id='email' label='email' variant='outlined' name='email' margin='normal'/>
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'/>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Login;