import React, { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
// import { fetchPokemon } from './services/pokeAPI';

function App() {

  const [pkm, setpkm] = useState({});

  useEffect(() => {
    const loadList = async () => {
      let list = await fetch(`https://pokeapi.co/api/v2/pokemon/${57}`).then(response => response.json());
      console.log(list);
      setpkm(list);
    }
    loadList();
  }, []);

  return (
    <Fragment>
      <h1>{pkm.name}</h1>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkm.id}.png`} alt="" />
    </Fragment>
  );
}

export default App;
