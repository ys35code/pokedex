// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import data from "./data/data.json";
function App() {
  return (
   <div>
    <Logo appName="Pokedex" myData={data}  />
    <BestPokemon />
    <CaughtPokemon />
   </div>

  );
}





export default App;
