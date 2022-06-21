import { useCartContext } from "../contexts/cartContext"


const Cart = () => {
  const { cart, vaciarCarrito } = useCartContext()
    return (
        <div>
            <ul>
                {
                    cart.map(producto => <li key={producto.id}>
                        <div className="w-25">
                            <img src={producto.img} className='w-25' />
                        </div>
                        nombre: {producto.nombre} precio: {producto.price} cantidad: {producto.cantidad}
                    </li>  )
                }
            </ul>
            <div>
                <button onClick={vaciarCarrito} >Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default Cart
