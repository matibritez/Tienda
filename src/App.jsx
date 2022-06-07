import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListenContainer from "./components/ItemListenContainer/ItemListenContainer";


function App(){
  return(
    <>
      <NavBar/>
      <ItemListenContainer/>
    </>
  )
}

export default App

