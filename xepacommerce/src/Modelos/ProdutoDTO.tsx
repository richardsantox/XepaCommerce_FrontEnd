interface Produto {
    id: number;
    nomeProduto?: string;
    preco?: number;
    descricao?: string;
    foto?: string;
    estoque?: number | null;
}
export default Produto;