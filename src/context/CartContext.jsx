import { createContext, useState, useContext } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  const addToCart = (objProduct) => {
    
    let carritoprevio = [...cart];
    console.log(carritoprevio)
    
    if (carritoprevio.some((producto) =>producto.id === objProduct.id)) 
    {
      carritoprevio.find((producto) =>producto.id === objProduct.id).cantidad += objProduct.cantidad;
      setCart([...carritoprevio]);
    } else {
      setCart([...cart, objProduct]);
    }
   
  }
  const clearList = () => setCart([]);

  const totalPrice = () => {
    let total = 0;

    cart.forEach((newProduct) => {
      total +=
        parseInt(newProduct.price) * parseInt(newProduct.quantity);
    });

    return parseInt(total);
  };
  const removeProduct = (id) => {
    setCart(cart.filter((newProduct) => newProduct.id !== id));
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