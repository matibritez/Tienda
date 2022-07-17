import { createContext, useState, useContext } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  const addToCart = (producto) => {
  setCart([
    ...cart,
    producto
  ])

}
console.log(cart)
  
  const clearList = () => setCart([]);

  const totalPrice = () => {
    return cart.reduce((contador,producto)=>contador + (producto.price * producto.cantidad),0)
  }
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
  )
}
