
import React from "react";

const BestPokemon = () =>{
  const ability = ["Anticipation","Adaptability", "Run-Away"];

  return (
    <div>
       <p>
        lorem ipsum dolor sit amet, consectetur adip
    </p>
    <ul>
      {ability.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
    </div>
  );
};

export default BestPokemon;


