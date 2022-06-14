const ItemDetail =({producto})=>{
    return(
        <div className="row">
        <div className="cold-md-6">
            <img src={producto.img} alt="" className="w-25"/>
        </div>
        <div className="cold-md-6">
            <h2>Nombre:{producto.nombre}</h2>
            <h3>Stock:{producto.stock}</h3>
            <h4>Precio:${producto.price}</h4>
        </div>
    </div>

    )
}

export default ItemDetail