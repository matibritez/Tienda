


import { useEffect, useState } from "react"
import ItemList from "./ItemList/ItemList"
import { useParams } from "react-router-dom"
import {collection,getDocs, getFirestore,query,where} from "firebase/firestore"

const ItemListenContainer =() => {
    const[productos,setProductos]= useState([])
    const[loading,setLoading]= useState(true)
    
    const { categoriaId } = useParams() 

   
    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db,"productos")
       
        if (categoriaId) {
            const queryCollectionFilter = query( queryCollection, where( 'categoria', '==', categoriaId ) ) 
            getDocs(queryCollectionFilter)
            .then( data => setProductos( data.docs.map( producto => ( { id: producto.id, ...producto.data() } )  ) ) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        } else {
           
            getDocs(queryCollection)
            .then( data => setProductos( data.docs.map( producto => ( { id: producto.id, ...producto.data() } )  ) ) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
        
    }, [categoriaId]) 
        return(
            <div>
                { loading ?
                <h1>Cargando</h1>
            :
            <> 
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
           
           
            <ItemList productos={productos}/> 
           </div>
          </>
        }
    </div>
       
    )

}

export default ItemListenContainer