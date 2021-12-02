import React, { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';

import { api } from './services/pokeAPI'

function App() {

  // const [pkm, setpkm] = useState({});

  useEffect(() => {
    api.getPokemonList();
  }, []);

  return (
    <Fragment>
      {/* <h1>{pkm.name}</h1>
      <p>{pkm.description}</p>
      <img src={pkm.image} alt={pkm.name} /> */}
    </Fragment>
  );
}

export default App;
