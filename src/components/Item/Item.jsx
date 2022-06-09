import React from "react";
import Card from 'react-bootstrap/Card'



function Item({ productos }){
    return (
       <div className="col-12 mb-2 col-md-4">
         <Card>
            <Card.Img className="img-card-top" src={productos.img}/>
            <Card.Body>
              <Card.Title>{productos.nombre}</Card.Title>
              <button>Ver detalles</button>
            </Card.Body>
          </Card>
      </div>
   
)}

export default Item;