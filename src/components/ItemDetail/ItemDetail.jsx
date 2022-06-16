import ItemCount from "../Count/ItemCount"

const ItemDetail =({producto})=>{

    const onAdd=(cant)=>{
        console.log(cant)
    }
    return(
        <div className="d-flex">
        <div className="cold-md-6">
            <img src={producto.img} alt="" className="w-65"/>
        </div>
        <div className="row mt-5">
            <h2>Nombre:{producto.nombre}</h2>
            <h3>Stock:{producto.stock}</h3>
            <h4>Precio:${producto.price}</h4>
            <ItemCount initial={1} stock={9} onAdd={onAdd}/>
        </div>
    </div>

    )
}

export default ItemDetail