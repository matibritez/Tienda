import {useEffect, useState } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import {getFetchOne} from "../../helpers/getFetch"

const ItemDetailContainer = () => {
    const[producto,setProducto]= useState({})

    const {id} = useParams()

    console.log(id)

    useEffect(() => {
        getFetchOne(id)
            .then((resp)=>setProducto(resp.find(prod => prod.id === id)))
            .catch(err=>console.log(err))
       }, [])
       
  return (
        <ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer