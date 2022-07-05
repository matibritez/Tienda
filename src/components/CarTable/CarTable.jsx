import {Button} from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'

const CartTable = ({producto}) => {
    const { removeProduct } = useCartContext()
    
    return (
                        <tr>
                            <td>{producto.img}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.quantity}</td>
                            <td>$ {producto.price}</td>
                            <td><Button variant="danger" onClick={()=>{removeProduct(producto.id)}}>
                                X
                            </Button></td>  
                        </tr>
  )
}

export default CartTable