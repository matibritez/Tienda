import React,{useState} from "react";

function ItemCount({stock,initial}){

    const[count,setCount]= useState(initial)

    function agregar(){
        count< stock ? setCount(count+1) : alert("No puedes agregar mas productos")
         
    }
    function disminuir (){
        count > 1 ? setCount(count-1): alert("No puedes quitar mas productos")
    }

    function onAdd(){
        console.log(`Compra OK: Has comprado ${count} producto`)
    }

    const reset = () =>{
        setCount(initial)
    }
    return(
        <div>
            <h2>la cantidad  es ={count}</h2>
            <button onClick={agregar}>+</button>
            <button onClick={onAdd}>Agregar a Carrito</button>
            <button onClick={reset}>reset</button>
            <button onClick={disminuir}>-</button>

        </div>
    )
}

export default ItemCount