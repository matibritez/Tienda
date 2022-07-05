import {useState} from 'react'
import { Table, Container, Button } from 'react-bootstrap'
import ItemCount from "../ItemCount/ItemCount"

import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
const ItemDetail = ({producto }) => {
  // console.log(data)
  
  const [addedToCart, setAddedToCart] = useState(false)
  
  return (
    <div>
      <Container >

        <h1 className="text-center mb-5 mt-5">Detalle del Producto</h1>

        <div className="detail-content d-flex flex-column align-items-center m-3">
          <div className="d-flex flex-column justify-content-center align-items-center mb-5 imagen">
            <img width={350} src={producto.img} alt={producto.nombre} />
          </div>
          <div className="d-flex flex-column">
            <Table className='mt-1' striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{producto.nombre}</td>
                  
                  <td>${producto.price}</td>
                  
                </tr>
              </tbody>
            </Table>
            
            { addedToCart ? <>
              <Link className="btn btn-danger" to="/cart"> Ir al Carrito </Link> 
            </>
              : 
                          
              <ItemCount producto={producto} onAdd={setAddedToCart}min={1} max={producto.stock}/>
            

            }
            
            <div className="d-flex justify-content-center mt-3">
              <LinkContainer to="/">
                              <Button className="m-2 boton-mirando" variant="secondary">
                                  Seguir Comprando
                              </Button>
              </LinkContainer>
            </div> 

          </div>

        </div>
        <div className="mb-5 mt-5 d-flex justify-content-center  align-items-center botones">
        </div>
      </Container>
    </div>
  )
}

export default ItemDetail