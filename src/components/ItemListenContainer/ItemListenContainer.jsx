import { useEffect, useState } from "react"
import ItemList from "./ItemList/ItemList"
import { useParams } from "react-router-dom"
import {collection,getDocs, getFirestore,query,where} from "firebase/firestore"

const ItemListenContainer =() => {
    const[productos,setProductos]= useState([])
    const[loading,setLoading]= useState(true)
    
    const {categoriaId} = useParams()

   
    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db,"productos")
       
       
            const queryCollectionFilter = categoriaId ?query( queryCollection, where( 'categoria', '==', categoriaId ) ) : queryCollection
            getDocs(queryCollectionFilter)
            .then( data => setProductos( data.docs.map( producto => ( { id: producto.id, ...producto.data() } )  ) ) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        
        
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