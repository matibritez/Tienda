import React from "react";
import {Link} from "react-router-dom"


function Item({ productos }){
    return (
      <div            
      className='cards col-md-4 d-inline-block '                                                           
  >      
    <div className="card w-100">
         <div className="card-header">
                    {`${productos.nombre}`}
                </div>
                <div className="card-body">
                    <img src={productos.img} alt='' className='w-50' />
                                                                               
                </div>
                <div className="card-footer">
                    <Link to ={`/detalle/${productos.id}`}>
                    <button className="btn btn-outline-primary btn-block">
                        Ver Detalle
                    </button>   
                    </Link>           
                </div>

      </div>
    </div>
   
)}

export default Item;