import React, { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';

import { kantoDex } from './services/pokeAPI'

function App() {

  const [pkm, setpkm] = useState(null);

  useEffect(() => {
    const kanto = async () => {
      let list = await kantoDex();
      setpkm(list);
      // console.log(list);
    }
    kanto();
  }, []);

  return (
    <Fragment>
      {
       pkm === null ? null : pkm.map(pk => (
          <div key={pk.id}>
            <h1>#00{pk.id}</h1>
            <h1>{pk.name}</h1>
            {pk.types.map(item => (
              <p>{item.type.name}</p>
            ))}
            <img src={pk.image} alt={pk.name} />
          </div>
       ))
      }
      {/* <h1>{pkm.name}</h1>
      <p>{pkm.description}</p>
      <img src={pkm.image} alt={pkm.name} /> */}
    </Fragment>
  );
}

export default App;
