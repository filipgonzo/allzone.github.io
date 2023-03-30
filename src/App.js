import React from "react";
import Menu from "./Components/Menu";
import SubMenu from "./Components/SubMenu";
import Carrusel from "./Components/Carrusel";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./assets/css/style.css"


function App() {
  return (
    <div className="App">
    <Menu></Menu>
    <SubMenu></SubMenu>
    <Carrusel></Carrusel>
    <Cards></Cards>
    <Footer></Footer>
    </div>
  );
}

export default App;
