import React from "react";


function Item({ productos }){
    return (
      <div            
      className='col-md-4 p-1'                                                           
  >      
    <div className="card w-100 ">
         <div className="card-header">
                    {`${productos.nombre}`}
                </div>
                <div className="card-body">
                    <img src={productos.img} alt='' className='w-50' />
                                                                               
                </div>
                <div className="card-footer">  
                    <button className="btn btn-outline-primary btn-block">
                        Ver Detalle
                    </button>                
                </div>

      </div>
    </div>
   
)}

export default Item;