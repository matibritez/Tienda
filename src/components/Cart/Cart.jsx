import {Container, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useCartContext } from '../../context/CartContext'
import CartTableContainer from '../CarTableContainer/CartTableContainer'
import { addDoc, collection, getFirestore} from "firebase/firestore"
import { useState } from "react";


const Cart = () => {
  const {cart,setCart,totalPrice} = useCartContext()
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [cel, setCel] = useState("");

  const [idBuyed, setIdBuyed]=useState('')

  const db = getFirestore()
  const ordersCollection = collection(db, 'orders');

  function handleClick(){
      const order = {
          buyer: {name, mail, cel},
          items: cart,
           total: totalPrice()
      };

      addDoc(ordersCollection, order).then(({id}) => {
        setIdBuyed(id);
      });

  }
  return (
      <Container>
      {
        setCart.length === 0 ?
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
           <div className="checkContainer">
    <h6 className="titleCheck">Por favor complete los datos para finalizar su compra</h6>
    <h6 className="orderNumber">Su número de pedido es: {idBuyed}</h6>
    <input onChange={(e) => setName(e.target.value)} placeholder="Ingrese su nombre" className="inName"></input>
    <input onChange={(e) => setMail(e.target.value)} placeholder="Ingrese su e-mail" className="inMail"></input>
    <input onChange={(e) => setCel(e.target.value)} placeholder="Ingrese un celular" className="inCel"></input>
    <button onClick={() => handleClick()} className='btn btn-warning fw-bold p-2 m-2'>Terminar Compra</button>
      </div>
   </Container>
  
)}

export default Cart