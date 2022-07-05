import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {
  const {iconCart, cart} = useCartContext()
  return(
    <>
            <div className='App'style={{fontSize:"20px"}}>
            {cart.length === 0 ? "" : iconCart()}
                <FontAwesomeIcon icon={faShoppingCart}/>{""}
                
            </div>
    </>
  )     
}

export default CartWidget;