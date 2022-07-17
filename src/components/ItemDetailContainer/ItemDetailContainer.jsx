import {useEffect, useState } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {
    const[producto,setProducto]= useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

   

    useEffect(() => {
        const db = getFirestore()
        const queryItem = doc(db, 'productos', id ) 
        getDoc(queryItem)
        .then(resp => setProducto( { id: resp.id, ...resp.data() } ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [id])


  return (
        
            loading ?
                <h2>Cargando...</h2>
                :
                <ItemDetail producto={producto} />

        
        
  )
}

export default ItemDetailContainer