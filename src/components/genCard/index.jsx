import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PkmContext } from '../../context/pkmContext';

import './styles.css';

import Kanto from '../../assets/kanto.svg';
import Johto from '../../assets/johto.svg';
import Hoenn from '../../assets/hoenn.svg';
import Sinnoh from '../../assets/sinnoh.svg';
import Unova from '../../assets/unova.svg';
import Kalos from '../../assets/kalos.svg';
import Alola from '../../assets/alola.svg';
import Galar from '../../assets/galar.svg';


export const GenCard = ({ genNum, genName }) => {

    const { setGen } = useContext(PkmContext);

    const gens = { Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar }

    return(
        <Link className="gen-card" to={`/gen/${genNum}`} onClick={() => setGen(genNum)}>
            <li>
                <img src={gens[`${genName}`]} alt={genName} />
                <h2>{genName}</h2>
            </li>
        </Link>
    );
}