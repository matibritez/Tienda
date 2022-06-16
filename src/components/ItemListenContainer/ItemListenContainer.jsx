// import Titulo from "./Titulo/Titulo"

import { getFetch } from "../../helpers/getFetch"
import { useEffect, useState } from "react"
import ItemList from "./ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListenContainer =() => {
    const[productos,setProductos]= useState([])
    const[loading,setLoading]= useState(true)
    
    const {categoriaId} = useParams()

    console.log(categoriaId)

    
    useEffect(()=>{
        if (categoriaId) {
            getFetch()
            .then((resp)=> {
                    setProductos(resp.filter(producto => producto.categoria === categoriaId ))
                    setLoading(false)
            })
            .catch(err => console.log(err))           
        } else {
            getFetch()
            .then( (resp)=> setProductos(resp) )
            .catch(err => console.log(err)) 
            .finally(()=> setLoading(false))           
        }
        
       
    }, [categoriaId])

   
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