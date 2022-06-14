import {useEffect, useState } from "react"
import {getFetchOne } from "../../helpers/getFetch"
import ItemDetail from "../../components/ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const[producto,setProductos]= useState({})
    useEffect(() => {
        getFetchOne()
            .then((resp)=>setProductos(resp))
            .catch(err=>console.log(err))
       }, [])
       
  return (
        <ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer