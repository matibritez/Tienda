import {useEffect, useState } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import {getFetch,getFetchOne} from "../../helpers/getFetch"


const ItemDetailContainer = () => {
    const[producto,setProducto]= useState({})

    const {id} = useParams()

    console.log(id)

    useEffect(() => {
        getFetch(id)
            .then((resp)=>setProducto(resp))
            .catch(err=>console.log(err))
       }, [])
       
  return (
        <div>
        <ItemDetail producto={producto} />
        
        </div>
  )
}

export default ItemDetailContainer