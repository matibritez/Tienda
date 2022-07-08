import {Container, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useCartContext } from '../../context/CartContext'
import CartTableContainer from "../CarTableContainer/CartTableContainer"
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"

const CartView = () => {
  const {cart,clearList,totalPrice}= useCartContext()
  async function generarOrden(e) {
      e.preventDefault()
      let orden = {}     
      
      orden.buyer = {nombre: 'matis', email: 'matib-dev@gmail.com', phone: '1154905282'}
      orden.total = totalPrice()
  
      orden.items = cart.map(producto => {
          const id = producto.id
          const nombre = producto.nombre
          const precio = producto.price * producto.cantidad
          
          return {id, nombre, precio}   
      })    
      
      const db = getFirestore()
      const orderCollection = collection(db, 'orders')
      addDoc(orderCollection, orden)
      .then(resp => console.log(resp.id) )
  
  
      
       const queryCollectionStock = collection(db, 'productos')
  
       const queryActulizarStock = await query(
           queryCollectionStock, 
           where( documentId() , 'in', cart.map(it => it.id) )  
       )
  
       const batch = writeBatch(db)
  
       await getDocs(queryActulizarStock)
       .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
             stock: res.data().stock - cart.find(producto => producto.id === res.id).cantidad
       }) ))
       .finally(()=> clearList())
  
       batch.commit()
  }
  
  return (
    <Container>
      {
        cart.length === 0 ? 
        <div className=" d-flex justify-content-center flex-column align-items-center mt-5">
          <h1 className='text-center'>Carrito de Compras</h1>
          <p className="text-center">El carrito esta Vacío</p>
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

export default CartView