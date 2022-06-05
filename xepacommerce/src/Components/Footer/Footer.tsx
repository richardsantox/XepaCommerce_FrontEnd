import { Grid, Typography, Button} from '@material-ui/core';
import { Box } from '@mui/material';
import logoxepa from '../../assets/img/NovoXepa.png';
import metodos from '../../assets/icons/metodos.png';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {

    return (
        <>

            <div className='linha'></div>

            <Grid container>
                <Grid xs={4}>
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <img className='imgxepa' src={logoxepa} alt='logoxepa' />
                    </Box>
                </Grid>


                <Grid xs={4}>
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <img className='Metodospagamento' src={metodos} alt="Metodos de pagamentos" />
                    </Box>
                </Grid>

                <Grid xs={4}>
                    <Box display='flex' justifyContent='center'>
                        <Link to='/contato' className='link'>
                            <Button className='Btx' type='submit'>
                                Contatos
                            </Button>
                        </Link>
                    </Box>

                </Grid>
            </Grid>

            <Box>
                <Typography className='titulo2' variant='subtitle2' align="center" >Copyright 2022.XepaCommerce. All rights reserved</Typography>
            </Box>

        </>
    );
}

export default Footer;