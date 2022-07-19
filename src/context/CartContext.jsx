import { createContext, useState, useContext } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  const addToCart = (objProduct) => {
    
    let carritoprevio = [...cart];
    
      
    if (carritoprevio.some((producto) => producto.producto.id === objProduct.id))
    {
      carritoprevio.find((producto) => producto.id === objProduct.id).quantity+= objProduct.quantity;
      setCart([...carritoprevio]);
    } else { 
      setCart([...cart, objProduct]);
    }
   
  };

  const clearList = () => setCart([]);

  const totalPrice = () => {
  return cart.reduce((contador,producto)=>contador + (parseInt(producto.producto.price) * parseInt(producto.quantity)),0)
}
const removeProduct = (id) => {
  setCart(cart.filter((newProduct) => newProduct.producto.id !== id));
};
  const iconCart = () => cart.reduce((acum, valor) => acum + valor.quantity, 0);

return (
    <CartContext.Provider
      value={{
        cart,
        
        setCart,
        addToCart,
        clearList,
        removeProduct,
        totalPrice,
        iconCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
