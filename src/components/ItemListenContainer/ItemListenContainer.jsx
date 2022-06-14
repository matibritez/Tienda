// import Titulo from "./Titulo/Titulo"

import { getFetch } from "../../helpers/getFetch"
import { useEffect, useState } from "react"
import ItemList from "./ItemList/ItemList"

function ItemListenContainer(){
    const[productos,setProductos]= useState([])
    const[loading,setLoading]= useState(true) 

    
    useEffect(()=>{
        getFetch()
        .then((resp)=>{ 
            setProductos(resp)
        })
        .catch(err=>console.log(err))
        .finally(()=> setLoading(false))
    },[])

    // console.log(productos)
    return(
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            { loading ?
            <h1>Cargando</h1>
            :
            <ItemList productos={productos}/> 
            }

        </div>
       
    )

}

export default ItemListenContainer