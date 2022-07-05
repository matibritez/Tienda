import React from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'
import CartTable from "../CarTable/CarTable"

const CartTableContainer = () => {
    const { cart,totalPrice,clearList } = useCartContext()

    return (
        <Container>
            <Table className="mt-5" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Borrar</th>
                        
                    </tr>
                </thead>
                <tbody>
                
                    {
                         cart.map((producto) => ( <CartTable producto={producto} key={producto.id} /> ))
                    }

                </tbody>
                <tbody>
                    <tr>
                       <th>Total : ${totalPrice()}</th>
                    </tr>
                </tbody>
            </Table>
                <Button variant="danger" onClick={clearList}>
                    Borrar Todo
                </Button>
        </Container>


    )
}

export default CartTableContainer