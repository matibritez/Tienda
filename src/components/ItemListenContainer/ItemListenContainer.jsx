import Titulo from "./Titulo/Titulo"
import ItemCount from "./Count/ItemCount"

function ItemListenContainer(){
    return(
        <>
        <div>
            <Titulo titulo={"Productos:"} subtitulo={"Celulares"}/>
            <ItemCount stock={5} initial={1}/>
        </div>
        </>
    )

}

export default ItemListenContainer