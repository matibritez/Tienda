import React from "react";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListenContainer from "./components/ItemListenContainer/ItemListenContainer";

// import ItemCount from "./components/Count/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {CartContextProvider} from './context/CartContext';
import CartTable from "./components/CartTable/CarTable";

function App(){
  return(
       <>
       <CartContextProvider>
        <BrowserRouter>
        
          <NavBar/>
            <Routes>
            <Route path="/" element={<ItemListenContainer/>}/>
            <Route path="/categoria/:categoriaId" element={<ItemListenContainer/>}/>
            <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartTable/>}/>
            <Route path="*" element={<Navigate to= "/"/>}/>
          </Routes>
        
        </BrowserRouter>
        </CartContextProvider>
        </>
      )
}

export default App

