import {useState} from 'react'
import { Table, Container, Button } from 'react-bootstrap'
import ItemCount from "../ButtonCount/ButtonCount"
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
const ItemDetail = ({productos }) => {
  
  
  const [addedToCart, setAddedToCart] = useState(false)
  
  return (
    <div>
      <Container >

        <h1 className="text-center mb-5 mt-5">Detalle del Producto</h1>

        <div className="detail-content d-flex flex-column align-items-center m-3">
          <div className="d-flex flex-column justify-content-center align-items-center mb-5 imagen">
            <img src={data.img} alt={data.name} />
          </div>
          <div className="d-flex flex-column">
            <Table className='mt-1' striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Año</th>
                  <th>Precio</th>
                  <th>Genero</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{producto.nombr}</td>
                  <td>{producto.price}</td>
                  <td>{producto.categoria}</td>
                </tr>
              </tbody>
            </Table>
            
            { addedToCart ? <>
              <Link className="btn btn-danger" to="/carrito"> Ir al Carrito </Link> 
            </>
              : 
                          
              <ItemCount data={data} onAdd={setAddedToCart}  max={5} min={1} />
            

            }
            
            <div className="d-flex justify-content-center mt-3">
              <LinkContainer to="/">
                              <Button className="m-2 boton-mirando" variant="secondary">
                                  Seguir Mirando
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