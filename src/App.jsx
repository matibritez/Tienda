import React from "react";
// import{BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListenContainer from "./components/ItemListenContainer/ItemListenContainer";
import Cart from "./components/Cart/Cart";
import ItemCount from "./components/Count/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App(){
  return(
    <>
        <NavBar/>
        <ItemListenContainer/>
        <Cart/>
        <ItemCount stock={5} initial={1}/>
        <ItemDetailContainer/>
      
    </>
  )
}

export default App

