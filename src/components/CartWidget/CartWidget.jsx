import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";


const CartWidget = () => {
  return(
    <>
            <div className='App'style={{fontSize:"20px"}}>
                
                <FontAwesomeIcon icon={faShoppingCart}/>{""}
                
            </div>
    </>
  )     
}

export default CartWidget;