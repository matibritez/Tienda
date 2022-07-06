import {Container, Button} from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'
import { LinkContainer } from 'react-router-bootstrap'
import CartTableContainer from '../CarTableContainer/CartTableContainer'


const Cart = () => {
  const {cart} = useCartContext()

  return(

  <Container>
      {
        cart.length === 0 ? 
        <div className=" d-flex justify-content-center flex-column align-items-center mt-5">
          <h1 className='text-center'>Carrito de Compras</h1>
          <p className="text-center">Oops El carrito esta Vacío</p>
          <LinkContainer to="/">
            <Button variant="danger">Ir al Inicio</Button>
          </LinkContainer>
        </div> :
           <div className="mt-5">
           <h1 className='text-center'>Carrito de Compras</h1>
           <CartTableContainer/>
          </div>
      }


      </Container>


  )
}


export default Cart
