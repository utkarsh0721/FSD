import React from "react";
import pizza from "./assets/pizza.png";
import burger from "./assets/burger.png";
import pasta from "./assets/pasta.png";
import "./App.css";
import Navbar from "./component/navbar";
import Body from "./component/body";
import Card from "./component/card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <div className="card-container">
        <Card name="Pizza" img={pizza.png} price="$10" />
        <Card name="Burger" img={burger.png} price="$5" />
        <Card name="Pasta" img={pasta.png} price="$8" />
      </div>
    </div>
  );
}

export default App;
