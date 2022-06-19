import Usuario from './UsuarioDTO';
import Produto from './ProdutoDTO';

interface Pedido {
    quantidade?: number | null ;
    precoTotal?: number;
    formaDePagamento?: string | null;
    nomeComprador?: Usuario | null ; 
    produtoComprado?:Produto | null ;
}

export default Pedido;