import { createContext, useState, useContext } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  const addToCart = (objProduct) => {
    
    let carritoprevio = [...cart];
    
    if (carritoprevio.some((producto) =>producto.product.id === objProduct.product.id)) 
    {
      carritoprevio.find((producto) =>producto.product.id === objProduct.product.id).quantity += objProduct.quantity;
      setCart(carritoprevio);
    } else {
      setCart([...cart, objProduct]);
    }
   
  }
  const clearList = () => setCart([]);

  const totalPrice = () => {
    let total = 0;

    cart.forEach((newProduct) => {
      total +=
        parseInt(newProduct.product.price) * parseInt(newProduct.quantity);
    });

    return parseInt(total);
  };
  const removeProduct = (id) => {
    setCart
    (cart.filter((newProduct) => newProduct.id !== id));
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
  );
};