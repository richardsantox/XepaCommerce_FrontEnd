import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import Produto from '../Modelos/ProdutoDTO';
import { api } from '../Services/Service';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

export interface ProdutoCarrinho extends Produto {
  quantidade: number;
}

interface CartContextData {
  cart: ProdutoCarrinho[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const cartStorageKey = "@xepacommerce:carrinho";

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<ProdutoCarrinho[]>(() => {
    const storagedCart = localStorage.getItem(cartStorageKey)

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const productAlreadyInCart = cart.find(product => product.id === productId)

      if(!productAlreadyInCart) {
        const { data: product } = await api.get<Produto>(`/api/Produtos/id/${productId}`);

        if(product?.estoque && product.estoque > 0) {
          setCart([...cart, {...product, quantidade: 1}])
          localStorage.setItem(cartStorageKey, JSON.stringify([...cart, {...product, quantidade: 1}]))
          toast.success('Adicionado')
          return;
        }
      }

      if(productAlreadyInCart) {
        const { data: product } = await api.get<Produto>(`/api/Produtos/id/${productId}`);

        if (product?.estoque && (product.estoque > productAlreadyInCart.quantidade)) {
          const updatedCart = cart.map(cartItem => cartItem.id === productId ? {
            ...cartItem,
            quantidade: Number(cartItem.quantidade) + 1
          } : cartItem)
  
          setCart(updatedCart)
          localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart))
          return;
        } else {
          toast.error('Quantidade solicitada fora de estoque')
        }
      }
    } catch {
      toast.error('Erro na adição do produto')
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const productExists = cart.some(cartProduct => cartProduct.id === productId)
      if(!productExists) {
        toast.error('Erro na remoção do produto');
        return
      }

      const updatedCart = cart.filter(cartItem => cartItem.id !== productId)
      setCart(updatedCart)
      localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart))
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if(amount < 1){
        toast.error('Erro na alteração de quantidade do produto');
        return
      }

      const response = await api.get<Produto>(`/api/Produtos/id/${productId}`);
      const productAmount = response.data?.estoque ?? 0;
      const stockIsFree = amount > productAmount

      if(stockIsFree) {
        toast.error('Quantidade solicitada fora de estoque')
        return
      }

      const productExists = cart.some(cartProduct => cartProduct.id === productId)
      if(!productExists) {
        toast.error('Erro na alteração de quantidade do produto');
        return
      }

      const updatedCart = cart.map(cartItem => cartItem.id === productId ? {
        ...cartItem,
        quantidade: amount
      } : cartItem)
      setCart(updatedCart)
      localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart))
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
