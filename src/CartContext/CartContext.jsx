import { createContext } from "react"


const CartContext = createContext([])

const CartContextProvider = () =>{
    return(
        <CartContext.Provider></CartContext.Provider>
    )

}

export default CartContextProvider