import ItemCount from "../Count/ItemCount"
import { useCartContext } from "../contexts/cartContext"

import Intercambiabilidad from "../Intercambiabilidad/Intercambiabilidad"

const ItemDetail = ({producto}) =>{
    const { cart, addToCart } = useCartContext()
   
    const onAdd = (cant) => {
        console.log(cant)
        
        addToCart( {...producto, cantidad: cant} )
    }

    console.log(cart)

    return(
        <div className="d-flex">
        <div className="cold-md-6">
            <img src={producto.img} alt="" className="w-65"/>
        </div>
        <div className="row mt-5">
            <h2>Nombre:{producto.nombre}</h2>
            <h3>Stock:{producto.stock}</h3>
            <h4>Precio:${producto.price}</h4>
            <ItemCount initial={1} stock={9} onAdd={onAdd}/>
            <Intercambiabilidad/>
           
            
        </div>
       
    </div>

    )
}

export default ItemDetail