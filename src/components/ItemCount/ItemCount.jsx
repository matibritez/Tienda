import {useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'
import { TextComponent } from '../TextComponent/TextComponent'


const ItemCount = ({min, max,  data , onAdd,producto}) => {
    const [count, setCount] = useState(min)
    const {addToCart} = useCartContext()
    
    
    function add(){
        if(count < max) {
                setCount(count + 1)
        }
    }

    function substraction(){
        if(count > min){
                setCount(count - 1)
        }
    }

    function reset(){
        setCount(min)
    }

    function handleSubmit(){
        addToCart({
            quantity: count,
            producto: producto
        })
        onAdd(true)
        
    }


    return (
        <div className="d-flex justify-content-center">
            <Card bg="dark" text="light" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="text-center">Cantidad : {count}</Card.Title>
                    <Card.Title className="text-center"><TextComponent/>{producto.stock}</Card.Title>
                    <div className="d-flex justify-content-center botones-contador">
                    <Button variant="danger" onClick={substraction}>-</Button>
                    <Button variant="danger" onClick={reset}>Reset</Button>
                    <Button variant="danger" onClick={add}>+</Button>
                    </div> 
                    <div className="d-flex justify-content-center mt-3">
                    <Button variant="danger" onClick={handleSubmit} >Comprar</Button>
                    
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemCount