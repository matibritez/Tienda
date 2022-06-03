import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListenContainer from "./components/ItemListenContainer/ItemListenContainer";
import Titulo from "./components/Titulo/Titulo";

function App(){
  let tituloApp = "Productos"
  return(
    <>
      <NavBar/>
      <ItemListenContainer>
        <Titulo titulo={tituloApp}/>
      </ItemListenContainer>
      
    </>
  )
}

export default App

