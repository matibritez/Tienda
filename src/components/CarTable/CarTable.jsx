import {Button} from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'

const CartTable = ({producto}) => {
    const { removeProduct} = useCartContext()
    
    return (
                        <tr>
                            <td><img style={{width: "100px", height:"100px"}} src={producto.producto.img}/></td>
                            <td>{producto.producto.nombre}</td>
                            <td>{producto.quantity}</td>
                            <td>${producto.producto.price * producto.quantity}</td>
                            <td><Button variant="danger" onClick={()=>{removeProduct(producto.producto.id)}}>
                                X
                            </Button></td>  
                        </tr>
                        
  )                         
}

export default CartTable