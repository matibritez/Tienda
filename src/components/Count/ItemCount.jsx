import React,{useState} from "react";

function ItemCount({stock,initial}){

    const[count,setCount]= useState(initial)

    function agregar(){
        count< stock ? setCount(count+1) : alert("No puedes agregar mas productos")
         
    }
    function disminuir (){
        count > 1 ? setCount(count-1): alert("No puedes quitar mas productos")
    }

    

   
    return(
        <div>
            <h4 className="contad">{count}</h4>
            <button className="btn btn-success"  onClick={agregar}>+</button>
            <button className="btn btn-danger" onClick={disminuir}>-</button>

        </div>
    )
}

export default ItemCount

