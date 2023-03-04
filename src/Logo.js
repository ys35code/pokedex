import React, { useState } from "react";

const Logo = ({ appName }) => {
  const [username, setUsername] = useState("");

  return (
    <header>
      {console.log(username)}
      <h1 onClick={() => alert(appName)}>{appName}</h1>
      <input
        value={username}
        placeholder="Your name..."
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <button onClick={() => setUsername("")}>REset this </button>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="pokemon"
      ></img>
    </header>
  );
};

// const appName = "Yigit's Pokedex";

export default Logo;
