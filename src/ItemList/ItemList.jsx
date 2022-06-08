import React from "react";
import Item  from "../components/Item/Item";

function ItemList({ productos }) {
   return (
      <div>
         {productos.map((productos) => (
            <Item key={productos.id}/>
         ))}
      </div>
   );
}

export default ItemList;