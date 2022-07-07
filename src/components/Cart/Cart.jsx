//import {Container, Button} from 'react-bootstrap'
//import { LinkContainer } from 'react-router-bootstrap'
import { useCartContext } from '../../context/CartContext'
//import CartTableContainer from '../CarTableContainer/CartTableContainer'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"

const Cart = () => {
  const {setCart,clearList,totalPrice} = useCartContext()
  async function generarOrden(e) {
    e.preventDefault()
    let orden = {}     
    
    orden.buyer = {nombre: 'mati', email: 'mati-dev@gmail.com', phone: '1154905282'}
    orden.total = totalPrice()

    orden.items = setCart.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.nombre
        const precio = cartItem.price * cartItem.cantidad
        // const cantidad = cartItem.cantidad
        
        return {id, nombre, precio}   
    })    
    // insertar
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, orden)
    .then(resp => console.log(resp.id) )


    
     const queryCollectionStock = collection(db, 'items')

     const queryActulizarStock = await query(
         queryCollectionStock, //                   ['jlksjfdgl','asljdfks'] -> ejemplo del map ,  
         where( documentId() , 'in', setCart.map(it => it.id) ) // in es que estén en ..         
     )

     const batch = writeBatch(db)

     await getDocs(queryActulizarStock)
     .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
           stock: res.data().stock - setCart.find(producto => producto.id === res.id).cantidad
     }) ))
     .finally(()=> clearList())

     batch.commit()
}


return (
    <div>
        <ul>
            {
                setCart.map(producto => <li key={producto.id}>
                    <div className="w-25">
                        <img src={producto.foto} className='w-25' />
                    </div>
                    nombre: {producto.nombre} precio: {producto.price} cantidad: {producto.cantidad}
                </li>  )
            }
        </ul>
        <div>
            {/* <Formulario />                <button onClick={vaciarCarrito} className="btn btn-outline-danger" >Vaciar Carrito</button> */}
            <br></br>
            <button  className="btn btn-outline-primary"  onClick={generarOrden} >Terminar Compra</button>
        </div>
    </div>
)
}

export default Cart