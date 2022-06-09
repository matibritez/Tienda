import React from "react";
import Item from "../../Item/Item";

function ItemList({ productos }) {
   console.log(productos)
   return (
      <div>
   {productos.map(productos => (
            <Item key={productos.id} productos={productos}/>
         ))}
      </div>
   );
}


export default ItemList;