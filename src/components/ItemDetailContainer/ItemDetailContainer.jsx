import {useEffect, useState } from "react"
import {getFetchOne } from "../../helpers/getFetch"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const[producto,setProducto]= useState({})

    const {id} = useParams()

    console.log(id)

    useEffect(() => {
        getFetchOne()
            .then((resp)=>setProducto(resp.find(prod => prod.id === id)))
            .catch(err=>console.log(err))
       }, [])
       
  return (
        <ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer