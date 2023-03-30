import React from "react";
import Menu from "./Components/Menu";
import SubMenu from "./Components/SubMenu";
import Carrusel from "./Components/Carrusel";
import Cards from "./Components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
    <Menu></Menu>
    <SubMenu></SubMenu>
    <Carrusel></Carrusel>
    <Cards></Cards>
    </div>
  );
}

export default App;
