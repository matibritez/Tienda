import {Button} from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'

const CartTable = ({producto}) => {
    const { removeProduct } = useCartContext()
    
    return (
        <tr>
        <td>{producto.img}</td>
        <td>{producto.product.name}</td>
        <td>{producto.quantity}</td>
        <td>${producto.product.price}</td>
        <td><Button variant="danger" onClick={()=>{removeProduct(producto.product.id)}}>
            X
        </Button></td>
    </tr>
    )
}

export default CartTable