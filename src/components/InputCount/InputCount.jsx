import {Link} from "react-router-dom"

const InputCount =()=>{

    return(
        <>
        <Link to="/cart">
            <button 
            className="btn btn-outline-primary"
            onClick={()=>console.log("ir a cart")}
            >Ir a Carrito</button>
        </Link>
        <Link to="/">
            <button
                className="btn btn-outline-primary"
                onClick={()=>console.log("ir al home")}
                >Seguir Comprando</button>
        </Link>

        </>
    )
}

export default InputCount