import React from "react";

function Item({ productos }) {
    return (
       <article className="celular__card">
          <div className="container__img">
             <img src={productos.img}alt="" className="celular__img" />
          </div>
          <span className="celular__name">{`${productos.nombre}`}</span>
          <span className="celular__price">$ {`${productos.price}`}</span>
          <button className="learn-more">
             <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
             </span>
            </button>
       </article>
    );
 }
 
 export default Item;