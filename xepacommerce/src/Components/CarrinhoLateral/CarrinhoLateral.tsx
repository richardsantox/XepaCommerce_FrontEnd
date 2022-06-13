import React from 'react';
import { Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText, Badge, IconButton, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { ProdutoCarrinho, useCart } from '../../Hooks/useCart';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./CarrinhoLateral.css";
import logoxepa from '../../assets/img/NovoXepa.png';

type Anchor = 'right';

export default function CarrinhoLateral() {

    const { cart, updateProductAmount, removeProduct } = useCart();

    function handleProductIncrement(product: ProdutoCarrinho) {
        const IncrementArguments = {
            productId: product.id,
            amount: product.quantidade + 1
        }
        updateProductAmount(IncrementArguments)
    }

    function handleProductDecrement(product: ProdutoCarrinho) {
        const IncrementArguments = {
            productId: product.id,
            amount: product.quantidade - 1
        }
        updateProductAmount(IncrementArguments)
    }

    function handleRemoveProduct(productId: number) {
        removeProduct(productId)
    }

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
            <Divider />
            {cart.map(product => (
                <div key={product.id}>
                    <h3>{product?.nomeProduto}</h3>
                    <img src={product?.foto} alt={product?.nomeProduto} className='imgCart' />
                    <h4>{product.quantidade}x</h4>

                    <div>
                        <button
                            type="button"
                            disabled={product.quantidade <= 1}
                            onClick={() => handleProductDecrement(product)}
                        >
                            -
                        </button>
                        <input
                            type="text"
                            readOnly
                            value={product.quantidade}
                        />
                        <button
                            type="button"
                            data-testid="increment-product"
                            onClick={() => handleProductIncrement(product)}
                        >
                            +
                        </button>
                    </div>
                    <button
                        type="button"
                        onClick={() => handleRemoveProduct(product.id)}
                    >
                        remover
                    </button>
                </div>
            ))}
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
                            <Badge badgeContent={cart.length} color="secondary">
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