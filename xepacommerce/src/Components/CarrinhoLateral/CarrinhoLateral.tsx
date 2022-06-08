import React from 'react';
import { Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText, Badge, IconButton, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./CarrinhoLateral.css";

import logoxepa from '../../assets/img/NovoXepa.png';

type Anchor = 'right';

export default function CarrinhoLateral() {
    
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        setState({ ...state, [anchor]: open });
    };


    /* Conteudo do carrinho Altera Aqui */
    /* Conteudo do carrinho Altera Aqui */
    const list = (anchor: Anchor) => (
        <div>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            <Divider />

            <Box>
                <img className='imgxepa' src={logoxepa} alt='logoxepa' />
            </Box>

        </div>
    );

    return (
        /* BOTÃO DO CARRINHO */
        /* BOTÃO DO CARRINHO */
        <div>
            {(['right'] as Anchor[]).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <Typography className='texto-carrinho' >
                            Cesta
                        </Typography>
                        <IconButton aria-label="show 1 new mails" className='icone-carrinho'>
                            <Badge badgeContent={1} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}